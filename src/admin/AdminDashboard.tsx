import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";

const ADMIN_UID = "sEnbpVZatXhiZnhMrhWCTr7o8wp1";

const sections = [
  { id: "portfolio", name: "Profile" },
  { id: "education", name: "Education" },
  { id: "projects", name: "Projects" },
  { id: "certifications", name: "Certifications" },
  { id: "skills", name: "Skills" },
  { id: "leadership", name: "Leadership" },
];

type FieldConfig = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "checkbox";
  placeholder?: string;
};

type RecordItem = {
  id: string;
  data: Record<string, unknown>;
};

const fieldConfig: Record<string, FieldConfig[]> = {
  portfolio: [
    { key: "name", label: "Full Name", placeholder: "Ashwani Chand Katoch" },
    { key: "role", label: "Professional Role", placeholder: "MBA Student" },
    { key: "university", label: "University", placeholder: "Lovely Professional University" },
    { key: "location", label: "Location", placeholder: "Phagwara, Punjab" },
    { key: "email", label: "Personal Email", placeholder: "your@email.com" },
    { key: "universityEmail", label: "University Email" },
    { key: "phone", label: "Phone Number" },
    { key: "linkedin", label: "LinkedIn Profile URL" },
    { key: "heroIntro", label: "Hero Introduction", type: "textarea" },
    { key: "aboutLeadStatement", label: "About Lead Statement", type: "textarea" },
    { key: "aboutBody", label: "About Description", type: "textarea" },
  ],
  education: [
    { key: "degree", label: "Degree / Class", placeholder: "MBA" },
    { key: "institution", label: "Institution Name" },
    { key: "location", label: "Location" },
    { key: "year", label: "Year", placeholder: "2026 / Present" },
    { key: "status", label: "Status", placeholder: "Pursuing / Completed" },
  ],
  projects: [
    { key: "title", label: "Project Title" },
    { key: "category", label: "Project Category" },
    { key: "description", label: "Project Description", type: "textarea" },
    { key: "featured", label: "Show as Featured Project", type: "checkbox" },
  ],
  certifications: [
    { key: "title", label: "Course / Certification Name" },
    { key: "institution", label: "Institution" },
    { key: "status", label: "Status", placeholder: "In Progress / Completed" },
    { key: "level", label: "Level", placeholder: "Basics to Advanced" },
  ],
  skills: [
    { key: "name", label: "Skill Name" },
    { key: "category", label: "Category", placeholder: "Core Areas / Tools & Analytics" },
  ],
  leadership: [
    { key: "role", label: "Position / Role" },
    { key: "organization", label: "Organization" },
    { key: "description", label: "Responsibilities / Description", type: "textarea" },
  ],
};

const emptyValues = (section: string) => {
  const values: Record<string, string | boolean> = {};

  fieldConfig[section].forEach((field) => {
    values[field.key] = field.type === "checkbox" ? false : "";
  });

  return values;
};

export default function AdminDashboard() {
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [selected, setSelected] = useState("portfolio");
  const [documentId, setDocumentId] = useState("");
  const [formData, setFormData] = useState<Record<string, string | boolean>>(
    emptyValues("portfolio")
  );
  const [editing, setEditing] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function loadRecords() {
    try {
      setError("");

      if (selected === "portfolio") {
        const profileDoc = await getDoc(doc(db, "portfolio", "profile"));

        setRecords(
          profileDoc.exists()
            ? [{ id: profileDoc.id, data: profileDoc.data() }]
            : []
        );
      } else {
        const snapshot = await getDocs(collection(db, selected));

        setRecords(
          snapshot.docs.map((item) => ({
            id: item.id,
            data: item.data(),
          }))
        );
      }
    } catch {
      setError("Unable to load records. Please check Firestore permissions.");
    }
  }

  useEffect(() => {
    if (user?.uid === ADMIN_UID) {
      loadRecords();
    }
  }, [user, selected]);

  function resetForm() {
    setDocumentId("");
    setFormData(emptyValues(selected));
    setEditing(false);
    setFormOpen(selected !== "portfolio");
    setError("");
    setMessage("");
  }

  function startEdit(item: RecordItem) {
    const values = emptyValues(selected);

    Object.keys(values).forEach((key) => {
      const value = item.data[key];

      if (typeof value === "boolean") {
        values[key] = value;
      } else if (value !== undefined && value !== null) {
        values[key] = String(value);
      }
    });

    setDocumentId(item.id);
    setFormData(values);
    setEditing(true);
    setFormOpen(true);
    setError("");
    setMessage("");
  }

  function updateField(key: string, value: string | boolean) {
    setFormData((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  async function saveRecord(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (selected !== "portfolio" && !documentId.trim()) {
      setError("Please enter a document ID.");
      return;
    }

    if (
      selected === "portfolio" &&
      !editing
    ) {
      setError("Please select your profile record and click Edit first.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setMessage("");

      const saveId = selected === "portfolio" ? "profile" : documentId.trim();

      await setDoc(
        doc(db, selected, saveId),
        formData
      );

      setMessage(
        editing ? "Changes saved successfully!" : "New record added successfully!"
      );

      setFormOpen(false);
      setEditing(false);
      setDocumentId("");
      await loadRecords();
    } catch (err) {
      console.error(err);
      setError("Unable to save changes. Please check your connection and permissions.");
    } finally {
      setSaving(false);
    }
  }

  async function removeRecord(id: string) {
    if (selected === "portfolio") return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${id}"?`
    );

    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, selected, id));
      setMessage("Record deleted successfully!");
      setFormOpen(false);
      await loadRecords();
    } catch {
      setError("Unable to delete this record.");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#F3F1EA]">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#F3F1EA]">
        Please sign in first.
      </div>
    );
  }

  if (user.uid !== ADMIN_UID) {
    return (
      <div className="min-h-screen grid place-items-center p-6 bg-[#F3F1EA]">
        <div>
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="mt-2">This account is not authorized.</p>
          <button onClick={() => signOut(auth)} className="mt-5 underline">
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  const currentSection = sections.find((s) => s.id === selected);

  return (
    <main className="min-h-screen bg-[#F3F1EA] text-[#171717] p-5 md:p-10 lg:p-12">

      <header className="flex flex-wrap items-center justify-between gap-5 border-b border-black/20 pb-7">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D52E2E] font-semibold">
            Private Workspace
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-2">{user.email}</p>
        </div>

        <button
          onClick={() => signOut(auth)}
          className="bg-[#171717] text-white px-5 py-3 text-sm hover:bg-[#D52E2E] transition-colors"
        >
          Sign Out
        </button>
      </header>

      <section className="mt-9">
        <p className="text-xs tracking-[0.2em] uppercase text-[#D52E2E] font-semibold mb-3">
          Portfolio Management
        </p>

        <div className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setSelected(section.id);
                setFormOpen(false);
                setEditing(false);
                setDocumentId("");
                setFormData(emptyValues(section.id));
                setError("");
                setMessage("");
              }}
              className={`px-4 py-3 text-sm border transition-colors ${
                selected === section.id
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-white border-black/15 hover:border-[#D52E2E]"
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </section>

      {error && (
        <div role="alert" className="mt-6 border border-red-400 bg-red-50 text-red-700 p-4 text-sm">
          {error}
        </div>
      )}

      {message && (
        <div className="mt-6 border border-green-700/30 bg-green-50 text-green-800 p-4 text-sm">
          {message}
        </div>
      )}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8">

        <div className="bg-white border border-black/10 p-5 md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#D52E2E] font-semibold">
                Manage Content
              </p>
              <h2 className="text-xl font-bold mt-1">
                {currentSection?.name} Records
              </h2>
            </div>

            {selected !== "portfolio" && (
              <button
                onClick={() => {
                  resetForm();
                  setMessage("");
                }}
                className="bg-[#D52E2E] text-white px-4 py-2.5 text-sm hover:bg-[#171717] transition-colors"
              >
                + Add New
              </button>
            )}
          </div>

          {records.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No records found.
            </p>
          ) : (
            <div className="space-y-3">
              {records.map((item) => (
                <article
                  key={item.id}
                  className="border border-black/10 p-4 hover:border-[#D52E2E]/50 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold break-all">
                        {String(
                          item.data.title ??
                          item.data.name ??
                          item.data.degree ??
                          item.data.Class ??
                          item.data.role ??
                          item.id
                        )}
                      </p>

                      <p className="text-xs text-gray-500 mt-1 break-all">
                        ID: {item.id}
                      </p>
                    </div>

                    <span className="text-xs text-gray-400">
                      {selected === "portfolio" ? "Main Profile" : ""}
                    </span>
                  </div>

                  <div className="flex gap-4 mt-4 text-sm">
                    <button
                      onClick={() => startEdit(item)}
                      className="text-[#D52E2E] underline underline-offset-4"
                    >
                      Edit Details
                    </button>

                    {selected !== "portfolio" && (
                      <button
                        onClick={() => removeRecord(item.id)}
                        className="text-red-600 underline underline-offset-4"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {selected === "portfolio" && records.length === 0 && (
            <p className="text-sm text-gray-500 mt-4">
              The profile document was not found. Check Firestore for portfolio/profile.
            </p>
          )}
        </div>

        <div className="bg-white border border-black/10 p-5 md:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-[#D52E2E] font-semibold">
            Content Editor
          </p>

          <h2 className="text-xl font-bold mt-1 mb-2">
            {editing ? "Edit Details" : "Add New Record"}
          </h2>

          <p className="text-xs text-gray-500 mb-6">
            {selected === "portfolio"
              ? "Update the main portfolio profile."
              : `Collection: ${selected}`}
          </p>

          {!formOpen ? (
            <div className="border border-dashed border-black/20 p-8 text-center">
              <p className="text-sm text-gray-500">
                {selected === "portfolio"
                  ? "Select Edit Details on your profile to update it."
                  : "Select a record to edit or click Add New to create one."}
              </p>
            </div>
          ) : (
            <form onSubmit={saveRecord} className="space-y-5">

              {selected !== "portfolio" && (
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Document ID *
                  </label>
                  <input
                    value={documentId}
                    onChange={(e) => setDocumentId(e.target.value)}
                    disabled={editing}
                    required
                    placeholder="e.g. new-project"
                    className="w-full border border-gray-300 bg-[#F3F1EA] p-3 text-sm disabled:bg-gray-100"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Use a short ID without spaces, for example: new-project
                  </p>
                </div>
              )}

              {fieldConfig[selected].map((field) => (
                <div key={field.key}>
                  {field.type === "checkbox" ? (
                    <label className="flex items-center gap-3 text-sm font-medium cursor-pointer">
                      <input
                        type="checkbox"
                        checked={Boolean(formData[field.key])}
                        onChange={(e) =>
                          updateField(field.key, e.target.checked)
                        }
                        className="w-4 h-4 accent-[#D52E2E]"
                      />
                      {field.label}
                    </label>
                  ) : (
                    <>
                      <label className="block text-sm font-semibold mb-2">
                        {field.label}
                      </label>

                      {field.type === "textarea" ? (
                        <textarea
                          value={String(formData[field.key] ?? "")}
                          onChange={(e) =>
                            updateField(field.key, e.target.value)
                          }
                          rows={4}
                          placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                          className="w-full border border-gray-300 bg-[#F3F1EA] p-3 text-sm resize-y focus:outline-none focus:border-[#D52E2E]"
                        />
                      ) : (
                        <input
                          type="text"
                          value={String(formData[field.key] ?? "")}
                          onChange={(e) =>
                            updateField(field.key, e.target.value)
                          }
                          placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                          className="w-full border border-gray-300 bg-[#F3F1EA] p-3 text-sm focus:outline-none focus:border-[#D52E2E]"
                        />
                      )}
                    </>
                  )}
                </div>
              ))}

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-[#171717] text-white px-6 py-3 text-sm hover:bg-[#D52E2E] transition-colors disabled:opacity-50"
                >
                  {saving ? "Saving..." : editing ? "Save Changes" : "Add Record"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormOpen(false);
                    setEditing(false);
                    setError("");
                  }}
                  className="border border-black/20 px-6 py-3 text-sm hover:border-[#D52E2E]"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="mt-10 pt-5 border-t border-black/15 text-xs text-gray-500">
        Authorized administrator access only.
      </footer>
    </main>
  );
}
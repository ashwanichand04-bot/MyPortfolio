import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F1EA] flex items-center justify-center px-5">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white border border-black/10 p-8"
      >
        <p className="text-xs uppercase tracking-[0.25em] mb-4">
          Private Access
        </p>

        <h1 className="text-4xl font-bold mb-2">Admin Login</h1>

        <p className="text-sm text-gray-500 mb-8">
          Sign in to manage your portfolio.
        </p>

        <label className="block text-sm mb-2">Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 mb-5 bg-transparent"
          placeholder="Enter admin email"
        />

        <label className="block text-sm mb-2">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 mb-5 bg-transparent"
          placeholder="Enter password"
        />

        {error && (
          <p role="alert" className="text-red-600 text-sm mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#171717] text-white p-4 uppercase tracking-widest text-sm disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Authorized administrator only.
        </p>
      </form>
    </main>
  );
}
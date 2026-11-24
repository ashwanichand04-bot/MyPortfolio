import { useState, useEffect } from 'react';
import { Plus, X, Pencil, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

const STORAGE_KEY = 'ack_portfolio_skills_v1';

export default function Skills() {
  const [categories, setCategories] = useState<SkillCategory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 4) {
          return parsed;
        }
      }
    } catch {
      // Ignore storage errors
    }
    return PORTFOLIO_DATA.skills.categories;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [draftInputs, setDraftInputs] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
    } catch {
      // Ignore storage errors
    }
  }, [categories]);

  const handleAddItem = (categoryId: string) => {
    const value = (draftInputs[categoryId] ?? '').trim();
    if (!value) return;
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId && !cat.items.includes(value)
          ? { ...cat, items: [...cat.items, value] }
          : cat
      )
    );
    setDraftInputs((prev) => ({ ...prev, [categoryId]: '' }));
  };

  const handleRemoveItem = (categoryId: string, itemToRemove: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.filter((item) => item !== itemToRemove) }
          : cat
      )
    );
  };

  return (
    <section id="skills" className="border-b border-[#171717] bg-[#EAE6DC]/55">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#171717]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-4 h-[2px] bg-[#D52E2E]" aria-hidden="true" />
              <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] uppercase font-semibold">
                {PORTFOLIO_DATA.skills.sectionLabel}
              </span>
            </div>

            <h2 className="font-display uppercase leading-[0.88] tracking-tight text-[clamp(3.25rem,6.5vw,5.75rem)] text-[#171717]">
              <span className="block">TOOLS &</span>
              <span className="block text-[#D52E2E]">SKILLS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsEditing((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 border font-mono-label text-[11px] tracking-[0.14em] uppercase transition-colors min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D52E2E] ${
                isEditing
                  ? 'bg-[#171717] text-[#F3F1EA] border-[#171717]'
                  : 'bg-transparent text-[#171717] border-[#171717]/40 hover:border-[#D52E2E] hover:text-[#D52E2E]'
              }`}
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#D52E2E]" aria-hidden="true" />
                  <span>DONE EDITING</span>
                </>
              ) : (
                <>
                  <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>EDIT CAPABILITIES</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 4 Clean Editorial Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#171717]">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`py-10 sm:py-12 ${
                idx % 2 === 0 ? 'md:pr-10 md:border-r md:border-[#171717]/25' : 'md:pl-10'
              } ${idx < 2 ? 'border-b border-[#171717]/25' : ''} ${
                idx === 2 ? 'border-b md:border-b-0 border-[#171717]/25' : ''
              } flex flex-col justify-between gap-6`}
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] font-semibold">
                    {cat.number}
                  </span>
                  <span className="font-mono-label text-[10px] tracking-[0.16em] text-[#52504A] uppercase">
                    DISCIPLINE
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-[#171717]">
                  {cat.title}
                </h3>

                {/* Editable Entries List (Never fabricates tools/percentages) */}
                {cat.items.length > 0 ? (
                  <ul className="pt-2 space-y-2.5 border-t border-[#D6D1C4]">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between gap-3 py-1 text-[15px] text-[#171717]"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 bg-[#D52E2E] shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </span>
                        {isEditing && (
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(cat.id, item)}
                            aria-label={`Remove ${item} from ${cat.title}`}
                            className="p-1 text-[#52504A] hover:text-[#D52E2E] transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="pt-3 border-t border-[#D6D1C4]">
                    <p className="font-mono-label text-xs tracking-[0.06em] text-[#52504A]">
                      {isEditing
                        ? 'Add capabilities or tools below.'
                        : 'Open category — customize via Edit Capabilities or portfolio data.'}
                    </p>
                  </div>
                )}
              </div>

              {isEditing && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAddItem(cat.id);
                  }}
                  className="flex items-center gap-2 pt-2"
                >
                  <label htmlFor={`skill-input-${cat.id}`} className="sr-only">
                    Add entry to {cat.title}
                  </label>
                  <input
                    id={`skill-input-${cat.id}`}
                    type="text"
                    value={draftInputs[cat.id] ?? ''}
                    onChange={(e) =>
                      setDraftInputs((prev) => ({ ...prev, [cat.id]: e.target.value }))
                    }
                    placeholder={`Add to ${cat.title.toLowerCase()}...`}
                    className="flex-1 bg-[#F3F1EA] border border-[#171717]/30 px-3 py-2 text-sm text-[#171717] placeholder:text-[#52504A]/70 focus:outline-none focus:border-[#D52E2E]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#D52E2E] hover:bg-[#B02121] text-[#F3F1EA] font-mono-label text-xs tracking-[0.12em] uppercase inline-flex items-center gap-1.5 transition-colors min-h-[38px]"
                  >
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>ADD</span>
                  </button>
                </form>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

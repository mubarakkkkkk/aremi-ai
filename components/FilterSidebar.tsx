"use client";

import { useState } from "react";

type FilterGroup = {
  label: string;
  options: string[];
};

const FILTER_GROUPS: FilterGroup[] = [
  { label: "Work mode", options: ["Remote", "On-site"] },
  {
    label: "Job type",
    options: ["Full Time", "Part Time", "Contract", "Internship", "NYSC"],
  },
  { label: "Experience", options: ["Entry", "Mid", "Senior", "Lead"] },
];

const DEFAULT_ACTIVE = new Set(["Remote", "Full Time", "Mid"]);

type FilterSidebarProps = {
  totalCount: number;
  onChange?: (active: Set<string>) => void;
};

export default function FilterSidebar({ totalCount, onChange }: FilterSidebarProps) {
  const [active, setActive] = useState<Set<string>>(DEFAULT_ACTIVE);

  function togglePill(option: string) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(option)) {
        next.delete(option);
      } else {
        next.add(option);
      }
      onChange?.(next);
      return next;
    });
  }

  function clearAll() {
    setActive(new Set());
    onChange?.(new Set());
  }

  return (
    <aside className="filters">
      <h3>Narrow it down</h3>
      <div className="count">{totalCount.toLocaleString()} found</div>

      {FILTER_GROUPS.map((group) => (
        <div className="f-group" key={group.label}>
          <h4>{group.label}</h4>
          <div className="pill-row">
            {group.options.map((option) => (
              <button
                key={option}
                type="button"
                className={`pill ${active.has(option) ? "on" : ""}`.trim()}
                aria-pressed={active.has(option)}
                onClick={() => togglePill(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button type="button" className="clear-link" onClick={clearAll}>
        Clear all filters
      </button>
    </aside>
  );
}

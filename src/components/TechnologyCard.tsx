
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {

  // Badge color according to technology
  const badgeColors: Record<string, string> = {
    Popular: "bg-sky-50 text-sky-500",
    Versatile: "bg-emerald-50 text-emerald-600",
    Fast: "bg-orange-50 text-orange-500",
    "SSR / Edge": "bg-purple-50 text-purple-600",
    Standard: "bg-emerald-50 text-emerald-600",
    "Top SQL": "bg-blue-50 text-blue-600",
    Cache: "bg-red-50 text-red-500",
    Ubiquitous: "bg-amber-50 text-amber-600",
    Essential: "bg-sky-50 text-sky-600",
    Robust: "bg-sky-50 text-sky-600",
    Modern: "bg-cyan-50 text-cyan-600",
    Containers: "bg-sky-50 text-sky-600",
  };

  const badgeClass =
    badgeColors[technology.badge] ||
    "bg-gray-100 text-gray-600";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md">

      {/* Icon and Badge */}
      <div className="mb-4 flex items-start justify-between">

        <img
          src={technology.icon}
          alt={`${technology.name} logo`}
          className="h-8 w-8 object-contain"
        />

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${badgeClass}`}
        >
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mb-2 text-base font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mb-4 min-h-[60px] flex-1 text-xs leading-5 text-slate-500">
        {technology.description}
      </p>

      {/* Category, Difficulty and Rating */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-50 pt-3">

        <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500">
          {technology.category}
        </span>

        <span className="text-[10px] text-slate-500">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1">
          <span className="text-xs text-amber-400">
            ★
          </span>

          <span className="text-[11px] font-medium text-slate-700">
            {technology.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full rounded-md px-3 py-2.5 text-xs font-medium transition-colors duration-200 ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "cursor-pointer bg-[#0f172a] text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </article>
  );
}

export default TechnologyCard;

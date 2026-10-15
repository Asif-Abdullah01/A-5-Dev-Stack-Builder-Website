
import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      {/* Heading and Selected Count */}
      <div className="mb-4">
        <h3 className="text-base font-bold text-slate-900">
          Your Stack
        </h3>

        <p className="mt-1 text-xs text-slate-400">
          {selectedTechnologies.length === 0
            ? "No technologies selected yet."
            : `${selectedTechnologies.length} Technology Selected`}
        </p>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="flex min-h-[100px] items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 py-6">
          <p className="text-center text-xs text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="flex flex-col gap-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2"
              >
                {/* Technology Icon */}
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-8 w-8 shrink-0 object-contain"
                />

                {/* Technology Details */}
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xs font-semibold text-slate-900">
                    {technology.name}
                  </h4>

                  <p className="text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                  className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-xl font-light text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-8 w-full cursor-pointer rounded-lg border border-red-200 bg-white px-4 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;

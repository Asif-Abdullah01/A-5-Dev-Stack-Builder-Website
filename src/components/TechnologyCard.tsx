
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
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg">

      {/* Technology Icon and Badge */}
      <div className="mb-5 flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} logo`}
          className="h-14 w-14 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mb-3 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-grow text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category */}
      <div className="mb-4">
        <span className="rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-600">
          {technology.category}
        </span>
      </div>

      {/* Difficulty and Rating */}
      <div className="mb-5 flex items-center justify-between gap-2">
        <span className="text-xs text-gray-500">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 text-sm font-semibold text-gray-800">
          <span className="text-yellow-400">★</span>
          {technology.rating.toFixed(1)}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-500"
            : "brand-gradient cursor-pointer text-white hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;


import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

interface TechnologyListProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAdd: (technology: Technology) => void;
}

function TechnologyList({
  technologies,
  selectedTechnologies,
  onAdd,
}: TechnologyListProps) {
  return (
    <div>
      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => {
          const isAdded = selectedTechnologies.some(
            (item) => item.id === technology.id
          );

          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={isAdded}
              onAdd={onAdd}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechnologyList;


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
    <section id="technologies" className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore the Technologies
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-500 md:text-base">
            Discover powerful tools and frameworks to build your
            perfect development stack.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
}

export default TechnologyList;

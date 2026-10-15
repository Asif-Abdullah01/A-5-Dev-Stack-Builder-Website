
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import LoadingSpinner from "./components/LoadingSpinner";

import type { Technology } from "./types/technology";

function App() {
  // All technologies from JSON
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Selected technologies
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState<string | null>(null);

  // Fetch JSON data
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert("This technology is already in your stack!");
      return;
    }

    setSelectedTechnologies((prev) => [...prev, technology]);
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="py-16 text-center text-red-500">
            {error}
          </div>
        ) : (
          <TechnologyList
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            onAdd={handleAddToStack}
          />
        )}
      </main>
    </>
  );
}

export default App;

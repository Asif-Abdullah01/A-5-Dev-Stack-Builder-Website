
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import YourStack from "./components/YourStack";
import LoadingSpinner from "./components/LoadingSpinner";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  // All technologies
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Selected technologies
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch technology data
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        setError(null);

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

  // Add technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("Technology already exists in your stack!");
      return;
    }

    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove technology
  const handleRemove = (id: string) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id)
    );

    toast.info("Technology removed successfully!");
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) return;

    setSelectedTechnologies([]);

    toast.success("All technologies removed successfully!");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Technologies Section */}
        <section
          id="technologies"
          className="scroll-mt-20 bg-white py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Section Heading */}
            <div className="mb-8">
              <h2 className="text-[28px] font-extrabold tracking-tight text-[#0f172a] sm:text-[32px]">
                Explore the{" "}
                <span className="gradient-text">
                  Technologies
                </span>
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {/* Cards and Sidebar Layout */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_280px]">

              {/* Technology Cards */}
              <div className="min-w-0">
                {loading ? (
                  <LoadingSpinner />
                ) : error ? (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-sm text-red-600"
                  >
                    {error}
                  </div>
                ) : (
                  <TechnologyList
                    technologies={technologies}
                    selectedTechnologies={selectedTechnologies}
                    onAdd={handleAddToStack}
                  />
                )}
              </div>

              {/* Your Stack Sidebar */}
              <div className="w-full min-w-0">
                <YourStack
                  selectedTechnologies={selectedTechnologies}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;

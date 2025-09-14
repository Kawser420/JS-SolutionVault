import React, { useState, useEffect, useMemo } from "react";
import { PROBLEMS } from "./src/problems";
import { Category, Theme } from "./types";
import { Sidebar } from "./src/components/Sidebar";
import { Header } from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import { ProblemGrid } from "./src/components/ProblemGrid";
import { useDebounce } from "./src/hooks/useDebounce";

const themes: Theme[] = [
  { name: "Light", className: "light" },
  { name: "Dark", className: "dark" },
  { name: "System", className: "system" },
];

const categories = Object.values(Category);

function App() {
  const [theme, setTheme] = useState("system");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    // Simulate initial data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const applyTheme = (themeName: string) => {
      document.documentElement.classList.remove("light", "dark");
      if (themeName === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.add(
          systemPrefersDark ? "dark" : "light"
        );
      } else {
        document.documentElement.classList.add(themeName);
      }
      document.documentElement.setAttribute("data-theme", themeName);
    };

    applyTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme(theme);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const filteredProblems = useMemo(() => {
    return PROBLEMS.filter((problem) => {
      const categoryMatch =
        selectedCategory === "All" || problem.category === selectedCategory;
      const searchMatch = problem.title
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, debouncedSearchTerm]);

  const problemCounts = useMemo(() => {
    const counts: { [key in Category | "All"]?: number } = {
      All: PROBLEMS.length,
    };
    for (const category of categories) {
      counts[category] = PROBLEMS.filter((p) => p.category === category).length;
    }
    return counts;
  }, []);

  return (
    <div className="bg-[--bg-color] text-[--text-color] min-h-screen font-sans">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        counts={problemCounts}
      />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          themes={themes}
          currentTheme={theme}
          setTheme={setTheme}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <ProblemGrid problems={filteredProblems} isLoading={isLoading} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { SearchIcon, MenuIcon } from "./icons/Icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "../../types";

// FIX: Added the 'themes' property to the HeaderProps interface to correctly type the component's props.
interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  themes: Theme[];
  currentTheme: string;
  setTheme: (theme: string) => void;
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  themes,
  currentTheme,
  setTheme,
  toggleSidebar,
}) => {
  return (
    <>
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-20 bg-[--card-bg]/80 backdrop-blur-lg border-b border-[--border-color]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-[--text-color] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[--primary-color] rounded-md"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full max-w-xs bg-[--bg-color] border border-[--border-color] rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[--primary-color] focus:border-[--primary-color]"
                />
              </div>
            </div>
            <ThemeSwitcher
              themes={themes}
              currentTheme={currentTheme}
              setTheme={setTheme}
            />
          </div>
        </div>
      </header>

      {/* Big Hero Banner Section */}
      <div className="banner-bg border-b border-[--border-color]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-7xl bg-gradient-to-r from-[--primary-color] to-[--secondary-color] bg-clip-text text-transparent">
            JavaScript Master Edition
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-[--text-color]/80">
            A comprehensive collection of 200+ JavaScript problems with
            interactive solutions, modern practices, and AI-powered
            explanations.
          </p>
        </div>
      </div>
    </>
  );
};

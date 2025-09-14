import React from 'react';
import { Category } from '../types';
import { LogoIcon, CloseIcon } from './icons/Icons';

interface SidebarProps {
  categories: Category[];
  selectedCategory: Category | 'All';
  setSelectedCategory: (category: Category | 'All') => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  counts: { [key in Category | 'All']?: number };
}

const CountBadge: React.FC<{count?: number}> = ({ count }) => {
    if (count === undefined) return null;
    return (
        <span className="ml-auto text-xs font-mono bg-[--border-color] text-[--text-color]/70 rounded-full px-2 py-0.5">
            {count}
        </span>
    );
};

export const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, setSelectedCategory, isOpen, setIsOpen, counts }) => {
  const handleCategoryClick = (category: Category | 'All') => {
    setSelectedCategory(category);
    if(window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  const navClasses = "fixed top-0 left-0 h-full w-64 bg-[--card-bg] border-r border-[--border-color] z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0";

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)}></div>}
      <nav className={`${navClasses} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-[--border-color]">
           <div className="flex items-center gap-2">
                <LogoIcon className="h-8 w-8 text-[--primary-color]" />
                <h1 className="text-xl font-bold text-[--text-color]">JS Pro</h1>
            </div>
            <button onClick={() => setIsOpen(false)} className="lg:hidden text-[--text-color]">
                <CloseIcon className="h-6 w-6"/>
            </button>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleCategoryClick('All')}
                className={`w-full flex items-center text-left px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-[--primary-color] text-white'
                    : 'text-[--text-color] hover:bg-[--border-color]'
                }`}
              >
                All Problems
                <CountBadge count={counts.All} />
              </button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full flex items-center text-left px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-[--primary-color] text-white'
                      : 'text-[--text-color] hover:bg-[--border-color]'
                  }`}
                >
                  {category}
                  <CountBadge count={counts[category]} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
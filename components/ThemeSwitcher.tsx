import React, { useState, useRef, useEffect } from 'react';
import { Theme } from '../types';
import { PaletteIcon, CheckIcon } from './icons/Icons';

interface ThemeSwitcherProps {
  themes: Theme[];
  currentTheme: string;
  setTheme: (theme: string) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ themes, currentTheme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full text-[--text-color] hover:bg-[--border-color] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[--card-bg] focus:ring-[--primary-color]"
      >
        <PaletteIcon className="h-5 w-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[--card-bg] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
          {themes.map((theme) => (
            <button
              key={theme.className}
              onClick={() => {
                setTheme(theme.className);
                setIsOpen(false);
              }}
              className="w-full text-left flex items-center justify-between px-4 py-2 text-sm text-[--text-color] hover:bg-[--border-color]"
            >
              <span>{theme.name}</span>
              {currentTheme === theme.className && <CheckIcon className="h-4 w-4 text-[--primary-color]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
import React from 'react';
import { LogoIcon } from './icons/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[--card-bg] border-t border-[--border-color]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2">
                <LogoIcon className="h-8 w-8 text-[--primary-color]" />
                <h1 className="text-xl font-bold text-[--text-color]">JS Pro</h1>
            </div>
            <p className="mt-4 text-sm text-[--text-color]/70">
              The ultimate platform for mastering JavaScript through practice.
            </p>
            <p className="mt-2 text-sm text-[--text-color]/70">© 2024 JS Pro. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[--text-color] tracking-wider uppercase">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Converters</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Calculators</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Checkers</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Array Ops</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">String Ops</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Advanced</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[--text-color] tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Documentation</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">API Reference</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Blog</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[--text-color] tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[--text-color]/70 hover:text-[--primary-color]">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
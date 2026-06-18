import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 py-4 flex items-center justify-between md:py-6 z-50" style={{position: 'relative'}}>
      <div className="flex items-center gap-4">
        <Link to="/" className="inline-flex items-center gap-3">
          <span className="text-xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Scholar<span className="text-purple-400">Flow</span>
          </span>
        </Link>

        {/* desktop links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/privacy" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300">
            Privacy Policy
          </Link>
        </nav>
      </div>

      {/* hamburger for mobile */}
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800"
        >
          <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="fixed top-16 left-0 right-0 bg-[#09090F]/95 border-t border-[rgba(255,255,255,0.03)] md:hidden z-50 backdrop-blur-sm">
          <div className="px-6 py-4 flex flex-col space-y-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-white font-semibold">
              Home
            </Link>
            <Link to="/privacy" onClick={() => setOpen(false)} className="text-gray-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

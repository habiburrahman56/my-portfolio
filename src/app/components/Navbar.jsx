"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-4 bg-black/60 backdrop-blur-md z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-white capitalize">Portfolio</h1>
        </Link>

        {/* Desktop Menu (Large screens only) */}
        <div className="hidden lg:flex items-center gap-6 text-gray-400">
          <Link href="/" className="text-white text-[18px] font-medium hover:text-green-400 transition">Home</Link>
          <Link href="/about" className="text-white text-[18px] font-medium hover:text-green-400 transition">About</Link>
          <Link href="/skills" className="text-white text-[18px] font-medium hover:text-green-400 transition">Skills</Link>
          <Link href="/projects" className="text-white text-[18px] font-medium hover:text-green-400 transition">Projects</Link>
          <Link href="/contact" className="text-white text-[18px] font-medium hover:text-green-400 transition">Contact</Link>
        </div>



        {/* Mobile/Tablet Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-green-500 focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/80 backdrop-blur-md px-6 pb-4">
          <Link href="/" className="block text-white text-lg font-medium py-2 hover:text-green-400">Home</Link>
          <Link href="/about" className="block text-white text-lg font-medium py-2 hover:text-green-400">About</Link>
          <Link href="/skills" className="block text-white text-lg font-medium py-2 hover:text-green-400">Skills</Link>
          <Link href="/projects" className="block text-white text-lg font-medium py-2 hover:text-green-400">Projects</Link>
          <Link href="/contact" className="block text-white text-lg font-medium py-2 hover:text-green-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}

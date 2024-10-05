"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  // State for dropdown toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-red-500 bg-white sticky top-0 z-50 py-4">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 container">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Images/Headline.png" alt="Logo" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <div id="mega-menu" className={`md:flex items-center justify-between ${mobileMenuOpen ? "block" : "hidden"} w-full md:w-auto`}>
          <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8">
            <li>
              <Link href="/" className="block py-2 px-3 text-red-600 hover:text-red-600 text-xl font-semibold">Home</Link>
            </li>
            <li className="relative">
              {/* Dropdown Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-xl justify-between w-full py-2 px-3 font-normal text-gray-900 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-red-600"
              >
                Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>



              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full mt-1 w-40 bg-white shadow-lg rounded-lg z-20">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link href="/seo" className="block px-4 py-2 hover:bg-gray-100">
                        SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="/library" className="block px-4 py-2 hover:bg-gray-100">Services 2</Link>
                    </li>
                    <li>
                      <Link href="/resources" className="block px-4 py-2 hover:bg-gray-100"> Services 3</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>


            <li>
              <Link href="/" className="block py-2 px-3 text-black hover:text-black text-xl font-normal">About</Link>
            </li>

            <li>
              <Link href="/" className="block py-2 px-3 text-black hover:text-black text-xl font-normal">Case Studies</Link>
            </li>

            <li>
              <Link href="/" className="block py-2 px-3 text-black hover:text-black text-xl font-normal">Portfolio</Link>
            </li>

            <li>
              <Link href="/" className="block py-2 px-3 text-black hover:text-black text-xl font-normal">Contact</Link>
            </li>
          </ul>
        </div>

        {/* "Let's Talk" Button */}
        <div className="flex items-center">
          <button className="px-6 py-2 text-lg font-normal border text-red-500 border-red-500 rounded-full hover:bg-red-500 hover:text-white">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}

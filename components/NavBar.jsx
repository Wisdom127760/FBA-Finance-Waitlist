"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavPanel from "@components/NavPanel";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between w-full mb-16 pt-3">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/logo_fba.svg"
          alt="logo"
          width={120}
          height={30}
          className="object-contain"
        />
      </Link>

      {/* NavPanel for desktop */}
      <div className="hidden lg:block">
        <NavPanel />
      </div>

      <div className="flex items-center">
        <button
          type="button"
          onClick={() => {
            // Your early access logic here
          }}
          className="gap-4 px-4 py-2.5 text-white bg-indigo-600 rounded-lg mr-4"
        >
          Get Early Access
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="p-4">
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <NavPanel onLinkClick={closeMobileMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

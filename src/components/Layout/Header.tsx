"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Tuna Emlak
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link
            href="/properties"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            İlanlar
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            İletişim
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Hakkımızda
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white mt-4 py-2 border-t border-gray-200">
          <nav className="flex flex-col space-y-2 px-6">
            <Link
              href="/properties"
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              İlanlar
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

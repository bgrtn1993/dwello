"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <nav className="flex justify-center items-center space-x-2">
      <Link
        href={createPageURL(currentPage - 1)}
        className={`px-4 py-2 rounded-md transition-colors duration-200 ${
          currentPage === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : undefined}
      >
        Önceki
      </Link>

      {startPage > 1 && (
        <>
          <Link
            href={createPageURL(1)}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
          >
            1
          </Link>
          {startPage > 2 && (
            <span className="px-2 py-2 text-gray-600">...</span>
          )}
        </>
      )}

      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            page === currentPage
              ? "bg-blue-600 text-white font-bold"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 py-2 text-gray-600">...</span>
          )}
          <Link
            href={createPageURL(totalPages)}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
          >
            {totalPages}
          </Link>
        </>
      )}

      <Link
        href={createPageURL(currentPage + 1)}
        className={`px-4 py-2 rounded-md transition-colors duration-200 ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : undefined}
      >
        Sonraki
      </Link>
    </nav>
  );
}

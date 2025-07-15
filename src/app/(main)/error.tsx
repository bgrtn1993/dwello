"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
   console.error("Uygulama genelinde bir hata oluştu:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-gray-50 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-4xl font-bold text-red-600 mb-4">
        Bir şeyler ters gitti!
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Uygulamada beklenmedik bir hata oluştu.
      </p>
      <p className="text-sm text-gray-500 mb-8">
        Hata Detayı: {error.message || "Bilinmeyen bir hata."}
      </p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 transform hover:scale-105"
          onClick={
            () => reset()
          }
        >
          Tekrar Dene
        </button>
        <Link
          href="/"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-md transition-colors duration-300 transform hover:scale-105"
        >
          Ana Sayfaya Git
        </Link>
      </div>
    </div>
  );
}

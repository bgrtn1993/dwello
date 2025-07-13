import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">
        İlan Bulunamadı
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Aradığınız ilan mevcut değil veya kaldırılmış olabilir.
      </p>
      <Link
        href="/properties"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
      >
        Tüm İlanlara Geri Dön
      </Link>
    </div>
  );
}

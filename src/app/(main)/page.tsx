import SearchForm from "@/components/properties/SearchForm";
import PropertyCard from "@/components/properties/PropertyCard";
import { getProperties } from "@/data/api";
import Link from "next/link";

export default async function HomePage() {
  const { properties: featuredProperties } = await getProperties({
    limit: 6,
    sortBy: "date",
    sortOrder: "desc",
  });

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <section className="w-full bg-blue-700 text-white py-20 text-center rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-down">
          Hayalinizdeki Evi Bulun
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
          Türkiye&#39;nin en geniş emlak ilanları platformu.
        </p>
        <div className="max-w-3xl mx-auto px-4">
          <SearchForm />
        </div>
      </section>

      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Öne Çıkan İlanlar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/properties"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Tüm İlanları Görüntüle
          </Link>
        </div>
      </section>

      <section className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Nasıl Çalışır?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-4">
            <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-blue-600 text-xl font-semibold mb-2">Arayın</h3>
            <p className="text-gray-600">
              Gelişmiş filtreleme seçenekleriyle aradığınız ilanı kolayca bulun.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M9 20v-2a3 3 0 00-3-3H4a3 3 0 00-3 3v2h8zm9-6a3 3 0 100-6 3 3 0 000 6zM12 10a3 3 0 100-6 3 3 0 000 6z"
                ></path>
              </svg>
            </div>
            <h3 className="text-blue-600 text-xl font-semibold mb-2">
              Keşfedin
            </h3>
            <p className="text-gray-600">
              Detaylı ilan sayfaları ve yüksek çözünürlüklü görsellerle
              keşfedin.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="bg-purple-100 text-purple-600 rounded-full p-4 mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-blue-600 text-xl font-semibold mb-2">
              Sahip Olun
            </h3>
            <p className="text-gray-600">
              Emlakçılarla kolayca iletişime geçin ve hayalinizdeki eve sahip
              olun.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

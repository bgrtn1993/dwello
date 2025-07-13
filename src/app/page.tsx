import PropertyCard from "../components/PropertyCard";
import { mockProperties } from "@/data/mockProperties";
import Button from "@/components/Button";

export default function Home() {
  const featuredProperties = mockProperties.slice(0, 3);

  return (
    <main className="container mx-auto p-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Hayalinizdeki Evi Bulun
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Geniş emlak seçeneklerimizle size en uygun evi, daireyi veya ticari
          mülkü keşfedin.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Öne Çıkan İlanlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/properties" variant="primary" size="lg">
            Tüm İlanları Görüntüle
          </Button>
        </div>
      </section>
    </main>
  );
}

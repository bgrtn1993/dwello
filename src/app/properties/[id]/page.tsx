import { notFound } from "next/navigation";
import Image from "next/image";
import { mockProperties } from "@/data/mockProperties";
import { PROPERTY_TYPE_LABELS } from "@/lib/constants";
import { fetchPropertyById } from "@/data/api";

interface PropertyDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const property = await fetchPropertyById(params.id);

  if (!property) {
    notFound();
  }

  const propertyTypeLabel =
    PROPERTY_TYPE_LABELS[property.type] || property.type;

  return (
    <main className="container mx-auto p-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96 w-full">
          <Image
            src={property.images[0] || "/images/house-placeholder.jpg"}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
            priority
          />
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            {property.title}
          </h1>
          <p className="text-2xl text-blue-600 font-bold mb-4">
            {property.price.toLocaleString("tr-TR")} {property.currency}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-700 text-lg">
            <div>
              <p>
                <strong className="font-semibold">Banyo Sayısı:</strong>{" "}
                {property.numberOfBathrooms}
              </p>
              <p>
                <strong className="font-semibold">Balkon:</strong>{" "}
                {property.hasBalcony ? "Var" : "Yok"}
              </p>
              <p>
                <strong className="font-semibold">Bahçe:</strong>{" "}
                {property.hasGarden ? "Var" : "Yok"}
              </p>
            </div>
            <div className="col-span-full">
              <p>
                <strong className="font-semibold">Eşyalı:</strong>{" "}
                {property.isFurnished ? "Evet" : "Hayır"}
              </p>

              <p>
                <strong className="font-semibold">İlan Tipi:</strong>{" "}
                {propertyTypeLabel}
              </p>

              <p>
                <strong className="font-semibold">İlan Tarihi:</strong>{" "}
                {new Date(property.listedDate).toLocaleDateString("tr-TR")}
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
            Açıklama
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {property.description}
          </p>

          {property.images.length > 1 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Diğer Görseller
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {property.images.slice(1).map((img) => (
                  <div
                    key={img}
                    className="relative w-full h-32 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${property.title} - Ek Resim`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const prop = mockProperties || [];
  return prop.map((property) => ({
    id: property.id,
  }));
}

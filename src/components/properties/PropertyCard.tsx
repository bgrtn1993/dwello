
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/data/types";
import { PLACEHOLDER_IMAGE_URL } from "@/lib/constants";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const imageUrl =
    property.images && property.images.length > 0
      ? property.images[0]
      : PLACEHOLDER_IMAGE_URL;

  return (
    <Link
      href={`/properties/${property.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {property.listingType === "Sale" ? "Satılık" : "Kiralık"}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate group-hover:text-blue-600 transition-colors duration-200">
          {property.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {property.location.district}, {property.location.city}
        </p>
        <div className="flex items-center justify-between text-gray-700 mb-3">
          <span className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a.75.75 0 01.75.75v14.5a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM15 7a.75.75 0 01.75.75v8.5a.75.75 0 01-1.5 0V7.75A.75.75 0 0115 7zM5 10a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 015 10z"></path>
            </svg>
            {property.roomCount}
          </span>
          <span className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm6-1a1 1 0 11-2 0 1 1 0 012 0zm-3 4a1 1 0 100-2 1 1 0 000 2zm3 1a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
            {property.area} m²
          </span>
        </div>
        <p className="text-2xl font-bold text-blue-600">
          {property.price.toLocaleString("tr-TR")} {property.currency}
        </p>
      </div>
    </Link>
  );
}

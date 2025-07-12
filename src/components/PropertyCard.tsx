import Link from "next/link";
import Image from "next/image";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/properties/${property.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={property.images[0] || "/images/house-placeholder.jpg"}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 truncate">
            {property.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{property.location}</p>
          <p className="text-blue-600 text-lg font-bold mt-2">
            {property.price.toLocaleString("tr-TR")} {property.currency}
          </p>
          <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
            <span>{property.numberOfRooms}+1 Oda</span>
            <span>{property.squareMeters} m²</span>
            <span>{property.numberOfBathrooms} Banyo</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

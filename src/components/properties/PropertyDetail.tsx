
import { Property } from "@/data/types";
import { PROPERTY_TYPES, LISTING_TYPES, ROOM_COUNTS } from "@/lib/constants";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const propertyTypeLabel =
    PROPERTY_TYPES.find((p) => p.value === property.propertyType)?.label ||
    property.propertyType;
  const listingTypeLabel =
    LISTING_TYPES.find((l) => l.value === property.listingType)?.label ||
    property.listingType;

  const roomCountLabel =
    ROOM_COUNTS.find((rc) => rc.value === property.roomCount)?.label ||
    property.roomCount;

  const getFloorDisplay = () => {
    if (property.floor && property.totalFloors) {
      return `${property.floor} / ${property.totalFloors}`;
    }
    if (property.floor) {
      return property.floor.toString();
    }
    return "Belirtilmemiş";
  };
  const floorDisplay = getFloorDisplay();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">İlan Detayları</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Fiyat:</span>
          <span className="text-blue-600 text-xl font-bold">
            {property.price.toLocaleString("tr-TR")} {property.currency}
          </span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Alan:</span>
          <span>{property.area} m²</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Oda Sayısı:</span>
          <span>{roomCountLabel}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Banyo Sayısı:</span>
          <span>{property.bathroomCount ?? "Belirtilmemiş"}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Bina Yaşı:</span>
          <span>{property.buildingAge ?? "Belirtilmemiş"}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Kat:</span>
          <span>{floorDisplay}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Emlak Tipi:</span>
          <span>{propertyTypeLabel}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">İlan Tipi:</span>
          <span>{listingTypeLabel}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Şehir:</span>
          <span>{property.location.city}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">İlçe:</span>
          <span>{property.location.district}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="font-semibold w-32">Mahalle:</span>
          <span>{property.location.neighborhood}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">Açıklama</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        {property.description}
      </p>

      {property.features && property.features.length > 0 && (
        <>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Özellikler</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-700 mb-6">
            {property.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="text-gray-500 text-sm mt-4">
        İlan Yayın Tarihi:{" "}
        {new Date(property.publishedAt).toLocaleDateString("tr-TR")}
      </p>
    </div>
  );
}

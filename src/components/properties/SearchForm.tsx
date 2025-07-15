
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Property } from "@/data/types";

interface SearchFormProps {
  initialFilters?: Partial<Property>;
}

export default function SearchForm({ initialFilters = {} }: SearchFormProps) {
  const router = useRouter();
  const [propertyType, setPropertyType] = useState<
    Property["propertyType"] | ""
  >(initialFilters.propertyType || "");
  const [listingType, setListingType] = useState<Property["listingType"] | "">(
    initialFilters.listingType || "",
  );
  const [city, setCity] = useState(initialFilters.location?.city || "");
  const [roomCount, setRoomCount] = useState(initialFilters.roomCount || "");

  const cities = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Antalya",
    "Bursa",
    "Muğla",
    "Eskişehir",
    "Kocaeli",
    "Adana",
    "Sakarya",
  ];
  const roomCounts = [
    "1+0",
    "1+1",
    "2+1",
    "3+1",
    "4+1",
    "4+2",
    "5+1",
    "5+2",
    "6+2 ve üzeri",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();

    if (propertyType) queryParams.set("type", propertyType);
    if (listingType) queryParams.set("listingType", listingType);
    if (city) queryParams.set("city", city);
    if (roomCount) queryParams.set("roomCount", roomCount);

    router.push(`/properties?${queryParams.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap items-end gap-4"
    >
      <div className="flex-1 min-w-[150px]">
        <label
          htmlFor="propertyType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          İlan Tipi
        </label>
        <select
          id="propertyType"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={propertyType}
          onChange={(e) =>
            setPropertyType(e.target.value as Property["propertyType"])
          }
        >
          <option value="">Tümü</option>
          <option value="Apartment">Daire</option>
          <option value="Villa">Villa</option>
          <option value="Land">Arsa</option>
          <option value="Commercial">İş Yeri</option>
        </select>
      </div>

      <div className="flex-1 min-w-[150px]">
        <label
          htmlFor="listingType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Satılık / Kiralık
        </label>
        <select
          id="listingType"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={listingType}
          onChange={(e) =>
            setListingType(e.target.value as Property["listingType"])
          }
        >
          <option value="">Tümü</option>
          <option value="Sale">Satılık</option>
          <option value="Rent">Kiralık</option>
        </select>
      </div>

      <div className="flex-1 min-w-[150px]">
        <label
          htmlFor="city"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Şehir
        </label>
        <select
          id="city"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Tümü</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 min-w-[150px]">
        <label
          htmlFor="roomCount"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Oda Sayısı
        </label>
        <select
          id="roomCount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={roomCount}
          onChange={(e) => setRoomCount(e.target.value)}
        >
          <option value="">Tümü</option>
          {roomCounts.map((rc) => (
            <option key={rc} value={rc}>
              {rc}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:w-auto">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-md focus:outline-none focus:shadow-outline w-full transition-colors duration-200"
        >
          İlan Ara
        </button>
      </div>
    </form>
  );
}

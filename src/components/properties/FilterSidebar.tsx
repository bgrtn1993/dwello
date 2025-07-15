"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setFilter, resetFilters } from "@/store/slices/filterSlice";
import { Property } from "@/data/types";

interface FilterSidebarProps {
  currentFilters: {
    type?: Property["propertyType"];
    city?: string;
    minPrice?: number;
    maxPrice?: number;
    roomCount?: string;
    listingType?: Property["listingType"];
  };
}

export default function FilterSidebar({ currentFilters }: FilterSidebarProps) {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(setFilter({ key: "type", value: currentFilters.type || "" }));
    dispatch(setFilter({ key: "city", value: currentFilters.city || "" }));
    dispatch(
      setFilter({ key: "minPrice", value: currentFilters.minPrice || "" }),
    );
    dispatch(
      setFilter({ key: "maxPrice", value: currentFilters.maxPrice || "" }),
    );
    dispatch(
      setFilter({ key: "roomCount", value: currentFilters.roomCount || "" }),
    );
    dispatch(
      setFilter({
        key: "listingType",
        value: currentFilters.listingType || "",
      }),
    );
  }, [currentFilters, dispatch]);

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

  const handleApplyFilters = () => {
    const newSearchParams = new URLSearchParams();

    if (filters.type) newSearchParams.set("type", filters.type);
    if (filters.listingType)
      newSearchParams.set("listingType", filters.listingType);
    if (filters.city) newSearchParams.set("city", filters.city);
    if (filters.minPrice)
      newSearchParams.set("minPrice", filters.minPrice.toString());
    if (filters.maxPrice)
      newSearchParams.set("maxPrice", filters.maxPrice.toString());
    if (filters.roomCount) newSearchParams.set("roomCount", filters.roomCount);

    if (searchParams.get("sortBy"))
      newSearchParams.set("sortBy", searchParams.get("sortBy")!);
    if (searchParams.get("sortOrder"))
      newSearchParams.set("sortOrder", searchParams.get("sortOrder")!);
    if (searchParams.get("page")) newSearchParams.set("page", "1");

    router.push(`/properties?${newSearchParams.toString()}`);
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    router.push("/properties");
  };

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="filterPropertyType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          İlan Tipi
        </label>
        <select
          id="filterPropertyType"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={filters.type}
          onChange={(e) =>
            dispatch(
              setFilter({
                key: "type",
                value: e.target.value as Property["propertyType"],
              }),
            )
          }
        >
          <option value="">Tümü</option>
          <option value="Apartment">Daire</option>
          <option value="Villa">Villa</option>
          <option value="Land">Arsa</option>
          <option value="Commercial">İş Yeri</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="filterListingType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Satılık / Kiralık
        </label>
        <select
          id="filterListingType"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={filters.listingType}
          onChange={(e) =>
            dispatch(
              setFilter({
                key: "listingType",
                value: e.target.value as Property["listingType"],
              }),
            )
          }
        >
          <option value="">Tümü</option>
          <option value="Sale">Satılık</option>
          <option value="Rent">Kiralık</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="filterCity"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Şehir
        </label>
        <select
          id="filterCity"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={filters.city}
          onChange={(e) =>
            dispatch(setFilter({ key: "city", value: e.target.value }))
          }
        >
          <option value="">Tümü</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="filterRoomCount"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Oda Sayısı
        </label>
        <select
          id="filterRoomCount"
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          value={filters.roomCount}
          onChange={(e) =>
            dispatch(setFilter({ key: "roomCount", value: e.target.value }))
          }
        >
          <option value="">Tümü</option>
          {roomCounts.map((rc) => (
            <option key={rc} value={rc}>
              {rc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Fiyat Aralığı (TL)
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min Fiyat"
            className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={filters.minPrice}
            onChange={(e) =>
              dispatch(
                setFilter({
                  key: "minPrice",
                  value: e.target.value === "" ? "" : parseInt(e.target.value),
                }),
              )
            }
          />
          <input
            type="number"
            placeholder="Max Fiyat"
            className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            value={filters.maxPrice}
            onChange={(e) =>
              dispatch(
                setFilter({
                  key: "maxPrice",
                  value: e.target.value === "" ? "" : parseInt(e.target.value),
                }),
              )
            }
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleApplyFilters}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
      >
        Filtrele
      </button>

      <button
        type="button"
        onClick={handleResetFilters}
        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
      >
        Filtreleri Sıfırla
      </button>
    </div>
  );
}

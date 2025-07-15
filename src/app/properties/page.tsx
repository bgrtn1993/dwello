import { getProperties } from "@/data/api";
import PropertyCard from "@/components/properties/PropertyCard";
import FilterSidebar from "@/components/properties/FilterSidebar";
import Pagination from "@/components/common/Pagination";
import { Property } from "@/data/types";
import { Suspense } from "react";
import SortDropdown from "@/components/properties/SortDropdown";

interface PropertyListingsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function PropertyListingsPage({
  searchParams,
}: PropertyListingsPageProps) {
  const page = parseInt((searchParams.page as string) || "1");
  const limit = parseInt((searchParams.limit as string) || "9");
  const sortBy = (searchParams.sortBy as "price" | "date" | "area") || "date";
  const sortOrder = (searchParams.sortOrder as "asc" | "desc") || "desc";

  const filters = {
    type: searchParams.type as Property["propertyType"] | undefined,
    city: searchParams.city as string | undefined,
    minPrice: searchParams.minPrice
      ? parseInt(searchParams.minPrice as string)
      : undefined,
    maxPrice: searchParams.maxPrice
      ? parseInt(searchParams.maxPrice as string)
      : undefined,
    roomCount: searchParams.roomCount as string | undefined,
    listingType: searchParams.listingType as
      | Property["listingType"]
      | undefined,
  };

  const { properties, totalCount } = await getProperties({
    page,
    limit,
    filters,
    sortBy,
    sortOrder,
  });
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Filtrele</h2>
        <Suspense fallback={<div>Filtreler yükleniyor...</div>}>
          <FilterSidebar currentFilters={filters} />
        </Suspense>
      </aside>

      <section className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Tüm İlanlar ({totalCount})
          </h1>

          <SortDropdown defaultSortBy={sortBy} defaultSortOrder={sortOrder} />
        </div>

        {properties.length === 0 ? (
          <div className="text-center py-10 text-gray-600 text-lg">
            Aradığınız kriterlere uygun ilan bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      </section>
    </div>
  );
}

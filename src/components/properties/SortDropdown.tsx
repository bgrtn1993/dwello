
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SortDropdownProps {
  defaultSortBy: string;
  defaultSortOrder: string;
}

export default function SortDropdown({
  defaultSortBy,
  defaultSortOrder,
}: SortDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSortValue =
    defaultSortOrder === "desc" && defaultSortBy === "price"
      ? "price-desc"
      : defaultSortBy;

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (value === "price-desc") {
      newSearchParams.set("sortBy", "price");
      newSearchParams.set("sortOrder", "desc");
    } else {
      newSearchParams.set("sortBy", value);
      newSearchParams.set("sortOrder", "asc");
    }

    newSearchParams.set("page", "1");

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort-by" className="text-gray-700 text-sm">
        Sırala:
      </label>
      <select
        id="sort-by"
        className="border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
        value={currentSortValue}
        onChange={handleSortChange}
      >
        <option value="date">Tarihe Göre (Yeni)</option>
        <option value="price">Fiyata Göre (Artan)</option>
        <option value="price-desc">Fiyata Göre (Azalan)</option>
        <option value="area">Alana Göre (Artan)</option>
      </select>
    </div>
  );
}

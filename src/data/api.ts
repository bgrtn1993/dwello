import { mockProperties } from "@/data/mockProperties";
import type { Property } from "@/types/property";

export const fetchPropertyById = async (
  id: string,
): Promise<Property | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockProperties.find((p) => p.id === id);
};

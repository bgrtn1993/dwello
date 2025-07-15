import {
  Property,
  Agent,
  GetPropertiesParams,
  GetPropertiesResponse,
} from "./types";
import mockProperties from "./mockProperties";
import mockAgents from "./mockAgents";

const simulateDelay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getProperties(
  params: GetPropertiesParams = {},
): Promise<GetPropertiesResponse> {
  await simulateDelay(500); // 500ms delay

  let filteredProperties = [...mockProperties];

  if (params.filters) {
    const { type, city, minPrice, maxPrice, roomCount, listingType } =
      params.filters;

    if (type) {
      filteredProperties = filteredProperties.filter(
        (p) => p.propertyType === type,
      );
    }
    if (city) {
      filteredProperties = filteredProperties.filter(
        (p) => p.location.city === city,
      );
    }
    if (minPrice !== undefined && minPrice !== null) {
      filteredProperties = filteredProperties.filter(
        (p) => p.price >= minPrice,
      );
    }
    if (maxPrice !== undefined && maxPrice !== null) {
      filteredProperties = filteredProperties.filter(
        (p) => p.price <= maxPrice,
      );
    }
    if (roomCount) {
      filteredProperties = filteredProperties.filter(
        (p) => p.roomCount === roomCount,
      );
    }
    if (listingType) {
      filteredProperties = filteredProperties.filter(
        (p) => p.listingType === listingType,
      );
    }
  }

  if (params.sortBy) {
    filteredProperties.sort((a, b) => {

      let valA: any, valB: any;
      if (params.sortBy === "price") {
        valA = a.price;
        valB = b.price;
      } else if (params.sortBy === "date") {
        valA = new Date(a.publishedAt).getTime();
        valB = new Date(b.publishedAt).getTime();
      } else if (params.sortBy === "area") {
        valA = a.area;
        valB = b.area;
      }

      if (params.sortOrder === "desc") {
        return valB - valA;
      }
      return valA - valB;
    });
  } else {
    filteredProperties.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
  }

  const totalCount = filteredProperties.length;

  const page = params.page || 1;
  const limit = params.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

  return { properties: paginatedProperties, totalCount };
}

export async function getPropertyById(
  id: string,
): Promise<Property | undefined> {
  await simulateDelay(300);
  return mockProperties.find((property) => property.id === id);
}

export async function getAllPropertyIds(): Promise<string[]> {
  await simulateDelay(100);
  return mockProperties.map((p) => p.id);
}

export async function getAgentById(id: string): Promise<Agent | undefined> {
  await simulateDelay(200);
  return mockAgents.find((agent) => agent.id === id);
}

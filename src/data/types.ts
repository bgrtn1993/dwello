export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: "TL" | "USD" | "EUR";
  area: number;
  roomCount: string;
  bathroomCount: number;
  buildingAge: number;
  floor: number;
  totalFloors: number;
  propertyType: "Apartment" | "Villa" | "Land" | "Commercial";
  listingType: "Sale" | "Rent";
  images: string[];
  location: {
    city: string;
    district: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
  };
  features: string[];
  agentId: string;
  publishedAt: string;
}

export interface Agent {
  id: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  profileImage: string;
  bio: string;
}

export interface GetPropertiesParams {
  page?: number;
  limit?: number;
  filters?: {
    type?: string;
    city?: string;
    minPrice?: number;
    maxPrice?: number;
    roomCount?: string;
    listingType?: "Sale" | "Rent";
  };
  sortBy?: "price" | "date" | "area";
  sortOrder?: "asc" | "desc";
}

export interface GetPropertiesResponse {
  properties: Property[];
  totalCount: number;
}

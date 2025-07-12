export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: string;
  squareMeters: number;
  numberOfRooms: number;
  numberOfBathrooms: number;
  hasBalcony: boolean;
  hasGarden: boolean;
  isFurnished: boolean;
  images: string[];
  type: "apartment" | "house" | "land" | "commercial";
  listedDate: string;
  latitude?: number;
  longitude?: number;
}

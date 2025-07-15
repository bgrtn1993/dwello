
"use client";

import { useState, useEffect } from "react";

interface MapDisplayProps {
  location: {
    city: string;
    district: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
  };
}

export default function MapDisplay({ location }: MapDisplayProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Konum</h3>
      <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-lg overflow-hidden relative">
        {mapLoaded ? (
          <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-800">
            <p className="text-center">
              Harita Gösterimi ({location.latitude}, {location.longitude})<br />
              {location.neighborhood}, {location.district}, {location.city}
            </p>
            {/* <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
              allowFullScreen
              loading="lazy"
            ></iframe> */}
          </div>
        ) : (
          <span>Harita Yükleniyor...</span>
        )}
      </div>
      <p className="text-gray-700 mt-4 text-sm">
        Tam Adres: {location.neighborhood}, {location.district}, {location.city}
      </p>
    </div>
  );
}

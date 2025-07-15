
"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [mainImage, setMainImage] = useState(
    images[0] || "https://placehold.co/800x600/E0F2F7/2C3E50?text=No+Image",
  );

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-md mb-6">
        <span className="text-gray-500 text-lg">Görsel Bulunamadı</span>
      </div>
    );
  }

  return (
    <div className="w-full mb-6">
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-md mb-4">
        <Image
          src={mainImage}
          alt="Ana İlan Görseli"
          fill
          sizes="(max-width: 768px) 100vw, 75vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-24 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
              mainImage === image ? "border-blue-600" : "border-transparent"
            } hover:border-blue-500 transition-colors duration-200`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image}
              alt={`İlan Görseli ${index + 1}`}
              fill
              sizes="96px"
              className="object-cover"
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

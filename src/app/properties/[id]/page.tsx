import type { Metadata } from "next";
import { getPropertyById, getAllPropertyIds } from "@/data/api";
import PropertyDetail from "@/components/properties/PropertyDetail";
import ImageGallery from "@/components/properties/ImageGallery";
import MapDisplay from "@/components/properties/MapDisplay";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";

interface PropertyDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const property = await getPropertyById(params.id);

  if (!property) {
    return {
      title: "İlan Bulunamadı - MyRealEstateApp",
      description: "Aradığınız emlak ilanı bulunamadı.",
    };
  }

  return {
    title: `${property.title} - ${property.location.city}, ${property.location.district} - MyRealEstateApp`,
    description: property.description.substring(0, 160) + "...",
    keywords: [
      property.propertyType,
      property.location.city,
      property.location.district,
      property.listingType === "Sale" ? "satılık" : "kiralık",
      property.title.toLowerCase(),
    ],
    openGraph: {
      title: `${property.title} - MyRealEstateApp`,
      description: property.description.substring(0, 160) + "...",
      url: `https://your-emlak-website.com/properties/${property.id}`,
      images: [
        {
          url:
            property.images[0] ||
            "[https://placehold.co/800x600/E0F2F7/2C3E50?text=Default+Property](https://placehold.co/800x600/E0F2F7/2C3E50?text=Default+Property)",
          width: 800,
          height: 600,
          alt: property.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const ids = await getAllPropertyIds();
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const property = await getPropertyById(params.id);

  if (!property) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          404 - İlan Bulunamadı
        </h1>
        <p className="text-lg text-gray-700">
          Aradığınız emlak ilanı mevcut değil veya silinmiş olabilir.
        </p>
        <Link
          href="/properties"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
        >
          Tüm İlanlara Geri Dön
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Anasayfa", href: "/" },
    { label: "Emlak İlanları", href: "/properties" },
    { label: property.title, href: `/properties/${property.id}` },
  ];

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {property.title}
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          {property.location.neighborhood}, {property.location.district},{" "}
          {property.location.city}
        </p>

        <ImageGallery images={property.images} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <PropertyDetail property={property} />
          </div>
          <aside className="md:col-span-1">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                İlan Sahibiyle İletişim
              </h3>
              <ContactForm propertyTitle={property.title} />
            </div>
            <MapDisplay location={property.location} />
          </aside>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ReduxProvider } from "@/store/provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuna Emlak",
  description:
    "Türkiye'nin en güncel emlak ilanları, kiralık ve satılık daireler, villalar ve arsalar.",
  keywords: [
    "emlak",
    "gayrimenkul",
    "satılık daire",
    "kiralık ev",
    "arsa",
    "villa",
    "emlak ilanları",
    "tunaemlak",
  ],
  openGraph: {
    title: "Tuna Emlak",
    description:
      "Türkiye'nin en güncel emlak ilanları, kiralık ve satılık daireler, villalar ve arsalar.",
    url: "[https://your-emlak-website.com](https://your-emlak-website.com)",
    siteName: "MyRealEstateApp",
    images: [
      {
        url: "[https://placehold.co/1200x630/E0F2F7/2C3E50?text=Emlak+Website](https://placehold.co/1200x630/E0F2F7/2C3E50?text=Emlak+Website)",
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuna Emlak",
    description:
      "Türkiye'nin en güncel emlak ilanları, kiralık ve satılık daireler, villalar ve arsalar.",
    creator: "@yourtwitterhandle",
    images: [
      "[https://placehold.co/800x450/E0F2F7/2C3E50?text=Emlak+Website+Twitter](https://placehold.co/800x450/E0F2F7/2C3E50?text=Emlak+Website+Twitter)",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
        <ReduxProvider>
          <Header />
          <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

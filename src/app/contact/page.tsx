import type { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "İletişim - MyRealEstateApp",
  description:
    "MyRealEstateApp ile iletişime geçin. Sorularınız, geri bildirimleriniz ve destek için.",
};

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Anasayfa", href: "/" },
    { label: "İletişim", href: "/contact" },
  ];

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Bize Ulaşın
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
          Her türlü sorunuz, geri bildiriminiz veya destek talebiniz için
          aşağıdaki formu kullanarak bizimle iletişime geçebilirsiniz. Ekibimiz
          en kısa sürede size dönüş yapacaktır.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Mesaj Gönderin
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              İletişim Bilgilerimiz
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <strong>Adres:</strong> Örnek Mah. Örnek Cad. No: 123, İstanbul,
                Türkiye
              </p>
              <p className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <strong>E-posta:</strong> info@tunaemlak.com
              </p>
              <p className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <strong>Telefon:</strong> +90 555 123 45 67
              </p>
              <p className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                <strong>Çalışma Saatleri:</strong> Pzt - Cuma: 09:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

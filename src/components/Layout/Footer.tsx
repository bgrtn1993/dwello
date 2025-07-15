import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Tuna Emlak</h3>
          <p className="text-gray-400 text-sm">
            Hayalinizdeki evi bulmanıza yardımcı oluyoruz. Binlerce güncel emlak
            ilanı ile aradığınızı kolayca bulun.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/properties"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Tüm İlanlar
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                İletişim
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Gizlilik Politikası
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Bize Ulaşın</h3>
          <p className="text-gray-400 text-sm">
            Adres: Örnek Mah. Örnek Cad. No: 123, İstanbul
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Telefon: +90 555 123 45 67
          </p>
          <p className="text-gray-400 text-sm mt-1">
            E-posta: info@tunaemlak.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12.0007 2.00073C6.48673 2.00073 2.00073 6.48673 2.00073 12.0007C2.00073 17.5147 6.48673 22.0007 12.0007 22.0007C17.5147 22.0007 22.0007 17.5147 22.0007 12.0007C22.0007 6.48673 17.5147 2.00073 12.0007 2.00073ZM15.2007 17.2007C14.8007 17.6007 14.2007 17.6007 13.8007 17.2007L12.0007 15.4007L10.2007 17.2007C9.80073 17.6007 9.20073 17.6007 8.80073 17.2007C8.40073 16.8007 8.40073 16.2007 8.80073 15.8007L10.6007 14.0007L8.80073 12.2007C8.40073 11.8007 8.40073 11.2007 8.80073 10.8007C9.20073 10.4007 9.80073 10.4007 10.2007 10.8007L12.0007 12.6007L13.8007 10.8007C14.2007 10.4007 14.8007 10.4007 15.2007 10.8007C15.6007 11.2007 15.6007 11.8007 15.2007 12.2007L13.4007 14.0007L15.2007 15.8007C15.6007 16.2007 15.6007 16.8007 15.2007 17.2007Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8 pt-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Tuna Emlak. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}

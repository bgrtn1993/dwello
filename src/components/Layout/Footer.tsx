export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} EmlakProjem. Tüm Hakları Saklıdır.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">
            Gizlilik Politikası
          </a>
          <a href="#" className="hover:text-gray-400">
            Kullanım Koşulları
          </a>
        </div>
      </div>
    </footer>
  );
}

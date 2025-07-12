import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          EmlakProjem
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/properties" className="hover:text-blue-200">
              İlanlar
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-200">
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

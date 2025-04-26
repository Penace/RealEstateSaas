import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        RealEstateSaaS
      </div>
      <div className="flex gap-6 text-gray-600 dark:text-gray-300 text-lg">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/listings" className="hover:text-blue-500">
          Listings
        </Link>
        <Link to="/calculator" className="hover:text-blue-500">
          Calculator
        </Link>
      </div>
    </nav>
  );
}

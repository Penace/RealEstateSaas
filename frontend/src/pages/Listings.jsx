import listings from "../data/listings"; // Pull from dynamic data file
import ListingCard from "../components/ListingCard";

export default function Listings() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-12 text-gray-900">
        Featured Listings
      </h1>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}

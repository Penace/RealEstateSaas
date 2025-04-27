import ListingCard from "../components/ListingCard";
import house1 from "/src/assets/house1.jpg";
import house2 from "/src/assets/house2.jpg";
import house3 from "/src/assets/house3.jpg";

const listings = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$5,200,000",
    image: house1,
  },
  {
    id: 2,
    title: "Tuscan Mansion",
    location: "Florence, Italy",
    price: "$4,800,000",
    image: house2,
  },
  {
    id: 3,
    title: "Penthouse Apartment",
    location: "New York City, NY",
    price: "$3,500,000",
    image: house3,
  },
];

export default function Listings() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-12 text-gray-900">
        Featured Listings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}

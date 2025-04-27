import { useParams } from "react-router-dom";

export default function ListingDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-gray-900">
        Listing Details (ID: {id})
      </h1>
      <p className="mt-6 text-gray-600">
        This will show property info for listing #{id}.
      </p>
    </div>
  );
}

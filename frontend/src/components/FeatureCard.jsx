export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white shadow-xl p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const infoSection = document.getElementById("infoSection");

    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      const elementTop = infoSection.getBoundingClientRect().top;

      if (elementTop < triggerHeight) {
        infoSection.classList.remove("opacity-0", "translate-y-10");
        infoSection.classList.add("opacity-100", "translate-y-0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/src/assets/hero.jpeg')" }}
      >
        <h1 className="text-5xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
          Find Your Dream Property
        </h1>
      </section>

      {/* Info Section */}
      <section className="min-h-screen bg-white flex flex-col items-center justify-center relative">
        <div
          className="max-w-4xl text-center space-y-4 p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          id="infoSection"
        >
          <h2 className="text-4xl font-bold">Luxury Homes, Exclusive Deals</h2>
          <p className="text-lg text-gray-600">
            Discover properties tailored for high-end buyers and investors.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-64 bg-blue-500 flex items-center justify-center">
        <button className="px-6 py-3 text-white bg-gray-900 hover:bg-gray-700 rounded-lg text-xl">
          Browse Listings
        </button>
      </section>
    </div>
  );
}

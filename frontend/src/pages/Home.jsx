import { useEffect } from "react";
import PropertyShowcase from "../components/PropertyShowcase";
import FeatureCard from "../components/FeatureCard";
import house1 from "/src/assets/house1.jpg";
import house2 from "/src/assets/house2.jpg";
import house3 from "/src/assets/house3.jpg";

export default function Home() {
  useEffect(() => {
    const infoSection = document.getElementById("infoSection");
    const heroTitle = document.getElementById("heroTitle");
    const heroSection = document.getElementById("heroSection");
    const ctaSection = document.getElementById("ctaSection");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;

      const heroParallaxSpeed = isMobile ? 0.15 : 0.25;
      heroSection.style.transform = `scale(${1 + scrollTop * 0.0002})`;
      heroSection.style.backgroundPositionY = `${
        scrollTop * heroParallaxSpeed
      }px`;

      const rect = infoSection.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress =
          1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

        infoSection.style.opacity = scrollProgress;
        infoSection.style.transform = `translateY(${
          (1 - scrollProgress) * 25
        }px) scale(${0.97 + scrollProgress * 0.03})`;

        const blurThreshold = 0.7;
        const maxBlur = 6;
        const adjustedProgress = Math.min(scrollProgress / blurThreshold, 1);
        const blurAmount = (1 - adjustedProgress) * maxBlur;
        infoSection.style.filter = `blur(${blurAmount}px)`;
      } else {
        infoSection.style.opacity = 0.05;
        infoSection.style.transform = "translateY(25px) scale(0.97)";
        infoSection.style.filter = "blur(6px)";
      }

      const ctaRect = ctaSection.getBoundingClientRect();
      if (ctaRect.top < windowHeight * 0.9) {
        ctaSection.style.opacity = 1;
        ctaSection.style.transform = "translateY(0px)";
      } else {
        ctaSection.style.opacity = 0.05;
        ctaSection.style.transform = "translateY(20px)";
      }
    };

    setTimeout(() => {
      heroTitle.classList.remove("opacity-0", "translate-y-10");
      heroTitle.classList.add("opacity-100", "translate-y-0");
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-b from-white to-gray-50 transition-colors duration-700">
      {/* Hero Section */}
      <section
        id="heroSection"
        className="h-[120vh] bg-cover bg-center flex flex-col items-center justify-center transition-transform duration-700 ease-out overflow-hidden relative"
        style={{
          backgroundImage: "url('/src/assets/hero.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          id="heroTitle"
          className="text-5xl font-bold text-white bg-black/50 px-6 py-4 rounded-2xl opacity-0 translate-y-10 transition-all duration-700 ease-out shadow-lg backdrop-blur-sm"
        >
          Find Your Dream Property
        </h1>
        <a
          href="#listings"
          className="mt-6 text-white bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Browse Listings
        </a>
      </section>

      {/* Info Section */}
      <section className="min-h-[60vh] bg-gradient-to-b from-white via-gray-50 to-white flex flex-col items-center justify-center relative overflow-hidden">
        <div id="infoSection" className="max-w-3xl text-center space-y-6 p-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Luxury Homes, Exclusive Deals
          </h2>
          <p className="text-lg text-gray-600">
            Discover properties tailored for discerning buyers and visionary
            investors.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-100 text-center space-y-8 p-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Platform Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
          <FeatureCard
            title="Property Listings"
            description="Find your dream home among thousands of properties."
          />
          <FeatureCard
            title="Smart Search"
            description="Filter and discover properties that match your needs."
          />
          <FeatureCard
            title="Mortgage Calculator"
            description="Plan your finances with our built-in calculator tools."
          />
          <FeatureCard
            title="Publish Listings"
            description="List your property easily and connect with buyers."
          />
        </div>
      </section>

      {/* Properties Section */}
      <div id="listings">
        <PropertyShowcase
          image={house1}
          title="Modern Luxury Villa"
          description="5 bedrooms · Private Pool · Panoramic Views"
          parallaxStrength={50}
        />
        <PropertyShowcase
          image={house2}
          title="Tuscan Mansion"
          description="7 bedrooms · Historic Charm · Exclusive Location"
          parallaxStrength={70}
        />
        <PropertyShowcase
          image={house3}
          title="Penthouse Apartment"
          description="3 bedrooms · Rooftop Terrace · City Skyline"
          parallaxStrength={90}
        />
      </div>

      {/* CTA Section */}
      <section
        id="ctaSection"
        className="h-64 bg-gray-900 flex items-center justify-center overflow-hidden opacity-0 transition-all duration-700"
      >
        <button className="px-8 py-4 text-white bg-blue-600 hover:bg-blue-500 rounded-xl text-2xl shadow-lg transition-all duration-300 ease-out">
          Start Your Journey
        </button>
      </section>

      {/* Footer Placeholder */}
      <footer className="h-40 bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
        © 2025 RealEstateSaaS · All rights reserved.
      </footer>
    </div>
  );
}

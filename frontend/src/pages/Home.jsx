import { useEffect } from "react";
import PropertyShowcase from "../components/PropertyShowcase";
import house1 from "/src/assets/house1.jpg";
import house2 from "/src/assets/house2.jpg";
import house3 from "/src/assets/house3.jpg";

export default function Home() {
  useEffect(() => {
    const infoSection = document.getElementById("infoSection");
    const heroTitle = document.getElementById("heroTitle");
    const heroSection = document.getElementById("heroSection");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scaleAmount = 1 + scrollTop * 0.00025;
      heroSection.style.transform = `scale(${scaleAmount})`;

      const parallaxSpeed = 0.25;
      heroSection.style.backgroundPositionY = `${scrollTop * parallaxSpeed}px`;

      const rect = infoSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress =
          1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

        const yMovement = (1 - scrollProgress) * 25;
        const scale = 0.97 + scrollProgress * 0.03;

        infoSection.style.opacity = scrollProgress;
        infoSection.style.transform = `translateY(${yMovement}px) scale(${scale})`;

        const blurThreshold = 0.7;
        const maxBlur = 6;
        const adjustedProgress = Math.min(scrollProgress / blurThreshold, 1);
        const blurAmount = (1 - adjustedProgress) * maxBlur;
        infoSection.style.filter = `blur(${blurAmount}px)`;
      } else {
        infoSection.style.opacity = 0;
        infoSection.style.transform = "translateY(25px) scale(0.97)";
        infoSection.style.filter = "blur(6px)";
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
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section
        id="heroSection"
        className="h-[120vh] bg-cover bg-center flex items-center justify-center transition-transform duration-700 ease-out overflow-hidden relative"
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

      {/* Properties */}
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

      {/* CTA Section */}
      <section className="h-64 bg-gray-900 flex items-center justify-center overflow-hidden">
        <button className="px-8 py-4 text-white bg-blue-600 hover:bg-blue-500 rounded-xl text-2xl shadow-lg transition-all duration-300 ease-out">
          Browse Listings
        </button>
      </section>
    </div>
  );
}

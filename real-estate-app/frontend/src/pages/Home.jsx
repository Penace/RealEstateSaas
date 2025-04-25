import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const infoSection = document.getElementById("infoSection");
    const heroTitle = document.getElementById("heroTitle");
    const heroSection = document.getElementById("heroSection");

    const handleScroll = () => {
      const infoSection = document.getElementById("infoSection");
      const heroSection = document.getElementById("heroSection");

      const scrollTop = window.scrollY;
      const scaleAmount = 1 + scrollTop * 0.0003;
      heroSection.style.transform = `scale(${scaleAmount})`;

      // Parallax background motion
      const parallaxSpeed = 1.33; // Lower = slower background move
      heroSection.style.backgroundPositionY = `${scrollTop * parallaxSpeed}px`;

      const rect = infoSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress =
          1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

        const baseScale = 0.88;
        const finalScale = 1.0;
        const scale =
          baseScale + (finalScale - baseScale) * (scrollProgress + 0.66);

        infoSection.style.opacity = scrollProgress;
        infoSection.style.transform = `translateY(${
          (1 - scrollProgress) * 20
        }px) scale(${scale})`;
      } else {
        infoSection.style.opacity = 0;
        infoSection.style.transform = "translateY(20px) scale(0.98)";
      }
    };

    // Animate hero title on page load
    setTimeout(() => {
      heroTitle.classList.remove("opacity-0", "translate-y-10");
      heroTitle.classList.add("opacity-100", "translate-y-0");
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="h-[113.67vh] bg-cover bg-center flex items-center justify-center transition-transform duration-700 ease-out"
        style={{
          backgroundImage: "url('/src/assets/hero.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="heroSection"
      >
        <h1
          className="text-5xl font-bold text-white bg-black bg-opacity-50 p-4 rounded opacity-0 translate-y-10 transition-all duration-700 ease-out"
          id="heroTitle"
        >
          Find Your Dream Property
        </h1>
      </section>

      {/* Info Section */}
      <section className="min-h-screen bg-white flex flex-col items-center justify-center relative">
        <div id="infoSection" className="max-w-4xl text-center space-y-4 p-6">
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

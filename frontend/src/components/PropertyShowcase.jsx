import { useEffect, useRef } from "react";

export default function PropertyShowcase({
  image,
  url,
  title,
  description,
  parallaxStrength = 60,
}) {
  const showcaseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const showcase = showcaseRef.current;
      const rect = showcase.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress =
          1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

        showcase.style.opacity = scrollProgress;

        const backgroundShift = scrollProgress * parallaxStrength;
        showcase.style.backgroundPositionY = `${50 - backgroundShift}%`;
      } else {
        showcase.style.opacity = 0.05;
        showcase.style.backgroundPositionY = "50%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxStrength]);

  return (
    <section
      ref={showcaseRef}
      className="min-h-screen w-full flex flex-col items-center justify-center transition-transform duration-700 ease-out overflow-hidden relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <a href={url}>
        <div className="bg-black/50 p-8 rounded-xl text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105">
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <p className="text-lg text-gray-200 mt-4">{description}</p>
        </div>
      </a>
    </section>
  );
}

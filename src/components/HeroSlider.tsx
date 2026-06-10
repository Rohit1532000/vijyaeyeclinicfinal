import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Restoring Vision. Transforming Lives.",
    subtitle: "Super Specialty Eye Hospital",
    description:
      "Providing world-class eye care with cutting-edge technology and compassionate service for over 35 years.",
  },
  {
    image: hero2,
    title: "Advanced Technology. Trusted Specialists.",
    subtitle: "State-of-the-Art Equipment",
    description:
      "Experience the future of eye care with our advanced diagnostic and surgical equipment for precise treatments.",
  },
  {
    image: hero3,
    title: "Compassionate Care. Exceptional Outcomes.",
    subtitle: "Comprehensive Eye Care Solutions",
    description:
      "From routine check-ups to complex surgeries, we ensure the best outcomes with personalized treatment plans.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    []
  );

  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="home"
      className="relative h-[600px] md:h-[700px] overflow-hidden"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Background Image */}
          <img
            src={s.image}
            alt={s.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 hero-overlay" />

          {/* Content */}
          <div className="relative z-10 container mx-auto h-full flex items-center justify-center px-4">
            <div
              className="max-w-3xl text-center animate-fade-in mx-auto"
              key={`content-${current}`}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4 backdrop-blur-sm">
                {s.subtitle}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                {s.title}
              </h1>

              <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                {s.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full gradient-primary shadow-lg text-base px-8"
                >
                  <a href="/appointment-booking">Contact Us</a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-foreground/40 text-foreground hover:bg-foreground/10 text-base px-8"
                >
                  <a href="/about-us">Explore More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/30 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/30 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/40 w-3"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
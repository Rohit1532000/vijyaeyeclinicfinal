import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh K.",
    text: "Vijaya Eye Clinic provided exceptional care for my cataract surgery. The doctors are highly skilled and the staff is very supportive. I can see clearly now!",
    rating: 5,
  },
  {
    name: "Sunita M.",
    text: "I had my LASIK surgery here and the experience was wonderful. The team explained every step clearly and the results have been life-changing.",
    rating: 5,
  },
  {
    name: "Anil P.",
    text: "The best eye hospital in Bangalore. Dr. Vasant N Patil and his team are truly dedicated professionals. Highly recommend for any eye care needs.",
    rating: 5,
  },
  {
    name: "Kavitha R.",
    text: "Amazing experience! The staff was very welcoming and the doctors took their time to explain everything. My vision has improved tremendously after the treatment.",
    rating: 5,
  },
  {
    name: "Mohan S.",
    text: "I brought my child here for pediatric eye care. The doctors were incredibly patient and thorough. Excellent facility with top-notch equipment.",
    rating: 5,
  },
  {
    name: "Lakshmi V.",
    text: "After struggling with glaucoma for years, I finally found the right treatment at Vijaya Eye Clinic. The follow-up care is exceptional and very reassuring.",
    rating: 5,
  },
  {
    name: "Suresh B.",
    text: "My mother had retina surgery here. The surgical team was outstanding and she recovered beautifully. We are forever grateful to the entire team.",
    rating: 5,
  },
  {
    name: "Deepa N.",
    text: "The clinic is very clean and well-maintained. Appointments are always on time and the staff treats every patient with respect and care. Truly world-class!",
    rating: 5,
  },
  {
    name: "Prakash G.",
    text: "I've been visiting Vijaya Eye Clinic for over 10 years for routine check-ups. Their consistency in providing quality care is unmatched in the city.",
    rating: 5,
  },
  {
    name: "Meena J.",
    text: "Had a wonderful experience with my cornea treatment. The technology they use is very advanced and the doctors kept me comfortable throughout the process.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  // Show 3 cards at a time on lg, 2 on sm, 1 on mobile
  const getVisible = () => {
    const items = [];
    const count = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 640 ? 2 : 1;
    for (let i = 0; i < count; i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="section-padding section-alt overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            What They Say About Our Clinic
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {getVisible().map((t) => (
                <div
                  key={t.name}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <Quote className="w-8 h-8 text-primary/20 mb-3 group-hover:text-primary/40 transition-colors" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm group-hover:scale-110 transition-transform">
                      {t.name[0]}
                    </div>
                    <span className="font-heading font-semibold text-foreground">{t.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-border hover:bg-primary/50"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

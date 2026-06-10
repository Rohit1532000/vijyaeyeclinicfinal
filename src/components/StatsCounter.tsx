import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Eye, MapPin, Users } from "lucide-react";

// UPDATED CONTENT
// 5+ Years of Legacy
// 100,000+ Success Stories
// 50,000+ Vision Procedures
// 2 World-Class Branches
// 15+ Top-Tier Ophthalmic Minds

const stats = [
  { icon: Award, value: 35, suffix: "+", label: "Years of Legacy", prefix: "" },
  { icon: Users, value: 100000, suffix: "+", label: "Success Stories", prefix: "" },
  { icon: Eye, value: 50000, suffix: "+", label: "Vision Procedures", prefix: "" },
  { icon: MapPin, value: 2, suffix: "", label: "World-Class Branches", prefix: "" },
  { icon: Award, value: 15, suffix: "+", label: "Top Ophthalmic Minds", prefix: "" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsCounter = () => (
  <section className="section-padding gradient-primary relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 translate-x-1/3 translate-y-1/3" />

    <div className="container mx-auto relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="text-center group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              whileHover={{ rotate: 12, scale: 1.15 }}
            >
              <s.icon className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-primary-foreground/80 mt-2 font-medium text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsCounter;
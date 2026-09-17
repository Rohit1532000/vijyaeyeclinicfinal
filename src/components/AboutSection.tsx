import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-reception.jpg";

const highlights = [
  "Established in 1985 by Dr. Vasant N Patil",
  "35+ years of trusted eye care excellence",
  "Over 1,00,000 successful surgeries",
  "State-of-the-art diagnostic equipment",
];

const AboutSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl group relative cursor-pointer" onClick={() => setPlaying(true)}>
            {playing ? (
             <iframe
  src="https://www.youtube.com/embed/jcNwaWrTHEg?autoplay=1"
  title="About Vijaya Eye Clinic"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-[400px]"
/>
            ) : (
              <>
                <img src={aboutImg} alt="Vijaya Eye Clinic Reception" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </>
            )}
          </div>
          <motion.div
            className="absolute -bottom-6 -right-6 gradient-primary rounded-2xl p-6 text-primary-foreground shadow-lg hidden md:block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-4xl font-heading font-bold">35+</p>
            <p className="text-sm">Years of Excellence</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
            A Leading Eye Care Hospital in Bangalore
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Vijaya Eye Clinic is a super specialty eye hospital in Bangalore, providing comprehensive eye care since
            1985. Our team of highly experienced ophthalmologists, equipped with cutting-edge technology, ensures the
            best possible outcomes for all your eye care needs.
          </p>
          <ul className="space-y-3 mb-8">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{h}</span>
              </motion.li>
            ))}
          </ul>
          <Button asChild className="rounded-full gradient-primary px-8 hover:scale-105 transition-transform">
            <a href="/about-us">Learn More</a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);
};

export default AboutSection;

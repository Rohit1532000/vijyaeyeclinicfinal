import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Clock,
  Trophy,
  Stethoscope,
  HeartHandshake
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Elite Super-Specialists",
    desc: "Home to highly qualified, fellowship-trained eye specialists across advanced ophthalmic verticals."
  },
  {
    icon: Users,
    title: "1,00,000+ Smiles Restored",
    desc: "Deeply trusted by over a lakh patients across Karnataka for precision vision restoration and care."
  },
  {
    icon: Clock,
    title: "40+ Years of Legacy",
    desc: "Proudly serving the community with clinical excellence and unwavering trust since 1985."
  },
  {
    icon: Trophy,
    title: "Clinical Excellence",
    desc: "Award-winning ophthalmic care delivered through rigorous safety protocols and best-in-class standards."
  },
  {
    icon: Stethoscope,
    title: "Next-Gen Technology",
    desc: "Equipped with cutting-edge, state-of-the-art diagnostic and surgical platforms for ultimate accuracy."
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Philosophy",
    desc: "Tailored treatment paths designed around your unique lifestyle, prioritizing your comfort at every step."
  }
];

const WhyChooseUs = () => (
  <section className="section-padding gradient-primarys">
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2">
          Best Eye Hospital in Bangalore
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="flex gap-4 items-start p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 hover:-translate-y-1 transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <r.icon className="w-6 h-6 text-primary-foreground" />
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold text-primary-foreground">
                {r.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1">
                {r.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
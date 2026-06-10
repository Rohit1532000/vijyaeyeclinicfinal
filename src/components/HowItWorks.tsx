import { motion } from "framer-motion";
import { CalendarCheck, Eye, HeartHandshake } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: CalendarCheck,
    title: "Seamless Scheduling",
    desc: "Your journey to clearer vision starts with absolute convenience. Using our advanced online platform, you can effortlessly schedule appointments at your preferred time. Alternatively, reach out to our team via phone. We ensure a swift, hassle-free booking experience so you can prioritize your vision without delay.",
  },
  {
    num: 2,
    icon: Eye,
    title: "Precision Evaluation",
    desc: "Experience a deep-dive assessment of your ocular health. Combining world-class expertise with advanced imaging tools, our specialists perform thorough examinations tailored to your eyes. Whether it is a routine vision check or complex specialty diagnostic tests, we ensure total clarity at every step.",
  },
  {
    num: 3,
    icon: HeartHandshake,
    title: "360° Vision Wellness",
    desc: "We deliver complete, end-to-end ophthalmic care that extends far beyond immediate symptoms. Our specialists integrate advanced treatments with tailored lifestyle strategies, preventive measures, and long-term management. We don't just treat conditions; we safeguard your lifelong visual well-being.",
  },
];

const HowItWorks = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">How It Works?</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          At Vijaya Eye Clinic, our approach to eye care is grounded in a comprehensive and patient-centric process
          designed to prioritize your visual health and overall well-being.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="relative bg-card rounded-2xl p-8 pt-12 shadow-sm border border-border/50 hover:shadow-xl transition-shadow group text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background font-heading font-bold text-xl shadow-lg">
              {s.num}
            </div>
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

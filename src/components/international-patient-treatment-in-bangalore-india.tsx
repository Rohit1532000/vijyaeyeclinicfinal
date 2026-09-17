import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import intlPatientImg from "@/assets/InternationalPatients.png";

const highlights = [
  "Travel assistance including airport pickup & visa support",
  "Comfortable accommodation arrangements for patients & families",
  "Multilingual staff for clear communication",
  "Transparent pricing with no hidden charges",
  "Pre-arrival & post-treatment tele-consultations",
  "Dedicated personal patient coordinator",
];

const InternationalPatientSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl group">
            <img src={intlPatientImg} alt="International patients at Vijaya Eye Clinic" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <motion.div
            className="absolute -bottom-6 -right-6 gradient-primary rounded-2xl p-6 text-primary-foreground shadow-lg hidden md:block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-4xl font-heading font-bold">🌍</p>
            <p className="text-sm">Global Patients</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">International Patients</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
            World-Class Eye Care, Wherever You're From
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We welcome patients from around the globe and offer dedicated services to make your medical journey seamless and stress-free. From travel coordination to post-treatment follow-up, we've got you covered.
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
            <a href="/appointment-booking">Know More</a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InternationalPatientSection;

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const keyPoints = [
  "Uncompromised Surgical Precision & Relentless Attention to Detail",
  "Mastery in Modern Ophthalmic & Diagnostic Technology",
  "Experienced Squad of Specialists, Nurses, and Technicians",
  "Empathy Born from Firsthand Surgical Experience",
];

const SurgeonTrustSection = () => {
  return (
    <section id="surgeon-trust" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Direct YouTube Video (No Overlays / Cards) */}
          <motion.div
            className="w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src="https://www.youtube.com/embed/XtaEquqyQzI"
              title="The Ultimate Test of Trust"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </motion.div>

          {/* RIGHT SIDE: Title & Concise Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Ultimate Test of Trust
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4 leading-tight">
              When the Eye Surgeon Becomes the Patient
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              True confidence isn’t just spoken—it’s demonstrated. Watch as <strong>Dr. Vasant N. Patil</strong>, Founder & Chief Ophthalmologist of Vijaya Eye Clinic, undergoes a successful procedure at our Vijaya Nagar branch. When a veteran specialist chooses his own team and technology, it speaks volumes about our safety and skill.
            </p>

            <ul className="space-y-2.5 mb-5">
              {keyPoints.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm md:text-base text-foreground/80"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-muted-foreground italic text-xs md:text-sm border-l-2 border-primary pl-3">
              "If our Chief Surgeon trusts us with his vision, you can trust us with yours. Experience vision care without compromise."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SurgeonTrustSection;
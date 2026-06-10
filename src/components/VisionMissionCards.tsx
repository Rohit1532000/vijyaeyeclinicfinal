import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionMissionCards = () => (
  <div className="grid md:grid-cols-2 gap-8 mt-12">
    <motion.div
      className="bg-card rounded-2xl p-8 shadow-md border border-border/50 flex gap-4 items-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Eye className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Our Vision & Mission</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          At Vijaya Eye Clinic, Our vision is to stand as a pinnacle of excellence and compassion in eye care.
          Our mission is to provide unparalleled eye care with a focus on precision, compassion, and continuous innovation.
        </p>
      </div>
    </motion.div>
    <motion.div
      className="bg-primary rounded-2xl p-8 shadow-md flex gap-4 items-start"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
        <Target className="w-6 h-6 text-primary-foreground" />
      </div>
      <div>
        <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2">Our Goal</h3>
        <p className="text-primary-foreground/80 text-sm leading-relaxed">
          At Vijaya Eye Clinic, our overarching goal is to continually elevate the standard of eye care by embracing
          a threefold approach: innovation, accessibility, and community engagement.
        </p>
      </div>
    </motion.div>
  </div>
);

export default VisionMissionCards;

import { motion } from "framer-motion";
import { CheckCircle, Shield, Microscope, HeartPulse } from "lucide-react";

interface SpecialityContentProps {
  heading: string;
  intro: string;
  image: string;
  description: string;
  whatIsIt: string;
  whatDoesItInvolve: string;
  suitableFor: string;
  risks: string;
  costInfo: string;
  ctaLine: string;
}

const whyChoose = [
  {
    icon: Microscope,
    title: "Expertise",
    desc: "Our team of ophthalmologists comprises highly skilled professionals with years of experience in diagnosing and treating a wide range of eye conditions.",
  },
  {
    icon: Shield,
    title: "State-of-the-Art Technology",
    desc: "We invest in advanced diagnostic and surgical technology to ensure accurate diagnoses and precise treatment delivery for our patients.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centered Care",
    desc: "We prioritize patient satisfaction and comfort. Our compassionate staff is dedicated to providing personalized care and addressing your concerns throughout your eye care journey.",
  },
];

const SpecialityContent = ({
  heading,
  intro,
  image,
  description,
  whatIsIt,
  whatDoesItInvolve,
  suitableFor,
  risks,
  costInfo,
  ctaLine,
}: SpecialityContentProps) => (
  <div className="space-y-10">
    {/* Title & Intro */}
    <div>
      <motion.h2
        className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h2>
      <motion.p
        className="text-muted-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {intro}
      </motion.p>
    </div>

    {/* Image */}
    <motion.div
      className="rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img src={image} alt={heading} className="w-full h-[300px] object-cover" />
    </motion.div>

    {/* Description */}
    <motion.p
      className="text-muted-foreground leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {description}
    </motion.p>

    {/* What Is It & What Does It Involve */}
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          What Is It?
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{whatIsIt}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-xl font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          What Does It Involve?
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{whatDoesItInvolve}</p>
      </motion.div>
    </div>

    {/* Suitable For */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Who Is It Suitable For?</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{suitableFor}</p>
    </motion.div>

    {/* Risks */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Are There Any Risks?</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{risks}</p>
    </motion.div>

    {/* Cost & Why Choose */}
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        className="bg-secondary/50 rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-heading font-semibold text-foreground mb-3">How Much Does It Cost?</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{costInfo}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Why Choose Vijaya Eye Clinic?</h3>
        <div className="space-y-4">
          {whyChoose.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-foreground">{item.title}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

  </div>
);

export default SpecialityContent;

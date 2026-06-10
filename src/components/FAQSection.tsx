import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What eye care services does Vijaya Eye Clinic offer?",
    a: "We offer a comprehensive range of services including cataract surgery, LASIK & refractive surgery, retina treatment, glaucoma management, pediatric ophthalmology, corneal services, and routine eye examinations.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book an appointment by calling us at +91 9008021523, using our online appointment form, or visiting our clinic directly at Malleshwaram, Bangalore.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "During your first visit, our team will conduct a thorough eye examination including visual acuity tests, eye pressure measurement, and a detailed retinal examination. The entire process usually takes 45-60 minutes.",
  },
  {
    q: "Is LASIK surgery safe?",
    a: "Yes, LASIK surgery is one of the safest and most commonly performed procedures worldwide. Our experienced surgeons use the latest technology to ensure optimal results with minimal risk.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes, we accept most major insurance providers and TPA (Third Party Administrator) plans. Please contact our reception desk for specific insurance-related queries.",
  },
  {
    q: "What are your clinic timings?",
    a: "We are open Monday to Saturday from 8:00 AM to 9:30 PM and on Sundays from 10:00 AM to 9:00 PM. Emergency services are available 24/7.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Find answers to the most common questions about our services and treatments.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-heading font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center"
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {open === i ? (
                    <Minus className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary-foreground" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

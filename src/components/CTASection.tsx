import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        className="gradient-primary rounded-3xl p-10 md:p-16 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Book Your Eye Check-Up Today
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
          Don't wait until it's too late. Schedule a comprehensive eye examination with our expert
          ophthalmologists and protect your vision.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 shadow-lg hover:scale-105 transition-transform"
          >
            <a href="tel:+919008021523">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 9008021523
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="  rounded-full border-primary-foreground/40 textcolor hover:bg-primary-foreground/10 text-base px-8 hover:scale-105 transition-transform"
          >
            <a href="/appointment-booking">
              <Calendar className="w-5 h-5 mr-2" />
              Make an Appointment
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

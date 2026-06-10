import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AppointmentBooking = () => (
  <>
    <Helmet>
      <title>Book Appointment | Vijaya Eye Clinic Bangalore</title>
      <meta name="description" content="Schedule your eye examination appointment with our expert ophthalmologists at Vijaya Eye Clinic. Easy online booking available." />
      <meta name="keywords" content="book appointment, eye examination, doctor appointment, vijaya eye clinic appointment" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/appointment-booking" />
      <meta property="og:title" content="Book Appointment | Vijaya Eye Clinic Bangalore" />
      <meta property="og:description" content="Schedule your eye examination appointment with our expert ophthalmologists at Vijaya Eye Clinic." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/appointment-booking" />
      <meta name="twitter:title" content="Book Appointment | Vijaya Eye Clinic Bangalore" />
      <meta name="twitter:description" content="Schedule your eye examination appointment with our expert ophthalmologists at Vijaya Eye Clinic." />
    </Helmet>
    <Header />
    <main>
      <PageHeroBanner
        title="Vijaya Eye Clinic Appointment Booking"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Appointment" }]}
      />

      {/* Book Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Appointment Booking</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Book Your Appointment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to experience the world through clear, unaided eyes? Schedule your appointment with Vijaya Eye Clinic
              today and take the first step towards visual freedom. Your journey to optimal eye health begins with a simple
              click – book now and let us help you see a brighter, clearer tomorrow.
            </p>
            <Button asChild className="rounded-full gradient-primary px-8">
              <a href="tel:08023356953">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <HowItWorks />

      {/* CTA Banner */}
      <section className="py-10 px-4">
        <div className="container mx-auto flex justify-center">
          <motion.a
            href="tel:08023356953"
            className="gradient-primary rounded-full px-10 py-5 flex items-center gap-4 shadow-xl hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Phone className="w-6 h-6 text-primary-foreground" />
            <div className="text-left">
              <p className="text-primary-foreground font-heading font-semibold text-sm">Book Your Appointment Today!</p>
              <p className="text-primary-foreground text-xl font-heading font-bold">080-23356953</p>
            </div>
          </motion.a>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default AppointmentBooking;

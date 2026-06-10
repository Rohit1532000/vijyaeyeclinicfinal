import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import StatsCounter from "@/components/StatsCounter";
import VisionMissionCards from "@/components/VisionMissionCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import hero3 from "@/assets/hero-3.jpg";

const highlights = [
  "Excellence",
  "Compassion",
  "Innovation",
  "State-of-the-Art Facilities",
  "Patient Centric Approach",
  "Expertise",
];

const VisionMission = () => (
  <>
    <Helmet>
      <title>Vision & Mission | Vijaya Eye Clinic Bangalore</title>
      <meta name="description" content="Our vision is to provide world-class eye care. Our mission is to restore vision and transform lives through compassionate, ethical, and innovative eye care." />
      <meta name="keywords" content="vision, mission, eye care values, healthcare excellence, patient care" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/vision-mission" />
      <meta property="og:title" content="Vision & Mission | Vijaya Eye Clinic Bangalore" />
      <meta property="og:description" content="Our vision is to provide world-class eye care. Our mission is to restore vision and transform lives." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/vision-mission" />
      <meta name="twitter:title" content="Vision & Mission | Vijaya Eye Clinic Bangalore" />
      <meta name="twitter:description" content="Our vision is to provide world-class eye care. Our mission is to restore vision and transform lives." />
    </Helmet>
    <Header />
    <main>
      <PageHeroBanner
        title="Vision and Mission"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Vision and Mission" }]}
      />

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
                <img src={hero3} alt="Vision and Mission" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Vision & Mission</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                We Are Pioneers In Eye Care Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience the difference of quality care at Vijaya Eye Clinic, where your vision and well-being are our top priorities.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{h}</span>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="rounded-full gradient-primary px-8">
                <a href="tel:08023356953">We Are Always There For You — 080-23356953</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="section-padding">
        <div className="container mx-auto">
          <VisionMissionCards />
        </div>
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <FAQSection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default VisionMission;

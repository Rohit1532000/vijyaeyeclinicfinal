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
  "Eye Health Checkups",
  "Laser Eye Correction",
  "Eye Examination",
  "Glaucoma Management",
  "Retinal Disorder Treatment",
  "Refractive Surgeries",
];

const AboutUs = () => (
  <>
    <Helmet>
      <title>About Us | Vijaya Eye Clinic - 35+ Years of Excellence</title>
      <meta
        name="description"
        content="Learn about Vijaya Eye Clinic, established in 1985. Discover our mission to provide world-class eye care, our expert ophthalmologists, and 35+ years of trusted service in Bangalore."
      />
      <meta
        name="keywords"
        content="about vijaya eye clinic, eye hospital history, ophthalmology bangalore, eye care specialists, eye clinic excellence"
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/about-us" />
      <meta property="og:title" content="About Us | Vijaya Eye Clinic - 35+ Years of Excellence" />
      <meta
        property="og:description"
        content="Learn about Vijaya Eye Clinic, established in 1985. Discover our mission to provide world-class eye care, our expert ophthalmologists, and 35+ years of trusted service in Bangalore."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/about-us" />
      <meta name="twitter:title" content="About Us | Vijaya Eye Clinic - 35+ Years of Excellence" />
      <meta
        name="twitter:description"
        content="Learn about Vijaya Eye Clinic, established in 1985. Discover our mission to provide world-class eye care, our expert ophthalmologists, and 35+ years of trusted service in Bangalore."
      />
    </Helmet>
    <Header />
    <main>
      <PageHeroBanner
        title="About Vijaya Eye Clinic"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      {/* About Content */}
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
                <img src={hero3} alt="Eye care at Vijaya Eye Clinic" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                We Are A Leading Eye Care Clinic
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vijaya Eye Clinic stands as a beacon of premier eye care services in the heart of Vijayanagar, Bangalore.
                With a steadfast commitment to delivering excellence in ophthalmic care, the clinic has earned a reputation
                for its state-of-the-art facilities and a dedicated team of eye care professionals.
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

export default AboutUs;

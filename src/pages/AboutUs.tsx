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

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EyeClinic",
      "name": "Vijaya Eye Clinic",
      "alternateName": [
        "Best eye hospital in Bangalore",
        "Best eye clinic in Bangalore",
        "Best eye clinic in Karnataka",
        "Robotic cataract surgery clinic Bangalore",
        "Mediclaim eye surgery Bangalore hospital"
      ],
      "url": "https://vijayaeyeclinic.com/about-us",
      "logo": "https://vijayaeyeclinic.com/logo.png",
      "description": "Recognized as the best eye hospital in Bangalore and top eye clinic in Karnataka. Offering advanced phacoemulsification cataract surgery, micro-incision cataract surgery (MICS) in Vijayanagar, and cashless Mediclaim eye surgery.",
      "foundingDate": "1985",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vijayanagar",
        "addressLocality": "West Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "medicalSpecialty": [
        "Ophthalmology",
        "Cataract Surgery",
        "Corneal Surgery",
        "Retina Care",
        "Glaucoma Management"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is Vijaya Eye Clinic recognized as the best eye hospital in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Established in 1985, Vijaya Eye Clinic has over 35 years of clinical heritage, led by senior ophthalmologists in West Bangalore offering blade-free cataract surgery, MICS in Vijayanagar, and cashless Mediclaim eye surgery."
          }
        },
        {
          "@type": "Question",
          "name": "Is cashless Mediclaim eye surgery accepted at Vijaya Eye Clinic Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we support cashless Mediclaim eye surgery in Bangalore across all leading health insurance providers and TPAs for procedures including laser cataract surgery, retina therapies, and glaucoma surgeries."
          }
        },
        {
          "@type": "Question",
          "name": "What cataract surgical options are offered at this clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide advanced phacoemulsification cataract surgery Bangalore, micro-incision cataract surgery (MICS) in Vijayanagar, premium toric IOL surgery, and multifocal lens replacement for complete spectacle independence."
          }
        }
      ]
    }
  ]
};

const highlights = [
  "Advanced Phacoemulsification Cataract Surgery",
  "Micro-incision Cataract Surgery (MICS)",
  "Premium Toric & Multifocal IOL Implants",
  "Glaucoma & Optic Nerve Management",
  "Advanced Retinal Disorder Treatment",
  "Cashless Mediclaim Eye Surgery Facility",
];

const AboutUs = () => (
  <>
    <Helmet>
      <title>Best Eye Hospital in Bangalore | Vijaya Eye Clinic Karnataka</title>
      <meta
        name="description"
        content="Visit the best eye hospital in Bangalore & top eye clinic in Karnataka. Expert ophthalmologist in West Bangalore offering MICS cataract surgery & Mediclaim facilities."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/about-us" />
      <meta property="og:title" content="Best Eye Hospital in Bangalore | Vijaya Eye Clinic" />
      <meta
        property="og:description"
        content="Leading eye hospital in Bangalore offering advanced phacoemulsification, toric IOL surgery, and cashless Mediclaim eye surgery."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/about-us" />
      <meta name="twitter:title" content="Best Eye Clinic in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Consult the best ophthalmologist in West Bangalore for micro-incision cataract surgery in Vijayanagar."
      />

      {/* Structured EyeClinic & FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </script>
    </Helmet>
    <Header />
    <main>
      <PageHeroBanner
        title="Eye Hospital in Bangalore - About Vijaya Eye Clinic"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      {/* About Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* YouTube Video Section */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HQXWvbdOLYU"
                  title="About Vijaya Eye Clinic - Best Eye Hospital in Bangalore"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Trusted Eye Care Since 1985
              </span>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Best Eye Hospital in Bangalore & Premier Eye Clinic in Karnataka
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vijaya Eye Clinic stands as the <strong>best eye hospital in Bangalore</strong> and a benchmark <strong>eye clinic in Karnataka</strong>. Established in 1985 in Vijayanagar, West Bangalore, our center brings over 35 years of clinical trust and compassionate healing to patients across the region.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Led by the <strong>best ophthalmologist in West Bangalore</strong> and home to the <strong>best cataract surgeon in Bangalore</strong>, our center functions as a cutting-edge <strong>robotic cataract surgery clinic Bangalore</strong>. We specialize in stitchless <strong>advanced phacoemulsification cataract surgery Bangalore</strong> and sutureless <strong>micro-incision cataract surgery (MICS) in Vijayanagar</strong>. For vision restoration, we provide <strong>premium toric IOL surgery in Bangalore</strong> alongside custom <strong>multifocal lens replacement for cataract</strong>. We also ensure transparent <strong>laser cataract surgery cost in Bangalore</strong> with full <strong>Mediclaim eye surgery Bangalore</strong> cashless insurance coverage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
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
                    <span className="text-foreground/80 text-sm font-medium">{h}</span>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="rounded-full gradient-primary px-8">
                <a href="tel:08023356953">Consult Our Senior Specialists — 080-23356953</a>
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
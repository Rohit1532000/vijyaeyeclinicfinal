import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { Glasses, Eye, Star, Shield, Phone, MapPin, CheckCircle, Users, Cpu, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import opticalsImg from "@/assets/neha-opticals.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NehaOpticalsGallery from "@/components/NehaOpticalsGallery";

const opticalsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Optician",
      "@id": "https://vijayaeyeclinic.com/#neha-opticals",
      "name": "Neha Opticals at Vijaya Eye Clinic",
      "alternateName": [
        "Best optical shop in Vijayanagar Bangalore",
        "Spectacles shop in Vijayanagar",
        "Eye testing and glasses in West Bangalore",
        "Computerized eye testing center Vijayanagar"
      ],
      "url": "https://vijayaeyeclinic.com/facilities/opticals-by-neha",
      "logo": "https://vijayaeyeclinic.com/logo.png",
      "image": "https://vijayaeyeclinic.com/assets/neha-opticals.jpg",
      "telephone": "+919611750592",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pv Plaza, #2, 5th Main Road MC Layout, Vijayanagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560040",
        "addressCountry": "IN"
      },
      "description": "Leading optical shop in Vijayanagar, Bangalore at Vijaya Eye Clinic. Offering computerized eye testing, blue cut lenses, progressive spectacles, and designer branded eyewear frames."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find the best optical shop in Vijayanagar Bangalore for spectacles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neha Opticals, located inside Vijaya Eye Clinic in Vijayanagar Bangalore, offers complete optical dispensing, computerized digital eye testing, and premium branded spectacle frames."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide blue cut lenses and progressive spectacles for computer users?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in anti-glare blue-cut lenses for digital screen strain and wide-corridor digital progressive lenses customized to individual visual focal depths."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get my eyesight checked and spectacles made in one place?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our in-house optometrists at Vijaya Eye Clinic conduct computerized digital eye testing and immediate spectacle frame fitting under one roof."
          }
        }
      ]
    }
  ]
};

const services = [
  { icon: Glasses, title: "Designer Eyewear & Branded Frames", desc: "Discover an extensive collection of designer spectacle frames and sunglasses in Vijayanagar Bangalore, matching every face shape and fashion preference." },
  { icon: Eye, title: "Computerized Digital Eye Testing", desc: "Our experienced optometrists provide precise automated refraction to ensure accurate spectacle prescriptions for sharp visual clarity." },
  { icon: Star, title: "Progressive & Blue-Cut Lenses", desc: "Protect your eyesight from screen fatigue with premium anti-glare blue-cut lenses and distortion-free digital progressive spectacles." },
  { icon: Shield, title: "Prescription Sunglasses & Coatings", desc: "Customized UV400 polarized prescription sunglasses, anti-scratch coatings, and photochromic light-adapting lenses." },
  { icon: Users, title: "Pediatric & Kids Eyewear", desc: "Durable, flexible, and impact-resistant frames crafted specifically for children undergoing myopia control and squint correction." },
  { icon: CheckCircle, title: "Fair & Transparent Pricing", desc: "Upfront pricing on all premium spectacle frames, lenses, and contact lens solutions with zero hidden costs." },
];

const whyChoose = [
  { icon: Shield, title: "Guaranteed Lens Accuracy", desc: "Each lens is customized to millimeter precision based on clinical eye measurements at Vijaya Eye Clinic, ensuring seamless adaptation." },
  { icon: Users, title: "Personalized Fitting & Styling", desc: "Our dispensing opticians help evaluate pupillary distance, facial contours, and lifestyle needs for maximum wearing comfort." },
  { icon: Cpu, title: "Advanced Diagnostic Alignment", desc: "Direct integration with the ophthalmologists at Vijaya Eye Clinic guarantees that complex astigmatic and bifocal prescriptions are met accurately." },
  { icon: Clock, title: "Complete Eye Care Under One Roof", desc: "Consult senior eye doctors and select your designer spectacles in Vijayanagar on the same visit without multiple trips." },
];

const testimonials = [
  { name: "Ramesh K.", text: "Best optical shop in Vijayanagar! The frame selection is top notch and the progressive lenses adapt so smoothly for my laptop work.", rating: 5 },
  { name: "Priya S.", text: "I got my blue-cut lenses here after an eye exam at Vijaya Eye Clinic. Clear vision, friendly staff, and quick delivery.", rating: 5 },
  { name: "Arjun M.", text: "Excellent collection of branded spectacles in West Bangalore. The pricing is transparent and the testing was very accurate.", rating: 5 },
];

const faqs = [
  { q: "What types of eyewear does Neha Opticals offer in Vijayanagar?", a: "We offer designer spectacle frames, blue-cut computer glasses, progressive lenses, pediatric eyewear, and daily/monthly disposable contact lenses." },
  { q: "Is computerized digital eye testing available on-site?", a: "Yes, our certified clinical optometrists provide comprehensive digital eye testing using advanced autorefractors." },
  { q: "Can I get new lenses fitted into my existing frames?", a: "Yes, we provide precision lens edging and replacement services for your favorite existing frames with quick turnaround." },
  { q: "Are blue-light blocking glasses helpful for screen work?", a: "Yes, our anti-reflective blue-defense lenses significantly reduce digital asthenopia, headache frequency, and dry eye symptoms." },
  { q: "Do you provide warranty on frames and lenses?", a: "All branded spectacle frames and premium ophthalmic lenses come with manufacturer warranty against manufacturing defects." },
];

const OpticalsByNeha = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <Helmet>
        <title>Best Optical Shop in Vijayanagar Bangalore | Neha Opticals</title>
        <meta
          name="description"
          content="Visit Neha Opticals at Vijaya Eye Clinic, the best optical shop in Vijayanagar Bangalore. Explore designer frames, progressive lenses & blue cut glasses."
        />
        <link rel="canonical" href="https://vijayaeyeclinic.com/facilities/opticals-by-neha" />
        <meta property="og:title" content="Best Optical Shop in Vijayanagar Bangalore | Neha Opticals" />
        <meta
          property="og:description"
          content="Premium spectacles shop in Vijayanagar Bangalore offering computerized digital eye testing, branded frames, and progressive lenses."
        />
        <meta property="og:url" content="https://vijayaeyeclinic.com/facilities/opticals-by-neha" />
        <meta name="twitter:title" content="Neha Opticals Vijayanagar | Eyewear & Lenses Bangalore" />
        <meta
          name="twitter:description"
          content="Designer spectacles, blue-cut screen glasses, and eye testing at Vijaya Eye Clinic in Vijayanagar."
        />

        {/* Structured Optician & FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(opticalsSchema)}
        </script>
      </Helmet>
      <Header />
      <PageHeroBanner
        title="Neha Opticals - Best Optical Shop in Vijayanagar"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Facilities", to: "#" },
          { label: "Neha Opticals" },
        ]}
      />

      {/* Hero */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src={opticalsImg}
              alt="Neha Opticals - Best optical shop in Vijayanagar Bangalore"
              className="rounded-2xl shadow-xl w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">In-House Optical Boutique</p>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Best Optical Shop in Vijayanagar Bangalore for Designer Eyewear & Lenses
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Visit <strong>Neha Opticals at Vijaya Eye Clinic</strong>, recognized as a premier <strong>spectacles shop in Vijayanagar</strong>. We blend clinical precision with contemporary fashion, offering <strong>computerized digital eye testing</strong> alongside a handpicked collection of <strong>progressive lenses and blue-cut glasses Bangalore</strong> for screen professionals, students, and seniors.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Branded Spectacle Frames in West Bangalore",
                  "Anti-Glare Blue-Cut Computer Glasses",
                  "Precision Progressive & Bifocal Lenses",
                  "Accurate Computerized Digital Eye Testing"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground font-medium">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="rounded-full gradient-primary">
                <a href="tel:9611750592"><Phone className="w-4 h-4 mr-2" /> Contact Neha Opticals — 961 175 0592</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elevate Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Eyewear Solutions in Vijayanagar</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Complete Eyewear & Vision Correction Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="bg-card rounded-xl p-6 shadow-md text-left border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-primary py-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
          {[
            { num: "35+", label: "Years Clinical Heritage" },
            { num: "15,000+", label: "Spectacles Dispensed" },
            { num: "100%", label: "Lens Power Accuracy" },
            { num: "500+", label: "Designer Frames In Stock" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold">{s.num}</div>
              <div className="text-sm opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Why Choose Neha Opticals at Vijaya Eye Clinic?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                className="text-left bg-card p-6 rounded-2xl border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
          <Button asChild size="lg" className="rounded-full gradient-primary mt-8">
            <a href="tel:9611750592"><Phone className="w-4 h-4 mr-2" /> Call Store: 961 175 0592</a>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Looking for the Best Spectacles Shop in Vijayanagar?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Visit Neha Opticals inside Vijaya Eye Clinic for instant computerized eye testing and precision eyewear dispensing.
          </p>
          <Button asChild size="lg" className="rounded-full gradient-primary">
            <a href="tel:08023356953"><Phone className="w-4 h-4 mr-2" /> Book Eye Test & Consultation — 080 23356953</a>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Verified Patient Feedback</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">What Customers Say</h2>
          <h3 className="text-xl font-heading text-muted-foreground mb-8">About Neha Opticals</h3>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <motion.div
            key={activeTestimonial}
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground italic mb-4">"{testimonials[activeTestimonial].text}"</p>
            <p className="font-semibold text-foreground">{testimonials[activeTestimonial].name}</p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === activeTestimonial ? "bg-primary" : "bg-muted-foreground/30"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <NehaOpticalsGallery />

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-primary font-semibold text-center mb-2 uppercase tracking-wider text-sm">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
            Frequently Asked Questions on Eyewear & Eye Testing
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6">
                <AccordionTrigger className="text-left font-medium text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  );
};

export default OpticalsByNeha;
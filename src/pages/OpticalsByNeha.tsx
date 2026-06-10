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

const services = [
  { icon: Glasses, title: "Diverse Eyewear Collection", desc: "We offer an extensive selection of eyewear, combining style with functionality. From classic frames to the latest fashion-forward designs, our collection caters to diverse preferences." },
  { icon: Eye, title: "Expert Consultations", desc: "Our experienced optometrists provide comprehensive eye examinations. Receive personalized recommendations for lenses and frames tailored to your unique vision needs." },
  { icon: Star, title: "Precision In Lens Crafting", desc: "Every lens we provide is crafted with precision using the latest technology. Whether single vision, progressive, or specialty lenses, we ensure optimal clarity and comfort." },
  { icon: Shield, title: "Fashion-Forward Frames", desc: "Stay on trend with our curated collection of fashionable frames from leading brands. Our stylists help you find frames that complement your face shape and personal style." },
  { icon: Users, title: "Children's Eyewear", desc: "Safeguard your child's visual development with our specialized children's eyewear collection. Durable, comfortable, and fun designs that kids love to wear." },
  { icon: CheckCircle, title: "Transparent Pricing", desc: "We believe in fair, upfront pricing with no hidden costs. Our competitive rates ensure quality eyewear remains accessible to everyone in the community." },
];

const whyChoose = [
  { icon: Shield, title: "Quality Assurance", desc: "At Neha Opticals, quality is at the core of everything. We source our eyewear from reputable manufacturers, ensuring that every pair meets the highest standards of durability and visual performance." },
  { icon: Users, title: "Personalised Service", desc: "Every individual's eyes are unique, and so should be their eyewear. Our optometrists take the time to understand your lifestyle, preferences, and vision needs." },
  { icon: Cpu, title: "Technology Integration", desc: "Embracing cutting-edge technology, we utilize the latest diagnostic tools and lens technologies to provide accurate prescriptions and superior visual solutions." },
  { icon: Clock, title: "Convenience And Accessibility", desc: "Located within Vijaya Eye Clinic, we offer the convenience of a one-stop destination for eye care and eyewear needs. From eye exams to stylish frames, everything is under one roof." },
];

const testimonials = [
  { name: "Ramesh K.", text: "Excellent collection of frames and very helpful staff. The eye testing was thorough and professional. Highly recommend Neha Opticals!", rating: 5 },
  { name: "Priya S.", text: "I found the perfect pair of progressive lenses here. The optometrist took time to understand my needs. Great experience overall.", rating: 5 },
  { name: "Arjun M.", text: "Best optical shop in Malleshwaram! The quality of lenses is outstanding and the prices are very reasonable. Will definitely come back.", rating: 5 },
];

const faqs = [
  { q: "What types of eyewear does Neha Opticals offer?", a: "We offer a comprehensive range including prescription glasses, sunglasses, contact lenses, progressive lenses, and children's eyewear from top brands." },
  { q: "Do you offer eye testing services?", a: "Yes, our experienced optometrists provide thorough eye examinations using state-of-the-art diagnostic equipment." },
  { q: "Can I get my lenses replaced in existing frames?", a: "Absolutely! We offer lens replacement services for most frame types with quick turnaround times." },
  { q: "Do you carry branded frames?", a: "Yes, we stock a wide range of branded and designer frames alongside affordable options to suit every budget." },
  { q: "What is the warranty on eyewear purchased from Neha Opticals?", a: "We provide warranty on both frames and lenses. The specific terms vary by product. Our team will explain all warranty details at the time of purchase." },
];

const OpticalsByNeha = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <Helmet>
        <title>Opticals by Neha | Eye Glasses & Frames - Vijaya Eye Clinic</title>
        <meta name="description" content="Opticals by Neha at Vijaya Eye Clinic. Premium eyeglasses, contact lenses, and designer frames for all eye care needs." />
        <meta name="keywords" content="eyeglasses, contact lenses, designer frames, optical store, spectacles bangalore" />
        <link rel="canonical" href="https://vijayaeyeclinic.com/facilities/opticals-by-neha" />
        <meta property="og:title" content="Opticals by Neha | Eye Glasses & Frames - Vijaya Eye Clinic" />
        <meta property="og:description" content="Opticals by Neha at Vijaya Eye Clinic. Premium eyeglasses, contact lenses, and designer frames." />
        <meta property="og:url" content="https://vijayaeyeclinic.com/facilities/opticals-by-neha" />
        <meta name="twitter:title" content="Opticals by Neha | Eye Glasses & Frames - Vijaya Eye Clinic" />
        <meta name="twitter:description" content="Opticals by Neha at Vijaya Eye Clinic. Premium eyeglasses, contact lenses, and designer frames." />
      </Helmet>
      <Header />
      <PageHeroBanner
        title="Opticals By Neha Opticals"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Facilities", to: "#" },
          { label: "Opticals By Neha Opticals" },
        ]}
      />

      {/* Hero */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              src={opticalsImg}
              alt="Neha Opticals at Vijaya Eye Clinic"
              className="rounded-2xl shadow-xl w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold mb-2">— Opticals By Neha Opticals</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Optical Solutions: A Vision Of Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Visit Neha Opticals at Vijaya Eye Clinic for a world-class eyewear experience. Explore our curated collection of premium glasses, sunglasses, and contact lenses with expert guidance from our experienced optometrists.
              </p>
              <ul className="space-y-2 mb-6">
                {["Premium Frame Collection", "Advanced Lens Technology", "Expert Eye Consultation", "Fashion-Forward Designs"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="rounded-full gradient-primary">
                <a href="tel:9611750592"><Phone className="w-4 h-4 mr-2" /> We Are Here For You — 961 175 0592</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elevate Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold mb-2">— Eyewear Solutions From Neha Opticals —</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
            Elevate Your Vision With Style
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="bg-card rounded-xl p-6 shadow-md text-left"
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
            { num: "10,000+", label: "Happy Patients" },
            { num: "30+", label: "Doctors And Staff" },
            { num: "10,000+", label: "Online Appointments" },
            { num: "15+", label: "Years Experience" },
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
            Why Choose Neha Opticals At Vijaya Eye Clinic?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                className="text-left"
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
            <a href="tel:9611750592"><Phone className="w-4 h-4 mr-2" /> Call: 961 175 0592</a>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            See Clearly, Look Stylish - Visit Neha Opticals At Vijaya Eye Clinic Today!
          </h2>
          <p className="text-muted-foreground mb-6">Discover our wide range of eyewear solutions crafted for your comfort and style.</p>
          <Button asChild size="lg" className="rounded-full gradient-primary">
            <a href="tel:08023356953"><Phone className="w-4 h-4 mr-2" /> Contact Us For Trending Eyewear — 080 23356953</a>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold mb-2">— Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">What They Say</h2>
          <h3 className="text-xl font-heading text-foreground mb-8">About Our Clinic</h3>
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
          <p className="text-primary font-semibold text-center mb-2">— FAQ —</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
            Your Guide To Clarity
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6">
                <AccordionTrigger className="text-left font-medium text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
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

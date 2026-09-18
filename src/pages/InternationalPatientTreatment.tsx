import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle, Globe, Plane, Hotel, Languages, HeartPulse, ShieldCheck,
  MapPin, Phone, Mail, Clock, Send, Star, ChevronLeft, ChevronRight, Quote,
  Plus, Minus, Users, Award, Stethoscope, Eye, Headphones, CreditCard,
  Facebook, Instagram, Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import { Helmet } from "react-helmet-async";
import intlHero from "@/assets/intl-hero.jpg";
import intlFacility1 from "@/assets/intl-facility-1.jpg";
import intlFacility2 from "@/assets/intl-facility-2.jpg";
import intlFacility3 from "@/assets/intl-facility-3.jpg";
import intlBangalore from "@/assets/intl-bangalore.jpg";
import intlFacility4 from "@/assets/intl-facility-4.jpg";

/* ── Data ── */
const services = [
  { icon: Plane, title: "Travel Assistance", desc: "Airport pickup, visa support & travel planning for a hassle-free journey." },
  { icon: Hotel, title: "Accommodation", desc: "Comfortable stay arrangements near the clinic for patients & families." },
  { icon: Languages, title: "Multilingual Support", desc: "Interpreters and multilingual staff for clear communication." },
  { icon: HeartPulse, title: "Personalized Care", desc: "Dedicated patient coordinator from arrival to departure." },
  { icon: ShieldCheck, title: "Transparent Pricing", desc: "No hidden charges — detailed cost breakdown before treatment." },
  { icon: Headphones, title: "Tele-Consultations", desc: "Pre-arrival & post-treatment video consultations with doctors." },
];

const whyChoose = [
  { icon: Award, title: "30+ Years Experience", desc: "Trusted expertise since 1993" },
  { icon: Eye, title: "Advanced Technology", desc: "Latest diagnostic & surgical equipment" },
  { icon: Users, title: "10,000+ Intl Patients", desc: "Globally trusted eye care" },
  { icon: Stethoscope, title: "Expert Surgeons", desc: "Board-certified ophthalmologists" },
  { icon: CreditCard, title: "Affordable Care", desc: "World-class treatment at Indian pricing" },
  { icon: Globe, title: "Global Standards", desc: "International safety & quality protocols" },
];

const locations = [
  { city: "Middle East", countries: "UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait" },
  { city: "Africa", countries: "Kenya, Tanzania, Nigeria, Ethiopia, Somalia" },
  { city: "South Asia", countries: "Bangladesh, Sri Lanka, Nepal, Maldives" },
  { city: "Southeast Asia", countries: "Myanmar, Malaysia, Indonesia" },
  { city: "Europe & Americas", countries: "UK, USA, Canada, Germany" },
  { city: "Central Asia & CIS", countries: "Uzbekistan, Kazakhstan, Turkmenistan, Kyrgyzstan" },
];

const internationalCountries = [
  { name: "Nigeria", path: "/international/nigeria" },
  { name: "Kenya", path: "/international/kenya" },
  { name: "Malawi", path: "/international/malawi" },
  { name: "Botswana", path: "/international/botswana" },
  { name: "Zimbabwe", path: "/international/zimbabwe" },
  { name: "Ghana", path: "/international/ghana" },
  { name: "Tanzania", path: "/international/tanzania" },
  { name: "Ethiopia", path: "/international/ethiopia" },
  { name: "Somalia", path: "/international/somalia" },
  { name: "Senegal", path: "/international/senegal" },
  { name: "Saudi Arabia", path: "/international/saudi-arabia" },
  { name: "UAE", path: "/international/uae" },
  { name: "Oman", path: "/international/oman" },
  { name: "Kuwait", path: "/international/kuwait" },
  { name: "Qatar", path: "/international/qatar" },
  { name: "Bahrain", path: "/international/bahrain" },
  { name: "Yemen", path: "/international/yemen" },
  { name: "Iraq", path: "/international/iraq" },
  { name: "Myanmar", path: "/international/myanmar" },
  { name: "Cambodia", path: "/international/cambodia" },
  { name: "Vietnam", path: "/international/vietnam" },
  { name: "Indonesia", path: "/international/indonesia" },
  { name: "Laos", path: "/international/laos" },
  { name: "Philippines", path: "/international/philippines" },
  { name: "Nepal", path: "/international/nepal" },
  { name: "Sri Lanka", path: "/international/sri-lanka" },
  { name: "Maldives", path: "/international/maldives" },
  { name: "Bangladesh", path: "/international/bangladesh" },
];

const testimonials = [
  { name: "Ahmed Al-Rashid", country: "UAE", text: "I traveled from Dubai for cataract surgery and the experience was exceptional. The international team handled everything — from visa to stay. Truly world-class!", rating: 5 },
  { name: "Sarah Kimani", country: "Kenya", text: "Vijaya Eye Clinic treated my glaucoma with great expertise. The multilingual staff made me feel at home. Highly recommended for African patients!", rating: 5 },
  { name: "Mohammed Hasan", country: "Saudi Arabia", text: "The LASIK surgery changed my life. The care coordination was seamless and the results were beyond my expectations. Thank you Vijaya team!", rating: 5 },
  { name: "Nadia Begum", country: "Bangladesh", text: "My mother's retina surgery was performed with utmost precision. The post-operative follow-up via video call was very reassuring.", rating: 5 },
  { name: "James Ochieng", country: "Tanzania", text: "From the airport pickup to the final check-up, everything was perfectly organized. The cost was very reasonable compared to my home country.", rating: 5 },
  { name: "Fatima Al-Sayed", country: "Oman", text: "I brought my child for pediatric eye treatment. The doctors were incredibly gentle and skilled. We are grateful for the wonderful outcome!", rating: 5 },
];

const faqs = [
  { q: "How do I schedule an appointment as an international patient?", a: "You can reach us via email, phone, or our online form. Our international patient coordinator will guide you through the entire process including appointment scheduling, travel assistance, and accommodation arrangements." },
  { q: "Do you provide visa assistance?", a: "Yes, we provide medical visa invitation letters and supporting documents to help facilitate your visa application process." },
  { q: "What languages does the staff speak?", a: "Our team communicates in English, Hindi, Kannada, and Arabic. We also arrange professional interpreters for other languages upon request." },
  { q: "How long do I need to stay in Bangalore?", a: "The duration varies depending on the treatment. Simple procedures may require 3-5 days, while complex surgeries might need 7-14 days including follow-up visits." },
  { q: "Can I get a cost estimate before traveling?", a: "Absolutely! Once we review your medical reports, we provide a detailed cost estimate covering consultation, treatment, accommodation, and other services." },
  { q: "Is post-treatment follow-up available remotely?", a: "Yes, we offer tele-consultation services for post-treatment follow-ups so you can stay connected with your doctor after returning home." },
];

const processSteps = [
  { step: "01", title: "Initial Contact", desc: "Reach out via email, phone or form with your medical history and reports." },
  { step: "02", title: "Medical Review", desc: "Our specialists review your case and provide a treatment plan with cost estimate." },
  { step: "03", title: "Travel Planning", desc: "We assist with visa documents, flight booking and accommodation arrangements." },
  { step: "04", title: "Treatment", desc: "Receive world-class eye care with your dedicated patient coordinator." },
  { step: "05", title: "Recovery & Follow-up", desc: "Post-treatment care and remote tele-consultations after you return home." },
];

const XIcon = ({ className, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18.901 1.153H22.581L14.541 10.343L24 22.846H16.594L10.794 15.262L4.156 22.846H0.474L9.074 13.016L0 1.154H7.594L12.837 8.117L18.901 1.153ZM17.61 20.644H19.649L6.486 3.24H4.298L17.61 20.644Z"/>
  </svg>
);

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: XIcon, label: "X" },
  { icon: Youtube, label: "Youtube" },
];

/* ── Page ── */
const InternationalPatientTreatmentPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", country: "", treatment: "", message: "" });
  const [current, setCurrent] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Request Submitted!", description: "Our international team will contact you within 24 hours." });
    setForm({ name: "", phone: "", email: "", country: "", treatment: "", message: "" });
  };

  const getVisible = () => {
    const count = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 640 ? 2 : 1;
    return Array.from({ length: count }, (_, i) => testimonials[(current + i) % testimonials.length]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>International Patient Services | Vijaya Eye Clinic Bangalore</title>
        <meta name="description" content="International patient services at Vijaya Eye Clinic. Travel assistance, accommodation, multilingual support, and comprehensive eye care for patients worldwide." />
        <meta name="keywords" content="international patients, medical tourism, travel assistance, eye treatment abroad" />
        <link rel="canonical" href="https://vijayaeyeclinic.com/international-patient-treatment" />
        <meta property="og:title" content="International Patient Services | Vijaya Eye Clinic Bangalore" />
        <meta property="og:description" content="International patient services at Vijaya Eye Clinic. Travel assistance, accommodation, multilingual support." />
        <meta property="og:url" content="https://vijayaeyeclinic.com/international-patient-treatment" />
        <meta name="twitter:title" content="International Patient Services | Vijaya Eye Clinic Bangalore" />
        <meta name="twitter:description" content="International patient services at Vijaya Eye Clinic. Travel assistance, accommodation, multilingual support." />
      </Helmet>
      <Header />

      <PageHeroBanner
        title="International Patient Treatment"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "International Patient Treatment" },
        ]}
      />

      {/* ── About Section ── */}
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
                <img src={intlHero} alt="International patients at Vijaya Eye Clinic" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 gradient-primary rounded-2xl p-6 text-primary-foreground shadow-lg hidden md:block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-4xl font-heading font-bold">🌍</p>
                <p className="text-sm font-medium">Global Patients</p>
                <p className="text-xs text-primary-foreground/80">40+ Countries</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Welcome International Patients</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                World-Class Eye Care, Wherever You're From
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vijaya Eye Clinic welcomes patients from around the globe, offering dedicated international patient services designed to make your medical journey seamless and stress-free. With over 30 years of excellence in ophthalmology, we provide world-class treatments at affordable costs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From travel coordination and accommodation to post-treatment follow-up, our dedicated international patient team ensures you receive the highest quality care throughout your entire journey to better vision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "10,000+", label: "Intl Patients Treated" },
                  { num: "40+", label: "Countries Served" },
                  { num: "98%", label: "Success Rate" },
                  { num: "30+", label: "Years Experience" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="bg-secondary rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <p className="text-2xl font-heading font-bold text-primary">{s.num}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">What We Offer International Patients</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Treatment Process ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Your Treatment Journey</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-16 h-16 rounded-full gradient-primary mx-auto flex items-center justify-center text-primary-foreground font-heading font-bold text-xl mb-4 relative z-10 hover:scale-110 transition-transform">
                    {s.step}
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Facility</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">World-Class Infrastructure</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {[intlFacility1, intlFacility2, intlFacility3, intlBangalore, intlFacility4].map((img, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl overflow-hidden shadow-md group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img src={img} alt={`Vijaya Eye Clinic facility ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Vijaya</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Why International Patients Choose Us</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                className="flex gap-4 items-start p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <w.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{w.title}</h3>
                  <p className="text-muted-foreground text-sm">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      {/* <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Reach</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Patients From Around The World</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                className="rounded-2xl gradient-primary p-6 text-primary-foreground hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Globe className="w-8 h-8 mb-3 text-primary-foreground/80" />
                <h3 className="font-heading font-bold text-xl mb-2">{loc.city}</h3>
                <p className="text-primary-foreground/80 text-sm">{loc.countries}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Global Reach ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">International Patients</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Global Reach, Trusted Eye Care</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              Welcoming international patients from across the globe with world-class ophthalmic treatments, seamless teleconsultations, and dedicated travel support.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {internationalCountries.map((country, i) => (
              <motion.div
                key={country.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  to={country.path}
                  className="flex items-center gap-3 h-full rounded-xl border border-border/50 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg group"
                >
                  <Globe className="w-5 h-5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{country.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Slider ── */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">What International Patients Say</h2>
          </motion.div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {getVisible().map((t) => (
                  <div key={t.name} className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <Quote className="w-8 h-8 text-primary/20 mb-3 group-hover:text-primary/40 transition-colors" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm group-hover:scale-110 transition-transform">
                        {t.name[0]}
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-foreground block">{t.name}</span>
                        <span className="text-xs text-muted-foreground">{t.country}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center items-center gap-4 mt-8">
              <button onClick={prev} className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all" aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-border hover:bg-primary/50"}`} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
              <button onClick={next} className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all" aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Common questions from our international patients</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left group">
                  <span className="font-heading font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">{faq.q}</span>
                  <motion.div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center" animate={{ rotate: faqOpen === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {faqOpen === i ? <Minus className="w-4 h-4 text-primary-foreground" /> : <Plus className="w-4 h-4 text-primary-foreground" />}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {faqOpen === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Form + Contact ── */}
      <section className="section-padding gradient-primary">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2 mb-4">Contact Our International Team</h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Our international patient coordinator is available to assist you with treatment inquiries, travel planning, and appointment scheduling. Reach out today!
              </p>
              <div className="space-y-5 mb-8">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-primary-foreground/80 mt-0.5" />
                  <span className="text-primary-foreground/90 text-sm">#43, 1st Cross, Margosa Road, Malleshwaram, Bangalore - 560003</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary-foreground/80" />
                  <a href="tel:+919008021523" className="text-primary-foreground/90 text-sm hover:text-primary-foreground transition-colors">+91 9008021523</a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 flex-shrink-0 text-primary-foreground/80" />
                  <a href="mailto:info@vijayaeyeclinic.com" className="text-primary-foreground/90 text-sm hover:text-primary-foreground transition-colors">info@vijayaeyeclinic.com</a>
                </div>
                <div className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 flex-shrink-0 text-primary-foreground/80" />
                  <span className="text-primary-foreground/90 text-sm">Mon-Sat: 8AM-9:30PM | Sun: 10AM-9PM</span>
                </div>
              </div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label }) => (
                  <a key={label} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/25 hover:scale-110 transition-all" aria-label={label}>
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-xl space-y-5">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Request International Consultation</h3>
                <Input placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-lg" required />
                <Input placeholder="Phone / WhatsApp *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-lg" required />
                <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-lg" />
                <Input placeholder="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="rounded-lg" />
                <select value={form.treatment} onChange={(e) => setForm({ ...form, treatment: e.target.value })} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground">
                  <option value="">Select Treatment</option>
                  <option>Cataract Surgery</option>
                  <option>LASIK Surgery</option>
                  <option>Retina Treatment</option>
                  <option>Glaucoma Care</option>
                  <option>Cornea Treatment</option>
                  <option>General Ophthalmology</option>
                  <option>Other</option>
                </select>
                <Textarea placeholder="Describe your condition or medical history" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-lg" rows={4} />
                <Button type="submit" className="w-full rounded-full gradient-primary text-base hover:scale-105 transition-transform">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Ready to Begin Your Journey to Better Vision?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Take the first step towards world-class eye care. Our international patient team is ready to assist you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="rounded-full gradient-primary px-8 hover:scale-105 transition-transform">
                <Link to="/appointment-booking">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform">
                <a href="tel:+919008021523">Call Us Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternationalPatientTreatmentPage;

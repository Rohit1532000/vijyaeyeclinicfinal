import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckCircle, Globe, Phone, Mail, MapPin, Award, Heart,
  TrendingUp, Shield, Zap, Users, Star, ChevronRight, Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import { Helmet } from "react-helmet-async";

const NigeriaLanding = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    {
      icon: TrendingUp,
      title: "Uncompromised Surgical Precision",
      desc: "High-end micro-incision surgeries with premium IOL implants"
    },
    {
      icon: Shield,
      title: "60-80% Cost Savings",
      desc: "Premium treatment at accessible Nigerian Naira rates"
    },
    {
      icon: Users,
      title: "Dedicated International Liaison",
      desc: "Personal coordinator handling entire journey"
    },
    {
      icon: Award,
      title: "40+ Years Excellence",
      desc: "Trusted expertise since establishment"
    },
  ];

  const procedures = [
    {
      title: "Advanced Cataract Surgery",
      desc: "Phacoemulsification with premium IOL options for immediate visual recovery"
    },
    {
      title: "Diabetic Retinopathy Care",
      desc: "Laser therapy and advanced vitrectomy to prevent permanent blindness"
    },
    {
      title: "Glaucoma Management",
      desc: "Advanced OCT diagnostics and micro-shunting surgeries"
    },
    {
      title: "LASIK & ICL Services",
      desc: "Customized vision correction for high refractive errors"
    },
  ];

  const costComparison = [
    {
      procedure: "Premium Cataract Surgery (per eye)",
      nigeria: "High Private / Limited Options",
      bangalore: "Highly Competitive with Global Quality"
    },
    {
      procedure: "Advanced LASIK",
      nigeria: "Limited Accessibility",
      bangalore: "Cost-Effective Premium Technology"
    },
    {
      procedure: "Complex Retinal Surgery",
      nigeria: "Specialist Scarcity",
      bangalore: "Daily Advanced Infrastructure"
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Complimentary Digital Case Review",
      desc: "Send optical reports via WhatsApp or Email. Senior medical board analyzes and provides detailed treatment plan with transparent cost."
    },
    {
      number: "02",
      title: "Visa Invitation & Flight Booking",
      desc: "Hospital provides official Medical Visa Letter to Indian High Commission in Abuja or Deputy Commission in Lagos."
    },
    {
      number: "03",
      title: "Airport Reception & Transfer",
      desc: "Dedicated team meets at Kempegowda International Airport with air-conditioned transport to clinic."
    },
    {
      number: "04",
      title: "Clinical Workup & Surgery",
      desc: "Advanced in-person evaluation followed by scheduled procedure with post-op final evaluation."
    },
    {
      number: "05",
      title: "Recovery & Post-Op Follow-up",
      desc: "Free virtual consultations via Zoom/WhatsApp to monitor recovery milestones after return to Nigeria."
    },
  ];

  const hospitals = [
    {
      name: "Vijayanagar Flagship Hub",
      desc: "Central premium medical sector location with excellent hotels and international dining options",
      features: ["Easy accessibility", "Excellent hospitality", "Premium amenities"]
    },
    {
      name: "Nagadevanahalli Super-Specialty Center",
      desc: "Strategic Outer Ring Road location with quiet recovery zones and state-of-the-art diagnostics",
      features: ["Quick transit", "Spacious recovery", "Modern diagnostics"]
    },
  ];

  const faqs = [
    {
      q: "What is the typical stay duration in Bangalore?",
      a: "Simple procedures require 3-5 days, while complex surgeries need 7-14 days including follow-up visits."
    },
    {
      q: "Do you offer financing options for Nigerian patients?",
      a: "Yes, we offer flexible payment plans and can discuss options during your initial consultation."
    },
    {
      q: "Is accommodation included in the treatment package?",
      a: "We assist in booking vetted serviced apartments with kitchens for familiar meal preparation."
    },
    {
      q: "What post-operative support is available after returning to Nigeria?",
      a: "Complimentary tele-health follow-ups via Zoom/WhatsApp to monitor your recovery progress."
    },
    {
      q: "How do I get a detailed cost estimate?",
      a: "Send your medical reports for review; we provide detailed estimates in stable USD/INR currencies."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Top Eye Hospital in Bangalore for Nigerian Patients | Vijaya Eye Clinic</title>
        <meta name="description" content="Affordable, world-class eye surgery in Bangalore, India for patients from Nigeria. Advanced Cataract, LASIK, and Retinal care at Vijaya Eye Clinic. Get a free medical visa invite." />
        <meta name="keywords" content="best eye hospital bangalore nigerian patients, eye surgery cost india from nigeria, cataract surgery bangalore vijaya eye clinic, cornea transplant india price naira, ophthalmology bangalore international patients" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Top Eye Hospital in Bangalore for Nigerian Patients | Vijaya Eye Clinic" />
        <meta property="og:description" content="Affordable, world-class eye surgery in Bangalore for Nigerian patients. Advanced treatments with 60-80% cost savings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vijayaeyeclinic.com/international/nigeria/" />
        <meta property="og:image" content="https://vijayaeyeclinic.com/og-image-nigeria.jpg" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Eye Hospital in Bangalore for Nigerian Patients" />
        <meta name="twitter:description" content="World-class eye care from Nigeria - Advanced surgeries with 60-80% savings" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Vijaya Eye Clinic - Nigeria Medical Tourism",
            "description": "Premium eye hospital in Bangalore for Nigerian patients",
            "url": "https://vijayaeyeclinic.com/international/nigeria/",
            "areaServed": "Nigeria",
            "availableLanguage": ["en"],
            "medicalSpecialty": ["Ophthalmology"],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Patient Services",
              "telephone": "+91-XXXX-XXXX",
              "email": "care@vijayaeyeclinic.com",
              "areaServed": "Nigeria"
            }
          }`}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Affordable, Advanced Eye Care in Bangalore for Nigerian Patients
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Every year, hundreds of families from Lagos, Abuja, and Port Harcourt choose Vijaya Eye Clinic for world-class vision restoration at a fraction of Western costs — with end-to-end medical tourism support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/contact-us")} className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                Get Free Medical Consultation
              </Button>
              <Button size="lg" onClick={() => window.location.href = "tel:08026721818"} variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8">
                Call Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Why Nigerian Patients Choose Vijaya Eye Clinic
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Bangalore is India's healthcare capital. Vijaya Eye Clinic stands at the forefront with over 40 years of clinical excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 hover:shadow-xl transition-all"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{adv.title}</h3>
                  <p className="text-slate-600">{adv.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Treatments */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Specialized Eye Treatments & Surgical Procedures
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive super-specialty eye care tailored to health conditions most frequently presenting from West Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {procedures.map((proc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-600"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{proc.title}</h3>
                <p className="text-slate-600">{proc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Direct Cost Comparison: Nigeria vs. Bangalore
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              60-80% lower costs with identical medical equipment and global-standard lenses
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="p-6 font-bold text-lg">Procedure</div>
                <div className="p-6 font-bold text-lg">Nigeria / Western Clinics</div>
                <div className="p-6 font-bold text-lg">Vijaya Eye Clinic, Bangalore</div>
              </div>
              {costComparison.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-0 border-t border-slate-200">
                  <div className="p-6 font-semibold text-slate-900">{row.procedure}</div>
                  <div className="p-6 text-slate-600">{row.nigeria}</div>
                  <div className="p-6 text-green-600 font-semibold">{row.bangalore}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
            <p className="text-slate-700">
              <strong>💡 Currency Advantage:</strong> Pricing locked in stable global currencies (USD/INR) so you can budget with absolute predictability amid fluctuating exchange rates.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Journey */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Your Seamless Medical Travel Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Five simple steps from initial consultation to post-operative follow-up
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300"></div>

            <div className="grid md:grid-cols-5 gap-8 relative">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-slate-600 text-center">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Bangalore Branches */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Bangalore Branches: Built for Your Comfort
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Two state-of-the-art facilities strategically located for your convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hospitals.map((hosp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl p-8 border border-blue-700 hover:border-blue-500 transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">{hosp.name}</h3>
                <p className="text-blue-100 mb-6">{hosp.desc}</p>
                <ul className="space-y-3">
                  {hosp.features.map((feat, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-blue-100">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Seamless Hospitality for Our Nigerian Guests
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Healing requires more than excellent surgery — we provide comprehensive support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Accommodation Assistance",
                desc: "Vetted partnerships with serviced apartments featuring kitchens for familiar meals"
              },
              {
                icon: Globe,
                title: "Sim Card & Currency Exchange",
                desc: "Immediate 4G/5G connectivity setup and safe currency exchange at official rates"
              },
              {
                icon: Users,
                title: "Post-Discharge Tele-Health",
                desc: "Free virtual follow-up evaluations via Zoom or WhatsApp after your return"
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a complimentary digital case review and transparent cost estimate today. Our team is ready to help.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Mail, title: "Email", value: "care@vijayaeyeclinic.com" },
                { icon: Phone, title: "Call", value: "08026721818" },
                { icon: Phone, title: "WhatsApp", value: "+91 9739302523" },
              ].map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <div key={idx} className="p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur">
                    <Icon className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm text-blue-100 mb-1">{contact.title}</p>
                    <p className="font-semibold">{contact.value}</p>
                  </div>
                );
              })}
            </div>
            <Button size="lg" onClick={() => navigate("/appointment-booking")} className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="group p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-400 transition-all cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  <span className="text-lg">{faq.q}</span>
                  <ChevronRight className="w-6 h-6 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-600">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NigeriaLanding;

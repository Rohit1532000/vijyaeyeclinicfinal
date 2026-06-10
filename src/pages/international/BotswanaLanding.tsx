import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, TrendingUp, Shield, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const BotswanaLanding = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    { icon: TrendingUp, title: "Advanced Refractive & LASIK Suites", desc: "Blade-free LASIK and ICL for complex prescriptions" },
    { icon: Shield, title: "Financial Predictability", desc: "Pricing in USD/INR protected from exchange fluctuations" },
    { icon: Users, title: "Premium Hospitality", desc: "Personal coordinators for medical and local coordination" },
    { icon: Award, title: "40+ Years Excellence", desc: "Trusted expertise and proven results" },
  ];

  const procedures = [
    { title: "Custom LASIK & ICL Services", desc: "Permanent removal of heavy glasses through safe laser procedures" },
    { title: "Advanced Glaucoma Management", desc: "High-definition OCT imaging and targeted laser therapies" },
    { title: "Premium Cataract Surgery", desc: "Stitchless procedures with multifocal lens options" },
    { title: "Retinal Care", desc: "Advanced diagnostics and surgical interventions" },
  ];

  const steps = [
    { number: "01", title: "Initial Consultation", desc: "Share your prescription and eye reports via WhatsApp for detailed assessment." },
    { number: "02", title: "Visa Facilitation", desc: "We handle official Medical Visa Invitation Letter submission." },
    { number: "03", title: "Arrival & Care", desc: "Meet you at Bangalore Airport and transfer to our Vijayanagar or Nagadevanahalli center." },
    { number: "04", title: "Recovery & Follow-up", desc: "Comprehensive post-op care with virtual consultations back in Botswana." },
  ];

  const faqs = [
    {
      q: "What is the typical stay duration in Bangalore?",
      a: "Simple procedures require 3-5 days, while complex surgeries need 7-14 days. We align timelines with Botswana flight schedules."
    },
    {
      q: "Can you help with travel from Sir Seretse Khama International Airport?",
      a: "Absolutely! Our team coordinates flights from Gaborone and arranges all transportation in Bangalore."
    },
    {
      q: "What payment options do you offer for Botswanan patients?",
      a: "We accept multiple payment methods and offer flexible plans in USD/INR currencies for budget predictability."
    },
    {
      q: "Is accommodation provided during recovery?",
      a: "We connect you with quality, comfortable apartments near our centers. Many have kitchens for your convenience."
    },
    {
      q: "What follow-up care is available after I return to Botswana?",
      a: "Full post-operative support via online consultations to ensure smooth recovery and optimal results."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Premium Eye Care in Bangalore for Botswana Patients</title>
        <meta name="description" content="Top-tier, affordable eye surgeries in Bangalore, India for patients from Botswana. Advanced LASIK, Cataract, and Cornea care at Vijaya Eye Clinic." />
        <meta name="keywords" content="eye specialists in india from botswana, lasik surgery cost in bangalore, premium cataract surgery india, vijaya eye clinic bangalore" />
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">High-End, Affordable Eye Surgery in Bangalore for Botswana Patients</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">Advanced refractive corrections and blade-free LASIK in Gaborone or Francistown? We provide a premier solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => window.location.href = "tel:08026721818"} size="lg" variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8"><Phone className="w-4 h-4 mr-2" />Call Our Team</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">With 40+ years of legacy, we deliver unmatched clinical results using the same technology found in top US and UK clinics at competitive prices.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Botswana Patients Choose Vijaya Eye Clinic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((adv, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                  <adv.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{adv.title}</h3>
                  <p className="text-gray-600">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Core Specializations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {procedures.map((proc, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{proc.title}</h3>
                  <p className="text-gray-600">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Your Journey from Gaborone to Bangalore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg shadow-md relative">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-blue-100">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Bangalore Centers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Vijayanagar</h3><p className="text-gray-700">Flagship center with state-of-the-art refractive procedure facilities.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli</h3><p className="text-gray-700">Modern facility ideal for peaceful recovery.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See Life Without Glasses?</h2>
            <p className="text-lg text-blue-100 mb-8">Join Botswana patients who chose Vijaya Eye Clinic for premium vision care.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => navigate('/appointment-booking')} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">Start Your Journey</Button>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div><Phone className="w-8 h-8 mx-auto mb-3" /><p className="text-sm text-blue-100 mb-2">Call us</p><p className="font-semibold cursor-pointer hover:text-blue-100 transition" onClick={() => window.location.href = "tel:08026721818"}>08026721818</p></div>
                <div><Mail className="w-8 h-8 mx-auto mb-3" /><p className="text-sm text-blue-100 mb-2">WhatsApp</p><p className="font-semibold cursor-pointer hover:text-blue-100 transition" onClick={() => window.location.href = "https://wa.me/919739302523"}>+91 9739302523</p></div>
                <div><Mail className="w-8 h-8 mx-auto mb-3" /><p className="text-sm text-blue-100 mb-2">Email</p><p className="font-semibold cursor-pointer hover:text-blue-100 transition" onClick={() => copyToClipboard('care@vijayaeyeclinic.com')}>{copied ? "Copied!" : "care@vijayaeyeclinic.com"}</p></div>
              </div>
            </div>
          </div>
        </section>
        

        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-4">
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
      </div>
      <Footer />
    </>
  );
};

export default BotswanaLanding;

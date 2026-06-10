import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, TrendingUp, Shield, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const GhanaLanding = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    { icon: TrendingUp, title: "Expertise in Glaucoma & Hypertension", desc: "Early-stage nerve-saving interventions" },
    { icon: Shield, title: "70% Savings", desc: "Compared to European alternatives with FDA-approved lenses" },
    { icon: Users, title: "West African Friendly Concierge", desc: "Cultural familiarity and dietary options" },
    { icon: Award, title: "40+ Years Excellence", desc: "World-class surgical expertise" },
  ];

  const procedures = [
    { title: "Advanced Glaucoma Micro-Surgery", desc: "Modern tracking and micro-shunting procedures" },
    { title: "Premium Laser Vision Correction", desc: "Safe LASIK and ICL surgeries for all prescriptions" },
    { title: "Cataract Surgery with IOL", desc: "Stitchless procedures with premium lens options" },
    { title: "Retinal Care", desc: "Advanced diagnostics and surgical interventions" },
  ];

  const steps = [
    { number: "01", title: "Digital Assessment", desc: "Send diagnostic files via WhatsApp for immediate evaluation" },
    { number: "02", title: "Visa Paperwork", desc: "Official medical invitation letter for Indian High Commission in Accra" },
    { number: "03", title: "Arrival Transit", desc: "Private air-conditioned car from Bangalore airport to your facility" },
    { number: "04", title: "Follow-up Care", desc: "Regular virtual follow-ups after returning to Ghana" },
  ];

  const faqs = [
    {
      q: "How long will I need to stay in Bangalore?",
      a: "Most procedures require 3-7 days. Complex surgeries may need 10-14 days with follow-up evaluations included."
    },
    {
      q: "Can you arrange flights from Accra (Kotoka International Airport)?",
      a: "Yes, our international coordinators work with airlines to arrange smooth travel from Accra to Bangalore."
    },
    {
      q: "What currency options do you accept?",
      a: "We accept multiple currencies with transparent pricing in USD/INR to ensure budget certainty."
    },
    {
      q: "Are meals and lodging arranged?",
      a: "We partner with comfortable serviced apartments featuring kitchens where you can prepare familiar meals."
    },
    {
      q: "How do I receive post-surgery support in Ghana?",
      a: "Continuous support via virtual consultations, WhatsApp, and email monitoring throughout your recovery."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Top Eye Clinic in Bangalore for Ghanaian Patients | Vijaya Eye Clinic</title>
        <meta name="description" content="Affordable, top-tier eye surgeries in Bangalore, India for patients from Ghana." />
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Eye Care for Patients from Ghana</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">Patients from Accra, Kumasi, and Tamale experience exceptional clinical outcomes at Vijaya Eye Clinic.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => window.location.href = "tel:08026721818"} size="lg" variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8"><Phone className="w-4 h-4 mr-2" />Call Our Team</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">Our twin facilities in <strong>Vijayanagar</strong> and <strong>Nagadevanahalli</strong> provide West African families access to advanced surgical setups.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Ghanaian Patients Choose Vijaya Eye Clinic</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Specialized Procedures</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Travel Protocol from Ghana</h2>
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
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Vijayanagar</h3><p className="text-gray-700">Flagship super-specialty center for advanced diagnostics.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli</h3><p className="text-gray-700">Modern facility for comprehensive eye care.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See Better?</h2>
            <p className="text-lg text-blue-100 mb-8">Join Ghanaian patients who experienced world-class eye care.</p>
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
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-400 transition-all"
                >
                  <details className="group cursor-pointer">
                    <summary className="flex items-center justify-between font-bold text-slate-900 hover:text-blue-600 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      <span className="text-lg">{faq.q}</span>
                      <ChevronRight className="w-6 h-6 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 cursor-default">{faq.a}</p>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GhanaLanding;
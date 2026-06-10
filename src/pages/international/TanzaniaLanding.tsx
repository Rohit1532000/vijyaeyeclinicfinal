import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, TrendingUp, Shield, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TanzaniaLanding = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    { icon: TrendingUp, title: "Advanced Corneal & Retinal", desc: "Ready access for complex corneal scarring and retinal issues" },
    { icon: Shield, title: "Excellent Value", desc: "Competitive packages in Tanzanian Shillings (TZS)" },
    { icon: Users, title: "Smooth Travel Route", desc: "Easy flight connections from Dar es Salaam to Bangalore" },
    { icon: Award, title: "40+ Years Excellence", desc: "Proven expertise in complex cases" },
  ];

  const procedures = [
    { title: "Specialized Retinal Interventions", desc: "Advanced diabetic retinopathy and retinal tear treatment" },
    { title: "High-Definition Cataract Surgeries", desc: "Multifocal lenses for clear vision at all distances" },
    { title: "Glaucoma Management", desc: "Advanced early detection and treatment" },
    { title: "Corneal Treatments", desc: "Specialized procedures for corneal diseases" },
  ];

  const steps = [
    { number: "01", title: "Document Review", desc: "Submit your medical reports via WhatsApp for expert assessment" },
    { number: "02", title: "Visa Support", desc: "Official Indian Medical Visa invitation letter provided" },
    { number: "03", title: "Airport Greeting", desc: "Meet you at Bangalore Airport (BLR) with direct transfer" },
    { number: "04", title: "Complete Care", desc: "Support across Vijayanagar and Nagadevanahalli branches" },
  ];

  const faqs = [
    {
      q: "What is the typical treatment timeline?",
      a: "Most procedures require 5-7 days in Bangalore including diagnostics and follow-up before returning to Dar es Salaam or Mwanza."
    },
    {
      q: "Do you help arrange flights from Julius Nyerere International Airport?",
      a: "Absolutely! Our team coordinates flights from Dar es Salaam and arranges all local transportation."
    },
    {
      q: "What payment methods do you support?",
      a: "We accept multiple currencies with pricing locked in USD/INR to ensure transparency and budget predictability."
    },
    {
      q: "Is accommodation included in treatment packages?",
      a: "We connect you with comfortable serviced apartments near our centers, most featuring kitchens and basic amenities."
    },
    {
      q: "What happens after I return to Tanzania?",
      a: "Full post-operative monitoring through virtual consultations and WhatsApp to ensure smooth healing."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Specialized Eye Hospital in Bangalore for Tanzanian Patients</title>
        <meta name="description" content="World-class, affordable eye surgeries in Bangalore, India for patients from Tanzania." />
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Eye Care for Patients from Tanzania</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">From Dar es Salaam, Arusha, and Mwanza, patients seeking specialized treatments trust Vijaya Eye Clinic.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => window.location.href = "tel:08026721818"} size="lg" variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8"><Phone className="w-4 h-4 mr-2" />Call Our Team</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">Operating two advanced hubs—our central hub in <strong>Vijayanagar</strong> and our ring-road center in <strong>Nagadevanahalli</strong>—we provide specialized surgical procedures.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Tanzanian Patients Choose Vijaya Eye Clinic</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Treatment Specialties</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">End-to-End Care for Tanzanian Guests</h2>
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
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Vijayanagar</h3><p className="text-gray-700">Central hub with advanced diagnostic and surgical facilities.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli</h3><p className="text-gray-700">Ring-road center for peaceful recovery and follow-up.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Clear Vision?</h2>
            <p className="text-lg text-blue-100 mb-8">Join Tanzanian patients who restored their vision at Vijaya Eye Clinic.</p>
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

export default TanzaniaLanding;
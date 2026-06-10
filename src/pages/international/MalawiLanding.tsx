import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, TrendingUp, Shield, Zap, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const MalawiLanding = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    { icon: TrendingUp, title: "Overcoming Local Sub-Specialty Gaps", desc: "Avoid long waiting lists for intricate surgeries" },
    { icon: Shield, title: "Unbeatable Cost Efficiency", desc: "US FDA-approved equipment at accessible rates" },
    { icon: Users, title: "End-to-End Support", desc: "Complete itinerary and medical documentation assistance" },
    { icon: Award, title: "40+ Years Excellence", desc: "Trusted international expertise" },
  ];

  const procedures = [
    { title: "Complex Vitreoretinal Surgery", desc: "Advanced surgical intervention for retinal detachments" },
    { title: "Premium Cataract Solutions", desc: "Multifocal lenses that eliminate reading glasses post-surgery" },
    { title: "Advanced Glaucoma Procedures", desc: "High-precision diagnostics and targeted laser therapies" },
    { title: "Diabetic Eye Care", desc: "Comprehensive management of diabetic retinopathy" },
  ];

  const costComparison = [
    { procedure: "Complex Vitreoretinal Surgery", location1: "Specialist scarcity in Malawi", location2: "State-of-the-art care available daily" },
    { procedure: "Premium IOL Cataract Surgery", location1: "Limited multifocal lens options", location2: "Full range of premium IOL options" },
  ];

  const steps = [
    { number: "01", title: "Send Medical Reports", desc: "Send your current medical eye reports to our WhatsApp desk for a free review." },
    { number: "02", title: "Visa Invitation", desc: "Receive your official Indian Medical Visa invitation letter from our desk." },
    { number: "03", title: "Airport & Transfer", desc: "Land in Bangalore, where our airport liaison handles your transport to our branch." },
    { number: "04", title: "Virtual Follow-ups", desc: "Return to Malawi with regular follow-ups scheduled with your operating surgeon." },
  ];

  const faqs = [
    {
      q: "What is the typical stay duration in Bangalore?",
      a: "Simple procedures require 3-5 days, while complex surgeries need 7-14 days including follow-up visits. We coordinate with Lilongwe and Blantyre flight schedules."
    },
    {
      q: "Can you help with travel arrangements from Lilongwe or Blantyre?",
      a: "Yes, our international team assists with flights from Lilongwe International Airport (LLW) and arranges all ground transportation in Bangalore."
    },
    {
      q: "What payment options are available for Malawian patients?",
      a: "We accept multiple currencies and offer flexible payment plans. Pricing is transparent in USD/INR to avoid exchange rate fluctuations."
    },
    {
      q: "Is accommodation included in treatment packages?",
      a: "We assist in booking quality serviced apartments near our facilities. Many include kitchens for meal preparation."
    },
    {
      q: "What post-operative support is available after returning to Malawi?",
      a: "Complimentary tele-health follow-ups via Zoom/WhatsApp to monitor your recovery progress."
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Access World-Class Eye Care in Bangalore for Patients from Malawi</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              For complex eye conditions requiring advanced surgical tools, patients from Lilongwe, Blantyre, and Mzuzu trust Vijaya Eye Clinic in Bangalore, India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => window.location.href = "tel:08026721818"} size="lg" variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8"><Phone className="w-4 h-4 mr-2" />Call Our Team</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">
              Our two state-of-the-art facilities—the flagship center in <strong>Vijayanagar</strong> and our modern hospital in <strong>Nagadevanahalli</strong>—provide international standards of care combined with warm, attentive hospitality.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Patients from Malawi Trust Vijaya Eye Clinic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((adv, idx) => (
                <motion.div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                  <adv.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{adv.title}</h3>
                  <p className="text-gray-600">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Specialized Treatments for Our Malawi Guests</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Direct Cost Comparison: Malawi vs. Bangalore</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-6 py-4 text-left">Procedure Type</th>
                    <th className="px-6 py-4 text-left">Malawi</th>
                    <th className="px-6 py-4 text-left">Vijaya Eye Clinic</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.procedure}</td>
                      <td className="px-6 py-4 text-gray-700">{item.location1}</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">{item.location2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Simple Travel Pathway from Malawi to Bangalore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md relative">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-blue-100">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Bangalore Centers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Vijayanagar</h3><p className="text-gray-700">Flagship super-specialty center for advanced diagnostics.</p></div>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-lg"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli</h3><p className="text-gray-700">Modern facility for comprehensive eye care.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Restore Your Vision?</h2>
            <p className="text-lg text-blue-100 mb-8">Join patients from Lilongwe, Blantyre, and Mzuzu who experienced world-class eye care.</p>
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

export default MalawiLanding;

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, TrendingUp, Shield, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const MyanmarLanding = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    { icon: TrendingUp, title: "Next-Gen Tech Infrastructure", desc: "High-end micro-incision surgeries, premium German/US IOL implants, blade-free laser suites, advanced vitreoretinal diagnostics" },
    { icon: Shield, title: "Exceptional Value & Predictable Costs", desc: "Premium equipment from the West at highly competitive packages locked in stable global currencies" },
    { icon: Users, title: "Dedicated International Liaison Desk", desc: "Swift visa documentation support to airport reception for seamless experience" },
    { icon: Award, title: "40+ Years Excellence", desc: "Trusted clinical heritage and proven expertise" },
  ];

  const procedures = [
    { title: "Premium Cataract Surgery", desc: "Stitchless micro-incision with advanced IOL options" },
    { title: "Diabetic & Retinal Care", desc: "Laser therapy, anti-VEGF injections, vitrectomy" },
    { title: "Glaucoma Management", desc: "Advanced diagnostics and treatments" },
    { title: "LASIK & Custom Refractive", desc: "Blade-free technology for refractive errors" },
  ];

  const steps = [
    { number: "01", title: "Digital Consultation", desc: "Share optical scans, prescriptions via WhatsApp/Email" },
    { number: "02", title: "Medical Visa Invitation", desc: "Priority letter to Indian Embassy in Yangon" },
    { number: "03", title: "Airport Reception", desc: "Executive transit to accommodation or facility" },
    { number: "04", title: "Treatment & Follow-up", desc: "Advanced care with discharge documentation" },
  ];

  const faqs = [
    {
      q: "Can I get a medical visa invite letter from Vijaya Eye Clinic for the Indian Embassy in Yangon?",
      a: "Yes. Once you share your passport copies and medical reports, our international desk will issue a priority Medical Visa Invitation Letter within 24 to 48 hours."
    },
    {
      q: "How many days do I need to stay in Bangalore for cataract surgery?",
      a: "For a single eye, the procedure takes 3-4 days. For both eyes, we recommend 7-10 days to allow safe intervals between procedures."
    },
    {
      q: "Is language going to be a barrier during my treatment?",
      a: "Not at all. Our entire clinical team, including senior surgeons, communicates fluently in English. Our international coordinators guide you throughout."
    },
    {
      q: "Do you offer long-stay accommodations suitable for family members traveling from Myanmar?",
      a: "Yes. We have premium serviced apartments and hotels near our Vijayanagar and Nagadevanahalli branches with functional kitchens for your comfort."
    },
    {
      q: "How are payment modes handled for international packages?",
      a: "All pricing packages are in USD/INR to prevent currency conversion issues. Payments via major credit cards, wire transfers, or cash exchange."
    },
    {
      q: "What follow-up care is available after I return to Myanmar?",
      a: "Continuous monitoring through scheduled digital follow-up consultations via WhatsApp or Zoom with our lead surgeons."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Eye Hospital in Bangalore for Myanmar Patients | Vijaya Eye Clinic</title>
        <meta name="description" content="Premium, world-class eye surgery in Bangalore, India for patients from Myanmar (Yangon, Mandalay). Advanced Cataract, LASIK, and Retinal care at Vijaya Eye Clinic with medical visa support." />
        <meta name="keywords" content="best eye hospital in bangalore for myanmar patients, eye surgery cost in india from yangon, cataract surgery bangalore vijaya eye clinic, cornea transplant price india mmk" />
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced, Affordable Eye Care for Patients from Myanmar</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">From Yangon, Mandalay, Naypyidaw seeking life-changing vision restoration</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => window.location.href = "tel:08026721818"} size="lg" variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8"><Phone className="w-4 h-4 mr-2" />Call Our Team</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">Every year, numerous families from Myanmar travel to Bangalore for definitive, life-changing vision restoration.</p>
            <p className="text-lg text-gray-700">At <strong>Vijaya Eye Clinic</strong>, we bring over 40 years of trusted clinical excellence across two state-of-the-art super-specialty facilities in Bangalore: our flagship hub in <strong>Vijayanagar</strong> and our ultra-modern center in <strong>Nagadevanahalli</strong>.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Patients from Myanmar Choose Vijaya Eye Clinic, Bangalore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((adv, idx) => (
                <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-white p-8 rounded-lg shadow-md">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Specialized Eye Treatments</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Your Journey from Myanmar to Vijaya Eye Clinic</h2>
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
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Vijayanagar</h3><p className="text-gray-700">Flagship super-specialty center with advanced facilities.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli</h3><p className="text-gray-700">Ultra-modern facility with state-of-the-art technology.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.details key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="group p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-400 transition-all cursor-pointer">
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

        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Premium Eye Care?</h2>
            <p className="text-lg text-blue-100 mb-8">Join Myanmar patients for world-class vision restoration.</p>
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
      </div>
      <Footer />
    </>
  );
};

export default MyanmarLanding;

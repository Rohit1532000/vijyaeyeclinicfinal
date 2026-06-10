import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Phone, Mail, MapPin, Award, TrendingUp, Shield, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const KenyaLanding = () => {
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
      title: "Cutting-Edge Diagnostics for Keratoconus & Retina",
      desc: "Advanced Collagen Cross-Linking (C3R) and specialized lens fittings"
    },
    {
      icon: Shield,
      title: "60% Savings vs. Nairobi Clinics",
      desc: "Highly affordable in Kenyan Shillings (KES)"
    },
    {
      icon: Users,
      title: "Direct Flights & Easy Logistics",
      desc: "Regular connections from Jomo Kenyatta Int'l Airport (NBO)"
    },
    {
      icon: Award,
      title: "40+ Years Excellence",
      desc: "Trusted expertise and world-class facilities"
    },
  ];

  const procedures = [
    {
      title: "Micro-Incision Cataract Surgery (MICS)",
      desc: "Premium IOL implants through stitchless, 10-minute procedures"
    },
    {
      title: "Diabetic Retinopathy Management",
      desc: "Advanced laser therapy and anti-VEGF injections"
    },
    {
      title: "Advanced Glaucoma Care",
      desc: "Early-stage diagnostics and micro-shunting surgeries"
    },
    {
      title: "Refractive & Premium LASIK",
      desc: "Blade-free vision correction for all prescriptions"
    },
  ];

  const costComparison = [
    {
      procedure: "Premium Cataract Surgery",
      location1: "High out-of-pocket in Kenya",
      location2: "Extremely Competitive with Global Quality"
    },
    {
      procedure: "Advanced Retinal/Vitrectomy Surgery",
      location1: "Limited super-specialists available",
      location2: "State-of-the-art infrastructure available daily"
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Free Digital Consultation",
      desc: "Share your optician's reports via WhatsApp. Our specialists will map out a treatment plan and cost estimate."
    },
    {
      number: "02",
      title: "Visa Assistance",
      desc: "We issue an official Medical Visa Invitation Letter to speed up processing at the Indian High Commission in Nairobi."
    },
    {
      number: "03",
      title: "Airport Pickup & Transfer",
      desc: "We greet you at Bangalore Airport (BLR) and drive you safely to our Vijayanagar or Nagadevanahalli facility."
    },
    {
      number: "04",
      title: "Post-Op Telemedicine",
      desc: "Enjoy free follow-up consultations via WhatsApp video once you return home to Kenya."
    },
  ];

  const faqs = [
    {
      question: "What is the typical stay duration in Bangalore?",
      answer: "Simple procedures require 3-5 days, while complex surgeries need 7-14 days including follow-up visits. For Kenyan patients, we optimize timings to align with flight schedules."
    },
    {
      question: "Can you help with travel arrangements from Nairobi?",
      answer: "Yes, our international team coordinates flights from Jomo Kenyatta Int'l Airport (NBO) and arranges all ground transportation in Bangalore."
    },
    {
      question: "What languages are spoken at your clinic?",
      answer: "Our staff speaks English, Hindi, and regional Indian languages. We also provide professional English interpreters for consultations."
    },
    {
      question: "How soon can I return to work after surgery?",
      answer: "Most Kenyan patients can resume desk work within 3-5 days. Strenuous activities are typically cleared after 2-3 weeks depending on the procedure."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Top Eye Hospital in Bangalore for Kenyan Patients | Vijaya Eye Clinic</title>
        <meta name="description" content="Affordable, world-class eye surgery in Bangalore, India for patients from Kenya. Advanced Cataract, LASIK, and Retinal care at Vijaya Eye Clinic. Get your medical visa invite fast." />
        <meta name="keywords" content="best eye hospital in bangalore for kenyan patients, eye surgery cost in india from kenya, affordable cataract surgery bangalore, keratoconus treatment india price ksh" />
        <meta property="og:title" content="Top Eye Hospital in Bangalore for Kenyan Patients | Vijaya Eye Clinic" />
        <meta property="og:description" content="Affordable, world-class eye surgery in Bangalore, India for patients from Kenya. Advanced Cataract, LASIK, and Retinal care at Vijaya Eye Clinic." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Eye Hospital in Bangalore for Kenyan Patients | Vijaya Eye Clinic" />
        <meta name="twitter:description" content="Affordable, world-class eye surgery in Bangalore, India for patients from Kenya." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Vijaya Eye Clinic - Kenya Patients",
            "description": "World-class eye care for Kenyan patients in Bangalore, India",
            "telephone": "08026721818",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "08026721818",
              "areaServed": "KE"
            }
          }`}
        </script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Affordable, Advanced Eye Care in Bangalore, India for Patients from Kenya
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 mb-8"
            >
              Are you looking for specialized eye care, advanced corneal treatments, or retinal surgeries that face long wait times or high costs in Nairobi, Mombasa, or Kisumu? Every year, hundreds of patients from Kenya travel to Bangalore to restore their vision at Vijaya Eye Clinic.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigate('/contact-us')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              >
                Get Free Medical Consultation
              </Button>
              <Button
                onClick={() => window.location.href = "tel:08026721818"}
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-blue-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Our Team
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With over 40 years of clinical legacy, we operate two world-class super-specialty facilities in Bangalore: our flagship hub in <strong>Vijayanagar</strong> and our ultra-modern center in <strong>Nagadevanahalli</strong>. We provide premium diagnostic and surgical interventions at a fraction of the cost of private healthcare in East Africa.
            </p>
          </div>
        </motion.section>

        {/* Why Choose Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Why Kenyan Patients Choose Vijaya Eye Clinic, Bangalore
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Bangalore has established itself as the healthcare capital of India, combining highly skilled surgeons with cutting-edge technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((adv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <adv.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{adv.title}</h3>
                  <p className="text-gray-600">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Procedures Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Specialized Eye Treatments & Surgical Procedures
            </h2>
            <p className="text-center text-gray-600 mb-12">
              We provide comprehensive super-specialty eye care tailored to your specific health needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {procedures.map((proc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: idx % 2 === 0 ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{proc.title}</h3>
                  <p className="text-gray-600">{proc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Cost Comparison */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Direct Cost Comparison: Kenya vs. Bangalore, India
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Save significantly on premium treatments when converting from Kenyan Shillings (KES).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-6 py-4 text-left">Procedure Type</th>
                    <th className="px-6 py-4 text-left">Kenya Private Cost</th>
                    <th className="px-6 py-4 text-left">Vijaya Eye Clinic, Bangalore</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.procedure}</td>
                      <td className="px-6 py-4 text-gray-700">{item.location1}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{item.location2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Journey Steps */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Your Journey: From Nairobi to Bangalore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md relative"
                >
                  <div className="absolute top-4 right-4 text-5xl font-bold text-blue-100">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Branches Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Bangalore Centers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vijayanagar Branch</h3>
                <p className="text-gray-700 mb-4">Our flagship super-specialty center featuring state-of-the-art diagnostic facilities and premium surgical suites.</p>
                <p className="text-sm text-gray-600">Serving thousands of international patients with excellence</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-lg">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli Branch</h3>
                <p className="text-gray-700 mb-4">Our modern ring-road facility offering comprehensive eye care in a tranquil recovery environment.</p>
                <p className="text-sm text-gray-600">Perfect for peaceful recovery and follow-up care</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Restore Your Vision?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join hundreds of Kenyan patients who have experienced world-class eye care at Vijaya Eye Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={() => navigate('/contact-us')}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8"
              >
                Get Free Medical Consultation
              </Button>
              <Button
                onClick={() => navigate('/appointment-booking')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Start Your Journey
              </Button>
            </div>

            {/* Contact Details */}
            <div className="bg-blue-800 p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <p className="text-sm text-blue-100 mb-2">Call us</p>
                  <p
                    className="font-semibold cursor-pointer hover:text-blue-100 transition"
                    onClick={() => window.location.href = "tel:08026721818"}
                  >
                    08026721818
                  </p>
                </div>
                <div>
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <p className="text-sm text-blue-100 mb-2">WhatsApp</p>
                  <p
                    className="font-semibold cursor-pointer hover:text-blue-100 transition"
                    onClick={() => window.location.href = "https://wa.me/919739302523"}
                  >
                    +91 9739302523
                  </p>
                </div>
                <div>
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <p className="text-sm text-blue-100 mb-2">Email</p>
                  <p
                    className="font-semibold cursor-pointer hover:text-blue-100 transition"
                    onClick={() => copyToClipboard('care@vijayaeyeclinic.com')}
                  >
                    {copied ? "Copied!" : "care@vijayaeyeclinic.com"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default KenyaLanding;
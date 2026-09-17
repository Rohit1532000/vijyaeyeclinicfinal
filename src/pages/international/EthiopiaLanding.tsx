import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, TrendingUp, Shield, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const EthiopiaLanding = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    { icon: TrendingUp, title: "Advanced Treatment for Corneal Diseases", desc: "Deep corneal infections and scarring with advanced therapies" },
    { icon: Shield, title: "Great Cost Benefits", desc: "Premium eye care packages for medical travel budget" },
    { icon: Users, title: "Dedicated International Desk", desc: "Multilingual coordinators for every step" },
    { icon: Award, title: "40+ Years Excellence", desc: "World-class medical expertise" },
  ];

  const procedures = [
    { title: "Precision Cataract Surgery", desc: "Stitchless phacoemulsification with premium lenses" },
    { title: "Comprehensive Glaucoma Care", desc: "High-definition OCT and customized treatment plans" },
    { title: "Corneal Disease Treatment", desc: "Advanced therapies for complex corneal conditions" },
    { title: "Retinal Surgery", desc: "Advanced diagnostic and surgical interventions" },
  ];

  const steps = [
    { number: "01", title: "Medical Consultation", desc: "Share your current eye condition details via WhatsApp" },
    { number: "02", title: "Visa Invitation", desc: "Official medical visa invitation letter provided quickly" },
    { number: "03", title: "Accommodation", desc: "Comfortable stays near Vijayanagar or Nagadevanahalli" },
    { number: "04", title: "Recovery Support", desc: "Full support during healing and follow-ups" },
  ];

  const faqs = [
    {
      q: "How long should I plan to stay in Bangalore?",
      a: "Most procedures require 5-10 days including pre-operative evaluations and post-operative follow-ups. We coordinate with flight schedules from Addis Ababa."
    },
    {
      q: "Can you assist with flights from Addis Ababa?",
      a: "Yes, our team arranges flights from Addis Ababa Bole International Airport and provides airport pickup services."
    },
    {
      q: "What payment options are available?",
      a: "We offer flexible payment plans with transparent pricing in USD/INR to protect against currency fluctuations."
    },
    {
      q: "Is accommodation included in surgical packages?",
      a: "We arrange quality serviced apartments near our facilities with kitchens and all modern amenities."
    },
    {
      q: "What support do I get after returning to Ethiopia?",
      a: "Complete post-operative care through virtual consultations and WhatsApp monitoring of your recovery."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Eye Surgery in Bangalore for Ethiopian Patients</title>
        <meta name="description" content="Affordable, high-success eye care in Bangalore, India for patients from Ethiopia." />
      <link rel="alternate" hrefLang="en-et" href="https://vijayaeyeclinic.com/international/ethiopia" />
<link rel="alternate" hrefLang="en" href="https://vijayaeyeclinic.com/international/ethiopia" />
<link rel="alternate" hrefLang="x-default" href="https://vijayaeyeclinic.com/international/ethiopia" />
      <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://vijayaeyeclinic.com/#medicalclinic",
      "name": "Vijaya Eye Clinic Super Speciality Eye Hospital",
      "url": "https://vijayaeyeclinic.com/",
      "logo": "https://vijayaeyeclinic.com/wp-content/uploads/logo.png",
      "image": "https://vijayaeyeclinic.com/wp-content/uploads/2024/05/vijaya-eye-clinic.jpg",
      "description": "Vijaya Eye Clinic Super Speciality Eye Hospital offers advanced eye surgery in Bangalore for Ethiopian patients, including cataract surgery, LASIK, retina treatment, cornea treatment, glaucoma treatment, pediatric ophthalmology, and comprehensive eye care with dedicated international patient services.",
      "telephone": "+91-80-23356953",
      "email": "hello@vijayaeyeclinic.com",
      "medicalSpecialty": [
        "Ophthalmology"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PV Plaza, #2, 5th Main Road, MC Layout, Opp. Sarvajna Bus Stop, Govindarajanagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560040",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Ethiopia"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "Advanced Cataract Surgery"
        },
        {
          "@type": "MedicalProcedure",
          "name": "LASIK & Refractive Surgery"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Retina Surgery"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cornea Treatment"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Glaucoma Treatment"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Vitrectomy Surgery"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Pediatric Eye Care"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://vijayaeyeclinic.com/international/ethiopia/#webpage",
      "url": "https://vijayaeyeclinic.com/international/ethiopia",
      "name": "Advanced Eye Surgery in Bangalore for Ethiopian Patients | Vijaya Eye Clinic",
      "headline": "Advanced Eye Surgery in Bangalore for Ethiopian Patients",
      "description": "Travel from Ethiopia to Vijaya Eye Clinic in Bangalore for advanced eye surgery, cataract treatment, LASIK, retina care, cornea treatment, glaucoma management, and comprehensive ophthalmology with international patient support.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://vijayaeyeclinic.com/#website"
      },
      "about": {
        "@id": "https://vijayaeyeclinic.com/#medicalclinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://vijayaeyeclinic.com/wp-content/uploads/2024/05/vijaya-eye-clinic.jpg"
      },
      "mainEntity": {
        "@id": "https://vijayaeyeclinic.com/#medicalclinic"
      },
      "keywords": [
        "Advanced Eye Surgery in Bangalore for Ethiopian Patients",
        "Eye Hospital in Bangalore for Ethiopian Patients",
        "Cataract Surgery in India",
        "LASIK Surgery Bangalore",
        "Retina Specialist Bangalore",
        "Cornea Treatment India",
        "International Eye Care",
        "Medical Tourism India",
        "Eye Treatment for Ethiopian Patients"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://vijayaeyeclinic.com/international/ethiopia/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vijayaeyeclinic.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "International Patients",
          "item": "https://vijayaeyeclinic.com/international/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ethiopia",
          "item": "https://vijayaeyeclinic.com/international/ethiopia"
        }
      ]
    }
  ]
}
      `}</script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">World-Class Eye Care for Patients from Ethiopia</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">From Addis Ababa, Hawassa, and Dire Dawa seeking advanced treatments for complex corneal diseases.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => window.location.href = "tel:08026721818"} size="lg" variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8"><Phone className="w-4 h-4 mr-2" />Call Our Team</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">With over 40 years of medical excellence, our modern centers in <strong>Vijayanagar</strong> and <strong>Nagadevanahalli</strong> offer advanced vision solutions.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Ethiopian Patients Trust Vijaya Eye Clinic</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Core Medical Specialties</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Your Travel Details from Ethiopia</h2>
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
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Vijayanagar</h3><p className="text-gray-700">State-of-the-art super-specialty center with advanced infrastructure.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli</h3><p className="text-gray-700">Modern facility for comprehensive and peaceful recovery.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Restore Your Vision Today</h2>
            <p className="text-lg text-blue-100 mb-8">Experience world-class eye care at Vijaya Eye Clinic.</p>
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

export default EthiopiaLanding;

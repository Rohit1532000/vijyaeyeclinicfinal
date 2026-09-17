import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, TrendingUp, Shield, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const IndonesiaLanding = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    { icon: TrendingUp, title: "Next-Gen Tech Infrastructure", desc: "High-end micro-incision surgeries, premium German/US IOL implants, blade-free laser suites, advanced diagnostics" },
    { icon: Shield, title: "Exceptional Value & Quality", desc: "Premium equipment identical to top US/European clinics at optimized pricing" },
    { icon: Users, title: "Frictionless Logistics", desc: "International help desk with direct visa processing, hospitality arrangements, airport transfers" },
    { icon: Award, title: "40+ Years Excellence", desc: "Complex, high-precision eye surgery expertise" },
  ];

  const procedures = [
    { title: "Premium Cataract Surgery", desc: "Advanced IOL options with stitchless micro-incision" },
    { title: "Diabetic & Retinal Care", desc: "Laser therapy, anti-VEGF injections, advanced vitrectomy" },
    { title: "Glaucoma Management", desc: "Precision diagnostics and treatments" },
    { title: "LASIK & Custom Refractive", desc: "Blade-free technology for refractive errors" },
  ];

  const steps = [
    { number: "01", title: "Digital Consultation", desc: "Share optical scans via WhatsApp/Email" },
    { number: "02", title: "Medical Visa Invitation", desc: "Processing through Indian Embassy in Jakarta or Medan" },
    { number: "03", title: "Airport Reception", desc: "Executive transit to accommodation or facility" },
    { number: "04", title: "Treatment & Follow-up", desc: "Advanced care with discharge documentation" },
  ];

  const faqs = [
    {
      q: "Do citizens of Indonesia need a visa to travel to India for eye surgery?",
      a: "Yes, a Medical Visa is required. We provide a fast-track Medical Visa Invitation Letter to submit to the Indian Embassy in Jakarta."
    },
    {
      q: "Can I get a cost estimate before I book my flights from Jakarta?",
      a: "Yes, absolutely. Send your optical scans or case documents via WhatsApp. Our specialists provide transparent cost estimates for budgeting."
    },
    {
      q: "What types of surgeries do you specialize in at Vijaya Eye Clinic?",
      a: "Advanced Micro-incision Cataract Surgery (Phacoemulsification), Premium LASIK, Glaucoma Shunting, and Complex Vitreoretinal surgery."
    },
    {
      q: "Are there language translators available at the hospital?",
      a: "Our clinical team speaks fluent English. We also provide dedicated international guides through all administrative and therapeutic steps."
    },
    {
      q: "What kind of dietary and accommodation options are available near the clinic?",
      a: "We arrange bookings in serviced apartments featuring functional private kitchens for your exact taste preferences."
    },
    {
      q: "What happens if I require a follow-up once I return to Indonesia?",
      a: "Comprehensive post-discharge tele-health connectivity. Schedule virtual reviews over Zoom or WhatsApp directly with your specialist."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Eye Hospital in Bangalore for Indonesian Patients | Vijaya Eye Clinic</title>
        <meta name="description" content="Best Eye Hospital in Bangalore (India) for Indonesian patients. Vijaya Eye Clinic offers advanced eye treatments, expert surgeons & personalized care." />
        <meta name="keywords" content="best eye hospital in bangalore for indonesian patients, advanced eye surgery in india from jakarta, cataract surgery bangalore vijaya eye clinic, premium lasik cost india indonesia" />
      <link rel="alternate" hrefLang="en-ID" href="https://vijayaeyeclinic.com/international/indonesia/" />
<link rel="alternate" hrefLang="x-default" href="https://vijayaeyeclinic.com/international/indonesia/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Hospital",
                "@id": "https://vijayaeyeclinic.com/#hospital",
                "name": "Vijaya Eye Clinic Super Speciality Eye Hospital",
                "url": "https://vijayaeyeclinic.com/",
                "image": "https://vijayaeyeclinic.com/wp-content/uploads/2024/01/logo.png",
                "telephone": "+91-80-23356953",
                "email": "hello@vijayaeyeclinic.com",
                "priceRange": "$$",
                "description": "Vijaya Eye Clinic is a leading eye hospital in Bangalore, India, providing advanced ophthalmology treatments for Indonesian patients including cataract surgery, LASIK, retina care, cornea treatment, glaucoma treatment, pediatric ophthalmology and comprehensive eye care.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "No.46, 17th Cross, MC Layout, Vijayanagar",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560040",
                  "addressCountry": "IN"
                },
                "medicalSpecialty": [
                  "Ophthalmology",
                  "Cataract Surgery",
                  "LASIK",
                  "Retina Treatment",
                  "Cornea Treatment",
                  "Glaucoma Treatment",
                  "Pediatric Ophthalmology",
                  "Vitrectomy Surgery"
                ],
                "availableService": [
                  {
                    "@type": "MedicalTherapy",
                    "name": "International Eye Treatment for Indonesian Patients"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Cataract Surgery"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "LASIK Eye Surgery"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Retina Treatment"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Glaucoma Treatment"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/vijayaeyeclinic",
                  "https://www.instagram.com/vijayaeyeclinic"
                ]
              },
              {
                "@type": "MedicalWebPage",
                "@id": "https://vijayaeyeclinic.com/international/indonesia/#webpage",
                "url": "https://vijayaeyeclinic.com/international/indonesia",
                "name": "Best Eye Hospital in Bangalore (India) for Indonesian Patients | Vijaya Eye Clinic",
                "headline": "Best Eye Hospital in Bangalore (India) for Indonesian Patients",
                "description": "Vijaya Eye Clinic offers world-class eye care services for Indonesian patients travelling to Bangalore, India. We provide advanced treatments for cataracts, LASIK, retina disorders, glaucoma, cornea diseases and comprehensive ophthalmology with dedicated international patient support.",
                "isPartOf": {
                  "@id": "https://vijayaeyeclinic.com/#website"
                },
                "about": {
                  "@id": "https://vijayaeyeclinic.com/#hospital"
                },
                "inLanguage": "en",
                "audience": {
                  "@type": "Audience",
                  "geographicArea": {
                    "@type": "Country",
                    "name": "Indonesia"
                  }
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://vijayaeyeclinic.com/wp-content/uploads/2024/01/logo.png"
                },
                "breadcrumb": {
                  "@id": "https://vijayaeyeclinic.com/international/indonesia/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://vijayaeyeclinic.com/international/indonesia/#breadcrumb",
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
                    "name": "Indonesia",
                    "item": "https://vijayaeyeclinic.com/international/indonesia"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://vijayaeyeclinic.com/#website",
                "url": "https://vijayaeyeclinic.com/",
                "name": "Vijaya Eye Clinic",
                "publisher": {
                  "@id": "https://vijayaeyeclinic.com/#hospital"
                }
              }
            ]
          })
        }}
      />
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced, Premium Eye Care for Patients from Indonesia</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">From Jakarta, Surabaya, Medan, Bandung seeking elite-level vision restoration</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => window.location.href = "tel:08026721818"} size="lg" variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8"><Phone className="w-4 h-4 mr-2" />Call Our Team</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">Every year, patients from Jakarta, Surabaya, Medan, Bandung, and across Indonesia choose Bangalore for definitive, elite-level vision restoration.</p>
            <p className="text-lg text-gray-700">At <strong>Vijaya Eye Clinic</strong>, we bring over 40 years of trusted clinical excellence across two state-of-the-art super-specialty facilities in Bangalore: our central flagship hub in <strong>Vijayanagar</strong> and our ultra-modern center in <strong>Nagadevanahalli</strong>.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Patients from Indonesia Choose Vijaya Eye Clinic, Bangalore</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Your Journey from Indonesia to Vijaya Eye Clinic</h2>
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
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Vijayanagar</h3><p className="text-gray-700">Flagship super-specialty center.</p></div>
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli</h3><p className="text-gray-700">Ultra-modern facility.</p></div>
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
            <p className="text-lg text-blue-100 mb-8">Join Indonesian patients for world-class vision restoration.</p>
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

export default IndonesiaLanding;

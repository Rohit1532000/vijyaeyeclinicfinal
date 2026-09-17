import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, TrendingUp, Shield, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const CambodiaLanding = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    { icon: TrendingUp, title: "Advanced Technology Suites", desc: "High-end micro-incision surgeries, premium Monofocal/Multifocal/Toric IOLs from Zeiss and Alcon" },
    { icon: Shield, title: "Massive Cost Optimization", desc: "Identical surgical devices and clinical care from Western nations at significantly lower cost" },
    { icon: Users, title: "Full Hospitality Support", desc: "Frictionless visa documentation assistance to custom lodging arrangements" },
    { icon: Award, title: "40+ Years Excellence", desc: "Clinical heritage spanning specialized super-specialty facilities" },
  ];

  const procedures = [
    { title: "Premium Cataract Surgery", desc: "Advanced IOL options with stitchless micro-incision" },
    { title: "Diabetic & Retinal Care", desc: "Laser therapy, anti-VEGF injections, advanced vitrectomy" },
    { title: "Glaucoma Management", desc: "Precision diagnostics and treatments" },
    { title: "LASIK & Custom Refractive", desc: "Blade-free technology for refractive errors" },
  ];

  const steps = [
    { number: "01", title: "Digital Consultation", desc: "Share optical scans via WhatsApp/Email" },
    { number: "02", title: "Medical Visa Invitation", desc: "Swift processing through Indian Embassy in Phnom Penh" },
    { number: "03", title: "Airport Reception", desc: "Executive transit to accommodation or facility" },
    { number: "04", title: "Treatment & Follow-up", desc: "Advanced care with full documentation" },
  ];

  const faqs = [
    {
      q: "How do I initiate my medical travel from Cambodia to Vijaya Eye Clinic?",
      a: "Simply share your recent optical prescriptions or diagnostic reports via email or WhatsApp. Our medical board will review and send you a customized care outline and budget."
    },
    {
      q: "Can the hospital assist me in getting an Indian Medical Visa in Phnom Penh?",
      a: "Yes. We provide an official Medical Visa Invitation Letter on hospital letterhead that you can submit directly to the Indian Embassy in Phnom Penh."
    },
    {
      q: "Are the costs of premium lenses lower at Vijaya Eye Clinic compared to Western countries?",
      a: "Yes. Premium US and German-manufactured IOLs are available here at 60-80% lower cost than in the West or regional private hubs."
    },
    {
      q: "What types of specialized accommodation do you recommend?",
      a: "We offer direct assistance booking serviced apartments near our facilities with private kitchens for custom meals."
    },
    {
      q: "Is it safe to fly back immediately after undergoing eye surgery?",
      a: "Our advanced stitchless, micro-incision techniques require minimal downtime. We provide fit-to-fly certificates within 3-5 days."
    },
    {
      q: "How do I contact my surgeon once I return to Cambodia?",
      a: "We offer continuous care with scheduled telehealth consults via Zoom or WhatsApp video calls with your treating physician."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Eye Hospital in Bangalore for Cambodian Patients | Vijaya Eye Clinic</title>
        <meta name="description" content="Premium, world-class eye surgery in Bangalore, India for patients from Cambodia. Specialized Cataract, Glaucoma, and Retina care at Vijaya Eye Clinic. Apply for a medical visa invite online." />
        <meta name="keywords" content="best eye hospital in bangalore for cambodian patients, advanced eye surgery in india from phnom penh, cataract surgery bangalore vijaya eye clinic, cornea transplant india price cambodia" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/international/cambodia" />

<link rel="alternate"
      hrefLang="en-kh"
      href="https://vijayaeyeclinic.com/international/cambodia" />

<link rel="alternate"
      hrefLang="x-default"
      href="https://vijayaeyeclinic.com/international/cambodia" />
      <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://vijayaeyeclinic.com/#medicalclinic",
      "name": "Vijaya Eye Clinic",
      "url": "https://vijayaeyeclinic.com/",
      "image": "https://vijayaeyeclinic.com/wp-content/uploads/2024/01/logo.png",
      "logo": "https://vijayaeyeclinic.com/wp-content/uploads/2024/01/logo.png",
      "description": "Vijaya Eye Clinic is a leading super speciality eye hospital in Bangalore, India, offering advanced eye treatments for Cambodian patients including cataract surgery, LASIK, retina care, glaucoma treatment, cornea treatment, pediatric ophthalmology, oculoplasty, diabetic eye care and comprehensive eye examinations.",
      "telephone": "+91-9739302523",
      "email": "hello@vijayaeyeclinic.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PV Plaza, #2, 5th Main Road, MC Layout, Opp. Sarvajna Bus Stop, Vijayanagar",
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
        "Glaucoma Treatment",
        "Cornea Treatment",
        "Pediatric Ophthalmology",
        "Oculoplasty",
        "Diabetic Eye Care"
      ],
      "areaServed": [
        {
          "@type": "Country",
          "name": "Cambodia"
        },
        {
          "@type": "City",
          "name": "Bangalore"
        }
      ],
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Eye Care for Cambodian Patients"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Cataract Surgery"
        },
        {
          "@type": "MedicalProcedure",
          "name": "LASIK Surgery"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Retina Treatment"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Glaucoma Treatment"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://vijayaeyeclinic.com/international/cambodia#webpage",
      "url": "https://vijayaeyeclinic.com/international/cambodia",
      "name": "Best Eye Hospital in Bangalore for Cambodian Patients | Vijaya Eye Clinic",
      "headline": "Best Eye Hospital in Bangalore for Cambodian Patients",
      "description": "Vijaya Eye Clinic offers advanced eye care, cataract surgery, LASIK, retina treatment, glaucoma treatment and comprehensive ophthalmology services for Cambodian patients travelling to Bangalore, India.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://vijayaeyeclinic.com/#website"
      },
      "about": {
        "@id": "https://vijayaeyeclinic.com/#medicalclinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://vijayaeyeclinic.com/wp-content/uploads/2024/01/logo.png"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
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
            "name": "Cambodia",
            "item": "https://vijayaeyeclinic.com/international/cambodia"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://vijayaeyeclinic.com/#website",
      "url": "https://vijayaeyeclinic.com/",
      "name": "Vijaya Eye Clinic",
      "publisher": {
        "@id": "https://vijayaeyeclinic.com/#medicalclinic"
      }
    }
  ]
}`}
</script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced, World-Class Eye Care for Patients from Cambodia</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">From Phnom Penh, Siem Reap, Battambang seeking life-changing vision care</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact-us')} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get Free Medical Consultation</Button>
              <Button onClick={() => window.location.href = "tel:08026721818"} size="lg" variant="outline" className="text-black border-black hover:bg-black hover:text-white px-8"><Phone className="w-4 h-4 mr-2" />Call Our Team</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">Every year, families from Phnom Penh, Siem Reap, Battambang, and across Cambodia travel to Bangalore for life-changing vision care.</p>
            <p className="text-lg text-gray-700">At <strong>Vijaya Eye Clinic</strong>, we offer over 40 years of clinical excellence spanning two state-of-the-art super-specialty facilities in Bangalore: our main hub in <strong>Vijayanagar</strong> and our modern center in <strong>Nagadevanahalli</strong>.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Cambodian Patients Choose Vijaya Eye Clinic, Bangalore</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Your Journey from Cambodia to Vijaya Eye Clinic</h2>
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
              <div className="bg-white p-8 rounded-lg shadow-md"><MapPin className="w-8 h-8 text-blue-600 mb-4" /><h3 className="text-2xl font-bold text-gray-900 mb-4">Nagadevanahalli</h3><p className="text-gray-700">Modern super-specialty facility.</p></div>
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
            <p className="text-lg text-blue-100 mb-8">Join Cambodian patients for world-class vision care.</p>
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

export default CambodiaLanding;

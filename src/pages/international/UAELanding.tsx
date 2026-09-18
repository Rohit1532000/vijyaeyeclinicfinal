import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Shield,
  Users,
  Award,
  ChevronRight,
  Plane,
  Eye,
  CheckCircle,
  Activity,
  Layers,
  Sparkles,
  Baby,
  Smile,
  Scissors
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const uaeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hospital",
      "@id": "https://vijayaeyeclinic.com/#hospital",
      "name": "Vijaya Eye Clinic Super Specialty Eye Hospital",
      "alternateName": [
        "Best Eye Hospital in Bangalore for UAE Patients",
        "Top Eye Hospital for UAE Patients in India",
        "Advanced eye surgery in india from dubai"
      ],
      "url": "https://vijayaeyeclinic.com/international/uae",
      "image": "https://vijayaeyeclinic.com/logo.png",
      "telephone": "+91-9739302523",
      "email": "care@vijayaeyeclinic.com",
      "priceRange": "$$",
      "description": "Vijaya Eye Clinic is a leading super specialty eye hospital in Bangalore, India providing advanced cataract surgery, LASIK, retina vitrectomy, cornea transplant, glaucoma management, pediatric ophthalmology, squint realignment, and oculoplasty for international patients from the UAE (Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah).",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PV Plaza, #2, 5th Main Road, MC Layout, Opp. Sarvajna Bus Stop, Vijayanagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560040",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "availableLanguage": ["English", "Arabic", "Hindi"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose cataract surgery bangalore vijaya eye clinic for UAE patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients from Dubai, Abu Dhabi, and Sharjah choose Vijaya Eye Clinic for stitchless micro-incision phacoemulsification, imported Zeiss and Alcon multifocal and toric IOL implants, and comprehensive surgical packages delivering 60% to 75% cost savings compared to private UAE healthcare."
          }
        },
        {
          "@type": "Question",
          "name": "How does Vijaya Eye Clinic assist with Indian Medical Visa paperwork in Dubai or Abu Dhabi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon reviewing your optical scans and passport copies via WhatsApp or email, our international desk prepares an official hospital Medical Visa Invitation Letter within 24 hours for priority submission to the Embassy of India in Abu Dhabi or the Consulate General in Dubai."
          }
        },
        {
          "@type": "Question",
          "name": "How long should a patient from the UAE plan to stay in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For blade-free LASIK or micro-incision cataract surgery, a 4 to 6 day stay is ideal. Complex vitreoretinal repairs, corneal transplants, or glaucoma shunts may require 10 to 14 days before flight fitness clearance is granted."
          }
        },
        {
          "@type": "Question",
          "name": "Are Arabic translators and serviced apartments with kitchens available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide dedicated Arabic-speaking patient coordinators, and both our Vijayanagar and Nagadevanahalli facilities are surrounded by partner serviced apartments with private kitchens for familiar meal preparation."
          }
        }
      ]
    }
  ]
};

const UAELanding = () => {
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
      title: "Next-Gen Tech Infrastructure",
      desc: "Micro-incision surgeries, premium German/US IOL implants, blade-free laser suites, and high-definition Spectral OCT."
    },
    {
      icon: Shield,
      title: "Exceptional Value & Quality",
      desc: "US-FDA approved platforms offering 60% to 75% cost savings with transparent package billing in USD/INR."
    },
    {
      icon: Users,
      title: "Direct Flight Connectivity & Concierge",
      desc: "Daily direct flights from Dubai (DXB) and Abu Dhabi (AUH) to Bangalore (BLR) with dedicated Arabic-speaking coordinators."
    },
    {
      icon: Award,
      title: "35+ Years Clinical Heritage",
      desc: "Proven clinical excellence and trusted surgical outcomes across anterior and posterior eye segments led by senior eye surgeons."
    },
  ];

  const treatmentSpecialities = [
    {
      icon: Eye,
      title: "Cataract Surgery in Bangalore for UAE Patients",
      desc: "Micro-Incision Cataract Surgery (MICS) with imported Toric, Multifocal, and Trifocal IOL implants from Alcon and Zeiss for total spectacle independence.",
      tag: "Daycare | 15 Mins"
    },
    {
      icon: Sparkles,
      title: "LASIK Surgery in Bangalore for UAE Patients",
      desc: "Blade-free Contoura Vision, Femto-LASIK, and EVO ICL phakic lens implants for permanent glasses removal with fast 24-hour visual recovery.",
      tag: "Specs Removal"
    },
    {
      icon: Activity,
      title: "Retina Treatment in Bangalore for UAE Patients",
      desc: "Comprehensive diabetic retinopathy management, anti-VEGF injections (Lucentis, Eylea), and 23G/25G sutureless vitrectomy for retinal detachment and macular hole.",
      tag: "Retina Specialist"
    },
    {
      icon: Layers,
      title: "Glaucoma Treatment in Bangalore for UAE Patients",
      desc: "Advanced optic nerve OCT screening, computerized visual field perimetry, Selective Laser Trabeculoplasty (SLT), and surgical trabeculectomy.",
      tag: "Vision Protection"
    },
    {
      icon: Shield,
      title: "Cornea Treatment in Bangalore for UAE Patients",
      desc: "Keratoconus C3R collagen cross-linking, emergency protocols for corneal ulcers, and authorized partial or full-thickness corneal transplant surgery.",
      tag: "Cornea Specialist"
    },
    {
      icon: Baby,
      title: "Pediatric Ophthalmology in Bangalore for UAE Patients",
      desc: "Gentle child eye exams, cycloplegic refraction, amblyopia lazy eye therapy, and pediatric cataract procedures in a warm environment.",
      tag: "Child Eye Care"
    },
    {
      icon: Smile,
      title: "Squint Eye Treatment in Bangalore for UAE Patients",
      desc: "Precision strabismus surgery for children and adults to realign visual axes, restore stereo 3D depth perception, and enhance facial balance.",
      tag: "Strabismus Surgery"
    },
    {
      icon: Scissors,
      title: "Oculoplasty Treatment in Bangalore for UAE Patients",
      desc: "Ptosis (drooping eyelid) correction, cosmetic blepharoplasty for loose eyelid skin removal, and DCR tear duct obstruction surgery.",
      tag: "Eyelid & Orbit"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Digital Consultation & Scan Review",
      desc: "Share optical scans or diagnostic files from Dubai, Abu Dhabi, or Sharjah via WhatsApp (+91 9739302523) for immediate preliminary evaluation and cost estimation."
    },
    {
      number: "02",
      title: "Medical Visa (V-Visa) Letter",
      desc: "Priority Medical Visa Invitation Letter prepared within 24 hours for expedited processing through the Embassy of India in Abu Dhabi or Consulate in Dubai."
    },
    {
      number: "03",
      title: "Airport Transit & Accommodation",
      desc: "Executive airport reception from Kempegowda International Airport (BLR) directly to verified partner serviced apartments with self-cooking kitchens."
    },
    {
      number: "04",
      title: "Clinical Treatment & Follow-up",
      desc: "Undergo advanced daycare microsurgery, receive a fit-to-fly certificate, and continue post-op virtual tele-consultations back home in the UAE."
    }
  ];

  const faqs = [
    {
      q: "How long will I need to stay in Bangalore?",
      a: "Most procedures require 4 to 6 days including diagnostics and initial recovery. Complex surgeries like vitrectomy, corneal transplants, or glaucoma shunts may need 10 to 14 days before flight fitness clearance is issued."
    },
    {
      q: "Can you arrange flights from Dubai or Abu Dhabi?",
      a: "Yes, multiple daily non-stop direct flights operate from Dubai (DXB), Abu Dhabi (AUH), and Sharjah (SHJ) to Bangalore (BLR) with flight times under 4 hours. Our team coordinates seamless reception and transport."
    },
    {
      q: "What payment options are available for UAE residents?",
      a: "We accept international credit cards, bank wire transfers, and currency exchange to USD or INR with transparent, itemized package pricing locked in stable global currencies."
    },
    {
      q: "Is accommodation included in treatment packages?",
      a: "We arrange partner serviced apartments and hotels near our Vijayanagar and Nagadevanahalli centers featuring private kitchens, allowing patients and families to prepare familiar meals."
    },
    {
      q: "What post-operative support is available after returning to UAE?",
      a: "We maintain continuous follow-up care through virtual tele-consultations over WhatsApp or Zoom, sharing optical records directly with your local ophthalmologist in the UAE."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Eye Hospital in Bangalore for UAE Patients | Vijaya Eye Clinic</title>
        <meta
          name="description"
          content="Elite, high-tech eye surgery in Bangalore, India for patients from the UAE (Dubai, Abu Dhabi, Sharjah). Advanced eye surgery in india from dubai, cataract, LASIK, retina & cornea care."
        />
        {/* Combined Keywords: Original + All 8 Core Procedures */}
        <meta
          name="keywords"
          content="best eye hospital in bangalore for uae patients, advanced eye surgery in india from dubai, cataract surgery bangalore vijaya eye clinic, premium lasik cost india uae, cataract surgery in bangalore for uae patients, lasik surgery in bangalore for uae patients, retina treatment in bangalore for uae patients, cornea treatment in bangalore for uae patients, glaucoma treatment in bangalore for uae patients, pediatric ophthalmology in bangalore for uae patients, squint eye treatment in bangalore for uae patients, oculoplasty treatment in bangalore for uae patients"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://vijayaeyeclinic.com/international/uae" />

        {/* 2-Way Cross-Referenced International Hreflangs */}
        <link rel="alternate" hrefLang="en-AE" href="https://vijayaeyeclinic.com/international/uae" />
        <link rel="alternate" hrefLang="en-BH" href="https://vijayaeyeclinic.com/international/bahrain" />
        <link rel="alternate" hrefLang="en-BD" href="https://vijayaeyeclinic.com/international/bangladesh" />
        <link rel="alternate" hrefLang="en-BW" href="https://vijayaeyeclinic.com/international/botswana" />
        <link rel="alternate" hrefLang="en-KH" href="https://vijayaeyeclinic.com/international/cambodia" />
        <link rel="alternate" hrefLang="en-ET" href="https://vijayaeyeclinic.com/international/ethiopia" />
        <link rel="alternate" hrefLang="en-GH" href="https://vijayaeyeclinic.com/international/ghana" />
        <link rel="alternate" hrefLang="en-ID" href="https://vijayaeyeclinic.com/international/indonesia" />
        <link rel="alternate" hrefLang="en-IQ" href="https://vijayaeyeclinic.com/international/iraq" />
        <link rel="alternate" hrefLang="en-KE" href="https://vijayaeyeclinic.com/international/kenya" />
        <link rel="alternate" hrefLang="en-KW" href="https://vijayaeyeclinic.com/international/kuwait" />
        <link rel="alternate" hrefLang="en-LA" href="https://vijayaeyeclinic.com/international/laos" />
        <link rel="alternate" hrefLang="en-MW" href="https://vijayaeyeclinic.com/international/malawi" />
        <link rel="alternate" hrefLang="en-MV" href="https://vijayaeyeclinic.com/international/maldives" />
        <link rel="alternate" hrefLang="en-NP" href="https://vijayaeyeclinic.com/international/nepal" />
        <link rel="alternate" hrefLang="en-MM" href="https://vijayaeyeclinic.com/international/myanmar" />
        <link rel="alternate" hrefLang="en-NG" href="https://vijayaeyeclinic.com/international/nigeria" />
        <link rel="alternate" hrefLang="en-OM" href="https://vijayaeyeclinic.com/international/oman" />
        <link rel="alternate" hrefLang="en-PH" href="https://vijayaeyeclinic.com/international/philippines" />
        <link rel="alternate" hrefLang="en-QA" href="https://vijayaeyeclinic.com/international/qatar" />
        <link rel="alternate" hrefLang="en-SA" href="https://vijayaeyeclinic.com/international/saudi-arabia" />
        <link rel="alternate" hrefLang="en-SN" href="https://vijayaeyeclinic.com/international/senegal" />
        <link rel="alternate" hrefLang="en-SO" href="https://vijayaeyeclinic.com/international/somalia" />
        <link rel="alternate" hrefLang="en-LK" href="https://vijayaeyeclinic.com/international/sri-lanka" />
        <link rel="alternate" hrefLang="en-TZ" href="https://vijayaeyeclinic.com/international/tanzania" />
        <link rel="alternate" hrefLang="x-default" href="https://vijayaeyeclinic.com/international/bahrain" />

        {/* Structured Hospital & FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(uaeSchema)}
        </script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

        {/* Hero Section */}
        <section className="relative min-h-[640px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-400/30">
              <Plane className="w-4 h-4" /> UAE to Bangalore Medical Care Concierge
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Eye Hospital in Bangalore for UAE Patients
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Seeking advanced eye surgery in india from dubai, Abu Dhabi, or Sharjah? Vijaya Eye Clinic provides world-class surgical care, blade-free LASIK, and vitreoretinal treatments with comprehensive visa assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact-us')}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-full font-semibold shadow-lg"
              >
                Get Free Medical Consultation & Quote
              </Button>
              <Button
                onClick={() => window.location.href = "https://wa.me/919739302523"}
                size="lg"
                variant="outline"
                className="text-white border-white/50 bg-white/10 hover:bg-white hover:text-slate-900 px-8 rounded-full font-semibold"
              >
                WhatsApp Desk (+91 9739302523)
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Bar */}
        <section className="py-14 px-4 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Advanced Clinical Care with Complete Travel Support
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Our two state-of-the-art facilities in <strong>Vijayanagar</strong> and <strong>Nagadevanahalli</strong> combine internationally trained surgeons with top-tier Western technology for elite-level vision restoration at 60% to 75% cost savings compared to private GCC healthcare.
            </p>
          </div>
        </section>

        {/* Specialized Treatments Section (All 8 Core Specialities) */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Super Specialty Procedures
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Advanced Eye Treatments for UAE Patients
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Comprehensive ophthalmic surgical solutions tailored to international recovery timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {treatmentSpecialities.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className="pt-2 border-t border-slate-100 flex items-center text-blue-600 text-sm font-semibold gap-1 cursor-pointer hover:underline"
                    onClick={() => navigate('/contact-us')}
                  >
                    Inquire for Treatment Plan <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Patients from UAE Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Patient Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Why UAE Patients Choose Vijaya Eye Clinic
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((adv, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
                >
                  <adv.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel & Treatment Steps */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Smooth Logistics
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Your Journey from UAE to Bangalore
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl shadow-sm relative border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-4xl font-extrabold text-blue-200 mb-4 font-mono">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bangalore Centers & Hospitality */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Bangalore Facilities & Extended Stay Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vijayanagar Flagship Hub</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Centrally situated with convenient access to metro lines, quality hotels, serviced apartments, and direct road links to Kempegowda International Airport.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nagadevanahalli Super Specialty Hub</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Located on the Outer Ring Road, featuring spacious diagnostic wings and peaceful post-operative recovery spaces.
                </p>
              </div>
            </div>

            <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Hospitality for UAE Families</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Vetted serviced apartments with kitchens for self-prepared meals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Airport pickup and dedicated local transport coordination</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Transparent USD and INR billing with zero currency volatility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Direct post-operative tele-consultations upon returning home</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">
                Essential travel and treatment details for UAE residents planning eye care in Bangalore.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.details
                  key={idx}
                  className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 transition-all cursor-pointer shadow-sm"
                >
                  <summary className="flex items-center justify-between font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    <span className="text-base md:text-lg">{faq.q}</span>
                    <ChevronRight className="w-6 h-6 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect with Our International Patient Desk
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Send your prescription and optical reports from Dubai, Abu Dhabi, or Sharjah for an expert surgical evaluation, doctor recommendation, and transparent quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                onClick={() => navigate('/contact-us')}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-full font-semibold"
              >
                Book Virtual Consultation
              </Button>
              <Button
                onClick={() => window.location.href = "https://wa.me/919739302523"}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-full font-semibold"
              >
                Direct WhatsApp Support (+91 9739302523)
              </Button>
            </div>

            <div className="bg-blue-800/60 border border-blue-400/30 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">UAE Patient Coordination Desk</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Phone className="w-7 h-7 mx-auto mb-2 text-blue-300" />
                  <p className="text-xs text-blue-200 mb-1">Direct Hospital Line</p>
                  <a href="tel:08026721818" className="font-semibold text-sm hover:underline">080 26721818</a>
                </div>
                <div>
                  <Mail className="w-7 h-7 mx-auto mb-2 text-blue-300" />
                  <p className="text-xs text-blue-200 mb-1">WhatsApp International Desk</p>
                  <a href="https://wa.me/919739302523" className="font-semibold text-sm hover:underline">+91 9739302523</a>
                </div>
                <div>
                  <Mail className="w-7 h-7 mx-auto mb-2 text-blue-300" />
                  <p className="text-xs text-blue-200 mb-1">Send Reports & Scans</p>
                  <p
                    className="font-semibold text-sm cursor-pointer hover:underline"
                    onClick={() => copyToClipboard('care@vijayaeyeclinic.com')}
                  >
                    {copied ? "Copied!" : "care@vijayaeyeclinic.com"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default UAELanding;
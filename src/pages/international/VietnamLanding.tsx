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

const vietnamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hospital",
      "@id": "https://vijayaeyeclinic.com/#hospital",
      "name": "Vijaya Eye Clinic Super Specialty Eye Hospital",
      "alternateName": [
        "Best Eye Hospital in Bangalore for Vietnamese Patients",
        "Top Eye Hospital for Vietnam Patients in India",
        "Advanced eye surgery in india from hanoi"
      ],
      "url": "https://vijayaeyeclinic.com/international/vietnam",
      "image": "https://vijayaeyeclinic.com/logo.png",
      "telephone": "+91-9739302523",
      "email": "care@vijayaeyeclinic.com",
      "priceRange": "$$",
      "description": "Vijaya Eye Clinic is a premier super specialty eye hospital in Bangalore, India providing advanced cataract surgery, LASIK, retina vitrectomy, cornea transplant, glaucoma management, pediatric ophthalmology, squint realignment, and oculoplasty for international patients from Vietnam (Hanoi, Ho Chi Minh City, Da Nang, Hai Phong, Can Tho).",
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
          "name": "Vietnam"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "availableLanguage": ["English", "Vietnamese Assistance", "Hindi"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose cataract surgery bangalore vijaya eye clinic for Vietnamese patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients from Hanoi and Ho Chi Minh City choose Vijaya Eye Clinic for stitchless micro-incision phacoemulsification, imported Zeiss and Alcon multifocal and toric IOL implants, and transparent surgical packages offering 60% to 75% cost savings compared to private regional healthcare in Southeast Asia."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get a medical visa to travel from Vietnam to India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon reviewing your optical scans and passport copies via WhatsApp or email, our international desk prepares an official hospital Medical Visa Invitation Letter within 24 hours for expedited processing with the Embassy of India in Hanoi or the Consulate General in Ho Chi Minh City."
          }
        },
        {
          "@type": "Question",
          "name": "How long do I need to stay in Bangalore after eye surgery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For blade-free LASIK or micro-incision cataract surgery, a stay of 4 to 6 days is ideal for clinical evaluation, daycare surgery, and initial follow-up. Complex vitreoretinal procedures or corneal transplants require 7 to 14 days before fit-to-fly clearance is issued."
          }
        },
        {
          "@type": "Question",
          "name": "Are serviced apartments with private kitchens available near the hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both our Vijayanagar and Nagadevanahalli centers are surrounded by vetted, comfortable serviced apartments equipped with private kitchens, allowing Vietnamese families to prepare familiar meals during their recovery."
          }
        }
      ]
    }
  ]
};

const VietnamLanding = () => {
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
      desc: "High-end micro-incision surgeries, premium German/US IOL implants, blade-free laser suites, and high-definition Spectral OCT."
    },
    {
      icon: Shield,
      title: "Exceptional Value & Quality",
      desc: "US-FDA approved equipment identical to top Western clinics at 60% to 75% optimized pricing protected against currency fluctuations."
    },
    {
      icon: Users,
      title: "Streamlined Coordination Desk",
      desc: "Dedicated personal liaisons managing Hanoi/HCMC embassy visa letters, Kempegowda Airport reception, local SIM cards, and serviced apartments."
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
      title: "Cataract Surgery in Bangalore for Vietnamese Patients",
      desc: "Micro-Incision Cataract Surgery (MICS) with imported Toric, Multifocal, and Trifocal IOL implants from Alcon and Zeiss for total spectacle independence.",
      tag: "Daycare | 15 Mins"
    },
    {
      icon: Sparkles,
      title: "LASIK Surgery in Bangalore for Vietnamese Patients",
      desc: "Blade-free Contoura Vision, Femto-LASIK, and EVO ICL phakic lens implants for permanent glasses removal with fast 24-hour visual recovery.",
      tag: "Specs Removal"
    },
    {
      icon: Activity,
      title: "Retina Treatment in Bangalore for Vietnamese Patients",
      desc: "Comprehensive diabetic retinopathy management, anti-VEGF injections (Lucentis, Eylea), and 23G/25G sutureless vitrectomy for retinal detachment and macular hole.",
      tag: "Retina Specialist"
    },
    {
      icon: Layers,
      title: "Glaucoma Treatment in Bangalore for Vietnamese Patients",
      desc: "Advanced optic nerve OCT screening, computerized visual field perimetry, Selective Laser Trabeculoplasty (SLT), and surgical trabeculectomy.",
      tag: "Vision Protection"
    },
    {
      icon: Shield,
      title: "Cornea Treatment in Bangalore for Vietnamese Patients",
      desc: "Keratoconus C3R collagen cross-linking, emergency protocols for corneal ulcers, and authorized partial or full-thickness corneal transplant surgery.",
      tag: "Cornea Specialist"
    },
    {
      icon: Baby,
      title: "Pediatric Ophthalmology in Bangalore for Vietnamese Patients",
      desc: "Gentle child eye exams, cycloplegic refraction, amblyopia lazy eye therapy, and pediatric cataract procedures in a warm environment.",
      tag: "Child Eye Care"
    },
    {
      icon: Smile,
      title: "Squint Eye Treatment in Bangalore for Vietnamese Patients",
      desc: "Precision strabismus surgery for children and adults to realign visual axes, restore stereo 3D depth perception, and enhance facial balance.",
      tag: "Strabismus Surgery"
    },
    {
      icon: Scissors,
      title: "Oculoplasty Treatment in Bangalore for Vietnamese Patients",
      desc: "Ptosis (drooping eyelid) correction, cosmetic blepharoplasty for loose eyelid skin removal, and DCR tear duct obstruction surgery.",
      tag: "Eyelid & Orbit"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Digital Consultation & Scan Review",
      desc: "Share optical scans, B-scans, or prescriptions from Hanoi, Ho Chi Minh City, or Da Nang via WhatsApp (+91 9739302523) for an expert evaluation and quote."
    },
    {
      number: "02",
      title: "Medical Visa (V-Visa) Letter",
      desc: "Priority Medical Visa Invitation Letter prepared within 24 hours for expedited processing through the Embassy of India in Hanoi or Consulate in HCMC."
    },
    {
      number: "03",
      title: "BLR Airport Transit & Stay",
      desc: "Executive airport pickup from Bangalore International Airport (BLR) and check-in to vetted partner serviced apartments with self-cooking kitchens."
    },
    {
      number: "04",
      title: "Daycare Surgery & Follow-up",
      desc: "Undergo painless daycare microsurgery, receive a formal fit-to-fly certificate, and continue post-op virtual tele-consultations back home in Vietnam."
    }
  ];

  const faqs = [
    {
      q: "How can I get a visa to travel from Vietnam to India for medical reasons?",
      a: "Our team provides an official Medical Visa Invitation Letter within 24 hours. Present this to the Indian Embassy in Hanoi or Consulate in Ho Chi Minh City for expedited processing."
    },
    {
      q: "Can I undergo eye surgery if I have pre-existing conditions like diabetes?",
      a: "Yes, absolutely. We specialize in diabetic retinopathy care and complex vitreoretinal interventions. Our multi-disciplinary team optimizes your systemic vitals before proceeding."
    },
    {
      q: "What premium lens options are available for cataract surgery?",
      a: "We use world-leading US-FDA approved IOL technology including Monofocal, Multifocal, EDOF, and Toric lenses from Zeiss, Alcon, and Johnson & Johnson."
    },
    {
      q: "How long do I need to rest after a customized LASIK or vision correction procedure?",
      a: "Most procedures offer rapid recovery. You can see clearly within 24-48 hours, but we recommend 4-5 days in Bangalore for complete diagnostic clearance and fit-to-fly certification."
    },
    {
      q: "What are the payment options accepted for international patients?",
      a: "We accept international credit cards, wire transfers, or currency exchanges. All packages are transparent in USD/INR to ensure predictable budgeting."
    },
    {
      q: "How are follow-ups handled once I return to Vietnam?",
      a: "We coordinate structured tele-health evaluations via WhatsApp or Zoom, reviewing your recovery progress and interfacing with your local eye specialist."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Eye Hospital in Bangalore for Vietnamese Patients | Vijaya Eye Clinic</title>
        <meta
          name="description"
          content="Experience premium, advanced eye surgery in Bangalore, India for patients from Vietnam (Hanoi, Ho Chi Minh City). Advanced eye surgery in india from hanoi, cataract, LASIK & retina care."
        />
        {/* Combined Keywords: Original + All 8 Core Procedures */}
        <meta
          name="keywords"
          content="best eye hospital in bangalore for vietnamese patients, advanced eye surgery in india from hanoi, cataract surgery bangalore vijaya eye clinic, premium lasik cost india vietnam, cataract surgery in bangalore for vietnamese patients, lasik surgery in bangalore for vietnamese patients, retina treatment in bangalore for vietnamese patients, cornea treatment in bangalore for vietnamese patients, glaucoma treatment in bangalore for vietnamese patients, pediatric ophthalmology in bangalore for vietnamese patients, squint eye treatment in bangalore for vietnamese patients, oculoplasty treatment in bangalore for vietnamese patients"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://vijayaeyeclinic.com/international/vietnam" />

        {/* 2-Way Cross-Referenced International Hreflangs */}
        <link rel="alternate" hrefLang="en-VN" href="https://vijayaeyeclinic.com/international/vietnam" />
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
        <link rel="alternate" hrefLang="en-AE" href="https://vijayaeyeclinic.com/international/uae" />
        <link rel="alternate" hrefLang="x-default" href="https://vijayaeyeclinic.com/international/bahrain" />

        {/* Structured Hospital & FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(vietnamSchema)}
        </script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

        {/* Hero Section */}
        <section className="relative min-h-[640px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-400/30">
              <Plane className="w-4 h-4" /> Vietnam to Bangalore Medical Care Concierge
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Eye Hospital in Bangalore for Vietnamese Patients
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Seeking advanced eye surgery in india from hanoi, Ho Chi Minh City, or Da Nang? Vijaya Eye Clinic provides world-class surgical care, blade-free LASIK, and vitreoretinal treatments with comprehensive visa assistance.
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
              Every year, patients from Vietnam travel to <strong>Vijaya Eye Clinic</strong> across our state-of-the-art super specialty facilities in <strong>Vijayanagar</strong> and <strong>Nagadevanahalli</strong>, Bangalore. With over 35 years of clinical trust, we deliver the same US-FDA approved technologies used in leading Western centers at predictable, cost-effective pricing.
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
                Advanced Eye Treatments for Vietnamese Patients
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

        {/* Why Patients from Vietnam Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Patient Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Why Vietnamese Patients Choose Vijaya Eye Clinic
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
                Your Journey from Vietnam to Bangalore
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Hospitality for Vietnamese Families</h3>
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
                Essential travel and treatment details for Vietnamese residents planning eye care in Bangalore.
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
              Send your prescription and optical reports from Hanoi, Ho Chi Minh City, or Da Nang for an expert surgical evaluation, doctor recommendation, and transparent quote.
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
              <h3 className="text-xl font-bold mb-6">Vietnam Patient Coordination Desk</h3>
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

export default VietnamLanding;
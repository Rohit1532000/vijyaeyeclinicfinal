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

const ethiopiaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hospital",
      "@id": "https://vijayaeyeclinic.com/#hospital",
      "name": "Vijaya Eye Clinic",
      "alternateName": [
        "Advanced Eye Surgery in Bangalore for Ethiopian Patients",
        "Best Eye Hospital in Bangalore for Ethiopian Patients",
        "Top Eye Hospital for Ethiopia Patients in India"
      ],
      "url": "https://vijayaeyeclinic.com/international/ethiopia",
      "image": "https://vijayaeyeclinic.com/logo.png",
      "description": "Leading super specialty eye hospital in Bangalore, India providing advanced cataract, LASIK, retina vitrectomy, cornea transplant, glaucoma, pediatric ophthalmology, squint, and oculoplasty treatments for international patients from Ethiopia (Addis Ababa, Hawassa, Dire Dawa).",
      "telephone": "+91-9739302523",
      "email": "care@vijayaeyeclinic.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "PV Plaza, #2, 5th Main Road, MC Layout, Opp. Sarvajna Bus Stop, Vijayanagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560040",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "Country", "name": "Ethiopia" },
        { "@type": "Country", "name": "India" }
      ],
      "availableLanguage": ["English", "Amharic Assistance", "Hindi"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do patients from Ethiopia travel to Vijaya Eye Clinic in Bangalore for eye surgery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients from Addis Ababa, Hawassa, and Dire Dawa choose Vijaya Eye Clinic in Bangalore for 35+ years of clinical distinction, state-of-the-art US and German diagnostic platforms, immediate scheduling for complex corneal and vitreoretinal conditions, and transparent savings of 60% to 75% compared to private Western medical options."
          }
        },
        {
          "@type": "Question",
          "name": "How does Vijaya Eye Clinic assist Ethiopian patients with the Indian Medical Visa (V-Visa)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon reviewing your optical prescriptions and scan reports via WhatsApp or email, our international desk prepares an official hospital Medical Visa Invitation Letter within 24 hours for expedited processing with the Embassy of India in Addis Ababa."
          }
        },
        {
          "@type": "Question",
          "name": "How long should a patient from Ethiopia plan to stay in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For blade-free LASIK or micro-incision cataract surgery, a 4 to 6 day stay is ideal. Complex vitreoretinal procedures or corneal transplants may require 10 to 14 days before fit-to-fly clearance is issued."
          }
        },
        {
          "@type": "Question",
          "name": "Can you assist with direct transit from Addis Ababa Bole International Airport (ADD)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ethiopian Airlines operates convenient flights connecting Addis Ababa Bole International Airport directly to Bangalore (BLR). Our team arranges airport reception and transfers to vetted serviced apartments near our centers."
          }
        }
      ]
    }
  ]
};

const EthiopiaLanding = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const advantages = [
    {
      icon: TrendingUp,
      title: "Advanced Corneal & Retinal Suites",
      desc: "Micro-incision phaco platforms, authorized corneal cross-linking (C3R), Zeiss operating microscopes, and high-definition Spectral OCT."
    },
    {
      icon: Shield,
      title: "60% to 75% Cost Optimization",
      desc: "Receive US-FDA approved intraocular lenses, Contoura LASIK, and sutureless vitrectomy at an economical, transparent price structure in USD/INR."
    },
    {
      icon: Users,
      title: "Dedicated International Concierge",
      desc: "Complete assistance from Addis Ababa Embassy medical visa letters to Kempegowda Airport reception, local SIM cards, and serviced apartments."
    },
    {
      icon: Award,
      title: "35+ Years Clinical Heritage",
      desc: "Trusted by domestic and international families with proven outcomes in complex anterior and posterior segment ophthalmic procedures."
    },
  ];

  const treatmentSpecialities = [
    {
      icon: Eye,
      title: "Cataract Surgery in Bangalore for Ethiopian Patients",
      desc: "Stitchless Micro-Incision Cataract Surgery (MICS) with imported Toric, Multifocal, and Trifocal IOL implants from Alcon and Zeiss for glasses-free visual clarity.",
      tag: "Daycare | 15 Mins"
    },
    {
      icon: Sparkles,
      title: "LASIK Surgery in Bangalore for Ethiopian Patients",
      desc: "Topography-guided Contoura Vision, blade-free Femto LASIK, and EVO ICL phakic lens implants for permanent spectacle removal with rapid 24-hour visual recovery.",
      tag: "Specs Removal"
    },
    {
      icon: Activity,
      title: "Retina Treatment in Bangalore for Ethiopian Patients",
      desc: "Comprehensive diabetic retinopathy care, anti-VEGF injections (Lucentis, Eylea), and 23G/25G sutureless vitrectomy for retinal detachment and macular holes.",
      tag: "Retina Specialist"
    },
    {
      icon: Layers,
      title: "Glaucoma Treatment in Bangalore for Ethiopian Patients",
      desc: "Advanced optic nerve OCT screening, computerized visual field perimetry, Selective Laser Trabeculoplasty (SLT), and surgical trabeculectomy.",
      tag: "Vision Protection"
    },
    {
      icon: Shield,
      title: "Cornea Treatment in Bangalore for Ethiopian Patients",
      desc: "Keratoconus C3R collagen cross-linking, emergency protocols for deep corneal ulcers, and authorized full/partial-thickness corneal transplant surgery.",
      tag: "Cornea Specialist"
    },
    {
      icon: Baby,
      title: "Pediatric Ophthalmology in Bangalore for Ethiopian Patients",
      desc: "Gentle child eye examinations, cycloplegic retinoscopy, amblyopia lazy eye therapy, and pediatric cataract procedures in a warm environment.",
      tag: "Child Eye Care"
    },
    {
      icon: Smile,
      title: "Squint Eye Treatment in Bangalore for Ethiopian Patients",
      desc: "Precision strabismus realignment surgery for children and adults to correct misaligned visual axes, restore stereo 3D vision, and improve cosmetic symmetry.",
      tag: "Strabismus Surgery"
    },
    {
      icon: Scissors,
      title: "Oculoplasty Treatment in Bangalore for Ethiopian Patients",
      desc: "Ptosis (drooping eyelid) surgery, cosmetic blepharoplasty for loose eye skin removal, and DCR tear duct obstruction surgery.",
      tag: "Eyelid & Orbit"
    }
  ];

  const travelSteps = [
    {
      number: "01",
      title: "Digital Consultation & Scan Review",
      desc: "Send your eye prescriptions, B-scan, or OCT reports from Addis Ababa or Hawassa via WhatsApp (+91 9739302523) for an expert evaluation and quote."
    },
    {
      number: "02",
      title: "Medical Visa (V-Visa) Letter",
      desc: "Our international desk prepares an official hospital visa invitation letter within 24 hours for priority processing with the Embassy of India in Addis Ababa."
    },
    {
      number: "03",
      title: "BLR Airport Transit & Stay",
      desc: "Executive airport pickup from Kempegowda International Airport (BLR) and check-in to vetted serviced apartments equipped with self-cooking kitchens."
    },
    {
      number: "04",
      title: "Daycare Surgery & Follow-up",
      desc: "Undergo painless daycare microsurgery, collect your formal fit-to-fly certificate, and continue post-op virtual tele-consultations back home in Ethiopia."
    }
  ];

  const faqs = [
    {
      q: "How long should I plan to stay in Bangalore for eye surgery?",
      a: "For blade-free LASIK or micro-incision cataract surgery, a 4 to 6 day stay is ideal. Complex vitreoretinal repairs or corneal transplants may require 10 to 14 days before fit-to-fly clearance is issued."
    },
    {
      q: "Can you assist with direct transit from Addis Ababa Bole International Airport (ADD)?",
      a: "Yes. Ethiopian Airlines provides direct flights from Addis Ababa Bole International Airport (ADD) to Bangalore (BLR). Our team arranges airport pickup, local transport, and accommodation near our clinics."
    },
    {
      q: "What payment options are available for Ethiopian patients?",
      a: "We accept international credit cards, wire transfers, and currency exchange to USD or INR with transparent, upfront itemized package pricing to ensure complete budget predictability."
    },
    {
      q: "Is accommodation provided during recovery?",
      a: "We assist in booking vetted, comfortable serviced apartments and hotels near our Vijayanagar and Nagadevanahalli centers featuring kitchens for patients who prefer preparing their own meals."
    },
    {
      q: "What follow-up care is available after I return to Ethiopia?",
      a: "Our surgeons provide comprehensive post-op discharge summaries and conduct virtual follow-up evaluations via WhatsApp or Zoom to collaborate directly with your local eye doctor in Ethiopia."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Eye Surgery in Bangalore for Ethiopian Patients | Vijaya Eye Clinic</title>
        <meta
          name="description"
          content="Advanced eye surgery in Bangalore for Ethiopian patients from Addis Ababa & Hawassa. Affordable cataract, LASIK, retina vitrectomy, cornea & squint surgery with visa support."
        />
        {/* Combined Keywords: Original + All 8 Core Procedures */}
        <meta
          name="keywords"
          content="advanced eye surgery in bangalore for ethiopian patients, eye hospital in bangalore for ethiopian patients, cataract surgery in india, lasik surgery bangalore, retina specialist bangalore, cornea treatment india, international eye care, medical tourism india, eye treatment for ethiopian patients, cataract surgery in bangalore for ethiopian patients, lasik surgery in bangalore for ethiopian patients, retina treatment in bangalore for ethiopian patients, cornea treatment in bangalore for ethiopian patients, glaucoma treatment in bangalore for ethiopian patients, pediatric ophthalmology in bangalore for ethiopian patients, squint eye treatment in bangalore for ethiopian patients, oculoplasty treatment in bangalore for ethiopian patients"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://vijayaeyeclinic.com/international/ethiopia" />

        {/* 2-Way Cross-Referenced International Hreflangs */}
        <link rel="alternate" hrefLang="en-ET" href="https://vijayaeyeclinic.com/international/ethiopia" />
        <link rel="alternate" hrefLang="en-BH" href="https://vijayaeyeclinic.com/international/bahrain" />
        <link rel="alternate" hrefLang="en-BD" href="https://vijayaeyeclinic.com/international/bangladesh" />
        <link rel="alternate" hrefLang="en-BW" href="https://vijayaeyeclinic.com/international/botswana" />
        <link rel="alternate" hrefLang="en-KH" href="https://vijayaeyeclinic.com/international/cambodia" />
        <link rel="alternate" hrefLang="x-default" href="https://vijayaeyeclinic.com/international/bahrain" />

        {/* Structured Hospital & FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(ethiopiaSchema)}
        </script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

        {/* Hero Section */}
        <section className="relative min-h-[640px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-400/30">
              <Plane className="w-4 h-4" /> Ethiopia to Bangalore Medical Care Concierge
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Eye Surgery in Bangalore for Ethiopian Patients
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              World-class cataract, custom blade-free LASIK, vitreoretinal repair, and corneal disease treatment for patients traveling from <strong>Addis Ababa, Hawassa, and Dire Dawa</strong> with comprehensive medical visa support.
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
              Advanced Clinical Outcomes & Dedicated East African Guest Care
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Vijaya Eye Clinic welcomes medical travelers from Ethiopia to our super specialty centers in <strong>Vijayanagar</strong> and <strong>Nagadevanahalli</strong>, Bangalore. With over 35 years of clinical trust, we deliver the same US-FDA approved technologies used in leading Western centers at predictable, cost-effective pricing.
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
                Advanced Eye Treatments for Ethiopian Patients
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

        {/* Why Patients from Ethiopia Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Patient Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Why Ethiopian Patients Choose Vijaya Eye Clinic
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
                Your Journey from Addis Ababa to Bangalore
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {travelSteps.map((step, idx) => (
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Hospitality for Ethiopian Families</h3>
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
                Essential travel and treatment details for Ethiopian residents planning eye care in Bangalore.
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
              Send your prescription and optical reports from Addis Ababa or Hawassa for an expert surgical evaluation, doctor recommendation, and transparent quote.
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
              <h3 className="text-xl font-bold mb-6">Ethiopia Patient Coordination Desk</h3>
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

export default EthiopiaLanding;
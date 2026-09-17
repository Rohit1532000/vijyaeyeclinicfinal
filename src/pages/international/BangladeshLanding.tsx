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

const bangladeshSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hospital",
      "@id": "https://vijayaeyeclinic.com/#hospital",
      "name": "Vijaya Eye Clinic",
      "alternateName": [
        "Best Eye Hospital in Bangalore India for Bangladeshi Patients",
        "Top Eye Hospital for Bangladesh Patients in India"
      ],
      "url": "https://vijayaeyeclinic.com/international/bangladesh",
      "image": "https://vijayaeyeclinic.com/logo.png",
      "description": "Leading super specialty eye hospital in Bangalore, India providing advanced cataract, LASIK, retina, glaucoma, cornea, pediatric ophthalmology, squint, and oculoplasty treatments for international patients from Bangladesh (Dhaka, Chittagong, Sylhet, Khulna).",
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
        { "@type": "Country", "name": "Bangladesh" },
        { "@type": "Country", "name": "India" }
      ],
      "availableLanguage": ["English", "Bengali", "Hindi"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do patients from Bangladesh choose Vijaya Eye Clinic in Bangalore for eye surgery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients from Dhaka, Chittagong, and Sylhet choose Vijaya Eye Clinic for 35+ years of clinical excellence, cutting-edge US/German diagnostic technology, zero waiting periods for complex retina/cornea surgeries, and massive cost savings compared to private regional healthcare."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get an Indian Medical Visa (IVAC) invitation letter from Vijaya Eye Clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon sharing your passport copy and recent optical scans via WhatsApp or email, our international desk generates an official Indian Medical Visa Invitation Letter within 24 hours for priority submission at your nearest IVAC center in Bangladesh."
          }
        },
        {
          "@type": "Question",
          "name": "How long should a patient from Bangladesh plan to stay in Bangalore for cataract or LASIK surgery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For single or bilateral blade-free LASIK and stitchless micro-incision cataract surgery, a 4 to 7 day stay is sufficient for comprehensive pre-op workup, daycare surgery, and post-operative flight clearance."
          }
        },
        {
          "@type": "Question",
          "name": "Are Bengali-speaking support and self-cooking accommodations available near the hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our international team provides fluent language assistance, and both our Vijayanagar and Nagadevanahalli centers are surrounded by vetted serviced apartments with private kitchens, allowing Bangladeshi families to prepare familiar meals."
          }
        }
      ]
    }
  ]
};

const BangladeshLanding = () => {
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
      title: "World-Class Surgical Infrastructure",
      desc: "Micro-incision cataract platforms (MICS), advanced vitreoretinal suites, Zeiss operating microscopes, and high-definition Spectral OCT."
    },
    {
      icon: Shield,
      title: "Affordable & Transparent Packages",
      desc: "Get imported US-FDA approved IOLs, vitrectomy, and Contoura LASIK at an economical, predictable price structure from Bangladeshi Taka (BDT)."
    },
    {
      icon: Users,
      title: "Instant IVAC Medical Visa Support",
      desc: "Priority Medical Visa Invitation Letters recognized across all Indian Visa Application Centers (IVAC) in Dhaka, Chittagong, Rajshahi, and Sylhet."
    },
    {
      icon: Award,
      title: "Bengali & English Language Concierge",
      desc: "Dedicated patient coordinators helping with airport/railway reception, local SIM cards, currency exchange, and tailored accommodations."
    },
  ];

  // All 8 core treatments optimized with high-intent keywords
  const treatmentSpecialities = [
    {
      icon: Eye,
      title: "Cataract Surgery in Bangalore for Bangladeshi Patients",
      desc: "Stitchless Micro-Incision Cataract Surgery (MICS) with imported Toric, Multifocal, and EDOF intraocular lenses for total freedom from glasses.",
      tag: "Daycare | 15 Mins"
    },
    {
      icon: Sparkles,
      title: "LASIK Surgery in Bangalore for Bangladeshi Patients",
      desc: "Topography-guided Contoura Vision, blade-free Femto LASIK, and Phakic ICL lens implants for high refractive power and crystal-clear eyesight.",
      tag: "Specs Removal"
    },
    {
      icon: Activity,
      title: "Retina Treatment in Bangalore for Bangladeshi Patients",
      desc: "Dedicated diabetic retinopathy clinic, anti-VEGF injections (Lucentis, Eylea), and 23G/25G sutureless vitrectomy for retinal tears, detachment, and vitreous hemorrhage.",
      tag: "Retina Specialist"
    },
    {
      icon: Layers,
      title: "Glaucoma Treatment in Bangalore for Bangladeshi Patients",
      desc: "High eye pressure control, visual field computerized perimetry, OCT optic nerve analysis, Selective Laser Trabeculoplasty (SLT), and trabeculectomy.",
      tag: "Vision Protection"
    },
    {
      icon: Shield,
      title: "Cornea Treatment in Bangalore for Bangladeshi Patients",
      desc: "C3R collagen cross-linking for progressive Keratoconus, rapid emergency care for corneal ulcers, and authorized full/partial corneal transplant surgery.",
      tag: "Cornea Specialist"
    },
    {
      icon: Baby,
      title: "Pediatric Ophthalmology in Bangalore for Bangladeshi Patients",
      desc: "Child vision screening, cycloplegic retinoscopy, lazy eye (amblyopia) vision therapy, and pediatric cataract procedures in a warm, child-friendly environment.",
      tag: "Child Eye Care"
    },
    {
      icon: Smile,
      title: "Squint Eye Treatment in Bangalore for Bangladeshi Patients",
      desc: "Microsurgical extraocular muscle realignment for children and adults to restore symmetrical eye alignment, 3D depth perception, and appearance.",
      tag: "Strabismus Surgery"
    },
    {
      icon: Scissors,
      title: "Oculoplasty Treatment in Bangalore for Bangladeshi Patients",
      desc: "Ptosis drooping eyelid surgery, cosmetic blepharoplasty for loose eye skin removal, and Dacryocystorhinostomy (DCR) tear duct obstruction repair.",
      tag: "Eyelid & Orbit"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Digital Consultation & Scan Review",
      desc: "Send your eye prescriptions, B-scan, or OCT reports from Bangladesh via WhatsApp (+91 9739302523) for an expert preliminary surgical opinion and estimate."
    },
    {
      number: "02",
      title: "Express IVAC Visa Invitation Letter",
      desc: "Receive an official Medical Visa Invitation Letter within 24 hours to secure swift processing at IVAC centers across Bangladesh."
    },
    {
      number: "03",
      title: "Airport / Railway Station Reception",
      desc: "Safe transit coordination from Bangalore International Airport (BLR) or City Railway Station directly to vetted serviced apartments."
    },
    {
      number: "04",
      title: "Precision Surgery & Follow-up",
      desc: "Receive treatment under senior specialists, collect detailed discharge paperwork with flight clearance, and enjoy virtual follow-ups from home."
    }
  ];

  const faqs = [
    {
      q: "Why do Bangladeshi patients choose Vijaya Eye Clinic in Bangalore?",
      a: "Bangalore is recognized as India's leading medical and technological hub. Bangladeshi patients from Dhaka, Chittagong, and Sylhet visit Vijaya Eye Clinic for over 35 years of clinical trust, advanced Western surgical technology, highly affordable pricing compared to private regional hospitals, and zero waiting periods for critical retina and cornea procedures."
    },
    {
      q: "How do I get an Indian Medical Visa (IVAC) invitation letter?",
      a: "Share copies of your passport and current eye prescriptions via WhatsApp or email. Our international desk prepares an official hospital Medical Visa Invitation Letter within 24-48 hours for fast-track processing through IVAC centers in Dhaka, Chittagong, Rajshahi, or Sylhet."
    },
    {
      q: "How many days should I plan to stay in Bangalore for cataract or LASIK surgery?",
      a: "For single or bilateral blade-free LASIK or micro-incision cataract surgery, a stay of 4 to 7 days in Bangalore is ideal. This allows for initial dilated testing, painless daycare surgery, and post-operative review before flying back."
    },
    {
      q: "Are there serviced apartments with private kitchens available near the hospital?",
      a: "Yes. Both our Vijayanagar and Nagadevanahalli facilities are surrounded by clean, vetted serviced apartments and hotels equipped with private kitchenettes, allowing Bangladeshi families to cook familiar meals during their recovery."
    },
    {
      q: "Can I travel by train (Maitree / Mitali Express) or bus via Kolkata?",
      a: "Yes. Many patients enter India through Kolkata via the Maitree Express, Mitali Express, or flight, followed by a domestic connecting flight or direct train to Bangalore. We can coordinate seamless station or airport transfers."
    },
    {
      q: "How will my doctor in Bangladesh follow up on my eye surgery?",
      a: "Upon discharge, you receive an itemized surgical summary and digital optical records. Our senior ophthalmologists also conduct virtual tele-consultations over WhatsApp/Zoom to coordinate directly with your eye doctor in Bangladesh."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Eye Hospital in Bangalore India for Bangladeshi Patients | Vijaya Eye Clinic</title>
        <meta
          name="description"
          content="Best eye hospital in Bangalore, India for Bangladeshi patients from Dhaka, Chittagong & Sylhet. Expert cataract, LASIK, retina, cornea & squint surgery with IVAC visa help."
        />
        <meta
          name="keywords"
          content="cataract surgery in bangalore for bangladeshi patients, lasik surgery in bangalore for bangladeshi patients, retina treatment in bangalore for bangladeshi patients, cornea treatment in bangalore for bangladeshi patients, glaucoma treatment in bangalore for bangladeshi patients, pediatric ophthalmology in bangalore for bangladeshi patients, squint eye treatment in bangalore for bangladeshi patients, oculoplasty treatment in bangalore for bangladeshi patients, best eye hospital in bangalore for bangladesh patients, eye surgery cost in india from bangladesh, ivac medical visa invite letter bangalore"
        />
        <link rel="canonical" href="https://vijayaeyeclinic.com/international/bangladesh" />
        <link rel="alternate" hrefLang="en-BD" href="https://vijayaeyeclinic.com/international/bangladesh" />
        <link rel="alternate" hrefLang="x-default" href="https://vijayaeyeclinic.com/international/bangladesh" />

        {/* Structured Hospital & FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(bangladeshSchema)}
        </script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

        {/* Hero Section */}
        <section className="relative min-h-[640px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-400/30">
              <Plane className="w-4 h-4" /> Bangladesh to Bangalore Medical Care Concierge
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Eye Hospital in Bangalore, India for Bangladeshi Patients
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              World-class cataract, blade-free LASIK, vitreoretinal repair, and corneal surgery for patients traveling from <strong>Dhaka, Chittagong, Sylhet, and Khulna</strong> with comprehensive IVAC medical visa support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact-us')}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-full font-semibold shadow-lg"
              >
                Get Free Medical Consultation & Cost Estimate
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
              Trusted Ophthalmic Heritage & Specialized Patient Care
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Every year, hundreds of families travel from Bangladesh to Vijaya Eye Clinic's state-of-the-art super specialty hubs in <strong>Vijayanagar</strong> and <strong>Nagadevanahalli</strong>, Bangalore. With over 35 years of clinical trust, we pair world-standard microsurgical technologies with personalized hospitality and Bengali language assistance.
            </p>
          </div>
        </section>

        {/* Specialized Treatments Section (All Core Specialities) */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Super Specialty Procedures
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Advanced Eye Treatments for Bangladeshi Patients
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Comprehensive ophthalmic surgical solutions tailored to medical travelers with predictable treatment timelines.
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

        {/* Why Patients from Bangladesh Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Patient Advantages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Why Patients from Bangladesh Choose Vijaya Eye Clinic
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

        {/* Cost & Infrastructure Comparison Table */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Comparative Treatment Value & Infrastructure
            </h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50 border-b border-slate-200">
                    <th className="p-4 text-left font-bold text-slate-800">Procedure Type</th>
                    <th className="p-4 text-left font-bold text-slate-800">Regional Challenges in Bangladesh</th>
                    <th className="p-4 text-left font-bold text-blue-700">Vijaya Eye Clinic Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <tr className="hover:bg-blue-50/50">
                    <td className="p-4 font-semibold text-slate-900">Premium Cataract Surgery (MICS)</td>
                    <td className="p-4 text-slate-600">High imported lens markups / Limited Toric options</td>
                    <td className="p-4 text-slate-900"><strong>Direct US-FDA IOL Implants</strong> with transparent pricing</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50">
                    <td className="p-4 font-semibold text-slate-900">Advanced Blade-Free LASIK & ICL</td>
                    <td className="p-4 text-slate-600">Limited access to customized Contoura platforms</td>
                    <td className="p-4 text-slate-900"><strong>High Precision Topography Laser</strong> with 24-hr recovery</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50">
                    <td className="p-4 font-semibold text-slate-900">Diabetic Retinopathy & Vitrectomy</td>
                    <td className="p-4 text-slate-600">Long waiting periods / Scarcity of vitreoretinal surgeons</td>
                    <td className="p-4 text-slate-900"><strong>Same-Week Surgical Scheduling</strong> by senior specialists</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50">
                    <td className="p-4 font-semibold text-slate-900">Cornea Transplant & Keratoconus C3R</td>
                    <td className="p-4 text-slate-600">Severe donor cornea scarcity / Prolonged delays</td>
                    <td className="p-4 text-slate-900"><strong>Authorized Eye Bank Network</strong> & modern C3R suites</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-sm text-slate-600 bg-blue-50 p-4 rounded-xl border border-blue-100">
              <strong>Transparent Pricing:</strong> All international packages are quoted upfront in stable USD/INR formats to ensure clear budget planning from Bangladeshi Taka (BDT).
            </p>
          </div>
        </section>

        {/* Travel & Treatment Journey Steps */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Smooth Logistics
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Your Treatment Journey from Bangladesh to Bangalore
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-7 rounded-2xl border border-slate-200 flex flex-col justify-between"
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

        {/* Bangalore Hospitality & Accommodations */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Bangalore Facilities & Warm Hospitality
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vijayanagar Flagship Hub</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Centrally located and easily accessible from metro and railway connections. Surrounded by verified budget-friendly guest houses, serviced apartments with kitchens, and culinary choices catering to South Asian palates.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nagadevanahalli Super Specialty Hub</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Located along the Outer Ring Road with modern diagnostic wings, tranquil recovery zones, and easy arterial transit to the international airport.
                </p>
              </div>
            </div>

            <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Hospitality for Bangladeshi Families</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Serviced apartments with private kitchens for home-cooked meals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Local high-speed 4G/5G SIM card & currency exchange guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Bengali language assistance for administrative and clinical coordination</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Virtual follow-up reviews via WhatsApp after returning to Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">
                Essential travel and medical guidance for patients from Bangladesh visiting Bangalore.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.details
                  key={idx}
                  className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    <span className="text-base md:text-lg">{faq.q}</span>
                    <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform flex-shrink-0" />
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
              Share your eye reports from Dhaka, Chittagong, or Sylhet for an initial doctor review, personalized treatment plan, and transparent quote.
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
              <h3 className="text-xl font-bold mb-6">Bangladesh Patient Coordination Desk</h3>
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

export default BangladeshLanding;
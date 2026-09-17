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

const bahrainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hospital",
      "@id": "https://vijayaeyeclinic.com/#hospital",
      "name": "Vijaya Eye Clinic",
      "alternateName": "Best Eye Hospital in Bangalore India for Bahrain Patients",
      "url": "https://vijayaeyeclinic.com/international/bahrain",
      "image": "https://vijayaeyeclinic.com/logo.png",
      "description": "Leading super specialty eye hospital in Bangalore, India providing advanced cataract, LASIK, retina, glaucoma, cornea, pediatric ophthalmology, squint, and oculoplasty treatments for international patients from Bahrain (Manama, Riffa, Muharraq).",
      "telephone": "+91-9739302523",
      "email": "care@vijayaeyeclinic.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pv Plaza, #2, 5th Main Road MC Layout, Vijayanagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560040",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "Country", "name": "Bahrain" },
        { "@type": "Country", "name": "India" }
      ],
      "availableLanguage": ["English", "Arabic", "Hindi"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is Vijaya Eye Clinic preferred for retina treatment in Bangalore for Bahrain patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic provides world-class retina treatment in Bangalore for Bahrain patients, specializing in diabetic retinopathy, anti-VEGF injections, and 23G/25G sutureless vitrectomy surgery with zero waiting times and high procedural success."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can cataract and LASIK surgery be completed for overseas visitors from Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both blade-free LASIK and micro-incision cataract surgery are completed as safe daycare procedures taking only 15-20 minutes, allowing patients from Bahrain to complete consultations, surgery, and flying-fit reviews within 4 to 6 days."
          }
        },
        {
          "@type": "Question",
          "name": "Are pediatric eye care and squint correction available for children from Bahrain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide dedicated pediatric ophthalmology in Bangalore for Bahrain patients, including amblyopia lazy eye therapy and daycare squint correction surgery under gentle pediatric anesthesia."
          }
        },
        {
          "@type": "Question",
          "name": "How does Vijaya Eye Clinic assist with Indian Medical Visas (V-Visa) from Manama?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our international desk issues official Medical Visa Invitation Letters within 24 hours for expedited visa processing at the Indian Embassy in Manama, Bahrain."
          }
        }
      ]
    }
  ]
};

const BahrainLanding = () => {
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
      title: "Advanced Surgical Technologies",
      desc: "Computerized micro-incision cataract platforms (MICS), Zeiss operating microscopes, blade-free laser suites, and high-resolution Spectral-OCT scans."
    },
    {
      icon: Shield,
      title: "65% to 75% Cost Savings",
      desc: "Access US-FDA approved intraocular lenses, vitrectomy, and Contoura LASIK at a fraction of private GCC and Bahrain medical tariffs."
    },
    {
      icon: Users,
      title: "Dedicated Arabic Patient Desk",
      desc: "Dedicated international liaisons and Arabic-speaking coordinators ensuring personal comfort from airport arrival to departure."
    },
    {
      icon: Award,
      title: "35+ Years Clinical Heritage",
      desc: "Trusted by thousands of domestic and overseas families with proven outcomes in anterior and posterior eye surgery."
    },
  ];

  // All 8 Core Specialities targeted for Bahrain Patients
  const treatmentSpecialities = [
    {
      icon: Eye,
      title: "Cataract Surgery in Bangalore for Bahrain Patients",
      desc: "Robotic-assisted & micro-incision cataract surgery (MICS) in Vijayanagar with premium Toric, Multifocal, and Trifocal IOL implants for spectacle-free sharp vision.",
      tag: "Daycare | 15 Mins"
    },
    {
      icon: Sparkles,
      title: "LASIK Surgery in Bangalore for Bahrain Patients",
      desc: "Blade-free custom LASIK, Femto LASIK, and Contoura Vision for permanent specs removal with painless 24-hour visual recovery.",
      tag: "Specs Removal"
    },
    {
      icon: Activity,
      title: "Retina Treatment in Bangalore for Bahrain Patients",
      desc: "Comprehensive diabetic retinopathy treatment, anti-VEGF injections (Lucentis, Eylea), and 23G/25G sutureless vitrectomy surgery for retinal detachment and macular holes.",
      tag: "Retina Specialist"
    },
    {
      icon: Layers,
      title: "Glaucoma Treatment in Bangalore for Bahrain Patients",
      desc: "Advanced high eye pressure management, OCT optic nerve screening, Selective Laser Trabeculoplasty (SLT), and surgical trabeculectomy.",
      tag: "Vision Protection"
    },
    {
      icon: Shield,
      title: "Cornea Treatment in Bangalore for Bahrain Patients",
      desc: "Specialized Keratoconus C3R corneal cross-linking, full/partial thickness corneal transplant surgery, and intensive treatment for corneal ulcers and severe dry eyes.",
      tag: "Corneal Care"
    },
    {
      icon: Baby,
      title: "Pediatric Ophthalmology in Bangalore for Bahrain Patients",
      desc: "Expert children's eye exams, computer vision screening, and structured amblyopia (lazy eye) therapy clinics tailored for young kids.",
      tag: "Child Eye Care"
    },
    {
      icon: Smile,
      title: "Squint Eye Treatment in Bangalore for Bahrain Patients",
      desc: "Precision strabismus realignment surgery for both children and adults to restore ocular symmetry, depth perception, and facial aesthetics.",
      tag: "Strabismus Surgery"
    },
    {
      icon: Scissors,
      title: "Oculoplasty Treatment in Bangalore for Bahrain Patients",
      desc: "Specialized functional and cosmetic eyelid procedures including Ptosis (drooping eyelid) surgery, cosmetic blepharoplasty, and DCR tear duct surgeries.",
      tag: "Eyelid & Orbit"
    }
  ];

  const travelSteps = [
    {
      number: "01",
      title: "Virtual Scan Review & Consultation",
      desc: "Share your eye prescription, OCT scans, or medical records from Bahrain via WhatsApp (+91 9739302523) for an upfront diagnosis and package quote."
    },
    {
      number: "02",
      title: "Medical Visa (V-Visa) Documentation",
      desc: "Our international coordinator issues official hospital invitation letters within 24 hours for swift approval at the Indian Embassy in Manama."
    },
    {
      number: "03",
      title: "Airport Transit & Accommodation",
      desc: "Executive airport pickup from Bangalore International Airport (BLR) with hassle-free check-in at partner serviced apartments close to the clinic."
    },
    {
      number: "04",
      title: "Daycare Surgery & Follow-Up",
      desc: "Undergo painless daycare microsurgery, receive formal flight-fitness certification, and enjoy ongoing virtual tele-follow-ups upon returning to Bahrain."
    }
  ];

  const faqs = [
    {
      q: "Why is Vijaya Eye Clinic preferred for retina treatment in Bangalore for Bahrain patients?",
      a: "Given the high incidence of diabetes in the Gulf region, we offer specialized diabetic retinopathy management, advanced anti-VEGF injections, and sutureless 23G/25G vitrectomy surgery using high-precision German viewing systems with zero waiting time."
    },
    {
      q: "How many days should I stay in Bangalore for cataract or LASIK surgery?",
      a: "Most international patients from Manama or Riffa require only 4 to 6 days in Bangalore. Both blade-free LASIK and micro-incision cataract surgery are painless daycare procedures allowing you to safely fly back within a few days."
    },
    {
      q: "Are specialized treatments for kids like pediatric ophthalmology and squint correction available?",
      a: "Yes. We offer dedicated pediatric ophthalmology in Bangalore for Bahrain patients, including child-friendly cycloplegic refraction, lazy eye patching therapy, and day-care squint correction surgery."
    },
    {
      q: "What payment currencies and modes are accepted?",
      a: "We support transparent pricing in USD, BHD equivalents, and INR via international credit/debit cards, bank wire transfers, and online medical payment portals with itemized receipts."
    },
    {
      q: "Are flights convenient between Bahrain and Bangalore?",
      a: "Yes, Gulf Air and connecting flights operate regular schedules between Bahrain International Airport (BAH) and Kempegowda International Airport Bangalore (BLR) with convenient flight times."
    },
    {
      q: "Can I get cosmetic eyelid surgery (blepharoplasty or ptosis) during my medical visit?",
      a: "Yes, our oculoplasty department performs cosmetic blepharoplasty for excess skin removal and ptosis correction with minimal downtime, easily accommodated within a 5 to 7 day trip."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Eye Hospital in Bangalore India for Bahrain Patients | Vijaya Eye Clinic</title>
        <meta
          name="description"
          content="Best eye hospital in Bangalore, India for Bahrain patients. Advanced cataract surgery, blade-free LASIK, retina vitrectomy, cornea & squint treatment with full medical visa support."
        />
        <meta
          name="keywords"
          content="retina treatment in bangalore for bahrain patient, cataract surgery in bangalore for bahrain patients, lasik surgery in bangalore for bahrain patients, glaucoma treatment in bangalore for bahrain patients, cornea treatment in bangalore for bahrain patients, pediatric ophthalmology in bangalore for bahrain patients, squint eye treatment in bangalore for bahrain patients, oculoplasty treatment in bangalore for bahrain patients, best eye hospital in bangalore for bahrain patients"
        />
        <link rel="canonical" href="https://vijayaeyeclinic.com/international/bahrain" />
        <link rel="alternate" hrefLang="en-BH" href="https://vijayaeyeclinic.com/international/bahrain" />
        <link rel="alternate" hrefLang="x-default" href="https://vijayaeyeclinic.com/international/bahrain" />

        {/* Structured Hospital & FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(bahrainSchema)}
        </script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

        {/* Hero Section */}
        <section className="relative min-h-[640px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-400/30">
              <Plane className="w-4 h-4" /> Bahrain to Bangalore Eye Care Concierge
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Eye Hospital in Bangalore, India for Patients from Bahrain
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              World-class cataract, custom blade-free LASIK, vitreoretinal surgery, and specialized corneal care for patients from <strong>Manama, Riffa, Muharraq, and Hamad Town</strong> with dedicated Indian medical visa and travel support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact-us')}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-full font-semibold shadow-lg"
              >
                Get Free Medical Opinion & Quote
              </Button>
              <Button
                onClick={() => window.location.href = "https://wa.me/919739302523"}
                size="lg"
                variant="outline"
                className="text-white border-white/50 bg-white/10 hover:bg-white hover:text-slate-900 px-8 rounded-full font-semibold"
              >
                WhatsApp Us (+91 9739302523)
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Bar */}
        <section className="py-14 px-4 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comprehensive International Ophthalmic Care Under One Roof
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Vijaya Eye Clinic welcomes medical travelers from the Kingdom of Bahrain to our super specialty centers in <strong>Vijayanagar</strong> and <strong>Nagadevanahalli</strong>, Bangalore. With over 35 years of surgical excellence, we provide US-FDA approved microsurgical techniques with personalized Arabic patient coordination.
            </p>
          </div>
        </section>

        {/* Specialized Treatments Section (All Core Specialities) */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Clinical Excellence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Advanced Eye Treatments for Bahrain Patients
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Tailored ophthalmic surgical and medical care planned specifically for overseas recovery timelines.
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
                  <div className="pt-2 border-t border-slate-100 flex items-center text-blue-600 text-sm font-semibold gap-1 cursor-pointer hover:underline" onClick={() => navigate('/contact-us')}>
                    Inquire for Treatment Plan <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Patients from Bahrain Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Patient Advantages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Why Patients from Bahrain Choose Vijaya Eye Clinic
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

        {/* Travel & Treatment Journey Steps */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Seamless Logistics
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Your Step-by-Step Medical Journey from Bahrain
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {travelSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl shadow-sm relative border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-4xl font-extrabold text-blue-100 mb-4 font-mono">
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

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">
                Important information for Bahraini patients traveling to Bangalore for eye surgeries.
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
              Send your eye test reports for an initial clinical evaluation, personalized surgeon recommendation, and transparent cost estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                onClick={() => navigate('/contact-us')}
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-full"
              >
                Book Virtual Consultation
              </Button>
              <Button
                onClick={() => window.location.href = "https://wa.me/919739302523"}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-full"
              >
                Direct WhatsApp Support (+91 9739302523)
              </Button>
            </div>

            <div className="bg-blue-800/60 border border-blue-400/30 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">International Patient Assistance Contacts</h3>
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
                  <p className="font-semibold text-sm cursor-pointer hover:underline" onClick={() => copyToClipboard('care@vijayaeyeclinic.com')}>
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

export default BahrainLanding;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  AlertTriangle,
  Stethoscope,
  FileText,
  DollarSign,
  Phone,
  CheckCircle,
  CreditCard,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import img222 from "@/assets/222-clean.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const insuranceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EyeClinic",
      "name": "Vijaya Eye Clinic - Cashless Eye Hospital",
      "alternateName": [
        "Cashless eye hospital in Bangalore",
        "Mediclaim eye surgery Bangalore center",
        "Cashless cataract surgery hospital Bangalore",
        "TPA empanelled eye clinic Bangalore"
      ],
      "url": "https://vijayaeyeclinic.com/insurance-cashless",
      "logo": "https://vijayaeyeclinic.com/logo.png",
      "description": "Premier cashless eye hospital in Bangalore offering hassle-free Mediclaim eye surgery. Empanelled with Star Health, ICICI Lombard, HDFC ERGO, and leading TPAs.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vijayanagar",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does cashless Mediclaim eye surgery in Bangalore work at Vijaya Eye Clinic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For cashless Mediclaim eye surgery in Bangalore, present your health insurance card and ID proof at our dedicated insurance desk. We handle direct pre-authorization approvals with your insurer or TPA for zero upfront payment on approved procedures."
          }
        },
        {
          "@type": "Question",
          "name": "Which surgeries are covered under cashless eye hospital facilities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most major treatments including advanced phacoemulsification cataract surgery, vitrectomy retinal surgeries, glaucoma filtering procedures, and corneal interventions are eligible for cashless insurance settlements."
          }
        },
        {
          "@type": "Question",
          "name": "Which insurance companies and TPAs are empanelled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic is empanelled with Star Health, ICICI Lombard, HDFC ERGO, Niva Bupa, Bajaj Allianz, Care Health, and leading TPAs like FHPL, Vidal, and Paramount Health."
          }
        }
      ]
    }
  ]
};

const insuranceCompanies = [
  "Star Health Insurance",
  "ICICI Lombard",
  "HDFC ERGO",
  "Niva Bupa Health Insurance",
  "Aditya Birla Health Insurance",
  "Bajaj Allianz",
  "United India Insurance",
  "National Insurance",
  "Oriental Insurance",
  "Manipal Cigna",
  "Family Health Plan TPA (FHPL)",
  "Paramount Health Services",
];

const benefits = [
  {
    icon: DollarSign,
    title: "100% Cashless Cost Coverage",
    desc: "Undergo planned procedures at a trusted cashless eye hospital in Bangalore without out-of-pocket stress via direct insurer approvals.",
  },
  {
    icon: Stethoscope,
    title: "Mediclaim Eye Surgery Bangalore",
    desc: "Full coverage assistance for micro-incision cataract surgery, vitreoretinal procedures, glaucoma surgery, and laser therapies.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Eye Care Coverage",
    desc: "Rapid pre-authorization support for urgent corneal tears, acute retinal trauma, and eye injuries with minimum paperwork.",
  },
  {
    icon: Heart,
    title: "Preventive & Diagnostic Care",
    desc: "Policy-backed health checkup schemes and advanced OCT / diagnostic eye screenings under select corporate insurance plans.",
  },
  {
    icon: Shield,
    title: "Transparent & Zero Hidden Billing",
    desc: "Complete pre-treatment cost disclosure aligned directly with agreed GIPSA and corporate insurance tariff structures.",
  },
  {
    icon: Users,
    title: "Dedicated TPA Insurance Desk",
    desc: "In-house specialists to coordinate claim paperwork, initial queries, and final discharge settlements with zero hassle.",
  },
];

const processSteps = [
  {
    num: "1",
    title: "Book & Share Insurance",
    desc: "Schedule your consultation and submit your health card, policy number, and photo ID at our insurance helpdesk.",
  },
  {
    num: "2",
    title: "Pre-Authorization Request",
    desc: "Our insurance desk files digital pre-auth paperwork directly with your TPA or health insurance company.",
  },
  {
    num: "3",
    title: "Hassle-Free Treatment",
    desc: "Receive world-class surgical care from senior specialists upon receiving initial cashless approval.",
  },
  {
    num: "4",
    title: "Direct Claim Settlement",
    desc: "We process final hospital billing directly with your insurance provider for smooth discharge.",
  },
];

const documents = [
  "Original & Digital Health Insurance Card / Policy Copy",
  "Government-issued ID Proof (Aadhaar Card, PAN, or Voter ID)",
  "Employee Corporate Health ID (for Group Policies)",
  "Past Eye Examination Prescriptions & Diagnostic Reports",
  "Treating Doctor's Consultation Notes & Admission Advice",
];

const faqs = [
  {
    q: "Is Vijaya Eye Clinic a recognized cashless eye hospital in Bangalore?",
    a: "Yes. Vijaya Eye Clinic operates as a fully empanelled cashless eye hospital in Bangalore, partnering with all public sector insurers (GIPSA), private insurers, and major TPAs for seamless claim processing.",
  },
  {
    q: "How does Mediclaim eye surgery Bangalore work for cataract treatments?",
    a: "For cataract surgery, your pre-authorization is sent 48 to 72 hours before planned daycare admission. Once your insurer approves the estimate, the procedure is performed with zero upfront hospital package costs.",
  },
  {
    q: "What documents are required for insurance processing?",
    a: "You need a valid photo ID, health insurance policy card, recent clinical diagnostic reports, and treating doctor's admission recommendation.",
  },
  {
    q: "Are premium intraocular lenses (IOLs) covered under cashless eye insurance?",
    a: "Standard cataract surgery packages are fully covered. If you choose premium lenses such as Toric or Multifocal IOLs, the differential lens cost can be paid separately while the base procedure remains cashless.",
  },
  {
    q: "Can patients without insurance still avail affordable care?",
    a: "Yes. For uninsured patients, we offer all-inclusive transparent surgical packages with flexible digital payment and EMI options.",
  },
];

const InsuranceAndCashless = () => {
  return (
    <>
      <Helmet>
        <title>Cashless Eye Hospital in Bangalore | Mediclaim Eye Surgery</title>
        <meta
          name="description"
          content="Vijaya Eye Clinic is a premier cashless eye hospital in Bangalore. Get hassle-free cashless Mediclaim eye surgery for cataract, retina & glaucoma with leading TPAs."
        />
        <link rel="canonical" href="https://vijayaeyeclinic.com/insurance-cashless" />
        <meta property="og:title" content="Cashless Eye Hospital in Bangalore | Mediclaim Eye Surgery" />
        <meta
          property="og:description"
          content="Avail cashless Mediclaim eye surgery in Bangalore for cataract, retina, and glaucoma procedures at Vijaya Eye Clinic."
        />
        <meta property="og:url" content="https://vijayaeyeclinic.com/insurance-cashless" />
        <meta name="twitter:title" content="Cashless Eye Care & Mediclaim Surgery Bangalore" />
        <meta
          name="twitter:description"
          content="Empanelled cashless eye hospital in Bangalore supporting Star Health, ICICI Lombard, HDFC ERGO, and leading TPAs."
        />

        {/* Structured EyeClinic & FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(insuranceSchema)}
        </script>
      </Helmet>
      <Header />

      <PageHeroBanner
        title="Cashless Eye Hospital in Bangalore"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Facilities", to: "#" },
          { label: "Insurance & Cashless" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={img222}
                alt="Cashless Eye Hospital in Bangalore - Mediclaim Eye Surgery Support"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Empanelled TPA & Insurance Desk
              </span>

              <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-5 leading-tight">
                Cashless Eye Hospital in Bangalore for Seamless Mediclaim Eye Surgery
              </h1>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Vijaya Eye Clinic is a recognized <strong>cashless eye hospital in Bangalore</strong>, dedicated to making high-quality ophthalmic interventions stress-free. Whether you need planned <strong>Mediclaim eye surgery Bangalore</strong> for cataracts, retinal laser treatments, or glaucoma care, our in-house insurance coordination team ensures rapid pre-authorization approvals and zero out-of-pocket delays.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "100% Cashless Approvals",
                  "Fast TPA Coordination",
                  "Cataract Mediclaim Surgery",
                  "Emergency Retina Coverage",
                  "Transparent Hospital Billing",
                  "Dedicated Insurance Helpdesk",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="rounded-full gradient-primary px-8">
                  <a href="tel:08023356953">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Insurance Desk — 080 23356953
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8"
                >
                  <a href="#faq">Check Covered Policies</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Approved Network
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Empanelled Health Insurers & TPAs
            </h2>

            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We partner with all major government and private health insurance providers for direct cashless claim settlements.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {insuranceCompanies.map((company, i) => (
              <motion.div
                key={company}
                className="bg-card border border-border/50 rounded-2xl p-5 flex items-center gap-3 hover:border-primary/40 hover:bg-primary/5 transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Coverage Advantages
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Benefits of Cashless Mediclaim Eye Surgery at Vijaya Eye Clinic
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="bg-card rounded-2xl border border-border/50 p-7 shadow-sm hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Step-By-Step Guide
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              How Cashless Eye Treatment Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full">
                  <div className="w-14 h-14 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-5">
                    {step.num}
                  </div>

                  <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              className="bg-primary/5 rounded-3xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Documents Required for Mediclaim Approval
              </h2>

              <div className="space-y-4">
                {documents.map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50"
                  >
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <CreditCard className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">
                  Zero Upfront Cash
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pre-authorized procedures require no cash deposit for eligible policyholders.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">
                  Quick Pre-Auth
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our hospital desk resolves initial insurer approvals within 2 to 4 hours.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">
                  Dedicated Coordinators
                </h3>
                <p className="text-sm text-muted-foreground">
                  Personalized guidance from admission estimation to discharge billing.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">
                  GIPSA Compliant
                </h3>
                <p className="text-sm text-muted-foreground">
                  Empanelled across public sector insurers with transparent, standardized rates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Frequently Asked Questions on Cashless Eye Care
            </h2>

            <p className="text-muted-foreground mt-4">
              Clear answers regarding insurance approval timelines, policy eligibility, and cashless eye procedures.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-10 md:p-14 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Need Help with Cashless Eye Surgery in Bangalore?
            </h2>

            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
              Our TPA insurance desk verifies policy eligibility and initiates pre-authorization ahead of your planned eye surgery.
            </p>

            <Button
              asChild
              className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base"
            >
              <a href="tel:08023356953">
                <Phone className="w-5 h-5 mr-2" />
                Contact Insurance Desk — 080 23356953
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  );
};

export default InsuranceAndCashless;
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

const insuranceCompanies = [
  "Aditya Birla Health Insurance",
  "Niva Bupa Health Insurance",
  "ICICI Lombard",
  "HDFC ERGO",
  "Star Health Insurance",
  "Bajaj Allianz",
  "United India Insurance",
  "National Insurance",
  "Oriental Insurance",
  "Manipal Cigna",
  "Family Health Plan TPA",
  "Paramount Health Services",
];

const benefits = [
  {
    icon: DollarSign,
    title: "Cashless Cost Coverage",
    desc: "Get access to quality eye care treatments without worrying about upfront expenses through our cashless insurance facility.",
  },
  {
    icon: Heart,
    title: "Preventive Eye Care",
    desc: "Regular eye check-ups and preventive screenings are supported through insurance coverage for long-term vision health.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Eye Care",
    desc: "Immediate treatment support for eye injuries, infections, and sudden vision problems with reduced financial stress.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Treatments",
    desc: "Insurance support for cataract surgery, retinal procedures, laser treatments, glaucoma management, and more.",
  },
  {
    icon: Shield,
    title: "Financial Security",
    desc: "Transparent billing and insurance coordination ensure peace of mind during your treatment journey.",
  },
  {
    icon: Users,
    title: "Dedicated Insurance Desk",
    desc: "Our experienced insurance team assists you with documentation, approvals, and claim processing.",
  },
];

const processSteps = [
  {
    num: "1",
    title: "Book Your Appointment",
    desc: "Schedule your consultation online, by phone, or by visiting Vijaya Eye Clinic.",
  },
  {
    num: "2",
    title: "Insurance Verification",
    desc: "Share your insurance details with our team for eligibility check and pre-authorization support.",
  },
  {
    num: "3",
    title: "Consultation & Treatment",
    desc: "Receive expert eye care and undergo treatment with minimal paperwork and hassle-free processing.",
  },
  {
    num: "4",
    title: "Cashless Claim Settlement",
    desc: "We directly coordinate with your insurance provider for approved cashless claims.",
  },
];

const documents = [
  "Government-issued ID proof",
  "Insurance policy card or copy",
  "Medical reports or prescriptions",
  "Referral letter (if required)",
  "Address proof",
];

const faqs = [
  {
    q: "Do you provide cashless treatment facilities?",
    a: "Yes. Vijaya Eye Clinic offers cashless treatment facilities through tie-ups with major insurance companies and TPAs.",
  },
  {
    q: "What documents are required for insurance processing?",
    a: "You need a valid ID proof, insurance card or policy copy, medical reports, and any referral or pre-authorization documents if applicable.",
  },
  {
    q: "Will all eye treatments be covered under insurance?",
    a: "Coverage depends on your insurance policy. Our insurance desk helps verify your benefits before treatment.",
  },
  {
    q: "Do you help with pre-authorization approvals?",
    a: "Yes. Our insurance coordination team manages the pre-authorization process directly with your insurer.",
  },
  {
    q: "Can uninsured patients also receive treatment?",
    a: "Absolutely. We provide affordable consultation and treatment options for all patients.",
  },
];

const InsuranceAndCashless = () => {
  return (
    <>
      <Helmet>
        <title>Insurance & Cashless Services | Vijaya Eye Clinic</title>
        <meta name="description" content="Vijaya Eye Clinic accepts major insurance providers and offers cashless treatment facilities for your convenience." />
        <meta name="keywords" content="insurance accepted, cashless treatment, health insurance, medical facilities, eye hospital" />
        <link rel="canonical" href="https://vijayaeyeclinic.com/insurance-cashless" />
        <meta property="og:title" content="Insurance & Cashless Services | Vijaya Eye Clinic" />
        <meta property="og:description" content="Vijaya Eye Clinic accepts major insurance providers and offers cashless treatment facilities." />
        <meta property="og:url" content="https://vijayaeyeclinic.com/insurance-cashless" />
        <meta name="twitter:title" content="Insurance & Cashless Services | Vijaya Eye Clinic" />
        <meta name="twitter:description" content="Vijaya Eye Clinic accepts major insurance providers and offers cashless treatment facilities." />
      </Helmet>
      <Header />

      <PageHeroBanner
        title="Insurance & Cashless Facility"
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
                alt="Insurance and Cashless Facility"
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
                Insurance Support
              </span>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-5 leading-tight">
                Seamless Cashless Eye Care With Trusted Insurance Support
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Vijaya Eye Clinic is committed to making advanced eye care
                accessible and stress-free through comprehensive insurance and
                cashless treatment facilities. From routine eye check-ups to
                advanced surgical procedures, our insurance support team helps
                simplify every step of the process.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Cashless Treatments",
                  "Quick Claim Support",
                  "Preventive Eye Care",
                  "Emergency Coverage",
                  "Transparent Billing",
                  "Dedicated Insurance Desk",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
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
                    Call Us — 080 23356953
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8"
                >
                  <a href="#faq">Learn More</a>
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
              Insurance Partners
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Empanelled Insurance Companies & TPAs
            </h2>

            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We are associated with leading insurance providers and TPAs to
              ensure smooth and hassle-free cashless treatment experiences.
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
              Benefits
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Benefits Of Insurance & Cashless Treatment
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

      {/* Featured Images Section */}
   

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
              How It Works
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
              Simple Cashless Treatment Process
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
                Required Documents
              </h2>

              <div className="space-y-4">
                {documents.map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50"
                  >
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{doc}</span>
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
                  Transparent Billing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Clear and upfront information about coverage and charges.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">
                  Fast Processing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Quick verification and claim assistance for smoother treatment.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">
                  Dedicated Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Personalized guidance from our experienced insurance team.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">
                  Trusted Care
                </h3>
                <p className="text-sm text-muted-foreground">
                  Quality eye care backed by trusted insurance partnerships.
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
              Frequently Asked Questions
            </h2>

            <p className="text-muted-foreground mt-4">
              Everything you need to know about insurance and cashless treatment
              facilities at Vijaya Eye Clinic.
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
              Need Help With Insurance Or Cashless Claims?
            </h2>

            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
              Our dedicated insurance support team is here to guide you through
              every step of the process and ensure a smooth treatment experience.
            </p>

            <Button
              asChild
              className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base"
            >
              <a href="tel:08023356953">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us — 080 23356953
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
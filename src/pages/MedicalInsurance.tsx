import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { Shield, Heart, AlertTriangle, Stethoscope, FileText, DollarSign, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import insuranceImg from "@/assets/medical-insurance.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  { icon: DollarSign, title: "Cost Coverage", desc: "Eye care expenses, from routine check-ups to specialized treatments, can accumulate. Medical insurance covers expenses for various eye-related services, including doctor visits, surgical procedures, and prescription eyewear." },
  { icon: Heart, title: "Preventive Care", desc: "Regular eye exams are essential for detecting early signs of potential issues. Medical insurance encourages individuals to prioritize preventive eye care by covering the costs of routine check-ups, allowing for timely identification and management of eye conditions." },
  { icon: AlertTriangle, title: "Emergency Situations", desc: "Eye emergencies, such as injuries or sudden changes in vision, require immediate attention. Having medical insurance ensures that emergency eye care services are accessible without the added stress of financial concerns during critical situations." },
  { icon: Stethoscope, title: "Specialized Treatments", desc: "Advanced eye treatments, such as laser surgery or surgical procedures for conditions like cataracts, can be costly. Medical insurance provides financial support for specialized treatments enabling individuals to choose the best available options for their eye care needs." },
  { icon: FileText, title: "Chronic Conditions", desc: "Chronic eye conditions, like glaucoma or macular degeneration, often require ongoing management. Medical insurance is pivotal in covering the costs of continuous care for such conditions, ensuring regular monitoring and adherence to treatment plans." },
  { icon: Shield, title: "Financial Security", desc: "Unexpected eye health issues can strain finances. Medical insurance offers a safety net by mitigating the impact of unforeseen eye care costs, allowing individuals to focus on their health without the worry of unexpected financial burdens." },
];

const insuranceCompanies = [
  "1. Aditya Birla Insurance Pvt Ltd.",
  "2. Niva Bupa Health Insurance Pvt Ltd.",
  "3. Axa India Health Insurance Pvt Ltd.",
  "4. Universal Health Care Pvt Ltd Insurance Pvt Ltd.",
  "5. Paramount Health Service & Insurance TPA Pvt Ltd.",
  "6. Heritage Health Insurance Pvt Ltd.",
  "7. Family Health Plan Insurance TPA Ltd.",
  "8. Raksha Health Insurance TPA Pvt Ltd.",
  "9. Anoupa Insurance TPA Health Care Pvt Ltd.",
  "10. East West Assist Insurance Pvt Ltd.",
  "11. Malabar Health Insurance TPA Pvt Ltd.",
  "12. Genins India Insurance Pvt Ltd.",
  "13. Anand Rathi Insurance TPA Ltd.",
  "14. Health India Insurance TPA Services Pvt Ltd.",
  "15. Good Health Insurance Pvt Ltd.",
  "16. Vipul Medcorp Insurance Pvt Ltd.",
  "17. United Healthcare TPA Pvt Ltd.",
  "18. Anmol Medicare Insurance Pvt Ltd.",
];

const steps = [
  { num: "1", title: "Make An Appointment", desc: "Start your journey with Vijaya Eye Clinic by scheduling an appointment at your convenience. You can book online, call us, or visit our clinic in person." },
  { num: "2", title: "General Check Up", desc: "Step into our clinic for a thorough and comprehensive eye examination. Our experienced professionals will conduct detailed assessments of your eye health." },
  { num: "3", title: "Holistic Care", desc: "At Vijaya Eye Clinic, our promise is holistic care that addresses all aspects of your visual health. We combine clinical expertise, advanced technology, and compassion." },
];

const faqs = [
  { q: "How does the medical insurance process work at Vijaya Eye Clinic?", a: "Our team assists you throughout the insurance claim process, from verification to cashless treatment. We work with most major insurance providers to ensure a hassle-free experience." },
  { q: "Are there specific procedures or treatments that may not be covered by insurance?", a: "Coverage varies by plan. Cosmetic procedures and certain elective treatments may not be covered. Our team can help verify your specific coverage before treatment." },
  { q: "How can I check the status of my insurance claim?", a: "You can contact our insurance desk directly or call our helpline. Our dedicated insurance team keeps you updated throughout the claim process." },
  { q: "What documents do I need to bring for processing medical insurance claims?", a: "Bring your insurance card, a valid photo ID, referral letters if applicable, and any pre-authorization documents from your insurance provider." },
  { q: "Do you offer assistance for pre-authorization from my insurance company?", a: "Yes, our insurance desk handles all pre-authorization requirements and coordinates directly with your insurance company." },
  { q: "Can I still receive treatment at Vijaya Eye Clinic if I don't have medical insurance?", a: "Absolutely. We offer affordable treatment packages and flexible payment options for patients without insurance coverage." },
  { q: "Are there any hidden costs associated with the medical insurance process?", a: "No. We believe in complete transparency. All costs are discussed upfront, and our team ensures you understand your coverage and any out-of-pocket expenses before treatment." },
];

const MedicalInsurance = () => (
  <>
    <Helmet>
      <title>Medical Insurance | Vijaya Eye Clinic Bangalore</title>
      <meta name="description" content="Medical Insurance services at Vijaya Eye Clinic. We accept major insurance providers for seamless treatment experience." />
      <meta name="keywords" content="medical insurance, health insurance, cashless treatment, insurance accepted, eye hospital" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/facilities/medical-insurance" />
      <meta property="og:title" content="Medical Insurance | Vijaya Eye Clinic Bangalore" />
      <meta property="og:description" content="Medical Insurance services at Vijaya Eye Clinic. We accept major insurance providers." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/facilities/medical-insurance" />
      <meta name="twitter:title" content="Medical Insurance | Vijaya Eye Clinic Bangalore" />
      <meta name="twitter:description" content="Medical Insurance services at Vijaya Eye Clinic. We accept major insurance providers." />
    </Helmet>
    <Header />
    <PageHeroBanner
      title="Medical Insurance Facility"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Facilities", to: "#" },
        { label: "Medical Insurance" },
      ]}
    />

    {/* Hero Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={insuranceImg}
            alt="Medical Insurance at Vijaya Eye Clinic"
            className="rounded-2xl shadow-xl w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold mb-2">— Medical Insurance</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ensuring Visionary Wellness
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ensuring the health of your eyes is a fundamental aspect of maintaining overall well-being. Medical insurance plays a pivotal role in facilitating access to quality eye care, ensuring comprehensive coverage that safeguards your vision and financial security.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {["Cost Coverage", "Streamlined Treatment", "Preventive Care", "Chronic Conditions", "Emergency Situations", "Financial Security"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Button asChild className="rounded-full gradient-primary">
              <a href="tel:08023356953">
                <Phone className="w-4 h-4 mr-2" /> We Are Here For You — 080 23356953
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Shield Section */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-semibold mb-2">— Medical Insurance Coverage —</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Shield Your Vision, Secure Your Peace Of Mind
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
          Discover Vijaya Eye Clinic's Committed to Medical Insurance Excellence.
        </p>
        <div className="max-w-4xl mx-auto text-left space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Experience seamless cashless treatment with our tie-ups with all major Medical Claim Settlement Facilities. At Vijaya Eye Clinic, the incorporation of cashless treatments ensures that our patients can access the highest quality eye care without the burden of immediate financial concerns.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Experience the assurance of a secure financial wellness – because your peace of mind matters. Vijaya Eye Clinic invites you to explore the cashless advantage, where quality care meets financial ease, making every step towards better eye health a seamless and accessible journey for you.
          </p>
        </div>
      </div>
    </section>

    {/* Insurance Companies */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
          List Of Some Empanelled Insurance Companies, TPA's And Corporates For Cashless Eye Treatment Facility
        </h2>
        <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {insuranceCompanies.map((company) => (
            <p key={company} className="text-sm text-muted-foreground text-left">{company}</p>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Benefits Of Medical Insurance
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-card rounded-xl p-6 shadow-md text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <b.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Prioritize Your Vision With The Security Of Medical Insurance.
        </h2>
        <p className="text-muted-foreground mb-6">Protect your vision with Vijaya Eye Clinic comprehensive care. Secure your eye health and peace of mind with our trusted medical insurance services.</p>
        <Button asChild size="lg" className="rounded-full gradient-primary">
          <a href="tel:08023356953">
            <Phone className="w-4 h-4 mr-2" /> Contact Us To Get More Info — 080 23356953
          </a>
        </Button>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-semibold mb-2">— Our Approach —</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">How It Works?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          At Vijaya Eye Clinic, our approach to eye care is grounded in a comprehensive and patient-centric process designed to prioritize your visual health and overall well-being.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-primary font-semibold text-center mb-2">— FAQ —</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
          Decoding Medical Insurance For Your Eye Care
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Explore the ins and outs of medical insurance for eye care. Your comprehensive guide to navigating benefits for clear, healthy vision.
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6">
              <AccordionTrigger className="text-left font-medium text-foreground">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <Footer />
    <FloatingButtons />
  </>
);

export default MedicalInsurance;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { Briefcase, Heart, Users, GraduationCap, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import careersImg from "@/assets/careers.jpg";

const benefits = [
  { icon: Heart, title: "Health Benefits", desc: "Comprehensive health insurance and free eye care for you and your family." },
  { icon: GraduationCap, title: "Learning & Growth", desc: "Continuous professional development programs, workshops, and conference opportunities." },
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside experienced ophthalmologists and a supportive medical team." },
  { icon: Briefcase, title: "Career Advancement", desc: "Clear growth paths with regular performance reviews and promotion opportunities." },
];

const openings = [
  { 
    title: "Patient Counselor / Medical Counselor (Ophthalmology)", 
    dept: "Patient Relations & Counselling", 
    type: "Full-time", 
    location: "Malleshwaram, Bangalore",
    description: "We are seeking a compassionate and empathetic Patient Counselor to guide our patients through their eye care journey, explain diagnostic results, outline recommended surgical or medical treatment procedures, and handle financial/insurance counseling.",
    responsibilities: [
      "Educate patients and their families regarding diagnosed ophthalmic conditions, recommended surgeries (Cataract, LASIK, Refractive, etc.), and treatment protocols.",
      "Address patient anxieties, clarify doubts, and provide detailed counseling regarding pre-operative and post-operative care.",
      "Provide transparent cost estimations, explain hospital tariff packages, and coordinate with the insurance/TPA desk for smooth approvals.",
      "Schedule surgeries, maintain meticulous patient counseling records, and follow up with patients post-treatment to ensure maximum satisfaction.",
      "Act as the primary bridge of communication between the ophthalmologists, clinical staff, and the patient."
    ],
    qualifications: [
      "Any Graduate (B.Sc Nursing, Bachelor in Hospital Administration, MSW, or Graduates with a healthcare background preferred).",
      "1 to 4 years of proven experience as a Patient Counselor or Medical Counselor, ideally in an Eye Hospital or corporate healthcare setup.",
      "Excellent communication and interpersonal skills with fluency in English and Kannada (knowing additional languages like Hindi or Telugu is a major plus).",
      "Empathetic listening skills, strong negotiation capabilities, and a patient-centric mindset."
    ]
  }
];

const Careers = () => (
  <>
    <Helmet>
      <title>Careers | Join Vijaya Eye Clinic Team</title>
      <meta name="description" content="Join our team at Vijaya Eye Clinic. We are looking for talented professionals in healthcare to join our mission of providing world-class eye care." />
      <meta name="keywords" content="careers, job opportunities, healthcare jobs, ophthalmology jobs, bangalore jobs, patient counselor vacancy" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/careers" />
      <meta property="og:title" content="Careers | Join Vijaya Eye Clinic Team" />
      <meta property="og:description" content="Join our team at Vijaya Eye Clinic. We are looking for talented professionals in healthcare." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/careers" />
      <meta name="twitter:title" content="Careers | Join Vijaya Eye Clinic Team" />
      <meta name="twitter:description" content="Join our team at Vijaya Eye Clinic. We are looking for talented professionals in healthcare." />
    </Helmet>
    <Header />
    <PageHeroBanner
      title="Careers at Vijaya Eye Clinic"
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
    />

    {/* Intro */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={careersImg}
            alt="Join Our Team"
            className="rounded-2xl shadow-xl w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Join Our Mission To Transform Eye Care
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Vijaya Eye Clinic, we believe in building a team of passionate professionals dedicated to providing exceptional eye care. Join us in our mission to bring clarity and better vision to thousands of lives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 15 years of excellence, we offer a dynamic work environment, cutting-edge technology, and opportunities to grow alongside some of the best ophthalmologists in Bangalore.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-card rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <b.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Current Openings */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
          Current Openings
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              className="bg-card rounded-xl p-6 border flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">{job.dept}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{job.type}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="w-3 h-3" />{job.location}</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="rounded-full gradient-primary self-start md:self-center"
                  onClick={() => {
                    const formElement = document.getElementById("apply-form-section");
                    const positionInput = document.getElementById("position-input") as HTMLInputElement;
                    if (positionInput) positionInput.value = job.title;
                    formElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Apply Now
                </Button>
              </div>

              {/* Extended Details for the Counselor Role */}
              {job.description && (
                <div className="mt-2 pt-4 border-t border-muted text-sm text-muted-foreground space-y-4">
                  <p className="leading-relaxed">{job.description}</p>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {job.responsibilities?.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Qualifications & Skills Required:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {job.qualifications?.map((qual, index) => (
                        <li key={index}>{qual}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Apply Form */}
    <section id="apply-form-section" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
          Send Us Your Resume
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Ready to join? Fill out the details below or apply directly for one of our listed openings.
        </p>
        <form className="space-y-4 bg-card rounded-xl p-8 shadow-md border">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Full Name" className="rounded-lg" required />
            <Input placeholder="Email Address" type="email" className="rounded-lg" required />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Phone Number" type="tel" className="rounded-lg" required />
            <Input id="position-input" placeholder="Position Interested In" className="rounded-lg" required />
          </div>
          <Textarea placeholder="Tell us about yourself and your experience..." rows={4} className="rounded-lg" />
          <Button type="submit" className="w-full rounded-full gradient-primary">
            <Send className="w-4 h-4 mr-2" /> Submit Application
          </Button>
        </form>
      </div>
    </section>

    <Footer />
    <FloatingButtons />
  </>
);

export default Careers;
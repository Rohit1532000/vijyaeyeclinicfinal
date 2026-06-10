import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import StatsCounter from "@/components/StatsCounter";
import VisionMissionCards from "@/components/VisionMissionCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { CheckCircle, Star, Heart, Lightbulb, Eye as EyeIcon, Users, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import hero3 from "@/assets/hero-3.jpg";

const highlights = [
  "Excellence",
  "Compassion",
  "Innovation",
  "State-of-the-Art Facilities",
  "Patient Centric Approach",
  "Expertise",
];

const coreValues = [
  { icon: Star, title: "Excellence", desc: "Striving for excellence in every service we provide, from comprehensive eye examinations to intricate surgeries, we hold ourselves to the highest standards to ensure optimal outcomes for our patients." },
  { icon: Heart, title: "Compassion", desc: "We approach eye care with empathy and understanding. Our team is dedicated to fostering a supportive and caring environment, ensuring that every patient feels valued and cared for throughout their journey with us." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing the latest advancements in eye care, we continuously invest in cutting-edge technology to provide our patients with the most accurate diagnoses and effective treatments available in the field." },
  { icon: EyeIcon, title: "Transparency", desc: "We believe in open communication and transparency. From discussing treatment options to explaining treatment costs, we ensure that our patients are well-informed, actively involved in their care, and confident in the decisions they make about their eye health." },
  { icon: Users, title: "Community Engagement", desc: "Beyond clinical care, we actively engage with our community. Through educational programs, outreach initiatives, and our health awareness campaigns, we strive to contribute positively to the well-being of the communities we serve." },
];

const qualityCommitments = [
  { title: "Expertise", desc: "Our team of skilled ophthalmic experts and eye care professionals brings extensive experience and expertise to every aspect of our practice, ensuring that our patients receive the best possible care." },
  { title: "State-Of-The-Art Facilities", desc: "Equipped with cutting-edge technology, our clinic boasts state-of-the-art facilities to deliver accurate diagnoses and advanced treatments, reflecting our commitment to quality and precision." },
  { title: "Patient-Centric Approach", desc: "Putting you at the forefront, our patient-centric approach ensures that you receive individualized and compassionate care throughout your journey with Vijaya Eye Clinic." },
  { title: "Ethical Practices", desc: "Upholding the highest standards of ethics and integrity, our practice has core trust. Our commitment to ethical medical practices ensures that you receive care that is not only effective but also delivered with honesty and transparency." },
  { title: "Continuous Improvement", desc: "We believe in continuous improvement. Regular training, staying updated with the latest research, and actively seeking feedback from our patients are integral parts of our commitment to providing quality eye care services." },
];

const CoreValues = () => (
  <>
    <Helmet>
      <title>Core Values & Quality | Vijaya Eye Clinic</title>
      <meta name="description" content="Our core values: Patient-Centricity, Excellence, Integrity, and Innovation. Committed to highest standards of eye care quality." />
      <meta name="keywords" content="core values, quality assurance, patient care, healthcare ethics, eye care excellence" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/core-values" />
      <meta property="og:title" content="Core Values & Quality | Vijaya Eye Clinic" />
      <meta property="og:description" content="Our core values: Patient-Centricity, Excellence, Integrity, and Innovation." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/core-values" />
      <meta name="twitter:title" content="Core Values & Quality | Vijaya Eye Clinic" />
      <meta name="twitter:description" content="Our core values: Patient-Centricity, Excellence, Integrity, and Innovation." />
    </Helmet>
    <Header />
    <main>
      <PageHeroBanner
        title="Our Core Values & Quality"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Core Values & Quality" }]}
      />

      {/* Hero About */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl group">
                <img src={hero3} alt="Core Values" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Core Values & Quality At Vijaya Eye Clinic</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                We Are Pioneers In Eye Care Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience the difference of quality care at Vijaya Eye Clinic, where your vision and well-being are our top priorities.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {highlights.map((h, i) => (
                  <motion.div key={h} className="flex items-center gap-2" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}>
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{h}</span>
                  </motion.div>
                ))}
              </div>
              <Button asChild className="rounded-full gradient-primary px-8">
                <a href="tel:08023356953">080-23356953</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Guiding Core Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Nurturing Vision, Fostering Compassion</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              At Vijaya Eye Clinic, our core values define who we are and guide every aspect of our practice. We are committed to:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                className={`bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all ${i === coreValues.length - 1 ? "md:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="section-padding">
        <div className="container mx-auto">
          <VisionMissionCards />
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Commitment To Quality</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Precision In Practice, Excellence In Care</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              At Vijaya Eye Clinic, quality is the cornerstone of our practice. We are dedicated to ensuring:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityCommitments.map((q, i) => (
              <motion.div
                key={q.title}
                className={`bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all ${i === qualityCommitments.length - 1 ? "md:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{q.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{q.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FAQSection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default CoreValues;

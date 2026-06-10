import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Scan, Zap, ShieldCheck, HeartPulse, Focus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet-async";

const specialities = [
  { icon: Eye, title: "Comprehensive Ophthalmology", href: "/specialities/comprehensive-ophthalmology", desc: "Complete eye care covering routine exams, diagnosis, and management of all eye conditions." },
  { icon: Scan, title: "Cataract Treatment", href: "/specialities/cataract-treatment", desc: "Advanced cataract surgery with premium intraocular lenses for clear, restored vision." },
  { icon: Zap, title: "LASIK & Refractive Treatment", href: "/specialities/lasik-refractive-treatment", desc: "Freedom from glasses with state-of-the-art laser vision correction procedures." },
  { icon: ShieldCheck, title: "Glaucoma Treatment", href: "/specialities/glaucoma-treatment", desc: "Early detection and advanced management to protect your vision from glaucoma." },
  { icon: HeartPulse, title: "Diabetic Eye Care", href: "/specialities/diabetic-eye-care", desc: "Specialized monitoring and treatment for diabetes-related eye conditions." },
  { icon: Focus, title: "Squint Eye Treatment", href: "/specialities/squint-eye-treatment", desc: "Comprehensive treatment to correct eye misalignment for children and adults." },
];

const Specialities = () => (
  <>
    <Helmet>
      <title>Eye Specialities & Treatments | Vijaya Eye Clinic Bangalore</title>
      <meta name="description" content="Explore our comprehensive eye care specialities including cataract surgery, LASIK, glaucoma treatment, retina treatment, and more at Vijaya Eye Clinic." />
      <meta name="keywords" content="eye specialities, cataract surgery bangalore, LASIK bangalore, glaucoma treatment, retina treatment, ophthalmology services" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities" />
      <meta property="og:title" content="Eye Specialities & Treatments | Vijaya Eye Clinic Bangalore" />
      <meta property="og:description" content="Explore our comprehensive eye care specialities including cataract surgery, LASIK, glaucoma treatment, and more." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities" />
      <meta name="twitter:title" content="Eye Specialities & Treatments | Vijaya Eye Clinic Bangalore" />
      <meta name="twitter:description" content="Explore our comprehensive eye care specialities including cataract surgery, LASIK, glaucoma treatment." />
    </Helmet>
    <Header />
    <main>
      <PageHeroBanner
        title="Our Specialities"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Specialities" }]}
      />
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Eye Care Specialities</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              World-Class Eye Care Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Vijaya Eye Clinic, we offer a comprehensive range of specialized eye care services delivered by experienced ophthalmologists using the latest technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={s.href}
                  className="block bg-card rounded-2xl p-8 shadow-md border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Specialities;

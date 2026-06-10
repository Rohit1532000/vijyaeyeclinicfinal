import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const sidebarLinks = [
  { label: "Comprehensive Ophthalmology", href: "/specialities/comprehensive-ophthalmology" },
  { label: "Cataract Treatment", href: "/specialities/cataract-treatment" },
  { label: "LASIK & Refractive Treatment", href: "/specialities/lasik-refractive-treatment" },
  { label: "Glaucoma Treatment", href: "/specialities/glaucoma-treatment" },
  { label: "Diabetic Eye Care", href: "/specialities/diabetic-eye-care" },
  { label: "Squint Eye Treatment", href: "/specialities/squint-eye-treatment" },
  { label: "Pediatric Ophthal Treatment", href: "/specialities/pediatric-ophthal-treatment" },
  { label: "Oculoplasty Treatment", href: "/specialities/oculoplasty-treatment" },
  { label: "Cornea Treatment", href: "/specialities/cornea-treatment" },
  { label: "Retina Treatment", href: "/specialities/retina-treatment" },
  { label: "Myopia Treatment", href: "/specialities/myopia-treatment" },
  { label: "Vitrectomy Surgery", href: "/specialities/vitrectomy-surgery" },
  { label: "Optometry", href: "/specialities/optometry" },
  { label: "International Patient Treatment", href: "/specialities/international-patient-treatment" },
];

interface SpecialityLayoutProps {
  title: string;
  children: React.ReactNode;
}

const SpecialityLayout = ({ title, children }: SpecialityLayoutProps) => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>
        <PageHeroBanner
          title={title}
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: "Specialities", to: "/specialities" },
            { label: title },
          ]}
        />

        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8">
              {/* Sidebar */}
              <motion.aside
                className="space-y-3 lg:self-start lg:sticky lg:top-24"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <nav className="bg-card rounded-2xl shadow-md border border-border/50 overflow-hidden">
                  {sidebarLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`flex items-center justify-between px-5 py-3.5 text-sm font-medium transition-all border-b border-border/30 last:border-b-0 group ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground/70 hover:bg-primary-light hover:text-primary"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      </Link>
                    );
                  })}
                </nav>

                {/* Appointment Card */}
                <motion.div
                  className="gradient-primary rounded-2xl p-6 text-center shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Calendar className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                  <h3 className="text-primary-foreground font-heading font-bold text-lg mb-1">
                    Schedule Your Appointment Today
                  </h3>
                  <p className="text-primary-foreground/80 text-xl font-heading font-bold mb-4">
                    080-23356953
                  </p>
                  <Button asChild className="rounded-full w-full bg-white text-primary hover:bg-white/90 font-semibold">
                    <Link to="/appointment-booking">Make an Appointment</Link>
                  </Button>
                </motion.div>
              </motion.aside>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {children}
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default SpecialityLayout;

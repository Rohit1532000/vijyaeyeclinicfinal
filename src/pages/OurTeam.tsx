import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import StatsCounter from "@/components/StatsCounter";
import VisionMissionCards from "@/components/VisionMissionCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import doctorVasant from "@/assets/doctors/Dr.VasantNPati (1).jpeg";
import doctorVishwanath from "@/assets/doctors/Dr.Vishwanat-768x694.jpeg";
import doctorSunil from "@/assets/doctors/Dr.SunilKuma-768x694.jpeg";
import doctorSavitha from "@/assets/doctors/Dr.SavithaC-1-768x694.jpeg";
import doctorChandana from "@/assets/doctors/Dr.Chandan-768x694.jpeg";
import doctorDhananjaya from "@/assets/doctors/Dr.DhananjayaK-768x694.jpeg";

const doctors = [
  { name: "Dr. Vasant N Patil", role: "Founder & Chief Ophthalmologist", qualifications: "MBBS, DO., MS (OPH), FVR", speciality: "Cataract & Glaucoma Specialist", image: doctorVasant },
  { name: "Dr. Vishwanath", role: "Eye Specialist & Vitreo Surgeon", qualifications: "MBBS, DO., MS (OPH), FVR", speciality: "Eye Specialist & Vitreo Eye Surgeon", image: doctorVishwanath },
  { name: "Dr. Sunil Kumar M", role: "Ophthalmologist", qualifications: "MBBS, DOMS, DNB KMC", speciality: "Fellowship in Phacoemulsification", image: doctorSunil },
  { name: "Dr. Savitha C S", role: "Ophthalmologist", qualifications: "MS Ophthalmology FVR", speciality: "Ophthalmologist", image: doctorSavitha },
  { name: "Dr. Chandana K.M", role: "Ophthalmologist", qualifications: "MBBS, M.S. (Ophtha)", speciality: "Ophthalmologist", image: doctorChandana },
  { name: "Dr. Dhananjaya KH", role: "Ophthalmologist", qualifications: "MS (Ophthalmologist) FPIS", speciality: "Phaco And Refractive Surgery", image: doctorDhananjaya },
];

const OurTeam = () => (
  <>
    <Helmet>
      <title>Our Team | Expert Ophthalmologists - Vijaya Eye Clinic</title>
      <meta name="description" content="Meet our team of highly experienced ophthalmologists and eye care specialists at Vijaya Eye Clinic. Over 40+ years of combined expertise." />
      <meta name="keywords" content="ophthalmologists, eye doctors, eye specialists, surgical team, expert doctors bangalore" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/our-team" />
      <meta property="og:title" content="Our Team | Expert Ophthalmologists - Vijaya Eye Clinic" />
      <meta property="og:description" content="Meet our team of highly experienced ophthalmologists and eye care specialists at Vijaya Eye Clinic." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/our-team" />
      <meta name="twitter:title" content="Our Team | Expert Ophthalmologists - Vijaya Eye Clinic" />
      <meta name="twitter:description" content="Meet our team of highly experienced ophthalmologists and eye care specialists at Vijaya Eye Clinic." />
    </Helmet>
    <Header />
    <main>
      <PageHeroBanner
        title="Our Team"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Our Team" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Doctors</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Meet Our Specialist</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our team at Vijaya Eye Clinic comprises seasoned professionals driven by a shared passion for exceptional eye care.
              Each member brings a wealth of experience, expertise, and dedication to ensure that you receive the highest standard of service.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((d, i) => (
              <motion.div
                key={d.name}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="h-80 relative overflow-hidden">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center gradient-primary rounded-b-2xl">
                  <h3 className="text-lg font-heading font-semibold text-primary-foreground">{d.name}</h3>
                  <p className="text-primary-foreground/90 text-sm mt-1">{d.role}</p>
                  <p className="text-primary-foreground/80 text-xs mt-2">{d.speciality}</p>
                  <p className="text-primary-foreground/70 text-xs mt-2">{d.qualifications}</p>
                  <Button asChild className="mt-4 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    <a href="#contact">Book Appointment</a>
                  </Button>
                </div>
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

      <WhyChooseUs />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default OurTeam;

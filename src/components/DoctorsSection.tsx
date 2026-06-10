import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

import doctorVasant from "@/assets/doctors/Dr.VasantNPati (1).jpeg";
import doctorVishwanath from "@/assets/doctors/Dr.Vishwanat-768x694.jpeg";
import doctorSunil from "@/assets/doctors/Dr.SunilKuma-768x694.jpeg";
import doctorSavitha from "@/assets/doctors/Dr.SavithaC-1-768x694.jpeg";
import doctorChandana from "@/assets/doctors/Dr.Chandan-768x694.jpeg";
import doctorDhananjaya from "@/assets/doctors/Dr.DhananjayaK-768x694.jpeg";

const doctors = [
  { name: "Dr. Vasant N Patil", role: "Founder & Chief Ophthalmologist", speciality: "Cataract & Glaucoma Specialist", experience: "40+ years", image: doctorVasant },
  { name: "Dr. Vishwanath", role: "Eye Specialist & Vitreo Surgeon", speciality: "Vitreo-Retinal Surgery", experience: "25+ years", image: doctorVishwanath },
  { name: "Dr. Sunil Kumar M", role: "Ophthalmologist", speciality: "Phacoemulsification", experience: "15+ years", image: doctorSunil },
  { name: "Dr. Savitha C S", role: "Ophthalmologist", speciality: "Ophthalmologist", experience: "20+ years", image: doctorSavitha },
  { name: "Dr. Chandana K.M", role: "Ophthalmologist", speciality: "Ophthalmologist", experience: "10+ years", image: doctorChandana },
  { name: "Dr. Dhananjaya KH", role: "Ophthalmologist", speciality: "Phaco And Refractive Surgery", experience: "8+ years", image: doctorDhananjaya },
];

const DoctorsSection = () => (
  <section id="doctors" className="section-padding">
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
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((d, i) => (
          <motion.div
            key={d.name}
            className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 group hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="h-80 relative overflow-hidden">
              <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-heading font-semibold text-foreground">{d.name}</h3>
              <p className="text-primary font-medium text-sm mt-1">{d.role}</p>
              <p className="text-muted-foreground text-sm mt-2">{d.speciality}</p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-primary" />
                {d.experience} experience
              </div>
              <Button asChild className="mt-4 rounded-full gradient-primary hover:scale-105 transition-transform w-full">
                <a href="/appointment-booking">Book Appointment</a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;

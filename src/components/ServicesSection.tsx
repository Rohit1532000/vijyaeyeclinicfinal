import { motion } from "framer-motion";
import { Eye, Scan, Glasses, Microscope, Syringe, Heart } from "lucide-react";

const services = [
  { icon: Eye, title: "Comprehensive Ophthalmology", description: "Complete eye examinations and treatment for all eye conditions, including glaucoma, cataracts, and more." },
  { icon: Scan, title: "Retina Treatment", description: "Advanced retinal diagnosis and treatment including diabetic retinopathy, macular degeneration, and retinal detachment." },
  { icon: Glasses, title: "LASIK & Refractive Surgery", description: "Freedom from glasses with our advanced LASIK and refractive surgery options using the latest technology." },
  { icon: Microscope, title: "Cataract Surgery", description: "Advanced phacoemulsification cataract surgery with premium IOL options for crystal clear vision." },
  { icon: Syringe, title: "Glaucoma Management", description: "Early detection and comprehensive management of glaucoma to preserve your vision for a lifetime." },
  { icon: Heart, title: "Pediatric Ophthalmology", description: "Specialized eye care for children including squint correction, amblyopia treatment, and vision screening." },

  // ✅ Newly Added Services
  { icon: Eye, title: "Cornea Treatment", description: "Advanced diagnosis and treatment for corneal diseases including infections, injuries, and corneal transplants." },
  { icon: Scan, title: "Diabetic Eye Care", description: "Comprehensive eye care solutions for diabetic patients to prevent and manage vision-related complications." },
  { icon: Glasses, title: "Squint Eye Treatment", description: "Expert correction and management of squint (strabismus) for improved eye alignment and vision." },
  { icon: Microscope, title: "Oculoplasty Treatment", description: "Specialized surgical procedures for eyelid, tear duct, and orbital disorders to restore function and aesthetics." },
  { icon: Syringe, title: "Myopia Treatment", description: "Advanced solutions to control and manage nearsightedness progression in children and adults." },
  { icon: Heart, title: "Vitrectomy Surgery", description: "Advanced surgical procedure to treat retinal disorders by removing the vitreous gel for better vision clarity." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-alt">
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Treatments</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">We Give The Best For You</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Our comprehensive range of eye care treatments ensures that you receive the best possible treatment tailored to your specific needs.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-border/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {s.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
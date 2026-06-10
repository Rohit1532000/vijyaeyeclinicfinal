import { motion } from "framer-motion";
import img1 from "@/assets/gallery-1.png";
import img2 from "@/assets/gallery-2.png";
import img3 from "@/assets/gallery-3.jpg";
import img4 from "@/assets/gallery-4.jpg";
import img5 from "@/assets/gallery-5.jpg";

const images = [
  { src: img1, alt: "In-house Pharmacy", span: "md:col-span-2 md:row-span-2" },
  { src: img2, alt: "Operation Theatre", span: "" },
  { src: img3, alt: "Surgical Equipment", span: "" },
  { src: img4, alt: "Sterilization Room", span: "md:col-span-2" },
  { src: img5, alt: "Autoclave Room", span: "" },
];

const GallerySection = () => (
  <section className="section-padding section-alt overflow-hidden">
    <div className="container mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
          Our Clinic & Facilities
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Take a glimpse at our state-of-the-art facilities and the warm environment we've created for our patients.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
              <motion.span
                className="text-primary-foreground font-heading font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0"
                style={{ transition: "all 0.3s ease" }}
              >
                {img.alt}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "@/assets/neha-gallery-1.avif";
import gallery2 from "@/assets/neha-gallery-2.avif";
import gallery3 from "@/assets/neha-gallery-3.avif";
import gallery4 from "@/assets/neha-gallery-4.avif";
import gallery5 from "@/assets/neha-gallery-5.avif";
import gallery6 from "@/assets/neha-gallery-6.jpg";
import gallery7 from "@/assets/neha-gallery-7.webp";
import gallery8 from "@/assets/neha-gallery-8.webp";
import gallery9 from "@/assets/neha-gallery-9.avif";
import gallery10 from "@/assets/neha-gallery-10.avif";

const images = [
  { src: gallery8, alt: "Neha Opticals Store Front" },
  { src: gallery1, alt: "Eyewear Collection Display" },
  { src: gallery2, alt: "Premium Frames Section" },
  { src: gallery3, alt: "Lens Crafting Area" },
  { src: gallery6, alt: "Essilor Stellest Lenses Display" },
  { src: gallery4, alt: "Store Interior View" },
  { src: gallery5, alt: "Consultation Area" },
  { src: gallery7, alt: "Waiting Area" },
  { src: gallery9, alt: "Opticals Store View" },
  { src: gallery10, alt: "Frame Display Wall" },
];

const NehaOpticalsGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % images.length);
  };
  const goPrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold text-center mb-2">— Our Store —</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 text-white/80 hover:text-white z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 text-white/80 hover:text-white z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.img
              key={selectedIndex}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 text-white/60 text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NehaOpticalsGallery;

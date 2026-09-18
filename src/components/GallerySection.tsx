import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import image1 from "@/assets/1.jpeg";
import image2 from "@/assets/2.jpeg";
import image3 from "@/assets/3.jpeg";
import image4 from "@/assets/4.jpeg";
import image5 from "@/assets/5.jpeg";
import image6 from "@/assets/6.jpeg";
import image7 from "@/assets/7.jpeg";
import image8 from "@/assets/8.jpeg";
import image9 from "@/assets/9.jpeg";
import image10 from "@/assets/10.jpeg";
import image11 from "@/assets/11.jpeg";
import image12 from "@/assets/12.jpeg";
import image13 from "@/assets/13.jpeg";
import image14 from "@/assets/14.jpeg";
import image15 from "@/assets/15.jpeg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Clinic & Facilities
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Take a glimpse at our state-of-the-art facilities and the warm
            environment we've created for our patients.
          </p>
        </div>

        {/* 3 Column Grid with Equal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
              className="relative w-full aspect-square overflow-hidden rounded-2xl bg-muted cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={img}
                alt={`Clinic image ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox rendered directly into body via Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedImage !== null && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100vw",
                  height: "100vh",
                  zIndex: 999999,
                  backgroundColor: "rgba(0, 0, 0, 0.92)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                }}
                onClick={() => setSelectedImage(null)}
              >
                {/* Close Button - Top Right Corner */}
                <button
                  type="button"
                  style={{
                    position: "fixed",
                    top: "24px",
                    right: "24px",
                    zIndex: 1000000,
                  }}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/40 backdrop-blur-md transition-all cursor-pointer border border-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  aria-label="Close image"
                >
                  <X className="w-7 h-7 stroke-[2.5]" />
                </button>

                {/* Original Size Image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={images[selectedImage]}
                    alt={`Clinic image ${selectedImage + 1} enlarged`}
                    className="max-h-[85vh] max-w-[90vw] w-auto h-auto rounded-xl object-contain shadow-2xl"
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default GallerySection;
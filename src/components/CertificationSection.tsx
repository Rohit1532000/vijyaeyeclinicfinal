import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import isoCertificate from "@/assets/iso-certificate.jpg";

const CertificationSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(210,60%,15%)] to-[hsl(210,70%,10%)]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          
          {/* Left: Certificate visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#c9a84c]/30 to-[#f0d78c]/20 blur-xl rounded-lg" />
              
              {/* Certificate image */}
              <div className="relative rounded-lg overflow-hidden border-2 border-[#c9a84c]/40 shadow-2xl shadow-black/30 max-w-sm">
                <img
                  src={isoCertificate}
                  alt="ISO 9001:2015 Certificate - Vijaya Eye Clinic"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a84c]/20 text-[#f0d78c] text-sm font-semibold tracking-wider uppercase mb-4">
              Internationally Certified
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Certified for <span className="text-[#c9a84c]">Excellence</span> in Eye Care
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Vijaya Eye Clinic is proudly ISO 9001:2015 certified, ensuring the highest standards in quality management for human health and social care services.
            </p>

            {/* Certificate details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Certificate No", value: "JMIPL/2025/QMS/039" },
                { label: "Accredited By", value: "EGAC & IAF" },
                { label: "Valid Until", value: "March 2028" },
                { label: "Scope", value: "Health & Social Care" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-white/40 text-xs">
              Certified by Jiaan Management India Pvt Ltd · IAF Accredited · EGAC Certification
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
    </section>
  );
};

export default CertificationSection;

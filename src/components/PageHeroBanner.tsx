import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageHeroBannerProps {
  title: string;
  breadcrumbs: { label: string; to?: string }[];
}

const PageHeroBanner = ({ title, breadcrumbs }: PageHeroBannerProps) => (
  <section className="gradient-primary py-16 md:py-24 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-foreground/10" />
    <div className="container mx-auto relative z-10 text-center">
      <motion.h1
        className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {breadcrumbs.map((b, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span>›</span>}
            {b.to ? (
              <Link to={b.to} className="hover:text-primary-foreground transition-colors">
                {b.label}
              </Link>
            ) : (
              <span className="text-primary-foreground font-medium">{b.label}</span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PageHeroBanner;

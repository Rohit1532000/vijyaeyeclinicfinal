import { motion } from "framer-motion";
import { MapPin, Phone, Star, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const branches = [
  {
    name: "Vijayanagar Branch",
    subtitle: "Main Branch",
    address:
      "Pv Plaza, #2, 5th Main Road MC Layout, Opp. to Sarvajna Bus Stop, Near Govindharajanagra Signal, Vijayanagar, Bengaluru, Karnataka 560040",
    phone: "097393 02523",
    rating: 4.9,
    reviews: "2,923",
    mapUrl: "https://maps.google.com/?q=Vijaya+Eye+Clinic+Vijayanagar+Bangalore",
  },
  {
    name: "Nagadevanahalli Branch",
    subtitle: "Branch Clinic",
    address:
      "12/2/B, Outer Ring Rd, Bhuvaneshwari Nagar, Nagadevanahalli, Bengaluru, Karnataka 560060",
    phone: "070900 01581",
    rating: 5.0,
    reviews: "553",
    mapUrl: "https://maps.google.com/?q=Vijaya+Eye+Clinic+Nagadevanahalli+Bangalore",
  },
];

const BranchesSection = () => (
  <section className="section-padding bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
          Our Locations
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Visit Our <span className="text-primary">Branches</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Two convenient locations in Bengaluru to serve you with world-class eye care.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {branches.map((branch, i) => (
          <motion.div
            key={branch.name}
            className="group relative bg-card rounded-3xl border border-border/50 shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
            initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary/70 to-primary/40" />

            <div className="p-7 md:p-8 space-y-5">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {branch.name}
                  </h3>
                  <span className="text-xs font-medium text-primary/80 bg-primary/10 px-2.5 py-0.5 rounded-full mt-1 inline-block">
                    {branch.subtitle}
                  </span>
                </div>
                {/* Google Rating */}
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-foreground text-sm">{branch.rating}</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">{branch.reviews} reviews</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{branch.address}</p>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a
                  href={`tel:${branch.phone.replace(/\s/g, "")}`}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {branch.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">09:00 AM – 9:30 PM</span>
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-2">
                <Button asChild className="rounded-full flex-1 font-semibold">
                  <a href={`tel:${branch.phone.replace(/\s/g, "")}`}>
                    <Phone className="w-4 h-4 mr-2" /> Call Now
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full flex-1 font-semibold border-primary/30 text-primary hover:bg-primary/5">
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> Directions
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BranchesSection;

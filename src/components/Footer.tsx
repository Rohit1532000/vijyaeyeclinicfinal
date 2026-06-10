import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import logo from "@/assets/logo.jpg";

const socialLinks = [
  { Icon: Facebook, url: "https://www.facebook.com/vijayaeyeclinic", label: "Facebook" },
  { Icon: Instagram, url: "https://www.instagram.com/vijayaeyeclinic", label: "Instagram" },
  { Icon: Youtube, url: "https://www.youtube.com/@vijayaeyeclinic", label: "YouTube" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Specialities", href: "/specialities" },
  { label: "Our Team", href: "/our-team" },
  { label: "Appointment", href: "/appointment-booking" },
  { label: "Contact Us", href: "/contact-us" },
];

const facilityLinks = [
  // { label: "Medical Insurance", href: "/facilities/medical-insurance" },
  { label: "Insurance & Cashless", href: "/facilities/insurance-cashless" },
  { label: "Opticals by Neha Opticals", href: "/facilities/opticals-by-neha" },
  { label: "Nagadevanahalli Branch", href: "/facilities/nagadevanahalli" },
];

const informationLinks = [
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  {
    label: "International Patients",
    href: "/international-patient-treatment",
  },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Core Values", href: "/core-values" },
  { label: "Community Outreach", href: "/community-outreach" },
];

const Footer = () => (
  <footer id="appointment" className="bg-foreground text-primary-foreground">
    {/* Main Footer */}
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Branding */}
        <div>
          <img
            src={logo}
            alt="Vijaya Eye Clinic"
            className="h-16 mb-5 rounded bg-white p-1"
          />

          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            At Vijaya Eye Clinic | Vijayanagar, we are dedicated to providing
            top-tier eye care services with a personalized touch and advanced
            ophthalmic treatment solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-xl mb-5">
            Quick Links
          </h3>

          <div className="space-y-3">
            {quickLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="block text-sm text-primary-foreground/70 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="font-heading font-semibold text-xl mb-5">
            Facilities
          </h3>

          <div className="space-y-3">
            {facilityLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="block text-sm text-primary-foreground/70 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-heading font-semibold text-xl mb-5">
            Information
          </h3>

          <div className="space-y-3">
            {informationLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="block text-sm text-primary-foreground/70 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-semibold text-xl mb-5">
            Get In Touch
          </h3>

          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 text-primary mt-1" />

              <span className="text-primary-foreground/70 leading-relaxed">
                #2, Pv Plaza, 5th Main Rd, Opp. Sarvajna Bus Stop,
                Vijayanagar, Bengaluru, Karnataka 560040.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 flex-shrink-0 text-primary mt-1" />

              <div className="text-primary-foreground/70 leading-relaxed">
                <a
                  href="tel:+919008021523"
                  className="hover:text-white transition-colors"
                >
                  +91 9008021523
                </a>

                <br />

                <a
                  href="tel:08023360953"
                  className="hover:text-white transition-colors"
                >
                  080-23360953
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 flex-shrink-0 text-primary mt-1" />

              <a
                href="mailto:info@vijayaeyeclinic.com"
                className="text-primary-foreground/70 hover:text-white transition-colors break-all"
              >
                info@vijayaeyeclinic.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 flex-shrink-0 text-primary mt-1" />

              <span className="text-primary-foreground/70">
                Mon - Sat: 9:00 AM - 9:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Vijaya Eye Clinic. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/50">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <span className="text-white/30">•</span>

            <Link
              to="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>

            <span className="text-white/30">•</span>

            <Link
              to="/refund-and-returns"
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
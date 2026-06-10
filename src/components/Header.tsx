import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import TopBar from "./TopBar";

const aboutDropdown = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "Vision and Mission", href: "/vision-mission" },
  { label: "Core Values & Quality", href: "/core-values" },
  { label: "Community Outreach", href: "/community-outreach" },
  { label: "Careers", href: "/careers" },
];

const specialitiesDropdown = [
  { label: "Comprehensive Ophthalmology", href: "/specialities/comprehensive-ophthalmology" },
  { label: "Cataract Treatment", href: "/specialities/cataract-treatment" },
  { label: "LASIK & Refractive Treatment", href: "/specialities/lasik-refractive-treatment" },
  { label: "Glaucoma Treatment", href: "/specialities/glaucoma-treatment" },
  { label: "Diabetic Eye Care", href: "/specialities/diabetic-eye-care" },
  { label: "Squint Eye Treatment", href: "/specialities/squint-eye-treatment" },
  { label: "Pediatric Ophthal Treatment", href: "/specialities/pediatric-ophthal-treatment" },
  { label: "Oculoplasty Treatment", href: "/specialities/oculoplasty-treatment" },
  { label: "Cornea Treatment", href: "/specialities/cornea-treatment" },
  { label: "Retina Treatment", href: "/specialities/retina-treatment" },
  { label: "Myopia Treatment", href: "/specialities/myopia-treatment" },
  { label: "Vitrectomy Surgery", href: "/specialities/vitrectomy-surgery" },
  { label: "Optometry", href: "/specialities/optometry" },
];

const facilitiesDropdown = [
  { label: "Insurance & Cashless", href: "/facilities/insurance-cashless" },
  { label: "Opticals by Neha Opticals", href: "/facilities/opticals-by-neha" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Specialities", href: "/specialities", dropdown: specialitiesDropdown },
  { label: "Facilities", href: "#", dropdown: facilitiesDropdown },
  { label: "About", href: "#about", dropdown: aboutDropdown },

  // ✅ moved from careers position
  { label: "Nagadevanahalli Branch", href: "/facilities/nagadevanahalli" },

  { label: "International Patients", href: "/international-patient-treatment" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((l) =>
              l.dropdown ? (
                <div key={l.label} className="relative">

                  <button
                    onClick={() => toggleDropdown(l.label)}
                    className="text-sm font-bold text-black flex items-center gap-1"
                  >
                    {l.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === l.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === l.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg z-50">
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          to={d.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm font-bold text-black hover:bg-gray-100"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-sm font-bold text-black hover:text-primary"
                >
                  {l.label}
                </Link>
              )
            )}

            {/* Button */}
            <Button asChild className="rounded-full">
              <Link to="/appointment-booking">
                <Phone className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>

          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden bg-white border-t px-4 pb-4">

            {navLinks.map((l) =>
              l.dropdown ? (
                <div key={l.label}>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === l.label ? null : l.label
                      )
                    }
                    className="w-full flex justify-between py-3 text-sm font-bold text-black"
                  >
                    {l.label}
                    <ChevronDown />
                  </button>

                  {mobileDropdown === l.label && (
                    <div className="pl-4">
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          to={d.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm font-bold text-black"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-bold text-black"
                >
                  {l.label}
                </Link>
              )
            )}

            {/* Appointment Button */}
            <Button asChild className="w-full mt-4">
              <Link to="/appointment-booking">
                <Phone className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </Button>

          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
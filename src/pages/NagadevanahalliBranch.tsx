import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroBanner from "@/components/PageHeroBanner";
import FloatingButtons from "@/components/FloatingButtons";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Eye, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import branchImg from "@/assets/new2.png";
import galleryImg2 from "@/assets/new1.png";
import galleryImg3 from "@/assets/new3.png";
import galleryImg4 from "@/assets/new4.png";
import galleryImg5 from "@/assets/new5.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const servicesOffered = [
  "Comprehensive Eye Exams: Regular checkups to assess overall eye health and detect issues early.",
  "Cataract Surgery: Safe and effective procedures to restore clear vision.",
  "Glaucoma Management: Early detection and long-term management of glaucoma to prevent vision loss.",
  "Myopia Control: Specialized treatments for children and adults to manage the progression of myopia.",
  "Keratoconus Treatment: Advanced treatment options, including scleral lenses, to correct vision.",
  "Diabetic Retinopathy Screening: Thorough evaluations for patients with diabetes to prevent vision complications.",
];

const faqs = [
  {
    q: "What services does the Nagadevanahalli branch offer?",
    a: "We offer comprehensive eye care including eye exams, cataract surgery, glaucoma treatment, myopia control, diabetic retinopathy screening, and more."
  },
  {
    q: "How do I book an appointment at the Nagadevanahalli branch?",
    a: "You can book online through our website, call us directly at +91 7090001581, or visit the clinic in person."
  },
  {
    q: "Is the Nagadevanahalli branch easily accessible?",
    a: "Yes, located in the heart of Nagadevanahalli, our clinic is easily accessible for patients across Bangalore with good public transport connections."
  },
  {
    q: "Do you accept medical insurance at this branch?",
    a: "Yes, we accept most major medical insurance plans and offer cashless treatment facilities."
  },
  {
    q: "What are the clinic timings?",
    a: "The clinic operates from 9:00 AM to 9:30 PM, Monday to Saturday. Please call to confirm timings for specific services."
  },
];

const NagadevanahalliBranch = () => (
  <>
    <Helmet>
      <title>Nagadevanahalli Branch | Vijaya Eye Clinic</title>
      <meta name="description" content="Vijaya Eye Clinic Nagadevanahalli Branch. Modern facilities, expert ophthalmologists, convenient location for comprehensive eye care in Bangalore." />
      <meta name="keywords" content="eye clinic nagadevanahalli, ophthalmologist near me, eye hospital bangalore, eye care services" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/facilities/nagadevanahalli" />
      <meta property="og:title" content="Nagadevanahalli Branch | Vijaya Eye Clinic" />
      <meta property="og:description" content="Vijaya Eye Clinic Nagadevanahalli Branch. Modern facilities, expert ophthalmologists, convenient location." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/facilities/nagadevanahalli" />
      <meta name="twitter:title" content="Nagadevanahalli Branch | Vijaya Eye Clinic" />
      <meta name="twitter:description" content="Vijaya Eye Clinic Nagadevanahalli Branch. Modern facilities, expert ophthalmologists, convenient location." />
    </Helmet>
    <Header />

    <PageHeroBanner
      title="Vijaya Eye Clinic | Super Specialty Eye Hospital In Nagadevanahalli"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Facilities", to: "#" },
        { label: "Vijaya Eye Clinic Nagadevanahalli Branch" },
      ]}
    />

    {/* ABOUT SECTION */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* IMAGE */}
          <div className="md:sticky md:top-24 h-fit">
            <motion.img
              src={branchImg}
              alt="Vijaya Eye Clinic Nagadevanahalli Branch"
              className="rounded-2xl shadow-xl w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
          </div>

          {/* CONTENT (FULL REPLACED CONTENT) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Welcome to Vijaya Eye Clinic – Nagadevanahalli Branch
            </h2>

            <p className="text-muted-foreground mb-4">
              Your Trusted Partner in World-Class Vision Care, Now Closer to You
            </p>

            <p className="text-muted-foreground mb-4">
              Vijaya Eye Clinic is proud to extend its legacy of clinical excellence and compassionate care to our brand-new, state-of-the-art Super Specialty Eye Hospital in Nagadevanahalli, Bangalore.
            </p>

            <p className="text-muted-foreground mb-4">
              For years, Vijaya Eye Clinic has been synonymous with trust, precision, and cutting-edge ophthalmology. Strategically situated right on the Outer Ring Road (Bhuvaneshwari Nagar), our new Nagadevanahalli branch brings advanced, comprehensive eye care services right to your neighbourhood. Whether it is a routine eye examination or a complex vitreoretinal surgery, our facility is fully equipped to protect, restore, and enhance your vision.
            </p>

            <h3 className="font-bold text-foreground mb-2">
              Expanding Advanced Eye Care Across West Bangalore & Beyond
            </h3>

            <p className="text-muted-foreground mb-4">
              Historically, patients living in the western fringes of the city and neighbouring industrial hubs faced exhausting, hour-long commutes to central Bangalore just to access high-quality eye care.
            </p>

            <p className="text-muted-foreground mb-4">
              Our new hospital completely eliminates that burden. Located with premium main-road accessibility, ample parking, and seamless connectivity via the Purple Metro Line, this branch serves as a vital healthcare hub for families, working professionals, and senior citizens.
            </p>

            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li>• SMV Layout, Ullal</li>
              <li>• Gnana Bharathi, Jnana Ganga Nagar</li>
              <li>• Kengeri & Satellite Town</li>
              <li>• Nagarabhavi & Shirke Layout</li>
              <li>• RR Nagar & Mallathahalli</li>
            </ul>

            <h3 className="font-bold text-foreground mb-2">
              Seamless Connectivity for Satellite Towns & Industrial Hubs
            </h3>

            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li>• Bidadi Industrial Area</li>
              <li>• Ramanagara</li>
              <li>• Kumbalgodu & Kengeri Hobli</li>
            </ul>

            <h3 className="font-bold text-foreground mb-2">
              Why Our Nagadevanahalli Branch Stands Out
            </h3>

            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li>• Convenient Ring Road Location</li>
              <li>• Comprehensive Family Vision Packages</li>
              <li>• Advanced Diagnostic Ecosystem</li>
            </ul>

            <h3 className="font-bold text-foreground mb-2">
              Advanced Eye Care Services We Offer
            </h3>

            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li>• Advanced Cataract Surgery</li>
              <li>• LASIK & Refractive Services</li>
              <li>• Glaucoma Management</li>
              <li>• Pediatric Ophthalmology</li>
              <li>• Retina & Diabetic Eye Care</li>
              <li>• Comprehensive Eye Examinations</li>
            </ul>

            <h3 className="font-bold text-foreground mb-2">
              Your Vision is Our Mission
            </h3>

            <p className="text-muted-foreground mb-4">
              At Vijaya Eye Clinic Nagadevanahalli, we don't just treat eye conditions; we enhance your quality of life.
            </p>

            <h3 className="font-bold text-foreground mb-2">
              Schedule Your Visit Today
            </h3>

            <p className="text-muted-foreground mb-4">
              Step into a world of clearer vision. Our team is ready to welcome you and your family.
            </p>

            <p className="text-muted-foreground text-sm">
              • Address: No. 12/2/B, Outer Ring Road, Bhuvaneshwari Nagar, Nagadevanahalli, Bengaluru, Karnataka 560060 <br />
              • Timing: Monday – Sunday: 10:00 AM – 10:00 PM <br />
              • Contact: +91 7090001581 / care@vijayaeyeclinic.com
            </p>

            <Button asChild className="rounded-full gradient-primary mt-6">
              <a href="tel:+917090001581">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* GALLERY SECTION */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Gallery
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our state-of-the-art facility and world-class infrastructure at Vijaya Eye Clinic Nagadevanahalli Branch
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: galleryImg2 },
            { img: galleryImg3 },
            { img: galleryImg4 },
            { img: galleryImg5 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={item.img}
                alt="Gallery"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* STATS SECTION */}
    <section className="gradient-primary py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
        {[
          { num: "10,000+", label: "Happy Patients" },
          { num: "30+", label: "Doctors And Staff" },
          { num: "10,000+", label: "Online Appointments" },
          { num: "15+", label: "Years Experience" },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold">{s.num}</div>
            <div className="text-sm opacity-80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* VISION */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="bg-card p-8 rounded-xl shadow">
          <div className="flex gap-3 mb-3">
            <Eye className="text-primary" />
            <h3 className="font-bold">Our Vision & Mission</h3>
          </div>
          <p className="text-muted-foreground">
            To deliver excellence and compassion in eye care with innovation and precision.
          </p>
        </div>

        <div className="bg-card p-8 rounded-xl shadow">
          <div className="flex gap-3 mb-3">
            <Target className="text-red-500" />
            <h3 className="font-bold">Our Goal</h3>
          </div>
          <p className="text-muted-foreground">
            To elevate eye care standards through innovation, accessibility, and trust.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <Footer />
    <FloatingButtons />
  </>
);

export default NagadevanahalliBranch;
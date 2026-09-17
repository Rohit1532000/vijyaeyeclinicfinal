import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHeroBanner from "@/components/PageHeroBanner";
import StatsCounter from "@/components/StatsCounter";
import VisionMissionCards from "@/components/VisionMissionCards";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Eye, Users, BookOpen, HeartHandshake } from "lucide-react";
import { Helmet } from "react-helmet-async";
import hero3 from "@/assets/hero-3.jpg";


const initiatives = [
  { title: "Our Initiatives", desc: "Vijaya Eye Clinic runs community outreach programs and initiatives across various communities, providing free and subsidized eye care services to vulnerable and underserved populations.", icon: HeartHandshake },
  { title: "Free Eye Check-Up Camps", desc: "Regularly organized in collaboration with local organizations, these camps aim to identify and address common eye conditions in rural and underserved areas. Through free screenings, we aim to catch and treat issues early.", icon: Eye },
  { title: "School Eye Health Programs", desc: "We prioritize the eye health of the younger generation through our school-based programs. Our outreach to educational institutions aims to detect early vision problems and ensure that children have access to proper eye health services.", icon: BookOpen },
  { title: "Community Workshops", desc: "Engaging with the community, we organize workshops covering various aspects of eye health from preventive measures to understanding the importance of regular eye check-ups. These interactive sessions aim to empower the community with knowledge and awareness.", icon: Users },
];

const CommunityOutreach = () => (
  <>
    <Helmet>
      <title>Community Outreach | Vijaya Eye Clinic Bangalore</title>
      <meta name="description" content="Vijaya Eye Clinic is committed to giving back to the community through eye care awareness programs and free eye camps in Bangalore." />
      <meta name="keywords" content="community outreach, eye camps, free eye screening, social responsibility, healthcare awareness" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/community-outreach" />
      <meta property="og:title" content="Community Outreach | Vijaya Eye Clinic Bangalore" />
      <meta property="og:description" content="Vijaya Eye Clinic is committed to giving back to the community through eye care awareness programs." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/community-outreach" />
      <meta name="twitter:title" content="Community Outreach | Vijaya Eye Clinic Bangalore" />
      <meta name="twitter:description" content="Vijaya Eye Clinic is committed to giving back to the community through eye care awareness programs." />
    </Helmet>
    <Header />
    <main>
      <PageHeroBanner
        title="Community Outreach"
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Community Outreach" }]}
      />

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl group">
                <img src={hero3} alt="Community Outreach" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Vijaya Eye Clinic Community</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Empowering Communities Through Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Vijaya Eye Clinic, our commitment to eye care extends beyond the walls of our clinic. We believe in making
                a positive impact on the well-being of the communities we serve.
              </p>
              <Button asChild className="rounded-full gradient-primary px-8">
                <a href="tel:08023356953">
                  <Phone className="w-4 h-4 mr-2" />
                  We Are Here For You — 080-23356953
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Community Engagement</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Elevating Eye Health, Empowering Communities
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Discover Vijaya Eye Clinic's Community Outreach Initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Get Involved</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              We invite you to join us in making a positive impact on community eye health.
              Whether you are a healthcare professional, a volunteer, or an organization looking to collaborate,
              we welcome your support. Together, we can make a meaningful difference in the lives of those in need.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore the stories of the Community Outreach page at Vijaya Eye Clinic and be a part of our mission to bring
              clear vision and eye care opportunities for all.
            </p>
            <Button asChild className="rounded-full gradient-primary px-8">
              <a href="tel:08023356953">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us To Get Involved — 080-23356953
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <StatsCounter />

      <section className="section-padding">
        <div className="container mx-auto">
          <VisionMissionCards />
        </div>
      </section>

      <FAQSection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default CommunityOutreach;

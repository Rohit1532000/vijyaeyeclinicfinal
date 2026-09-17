import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import StatsCounter from "@/components/StatsCounter";
import DoctorsSection from "@/components/DoctorsSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import YoutubeVideosSection from "@/components/YoutubeVideosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CertificationSection from "@/components/CertificationSection";
import BranchesSection from "@/components/BranchesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Helmet } from "react-helmet-async";
import SurgeonTrustSection from "@/components/SurgeonTrustSection";

const Index = () => (
  <>
    <Helmet>
      <title>Vijaya Eye Clinic | Super Specialty Eye Hospital Bangalore</title>
      <meta
        name="description"
        content="Vijaya Eye Clinic - Leading super specialty eye hospital in Bangalore since 1985. Expert ophthalmologists, LASIK, cataract surgery, glaucoma, retina treatment, and more. 35+ years of excellence."
      />
      <meta
        name="keywords"
        content="eye clinic in bangalore, eye hospital in bangalore, cataract surgery in bangalore, LASIK surgery in bangalore, retina treatment in bangalore, glaucoma treatment in bangalore, ophthalmologist in bangalore, eye care in bangalore, vision correction in bangalore"
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/" />
      <meta property="og:title" content="Vijaya Eye Clinic | Super Specialty Eye Hospital Bangalore" />
      <meta
        property="og:description"
        content="Vijaya Eye Clinic - Leading super specialty eye hospital in Bangalore since 1985. Expert ophthalmologists, LASIK, cataract surgery, glaucoma, retina treatment, and more. 35+ years of excellence."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/" />
      <meta name="twitter:title" content="Vijaya Eye Clinic | Super Specialty Eye Hospital Bangalore" />
      <meta
        name="twitter:description"
        content="Vijaya Eye Clinic - Leading super specialty eye hospital in Bangalore since 1985. Expert ophthalmologists, LASIK, cataract surgery, glaucoma, retina treatment, and more. 35+ years of excellence."
      />
    </Helmet>
    <Header />
    <main>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <StatsCounter />
      <HowItWorks />
      <DoctorsSection />
      <GallerySection />
      <WhyChooseUs />
      <SurgeonTrustSection/>
      <YoutubeVideosSection />
      <TestimonialsSection />
      <CertificationSection />
      <BranchesSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;

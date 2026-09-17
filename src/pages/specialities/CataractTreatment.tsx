import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-cataract.jpg";

const cataractSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Cataract Surgery in Bangalore",
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Eye",
      "description": "Advanced phacoemulsification, micro-incision cataract surgery (MICS), and robotic cataract surgery clinic in Bangalore with premium Toric and Multifocal IOL implants.",
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vijaya Eye Clinic",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vijayanagar",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the laser cataract surgery cost in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The laser cataract surgery cost in Bangalore depends on the surgical technology (MICS or robotic-assisted) and the chosen intraocular lens, such as premium toric IOLs or multifocal lenses. Cashless insurance and TPA options are also available."
          }
        },
        {
          "@type": "Question",
          "name": "What is the benefit of multifocal lens replacement for cataract?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multifocal lens replacement for cataract restores clear vision at multiple focal distances (near, intermediate, and far), significantly reducing or eliminating the need for reading glasses."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get micro-incision cataract surgery (MICS) in Vijayanagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic provides advanced micro-incision cataract surgery (MICS) in Vijayanagar, Bangalore, offering stitchless, painless procedures with rapid visual recovery."
          }
        }
      ]
    }
  ]
};

const CataractTreatment = () => (
  <>
    <Helmet>
      <title>Cataract Surgery in Bangalore | Best Cataract Surgeon - Vijaya Eye Clinic</title>
      <meta
        name="description"
        content="Get stitchless cataract surgery in Bangalore by the best cataract surgeon. Offering advanced phacoemulsification, MICS in Vijayanagar & premium toric or multifocal IOLs."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/cataract-treatment" />
      <meta property="og:title" content="Cataract Surgery in Bangalore | Best Cataract Surgeon" />
      <meta
        property="og:description"
        content="Advanced phacoemulsification cataract surgery Bangalore, MICS, and multifocal lens replacement at Vijaya Eye Clinic."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/cataract-treatment" />
      <meta name="twitter:title" content="Cataract Surgery in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Advanced phacoemulsification, MICS, and premium toric IOL surgery in Bangalore."
      />

      {/* Structured Schema with FAQ and MedicalProcedure */}
      <script type="application/ld+json">
        {JSON.stringify(cataractSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Cataract Surgery in Bangalore">
      <SpecialityContent
        heading="Advanced Cataract Surgery in Bangalore by Expert Specialists"
        intro="Regain crystal-clear vision with safe, painless Cataract Surgery in Bangalore at Vijaya Eye Clinic. Consult with the best cataract surgeon in Bangalore for precise diagnosis, custom lens planning, and world-class surgical care."
        image={specialityImg}
        description="As a trusted robotic cataract surgery clinic Bangalore, Vijaya Eye Clinic combines over 35 years of clinical excellence with next-generation operating equipment. We specialize in advanced phacoemulsification cataract surgery Bangalore, ensuring bladeless, sutureless incisions and quick visual rehabilitation for patients of all ages."
        whatIsIt="Cataract surgery involves gently removing the clouded natural crystalline lens and implanting a crystal-clear artificial intraocular lens (IOL). We offer modern micro-incision cataract surgery (MICS) in Vijayanagar, requiring an incision of less than 2.2 mm, making the entire procedure completely stitch-free, injection-free, and pain-free."
        whatDoesItInvolve="Your journey begins with computerized optical biometry to determine the exact power and curvature of your eye. For patients with astigmatism, we perform premium toric IOL surgery in Bangalore. For those who want complete freedom from reading glasses, we provide advanced multifocal lens replacement for cataract. The outpatient procedure takes only 15 to 20 minutes under topical eye-drop anesthesia."
        suitableFor="This treatment is ideal for individuals noticing clouded or blurred sight, glare and halos around headlights while night driving, dull color perception, or frequent changes in spectacle numbers. Early treatment prevents hyper-mature cataract complications and helps maintain sharp, active vision."
        risks="With thousands of successful surgeries, our complication rate is negligible. By adhering to modular sterile operation theater guidelines and international safety standards, our experienced surgeons ensure maximum safety, zero stitch irritation, and quick post-operative healing."
        costInfo="Laser cataract surgery cost in Bangalore varies based on whether you opt for standard monofocal lenses, premium toric IOLs, or trifocal/multifocal implants. At Vijaya Eye Clinic, we maintain clear, transparent pricing with support for all major cashless Mediclaim and TPA health insurance policies."
        ctaLine="Book an Appointment with the Best Cataract Surgeon in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default CataractTreatment;
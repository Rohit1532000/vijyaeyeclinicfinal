import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-cornea.jpg";

const corneaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Cornea Treatment in Bangalore",
      "alternateName": [
        "Best Cornea Treatment in Bangalore",
        "Cornea specialist eye hospital Bangalore",
        "Keratoconus treatment C3R cross-linking Bangalore",
        "Corneal transplant surgery Bangalore",
        "Corneal ulcer and infection treatment in bangalore"
      ],
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Cornea",
      "description": "Comprehensive Cornea Treatment in Bangalore at Vijaya Eye Clinic. Offering Keratoconus C3R cross-linking, corneal transplant surgery, corneal ulcer management, and dry eye therapy.",
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
          "name": "What is Keratoconus treatment C3R cross-linking Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keratoconus treatment C3R cross-linking in Bangalore is an advanced, minimally invasive procedure using riboflavin drops and UV-A light to strengthen corneal biomechanics, preventing further steepening and vision loss."
          }
        },
        {
          "@type": "Question",
          "name": "How is corneal ulcer and infection treatment in bangalore handled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Corneal ulcer and infection treatment in Bangalore involves immediate corneal scrapings, targeted broad-spectrum antimicrobial drops, and intensive therapeutic monitoring to prevent tissue perforation and corneal scarring."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best treatments for computer vision syndrome in bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best treatments for computer vision syndrome in Bangalore include specialized dry eye therapy, blue-filtering lenses, ergonomic eye rest guidance, and advanced punctal plugs at our dedicated dry eye clinic."
          }
        },
        {
          "@type": "Question",
          "name": "When is corneal transplant surgery Bangalore needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Corneal transplant surgery in Bangalore (such as PK, DALK, or endothelial keratoplasty) is required when severe scarring, advanced keratoconus, or endothelial decompensation makes optical restoration impossible with non-surgical therapies."
          }
        }
      ]
    }
  ]
};

const CorneaTreatment = () => (
  <>
    <Helmet>
      <title>Cornea Treatment in Bangalore | Best Cornea Specialist - Vijaya Eye Clinic</title>
      <meta
        name="description"
        content="Looking for the best cornea treatment in Bangalore? Vijaya Eye Clinic provides Keratoconus C3R cross-linking, corneal transplant surgery & dry eye therapy."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/cornea-treatment" />
      <meta property="og:title" content="Cornea Treatment in Bangalore | Best Cornea Treatment" />
      <meta
        property="og:description"
        content="Premier cornea specialist eye hospital in Bangalore offering corneal ulcer treatment, C3R cross-linking, and dry eye therapy with punctal plugs."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/cornea-treatment" />
      <meta name="twitter:title" content="Cornea Treatment in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Advanced corneal transplant surgery, keratoconus treatment, and computer vision syndrome care in Bangalore."
      />

      {/* Structured Schema with FAQ and MedicalProcedure */}
      <script type="application/ld+json">
        {JSON.stringify(corneaSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Cornea Treatment in Bangalore">
      <SpecialityContent
        heading="Best Cornea Treatment in Bangalore for Clearer & Healthier Vision"
        intro="Restore optimal ocular clarity and comfort with advanced Cornea Treatment in Bangalore at Vijaya Eye Clinic. Recognized for providing the best cornea treatment in Bangalore, our multidisciplinary team delivers timely diagnostic evaluations and cutting-edge medical and surgical solutions for complex corneal conditions."
        image={specialityImg}
        description="As a trusted cornea specialist eye hospital Bangalore with 35+ years of ophthalmic heritage, Vijaya Eye Clinic is fully equipped with high-resolution corneal topography (Pentacam) and pachymetry. We offer specialized emergency protocols for corneal ulcer and infection treatment in bangalore, stopping pathogen progression and preventing irreversible visual impairment."
        whatIsIt="Cornea care addresses structural dystrophies, surface infections, and irregular astigmatism. We are a specialized center for Keratoconus treatment C3R cross-linking Bangalore, stabilizing weakened corneal fibers with collagen cross-linking to halt progressive cone bulging. For irreversibly clouded or perforated tissue, our senior surgeons perform precision corneal transplant surgery Bangalore (Keratoplasty)."
        whatDoesItInvolve="Our clinical roadmap includes topography-guided imaging, tear film osmolarity, and epithelial thickness profiling. For digital strain, we provide the best treatments for computer vision syndrome in bangalore through customized lubrication regimens, therapeutic warm compresses, and in-clinic procedures at our specialized dry eye therapy and punctal plugs clinic to conserve natural tear film."
        suitableFor="This specialized care is essential for individuals suffering from distorted vision due to keratoconus, persistent eye redness, foreign body sensation, contact lens-induced keratitis, or burning sensations caused by prolonged digital screen exposure."
        risks="Diagnostic scans and surface cross-linking procedures boast an exceptional safety record with minimal downtime. Graft and surgical interventions are conducted under laminar-flow modular OT standards with rigorous immunosuppressive protocols to ensure maximum graft survival and zero infection."
        costInfo="Treatment pricing varies based on whether therapy requires outpatient C3R cross-linking, dry eye punctal plug insertion, or partial/full-thickness corneal transplant surgery. Vijaya Eye Clinic maintains transparent treatment estimates and comprehensive support for cashless Mediclaim and health insurance TPAs."
        ctaLine="Consult the Center for the Best Cornea Treatment in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default CorneaTreatment;
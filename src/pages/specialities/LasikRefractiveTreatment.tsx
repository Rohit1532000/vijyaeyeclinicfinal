import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-lasik.jpg";

const lasikSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "LASIK Surgery in Bangalore",
      "alternateName": [
        "Best LASIK Surgery in Bangalore",
        "Specs removal surgery in Bangalore",
        "Femto LASIK laser eye surgery Vijayanagar",
        "Custom blade-free LASIK Bangalore"
      ],
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Eye",
      "description": "Premier center for LASIK surgery in Bangalore offering advanced custom blade-free LASIK, Contoura vision, Femto LASIK in Vijayanagar, PRK laser treatment, and ICL surgery for specs removal.",
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
          "name": "What is the Contoura vision surgery cost Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Contoura vision surgery cost in Bangalore depends on your corneal topography map, corneal thickness, and visual prescription. Contact Vijaya Eye Clinic for a detailed pre-LASIK workup and transparent pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Who is eligible for ICL (Implantable Collamer Lens) surgery Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ICL (Implantable Collamer Lens) surgery in Bangalore is ideal for patients with high spectacle numbers (up to -18D) or thin corneas who are not suitable candidates for standard laser eye surgeries like Femto LASIK or PRK."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get Femto LASIK laser eye surgery Vijayanagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic provides advanced, blade-free Femto LASIK laser eye surgery in Vijayanagar, Bangalore, ensuring 100% computer-guided corneal flap creation and quick visual recovery."
          }
        },
        {
          "@type": "Question",
          "name": "How effective is specs removal surgery in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Specs removal surgery in Bangalore using custom blade-free LASIK or Contoura vision delivers over 98% success, giving patients sharp, 20/20 or better uncorrected vision within 24 to 48 hours."
          }
        }
      ]
    }
  ]
};

const LasikRefractiveTreatment = () => (
  <>
    <Helmet>
      <title>LASIK Surgery in Bangalore | Best LASIK Surgery - Vijaya Eye Clinic</title>
      <meta
        name="description"
        content="Looking for the best LASIK surgery in Bangalore? Vijaya Eye Clinic offers painless specs removal surgery, custom blade-free LASIK, Femto LASIK & Contoura vision."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/lasik-refractive-treatment" />
      <meta property="og:title" content="LASIK Surgery in Bangalore | Best LASIK Surgery - Vijaya Eye Clinic" />
      <meta
        property="og:description"
        content="Get blade-free specs removal surgery in Bangalore. Expert Femto LASIK, Contoura vision, PRK, and ICL surgery at Vijaya Eye Clinic."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/lasik-refractive-treatment" />
      <meta name="twitter:title" content="LASIK Surgery in Bangalore | Best LASIK Surgery - Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Blade-free custom LASIK, Femto LASIK, Contoura vision, and specs removal surgery in Bangalore."
      />

      {/* Structured Schema with FAQ & MedicalProcedure */}
      <script type="application/ld+json">
        {JSON.stringify(lasikSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="LASIK Surgery in Bangalore">
      <SpecialityContent
        heading="Best LASIK Surgery in Bangalore for Complete Specs Removal"
        intro="Step into a world of visual freedom with advanced LASIK Surgery in Bangalore at Vijaya Eye Clinic. If you are looking for permanent specs removal surgery in Bangalore to eliminate glasses or contact lenses, our senior refractive surgeons deliver the best LASIK eye surgery in Bangalore with personalized precision and cutting-edge laser technologies."
        image={specialityImg}
        description="Recognized as a leading PRK laser eye treatment clinic and refractive suite, Vijaya Eye Clinic brings over 35 years of clinical trust to laser vision correction. We offer custom blade-free LASIK Bangalore and specialized Femto LASIK laser eye surgery Vijayanagar, ensuring high flap precision, rapid corneal healing, and crisp HD visual acuity."
        whatIsIt="LASIK (Laser-Assisted In Situ Keratomileusis) is a safe, computer-guided laser procedure that reshapes corneal tissue to treat myopia, hyperopia, and astigmatism. For individuals with thin corneas or high refractive powers unsuitable for surface lasers, we perform advanced ICL (Implantable Collamer Lens) surgery Bangalore, placing a biocompatible collamer lens in front of your natural lens without removing any corneal tissue."
        whatDoesItInvolve="Your journey starts with a 14-step comprehensive pre-LASIK evaluation, including Pentacam corneal topography and pachymetry. Depending on your corneal profile, your surgeon customizes your procedure using custom blade-free LASIK Bangalore or advanced topography-guided systems. The laser correction takes just 10 to 15 minutes for both eyes under numbing eye drops, with painless recovery within 24 hours."
        suitableFor="Laser vision correction is suitable for individuals aged 18 and above with a stable eye prescription for at least one year and healthy corneas. Patients unsuitable for conventional flaps can safely opt for PRK laser eye treatment clinic protocols or Phakic ICL implants for complete freedom from thick lenses."
        risks="Laser eye surgery has a global satisfaction rate over 96%. Minor temporary side effects like mild dry eyes or light sensitivity fade quickly during post-op recovery. At Vijaya Eye Clinic, strict diagnostic filtering and sterile laminar-flow operation theaters ensure the highest safety profile for every patient."
        costInfo="Contoura vision surgery cost Bangalore and Femto LASIK pricing depend on your selected laser technology, custom topography profiling, and whether you require custom blade-free LASIK or ICL lens implants. At Vijaya Eye Clinic, we maintain clear, transparent pricing with zero hidden charges and flexible payment support."
        ctaLine="Book Your Pre-LASIK Assessment for the Best LASIK Surgery in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default LasikRefractiveTreatment;
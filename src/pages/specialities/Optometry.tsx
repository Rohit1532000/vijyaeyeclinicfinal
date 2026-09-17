import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-optometry.jpg";

const optometrySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Optometry Services in Bangalore",
      "alternateName": [
        "Best Optometry Clinic in Bangalore",
        "Comprehensive eye examination Bangalore",
        "Contact lens fitting clinic Vijayanagar",
        "Computerized eye testing clinic Bangalore"
      ],
      "procedureType": "DiagnosticProcedure",
      "bodyLocation": "Eye",
      "description": "Comprehensive optometry services in Bangalore at Vijaya Eye Clinic. Offering computerized digital eye testing, toric and RGP contact lens fitting, pediatric vision screening, and refractive evaluations.",
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
          "name": "What is included in a comprehensive eye examination in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A comprehensive eye examination at Vijaya Eye Clinic includes digital autorefraction, slit-lamp bio-microscopy, intraocular pressure measurement, subjective refraction, and dilated fundus evaluation to assess both vision clarity and overall ocular health."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get customized contact lens fitting in Vijayanagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic provides specialized contact lens fitting in Vijayanagar, Bangalore, offering soft disposable, monthly toric, rigid gas permeable (RGP), and scleral lenses tailored to your corneal curvature."
          }
        },
        {
          "@type": "Question",
          "name": "How often should adults and children undergo vision testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "School-going children and adults with screen-intensive lifestyles should undergo routine digital eye testing every 6 to 12 months to detect refractive shifts, dry eye disease, and binocular vision fatigue early."
          }
        }
      ]
    }
  ]
};

const Optometry = () => (
  <>
    <Helmet>
      <title>Optometry Services in Bangalore | Best Optometry Clinic - Vijaya Eye Clinic</title>
      <meta
        name="description"
        content="Looking for the best optometry services in Bangalore? Vijaya Eye Clinic offers advanced computerized eye testing, expert contact lens fitting & comprehensive exams."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/optometry" />
      <meta property="og:title" content="Optometry Services in Bangalore | Best Optometry Clinic" />
      <meta
        property="og:description"
        content="Advanced computerized digital eye testing, custom contact lens fitting, and comprehensive ocular exams in Bangalore."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/optometry" />
      <meta name="twitter:title" content="Optometry Services in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Professional eye examinations, prescription glasses fitting, and contact lens consultations in Vijayanagar, Bangalore."
      />

      {/* Structured Medical & FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(optometrySchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Optometry Services in Bangalore">
      <SpecialityContent
        heading="Best Optometry Services in Bangalore for Complete Vision Health"
        intro="Experience precise diagnostic clarity and compassionate vision care with comprehensive Optometry Services in Bangalore at Vijaya Eye Clinic. Recognized as a leading optometry clinic in Bangalore, our certified optometrists combine cutting-edge computerized diagnostic instrumentation with custom optical solutions to protect your lifelong eyesight."
        image={specialityImg}
        description="Backed by over 35 years of clinical trust, Vijaya Eye Clinic operates an advanced computerized eye testing clinic in Bangalore. Our team conducts in-depth assessments of ocular motility, binocular alignment, and internal eye structures, providing an accurate bridge between preventive optometric care and tertiary ophthalmic treatments."
        whatIsIt="Optometry is the frontline of primary vision care, focusing on the diagnosis, optical management, and prevention of visual system disorders. Our services range from precision prescription dispensing to managing digital asthenopia and serving as a dedicated contact lens fitting clinic Vijayanagar for soft, toric, and specialized gas-permeable lenses."
        whatDoesItInvolve="Every consultation involves a multi-tier assessment: computerized autorefraction, corneal curvature mapping, non-contact tonometry to monitor intraocular pressure, and slit-lamp biomicroscopy. For digital screen users, we perform specialized tear film breakup time (TBUT) tests and prescribe high-definition blue-defense lenses tailored to workstation distances."
        suitableFor="Our optometry care is tailored for individuals experiencing blurry vision, frequent headaches, double vision, night driving glare, or contact lens discomfort. Routine screening is vital for students, software engineers, and adults monitoring gradual age-related focusing shifts (presbyopia)."
        risks="Optometric evaluations and diagnostic dilations are non-invasive and safe. Temporary mild blurriness or light sensitivity caused by pupil-dilating eye drops resolves naturally within a few hours. Strict clinical hygiene and lens sterilization guidelines guarantee comfortable contact lens trials without infection."
        costInfo="Diagnostic and evaluation pricing depends on whether you need a routine automated visual screening, specialized contact lens trial and fitting, or a full dilated diabetic vision workup. Vijaya Eye Clinic offers transparent, affordable packages with immediate prescription reports."
        ctaLine="Schedule Your Comprehensive Eye Exam at Vijaya Eye Clinic Today."
      />
    </SpecialityLayout>
  </>
);

export default Optometry;
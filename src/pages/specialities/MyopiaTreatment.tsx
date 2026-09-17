import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-myopia.jpg";

const myopiaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Myopia Treatment in Bangalore",
      "alternateName": [
        "Best Myopia Treatment in Bangalore",
        "Myopia control clinic in Bangalore",
        "Orthokeratology lenses for myopia control",
        "Computerized digital eye testing center"
      ],
      "procedureType": "NonSurgicalProcedure",
      "bodyLocation": "Eye",
      "description": "Comprehensive myopia treatment and progression control in Bangalore. Offering Ortho-K lenses, low-dose atropine therapy, and precision optical solutions at Vijaya Eye Clinic.",
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
          "name": "How to stop eyesight power from increasing in kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To stop eyesight power from increasing in kids, our specialized myopia control clinic combines low-dose atropine drops, overnight Ortho-K lenses, daily outdoor exposure, and strict 20-20-20 screen-time management."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best progressive lenses for daily screen use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best progressive lenses for daily screen use are digital wide-corridor multifocal lenses equipped with blue-cut coatings, designed to provide seamless transitions between desktop monitors, laptops, and reading zones without neck strain."
          }
        },
        {
          "@type": "Question",
          "name": "How do Orthokeratology lenses for myopia control work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Orthokeratology (Ortho-K) lenses are custom gas-permeable night lenses that gently reshape the central corneal curvature while sleeping, providing clear 20/20 vision throughout the day without spectacles while slowing axial eye lengthening."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get prescription eyewear near Vijayanagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients can access precision dispensing, blue-cut coatings, and custom frames right alongside our clinic via Neha Opticals Vijayanagar eyeglasses support."
          }
        }
      ]
    }
  ]
};

const MyopiaTreatment = () => (
  <>
    <Helmet>
      <title>Myopia Treatment in Bangalore | Best Myopia Control Clinic</title>
      <meta
        name="description"
        content="Get the best myopia treatment in Bangalore at Vijaya Eye Clinic. Advanced myopia control clinic offering Ortho-K lenses, atropine therapy & digital eye testing."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/myopia-treatment" />
      <meta property="og:title" content="Myopia Treatment in Bangalore | Best Myopia Treatment" />
      <meta
        property="og:description"
        content="Leading myopia control clinic in Bangalore specializing in orthokeratology lenses, progressive lenses, and kids' eyesight stabilization."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/myopia-treatment" />
      <meta name="twitter:title" content="Myopia Treatment in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Advanced myopia progression control, Ortho-K night lenses, and digital eye exams in Bangalore."
      />

      {/* Structured Medical & FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(myopiaSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Myopia Treatment in Bangalore">
      <SpecialityContent
        heading="Best Myopia Treatment in Bangalore for Children & Adults"
        intro="Halt rapid vision deterioration with advanced Myopia Treatment in Bangalore at Vijaya Eye Clinic. Recognized for providing the best myopia treatment in Bangalore, our specialists help children, teens, and working professionals stop runaway prescription spikes and protect against high myopia complications."
        image={specialityImg}
        description="Operating as a premier myopia control clinic in Bangalore, Vijaya Eye Clinic features a state-of-the-art computerized digital eye testing center to track axial elongation down to the micron. For seamless optical rehabilitation, our in-house optical partner Neha Opticals Vijayanagar eyeglasses department provides customized frames, progressive lenses and blue-cut glasses Bangalore designed specifically to minimize digital eye strain."
        whatIsIt="Myopia, or nearsightedness, occurs when the eyeball elongates excessively, causing distant objects to blur. Our dedicated clinic moves beyond standard corrective spectacles by offering Orthokeratology lenses for myopia control (Ortho-K). These overnight corneal reshaping lenses allow active youngsters to enjoy clear vision all day without glasses while safely slowing axial growth."
        whatDoesItInvolve="Concerned parents often ask how to stop eyesight power from increasing in kids. Our clinical roadmap combines cycloplegic auto-refraction, optical biometry, low-dose atropine therapy (0.01%), and peripheral defocus lenses. For adults managing intensive workstation hours, we fit the best progressive lenses for daily screen use paired with anti-reflective glare protection."
        suitableFor="This care is vital for school-going children experiencing frequent prescription jumps, students complaining of blackboard blur, and digital professionals suffering from progressive asthenopia and fluctuating distance focus."
        risks="Non-invasive optical and medical therapies have an outstanding safety track record. Custom Ortho-K lenses and contact lens regimens are monitored through rigorous hygiene instruction and scheduled slit-lamp checks to ensure cornea safety and zero irritation."
        costInfo="Care packages vary depending on whether management requires diagnostic biometry monitoring, specialized low-dose pharmacological drops, or custom Ortho-K contact lenses. Vijaya Eye Clinic provides upfront, transparent consultation plans with complete optical guidance."
        ctaLine="Consult the Center for the Best Myopia Treatment in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default MyopiaTreatment;
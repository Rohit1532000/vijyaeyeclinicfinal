import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-squint.jpg";

const squintSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Squint Eye Treatment in Bangalore",
      "alternateName": [
        "Best Squint Eye Treatment in Bangalore",
        "Strabismus surgery Bangalore",
        "Squint correction specialist Bangalore",
        "Adult squint surgery in Vijayanagar",
        "Squint eye surgery cost Bangalore"
      ],
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Eye Muscles",
      "description": "Comprehensive squint eye treatment and strabismus surgery in Bangalore for both children and adults. Offering surgical muscle realignment, prism lenses, and vision therapy at Vijaya Eye Clinic.",
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
          "name": "Can squint be corrected in adults without loss of vision?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, adult squint surgery safely straightens misaligned eyes, restores cosmetic appearance, and frequently eliminates double vision without damaging healthy eyesight."
          }
        },
        {
          "@type": "Question",
          "name": "What is the squint eye surgery cost in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The squint eye surgery cost in Bangalore depends on whether one or both eyes require muscle recession or resection and the type of anesthesia used. Vijaya Eye Clinic provides transparent treatment packages with cashless Mediclaim and TPA support."
          }
        },
        {
          "@type": "Question",
          "name": "Is squint eye correction surgery safe for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, strabismus surgery is a routine daycare procedure in children performed under general anesthesia to align visual axes and support healthy binocular 3D vision development."
          }
        }
      ]
    }
  ]
};

const SquintEyeTreatment = () => (
  <>
    <Helmet>
      <title>Squint Eye Treatment in Bangalore | Best Strabismus Surgery</title>
      <meta
        name="description"
        content="Get the best squint eye treatment in Bangalore at Vijaya Eye Clinic. Consult top strabismus specialists for adult squint correction & children squint surgery in Vijayanagar."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/squint-eye-treatment" />
      <meta property="og:title" content="Squint Eye Treatment in Bangalore | Best Strabismus Surgery" />
      <meta
        property="og:description"
        content="Advanced squint correction surgery and non-surgical strabismus treatment for kids and adults at Vijaya Eye Clinic Bangalore."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/squint-eye-treatment" />
      <meta name="twitter:title" content="Squint Eye Treatment in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Expert strabismus surgery, prism therapy, and lazy eye correction in Vijayanagar, Bangalore."
      />

      {/* Structured Medical & FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(squintSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Squint Eye Treatment in Bangalore">
      <SpecialityContent
        heading="Best Squint Eye Treatment in Bangalore for Kids & Adults"
        intro="Regain ocular symmetry and depth perception with specialized Squint Eye Treatment in Bangalore at Vijaya Eye Clinic. Recognized for delivering the best squint eye treatment in Bangalore, our experienced strabismus specialists offer advanced medical and microsurgical solutions to treat crossed eyes, outward drifts, and complex ocular misalignments."
        image={specialityImg}
        description="Backed by over 35 years of ophthalmic trust, Vijaya Eye Clinic operates an advanced strabismus surgery clinic equipped with computerized synoptophore technology and prism diagnostic suites. Our surgeons provide dedicated care for pediatric squints and precision adult squint surgery in Vijayanagar to eliminate double vision and restore personal confidence."
        whatIsIt="Squint (strabismus) occurs when the extraocular muscles fail to work in harmony, causing the visual axes to point in different directions (esotropia, exotropia, or hypertropia). Left untreated, it can lead to amblyopia (lazy eye) in children. We specialize in precision micro-incision strabismus surgery Bangalore, gently repositioning ocular muscles to re-establish perfect ocular alignment."
        whatDoesItInvolve="Every case begins with comprehensive prism cover testing, cycloplegic retinoscopy, and binocular motility evaluations. Treatment strategies range from corrective optical lenses and orthoptic vision exercises to fine-tuned suture daycare surgery performed under topical or general anesthesia with rapid post-operative recovery."
        suitableFor="This treatment is vital for children showing misaligned visual focus, parents noticing intermittent eye turning, and adults suffering from long-standing untreated squints, post-trauma ocular deviations, or sudden diplopia (double vision)."
        risks="Strabismus surgeries boast a very high safety track record with no incisions made into the inner eyeball itself. Procedures are conducted under modular sterile surgical protocols to minimize temporary redness, ensuring smooth tissue healing and zero impact on intrinsic vision."
        costInfo="Squint eye surgery cost in Bangalore varies based on the number of eye muscles involved, procedural complexity, and diagnostic requirements. Vijaya Eye Clinic maintains transparent, upfront pricing with full cashless Mediclaim and major health insurance TPA coverage."
        ctaLine="Book a Consultation with Our Squint Correction Specialist in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default SquintEyeTreatment;
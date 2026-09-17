import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-pediatric.jpg";

const pediatricSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Pediatric Ophthalmology in Bangalore",
      "alternateName": [
        "Best Pediatric Ophthalmology in Bangalore",
        "Best pediatric ophthalmologist in Bangalore",
        "Squint eye surgery for children Bangalore",
        "Amblyopia lazy eye therapy clinic Bangalore",
        "Adult squint correction surgery Vijayanagar",
        "Child vision screening center Bangalore"
      ],
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Eye",
      "description": "Premier center for Pediatric Ophthalmology in Bangalore offering child vision screening, amblyopia lazy eye therapy, and squint eye surgery for children and adults.",
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
          "name": "Why choose Vijaya Eye Clinic for pediatric ophthalmology in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic offers specialized pediatric ophthalmology in Bangalore with child-friendly diagnostics, expert strabismus evaluations, lazy eye therapy, and advanced surgical care."
          }
        },
        {
          "@type": "Question",
          "name": "How is amblyopia (lazy eye) treated in children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At our amblyopia lazy eye therapy clinic Bangalore, treatment includes structured occlusion eye patching, penalization drops, and vision stimulation exercises to restore binocular vision."
          }
        },
        {
          "@type": "Question",
          "name": "Is squint eye surgery safe for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, squint eye surgery for children Bangalore is a safe, daycare procedure performed under gentle pediatric anesthesia to realign ocular muscles and improve 3D depth perception."
          }
        },
        {
          "@type": "Question",
          "name": "Is adult squint correction surgery available in Vijayanagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, adult squint correction surgery Vijayanagar is safely performed at Vijaya Eye Clinic to correct long-standing ocular misalignment and eliminate double vision."
          }
        }
      ]
    }
  ]
};

const PediatricOphthalTreatment = () => (
  <>
    <Helmet>
      <title>Pediatric Ophthalmology in Bangalore | Best Pediatric Eye Care - Vijaya Eye Clinic</title>
      <meta
        name="description"
        content="Get the best pediatric ophthalmology in Bangalore at Vijaya Eye Clinic. Consult the best pediatric ophthalmologist for child vision screening & squint surgery."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/pediatric-ophthal-treatment" />
      <meta property="og:title" content="Pediatric Ophthalmology in Bangalore | Best Pediatric Eye Care" />
      <meta
        property="og:description"
        content="Advanced pediatric ophthalmology in Bangalore: lazy eye therapy, child vision screening, and squint correction in Vijayanagar."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/pediatric-ophthal-treatment" />
      <meta name="twitter:title" content="Pediatric Ophthalmology in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Specialized child vision screening center and squint eye surgery for children in Bangalore."
      />

      {/* Structured Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(pediatricSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Pediatric Ophthalmology in Bangalore">
      <SpecialityContent
        heading="Best Pediatric Ophthalmology in Bangalore for Children's Eye Care"
        intro="Ensure your child develops bright, healthy vision with advanced Pediatric Ophthalmology in Bangalore at Vijaya Eye Clinic. Recognized for delivering the best pediatric ophthalmology in Bangalore, our dedicated team combines friendly care with modern clinical diagnostics to support growing eyes from infancy through adolescence."
        image={specialityImg}
        description="Serving as a dedicated child vision screening center Bangalore with over 35 years of clinical trust, Vijaya Eye Clinic provides comprehensive ocular health evaluations in a welcoming atmosphere. Led by the best pediatric ophthalmologist in Bangalore, our clinic also serves as a premier center for adult squint correction surgery Vijayanagar."
        whatIsIt="Pediatric ophthalmology addresses developmental eye conditions, refractive issues, and binocular alignment in young patients. As a leading amblyopia (lazy eye) therapy clinic Bangalore, we focus on strengthening weak visual pathways early, alongside performing precision squint eye surgery for children Bangalore to restore ocular alignment and binocular depth perception."
        whatDoesItInvolve="Our protocol begins with gentle cycloplegic retinoscopy, digital eye imaging, and binocular motility evaluations. Care plans range from optical correction for myopia and hyperopia to patching therapy and sutureless micro-incision strabismus surgery performed comfortably as day-care procedures."
        suitableFor="Specialized pediatric ophthalmology is essential for infants and kids showing signs of crossed eyes, frequent blinking, head tilting, delayed visual tracking, or reading fatigue. Adults suffering from childhood strabismus or acquired misalignment can also achieve proper eye alignment through modern corrective surgery."
        risks="Pediatric and strabismus procedures carry an exceptional safety track record. Surgeries are performed in sterile, temperature-controlled modular operation theaters under dedicated pediatric anesthesia protocols to ensure minimal discomfort and rapid recovery."
        costInfo="Care costs vary depending on whether management involves optical vision training, amblyopia patching, or surgical strabismus realignment. Vijaya Eye Clinic offers transparent pricing with cashless Mediclaim and major health insurance TPA support."
        ctaLine="Consult the Center for the Best Pediatric Ophthalmology in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default PediatricOphthalTreatment;
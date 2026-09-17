import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-retina.jpg";

const retinaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Retina Treatment in Bangalore",
      "alternateName": [
        "Best Retina Treatment in Bangalore",
        "Best retina specialist in Bangalore",
        "Vitrectomy surgery hospital Bangalore",
        "Diabetic retinopathy treatment Vijayanagar"
      ],
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Retina",
      "description": "Comprehensive retina treatment in Bangalore offering vitrectomy surgery, retinal laser photocoagulation, diabetic retinopathy care in Vijayanagar, and anti-VEGF injections.",
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
          "name": "What is the retinal detachment surgery cost Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The retinal detachment surgery cost in Bangalore depends on the severity of the detachment, whether vitrectomy, scleral buckle, or gas/silicone oil tamponade is required. Vijaya Eye Clinic provides transparent pricing with cashless Mediclaim and TPA insurance coverage."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find an Anti-VEGF eye injection clinic Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic is a specialized anti-VEGF eye injection clinic in Bangalore, administering injections like Lucentis, Accentrix, Eylea, and Avastin under sterile OT conditions for wet AMD and diabetic macular edema."
          }
        },
        {
          "@type": "Question",
          "name": "What does a diabetic eye checkup package Bangalore include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A diabetic eye checkup package in Bangalore includes dilated fundus examination, optical coherence tomography (OCT), and digital fundus photography to detect microaneurysms and early retinopathy before permanent vision damage occurs."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get specialized diabetic retinopathy treatment Vijayanagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic provides comprehensive diabetic retinopathy treatment in Vijayanagar, Bangalore, utilizing advanced green laser photocoagulation and anti-VEGF therapy."
          }
        }
      ]
    }
  ]
};

const RetinaTreatment = () => (
  <>
    <Helmet>
      <title>Retina Treatment in Bangalore | Best Retina Specialist - Vijaya Eye Clinic</title>
      <meta
        name="description"
        content="Looking for the best retina treatment in Bangalore? Consult the best retina specialist in Bangalore for diabetic retinopathy, vitrectomy surgery & anti-VEGF injections."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/retina-treatment" />
      <meta property="og:title" content="Retina Treatment in Bangalore | Best Retina Treatment" />
      <meta
        property="og:description"
        content="Advanced vitrectomy surgery hospital, retinal laser photocoagulation, and macular degeneration care at Vijaya Eye Clinic Bangalore."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/retina-treatment" />
      <meta name="twitter:title" content="Retina Treatment in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Get advanced diabetic retinopathy treatment in Vijayanagar and vitrectomy surgery in Bangalore."
      />

      {/* MedicalProcedure and FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(retinaSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Retina Treatment in Bangalore">
      <SpecialityContent
        heading="Best Retina Treatment in Bangalore by Expert Specialists"
        intro="Preserve your eyesight with advanced Retina Treatment in Bangalore at Vijaya Eye Clinic. Consult the best retina specialist in Bangalore for accurate early detection, dedicated diabetic eye care, and modern microsurgical interventions for complex retinal disorders."
        image={specialityImg}
        description="Ranked as a premier vitrectomy surgery hospital Bangalore, Vijaya Eye Clinic brings 35+ years of ophthalmic trust to vitreoretinal care. We provide advanced diabetic retinopathy treatment Vijayanagar, pairing high-definition Spectral Domain OCT diagnostics with specialized green retinal laser photocoagulation Bangalore to stop retinal leakage and secure sharp central vision."
        whatIsIt="Retina treatment covers targeted therapies for vision-threatening conditions affecting the neural tissue at the back of the eye. At our center, we provide evidence-based macular degeneration (AMD) treatment Bangalore as well as emergency procedures for tears and breaks. We also operate as a dedicated anti-VEGF eye injection clinic Bangalore, offering precise intravitreal therapies for macular edema."
        whatDoesItInvolve="Care starts with high-resolution digital imaging, fundus fluorescein angiography (FFA), and OCT scans. For individuals with diabetes, our dedicated diabetic eye checkup package Bangalore detects sub-clinical damage early. Interventions range from outpatient retinal laser photocoagulation Bangalore to minimally invasive 23G/25G sutureless vitrectomy surgery performed under local anesthesia."
        suitableFor="This care is crucial for patients with type 1 or type 2 diabetes, sudden onset of dark floaters or light flashes, central vision distortion, or age-related macular changes. Early treatment by an expert retina specialist prevents irreversible photoreceptor damage."
        risks="Retinal procedures are performed in ultra-sterile laminar air-flow surgical suites. While post-injection pressure fluctuations or mild intraocular inflammation are rare, our specialists provide close monitoring and prophylactic regimens to ensure seamless visual stabilization."
        costInfo="Retinal detachment surgery cost Bangalore varies based on the condition stage, gas or silicone oil tamponade requirements, and whether combined vitrectomy or buckle repair is needed. Vijaya Eye Clinic maintains upfront, transparent pricing and full support for cashless Mediclaim and major TPA insurance networks."
        ctaLine="Book an Appointment for the Best Retina Treatment in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default RetinaTreatment;
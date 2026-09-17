import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-glaucoma.jpg";

const glaucomaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Glaucoma Treatment in Bangalore",
      "alternateName": [
        "Best Glaucoma Treatment in Bangalore",
        "Glaucoma treatment specialist in Bangalore",
        "High eye pressure treatment clinic",
        "Trabeculectomy surgery Bangalore"
      ],
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Optic Nerve",
      "description": "Comprehensive Glaucoma Treatment in Bangalore at Vijaya Eye Clinic. Providing high eye pressure treatment, OCT scan screening, Selective Laser Trabeculoplasty (SLT), and trabeculectomy surgery.",
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
          "name": "Where can I get an OCT scan for glaucoma screening Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic provides advanced Spectral-Domain OCT scan for glaucoma screening Bangalore to measure retinal nerve fiber layer (RNFL) thickness and detect optic nerve cupping before noticeable vision loss occurs."
          }
        },
        {
          "@type": "Question",
          "name": "What is Selective Laser Trabeculoplasty (SLT) Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selective Laser Trabeculoplasty (SLT) in Bangalore is a gentle, painless, outpatient laser treatment designed to lower elevated intraocular pressure by improving fluid drainage in open-angle glaucoma, often reducing the dependency on daily eye drops."
          }
        },
        {
          "@type": "Question",
          "name": "When is trabeculectomy surgery Bangalore required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabeculectomy surgery in Bangalore is recommended when prescription eye drops and laser therapies fail to adequately lower intraocular pressure, creating an alternate drainage pathway to prevent permanent optic nerve damage."
          }
        }
      ]
    }
  ]
};

const GlaucomaTreatment = () => (
  <>
    <Helmet>
      <title>Glaucoma Treatment in Bangalore | Best Glaucoma Specialist - Vijaya Eye Clinic</title>
      <meta
        name="description"
        content="Get the best glaucoma treatment in Bangalore. Consult a senior glaucoma treatment specialist for high eye pressure treatment, SLT laser & trabeculectomy surgery."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/glaucoma-treatment" />
      <meta property="og:title" content="Glaucoma Treatment in Bangalore | Best Glaucoma Treatment" />
      <meta
        property="og:description"
        content="Advanced Selective Laser Trabeculoplasty (SLT), OCT scan screening, and trabeculectomy surgery in Bangalore."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/glaucoma-treatment" />
      <meta name="twitter:title" content="Glaucoma Treatment in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Protect your optic nerve with top glaucoma specialists and advanced high eye pressure treatment in Bangalore."
      />

      {/* Structured Medical & FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(glaucomaSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Glaucoma Treatment in Bangalore">
      <SpecialityContent
        heading="Best Glaucoma Treatment in Bangalore for Optic Nerve Protection"
        intro="Protect your sight from the silent thief of vision with advanced Glaucoma Treatment in Bangalore at Vijaya Eye Clinic. Consult an experienced glaucoma treatment specialist in Bangalore for accurate early diagnosis, targeted pressure management, and customized surgical care to stop progressive optic nerve damage."
        image={specialityImg}
        description="As a dedicated high eye pressure treatment clinic with over 35 years of clinical excellence, Vijaya Eye Clinic provides timely screening and progressive glaucoma care. Our specialists combine gold-standard Applanation Tonometry with high-resolution OCT scan for glaucoma screening Bangalore to detect subtle structural changes years before visual field defects emerge."
        whatIsIt="Glaucoma refers to a group of ocular disorders characterized by optic nerve head damage, primarily driven by elevated intraocular pressure (IOP). To manage drainage resistance safely, we deliver outpatient Selective Laser Trabeculoplasty (SLT) Bangalore, an advanced, tissue-sparing laser therapy that stimulates natural fluid outflow without thermal damage."
        whatDoesItInvolve="Your diagnostic roadmap includes computerized visual field testing (Humphrey perimetry), corneal pachymetry, and gonioscopy. When medication and non-invasive lasers are insufficient to stabilize target eye pressure, our senior eye surgeons perform precision trabeculectomy surgery Bangalore, creating a controlled microscopic filtration channel to preserve remaining vision."
        suitableFor="This evaluation is essential for individuals over 40, people with a family history of glaucoma, diabetic patients, and anyone diagnosed with ocular hypertension or high myopia. Regular screening by a glaucoma specialist prevents asymptomatic peripheral vision loss."
        risks="Laser modalities like SLT feature an exceptional safety profile with minimal downtime. For filtering interventions like trabeculectomy, procedures are conducted in modular sterile surgical suites with strict post-operative tracking to eliminate infection risks and ensure ideal pressure stabilization."
        costInfo="Glaucoma therapy costs depend on individual requirements, ranging from routine pressure monitoring and diagnostic scans to laser trabeculoplasty or surgical filtering procedures. Vijaya Eye Clinic provides clear, upfront pricing and full support for cashless Mediclaim and major health insurance TPAs."
        ctaLine="Consult the Best Glaucoma Treatment Specialist in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default GlaucomaTreatment;
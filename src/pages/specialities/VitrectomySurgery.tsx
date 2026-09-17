import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-vitrectomy.jpg";

const vitrectomySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Vitrectomy Surgery in Bangalore",
      "alternateName": [
        "Best Vitrectomy Surgery in Bangalore",
        "Best vitreoretinal surgeon in Bangalore",
        "Micro-incision vitrectomy surgery (MIVS) Vijayanagar",
        "Macular hole surgery hospital Bangalore",
        "Vitreous hemorrhage treatment Bangalore"
      ],
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Retina and Vitreous",
      "description": "Premier center for Vitrectomy Surgery in Bangalore at Vijaya Eye Clinic. Offering sutureless 23G/25G micro-incision vitrectomy surgery (MIVS), macular hole repair, retinal detachment surgery, and diabetic vitreous hemorrhage treatment.",
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
          "name": "What is the vitrectomy surgery cost in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vitrectomy surgery cost in Bangalore depends on procedural complexity, gauge size (23G/25G sutureless MIVS), and whether gas or silicone oil tamponade is required. Vijaya Eye Clinic offers transparent package pricing with cashless Mediclaim and major health insurance TPA coverage."
          }
        },
        {
          "@type": "Question",
          "name": "How is macular hole surgery hospital Bangalore treatment performed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Macular hole surgery involves micro-incision vitrectomy combined with internal limiting membrane (ILM) peeling and an intraocular gas bubble tamponade to facilitate macular hole closure and central visual restoration."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I get micro-incision vitrectomy surgery (MIVS) in Vijayanagar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic in Vijayanagar, Bangalore provides advanced sutureless 23G and 25G micro-incision vitrectomy surgery (MIVS) using modern operating microscopes for rapid recovery and minimal post-operative discomfort."
          }
        },
        {
          "@type": "Question",
          "name": "When is surgery needed for vitreous hemorrhage treatment Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vitreous hemorrhage treatment in Bangalore requires vitrectomy when persistent blood in the vitreous cavity fails to clear spontaneously within a few weeks or when underlying tractional retinal detachment is suspected."
          }
        }
      ]
    }
  ]
};

const VitrectomySurgery = () => (
  <>
    <Helmet>
      <title>Vitrectomy Surgery in Bangalore | Best Vitreoretinal Surgeon</title>
      <meta
        name="description"
        content="Get the best vitrectomy surgery in Bangalore at Vijaya Eye Clinic. Consult top vitreoretinal surgeons for 23G/25G MIVS, retinal detachment & macular hole repair."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/vitrectomy-surgery" />
      <meta property="og:title" content="Vitrectomy Surgery in Bangalore | Best Vitreoretinal Surgeon" />
      <meta
        property="og:description"
        content="Advanced sutureless micro-incision vitrectomy surgery (MIVS), diabetic vitreous hemorrhage treatment, and macular hole surgery in Bangalore."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/vitrectomy-surgery" />
      <meta name="twitter:title" content="Vitrectomy Surgery in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Expert 23G/25G micro-incision vitrectomy surgery and retinal detachment repair in Vijayanagar, Bangalore."
      />

      {/* Structured Medical & FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(vitrectomySchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Vitrectomy Surgery in Bangalore">
      <SpecialityContent
        heading="Best Vitrectomy Surgery in Bangalore for Complex Retinal Care"
        intro="Restore visual clarity and retinal stability with specialized Vitrectomy Surgery in Bangalore at Vijaya Eye Clinic. Recognized for delivering the best vitrectomy surgery in Bangalore, our team combines advanced microsurgical technology with over 35 years of clinical trust to manage delicate conditions affecting the vitreous and posterior eye segment."
        image={specialityImg}
        description="Led by the best vitreoretinal surgeon in Bangalore, Vijaya Eye Clinic utilizes state-of-the-art sutureless vitreoretinal platforms and wide-angle viewing systems. We specialize in sutureless micro-incision vitrectomy surgery (MIVS) in Vijayanagar using 23G and 25G instrumentation, ensuring self-sealing incisions, zero stitch irritation, and faster visual rehabilitation."
        whatIsIt="Vitrectomy surgery is a microsurgical procedure performed to remove clouded or traction-causing vitreous gel from the inner eye chamber. As an advanced macular hole surgery hospital Bangalore, we perform internal limiting membrane (ILM) peeling and epiretinal membrane removal, alongside prompt interventions for sudden vitreous hemorrhage treatment Bangalore caused by proliferative diabetic retinopathy."
        whatDoesItInvolve="Treatment begins with high-definition Spectral Domain OCT scans, B-scan ultrasonography, and wide-field fundus imaging. During the outpatient daycare procedure, micro-cannulas are placed through the sclera to clear the vitreous gel, relieve traction, apply endolaser photocoagulation, and place gas or medical-grade silicone oil tamponades as needed under gentle local anesthesia."
        suitableFor="This intervention is critical for individuals suffering from rhegmatogenous or tractional retinal detachments, non-clearing diabetic vitreous hemorrhage, full-thickness macular holes, post-cataract dropped lens fragments, or severe ocular trauma."
        risks="Vitrectomy procedures are carried out in sterile, modular laminar air-flow surgical suites under stringent ophthalmic infection protocols. Temporary post-op intraocular pressure fluctuations or cataract progression are carefully monitored and managed with customized medical regimens to ensure optimum visual outcomes."
        costInfo="Vitrectomy surgery cost in Bangalore varies based on the condition stage, whether combined with cataract surgery (phaco-vitrectomy), and the choice of tamponade (gas vs. silicone oil). Vijaya Eye Clinic provides upfront transparent pricing with full support for cashless Mediclaim and major health insurance TPAs."
        ctaLine="Consult the Best Vitreoretinal Surgeon in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default VitrectomySurgery;
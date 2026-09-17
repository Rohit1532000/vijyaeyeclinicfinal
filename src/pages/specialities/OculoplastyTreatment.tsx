import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-oculoplasty.jpg";

const oculoplastySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Oculoplasty Treatment in Bangalore",
      "alternateName": [
        "Best Oculoplasty Treatment in Bangalore",
        "Oculoplasty surgeon in Bangalore",
        "Ptosis drooping eyelid surgery Bangalore",
        "Blepharoplasty eyelid surgery Bangalore",
        "Dacryocystorhinostomy (DCR) tear duct surgery"
      ],
      "procedureType": "SurgicalProcedure",
      "bodyLocation": "Eyelid and Orbit",
      "description": "Premier center for Oculoplasty Treatment in Bangalore at Vijaya Eye Clinic. Offering ptosis correction, blepharoplasty, DCR tear duct surgery, chalazion removal, and cosmetic eyelid surgery.",
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
          "name": "How is blocked tear duct treatment for adults and kids performed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Blocked tear duct treatment for adults and kids involves probing and syringing for infants or advanced Dacryocystorhinostomy (DCR) tear duct surgery for adults to create a new drainage channel and eliminate watery eyes."
          }
        },
        {
          "@type": "Question",
          "name": "What is Ptosis (drooping eyelid) surgery Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ptosis (drooping eyelid) surgery in Bangalore is a precision procedure to tighten the levator muscle of the upper eyelid, restoring a natural open eye contour and unblocking the upper field of vision."
          }
        },
        {
          "@type": "Question",
          "name": "What does cosmetic eyelid surgery for excess skin removal involve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Also known as blepharoplasty eyelid surgery Bangalore, cosmetic eyelid surgery for excess skin removal gently excises sagging skin, fat deposits, and under-eye puffiness for a refreshed, youthful appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find an eyelid cyst / Chalazion removal clinic in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic is a specialized eyelid cyst / chalazion removal clinic in Bangalore, providing quick, painless incision and curettage procedures under local anesthesia with minimal recovery time."
          }
        }
      ]
    }
  ]
};

const OculoplastyTreatment = () => (
  <>
    <Helmet>
      <title>Oculoplasty Treatment in Bangalore | Best Oculoplasty Surgeon</title>
      <meta
        name="description"
        content="Get the best oculoplasty treatment in Bangalore. Consult an expert oculoplasty surgeon in Bangalore for ptosis surgery, blepharoplasty & DCR tear duct surgery."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/oculoplasty-treatment" />
      <meta property="og:title" content="Oculoplasty Treatment in Bangalore | Best Oculoplasty Treatment" />
      <meta
        property="og:description"
        content="Specialized ptosis correction, blepharoplasty eyelid surgery, chalazion removal clinic, and DCR surgery at Vijaya Eye Clinic Bangalore."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/oculoplasty-treatment" />
      <meta name="twitter:title" content="Oculoplasty Treatment in Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Advanced cosmetic eyelid surgery and reconstructive oculoplastic procedures in Bangalore."
      />

      {/* Structured Medical & FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(oculoplastySchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Oculoplasty Treatment in Bangalore">
      <SpecialityContent
        heading="Best Oculoplasty Treatment in Bangalore for Eyelid & Orbital Care"
        intro="Restore optimal eyelid function and aesthetic balance with advanced Oculoplasty Treatment in Bangalore at Vijaya Eye Clinic. Recognized for providing the best oculoplasty treatment in Bangalore, our experienced team delivers modern corrective solutions for delicate structures surrounding the eye."
        image={specialityImg}
        description="Led by an expert oculoplasty surgeon in Bangalore with 35+ years of ophthalmic trust, Vijaya Eye Clinic handles intricate functional and cosmetic eyelid issues. We operate as a dedicated eyelid cyst / Chalazion removal clinic, ensuring swift, pain-free minor procedures, while also managing complex eyelid malpositions like ectropion and entropion."
        whatIsIt="Oculoplastic surgery blends ophthalmology and plastic surgery to treat eyelids, tear passages, and the orbit. We specialize in Ptosis (drooping eyelid) surgery Bangalore to elevate sagging lids and clear obstructed sightlines. For chronic tearing, we perform Dacryocystorhinostomy (DCR) tear duct surgery to reconstruct natural drainage."
        whatDoesItInvolve="Treatment begins with high-precision eyelid measurements, lacrimal syringing, and ocular surface evaluations. For aesthetic rejuvenation, we perform blepharoplasty eyelid surgery Bangalore alongside cosmetic eyelid surgery for excess skin removal to smooth periocular puffiness and heavy folds. For persistent tearing, we offer comprehensive blocked tear duct treatment for adults and kids."
        suitableFor="This care is essential for individuals experiencing drooping eyelids blocking vision, persistent tearing from blocked lacrimal ducts, recurrent chalazions, or heavy sagging eyelid skin. Both children and adults benefit from tailored reconstructive and cosmetic approaches."
        risks="Oculoplastic procedures are minimally invasive and conducted in sterile, temperature-controlled operation theaters. Our specialists use fine microsurgical techniques to eliminate noticeable scarring, reduce post-operative swelling, and ensure quick cosmetic and functional recovery."
        costInfo="Pricing depends on whether you require a minor in-clinic procedure, functional DCR surgery, or aesthetic blepharoplasty. Vijaya Eye Clinic maintains upfront, transparent pricing and provides complete assistance for cashless Mediclaim and major health insurance TPAs."
        ctaLine="Consult the Best Oculoplasty Surgeon in Bangalore Today."
      />
    </SpecialityLayout>
  </>
);

export default OculoplastyTreatment;
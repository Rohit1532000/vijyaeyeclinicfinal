import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-international.jpg";

const internationalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "name": "Vijaya Eye Clinic - International Patient Care",
      "alternateName": [
        "Medical Tourism Eye Hospital Bangalore",
        "Eye Surgery for International Patients in India",
        "Best eye hospital in Bangalore for international patients"
      ],
      "url": "https://vijayaeyeclinic.com/specialities/international-patient-treatment",
      "logo": "https://vijayaeyeclinic.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vijayanagar",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "description": "World-class eye surgery for international patients in India. Offering advanced LASIK, micro-incision cataract surgery, medical visa assistance, airport transfers, and customized accommodation in Bangalore."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why travel to India for eye surgery at Vijaya Eye Clinic Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vijaya Eye Clinic provides affordable eye surgery in India for foreigners with zero waiting lists, cutting-edge surgical technology, English-speaking eye doctors, and total savings of 60% to 75% compared to Western healthcare costs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide medical visa assistance for eye treatment in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our international patient care desk provides official Medical Visa Invitation Letters (V-Visa support), priority booking documentation, and FRRO registration support for smooth travel."
          }
        },
        {
          "@type": "Question",
          "name": "Can international patients get LASIK and cataract surgery done in a short visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, advanced blade-free LASIK and micro-incision cataract surgery are completed as safe daycare procedures taking only 15 to 20 minutes, allowing overseas patients to complete consultation, surgery, and post-op reviews within 4 to 6 days."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide airport pickup and stay assistance for overseas patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we arrange Bangalore International Airport (BLR) transfers, partner hotel/serviced apartment bookings near our clinic, local SIM card access, and dedicated care coordinators."
          }
        }
      ]
    }
  ]
};

const InternationalPatientTreatment = () => (
  <>
    <Helmet>
      <title>Eye Surgery for International Patients India | Vijaya Eye Clinic</title>
      <meta
        name="description"
        content="Affordable eye surgery in India for foreigners at Vijaya Eye Clinic Bangalore. Trusted medical tourism eye hospital offering visa help, LASIK & cataract surgery."
      />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/international-patient-treatment" />
      <meta property="og:title" content="Eye Surgery for International Patients India | Medical Tourism Bangalore" />
      <meta
        property="og:description"
        content="World-class eye care for global travelers: medical visa assistance, blade-free LASIK, cataract surgery, and airport transfers in Bangalore."
      />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/international-patient-treatment" />
      <meta name="twitter:title" content="International Patient Eye Care Bangalore | Vijaya Eye Clinic" />
      <meta
        name="twitter:description"
        content="Get affordable eye surgery in India for foreigners with English speaking eye doctors and dedicated travel concierge in Bangalore."
      />

      {/* Structured Medical Organization & FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(internationalSchema)}
      </script>
    </Helmet>

    <SpecialityLayout title="Eye Surgery for International Patients in India">
      <SpecialityContent
        heading="Best Eye Hospital in Bangalore for International Patients"
        intro="Receive world-class ophthalmic care with premier Eye Surgery for International Patients in India at Vijaya Eye Clinic. Recognized as a trusted medical tourism eye hospital Bangalore, we offer international travelers access to world-renowned surgical expertise, zero waiting queues, and high-precision laser treatments at a fraction of global costs."
        image={specialityImg}
        description="Backed by over 35 years of clinical trust and thousands of successful procedures, Vijaya Eye Clinic is a premier destination for affordable eye surgery in India for foreigners. Our hospital is staffed by certified, fluent English speaking eye doctors Bangalore India, providing end-to-end medical concierge support from your initial online video evaluation to post-treatment departures."
        whatIsIt="Our specialized medical tourism program is designed for overseas citizens and NRI patients seeking top-tier clinical solutions unavailable or prohibitively priced in their home countries. We specialize in fast-track LASIK and cataract surgery for overseas patients Bangalore, alongside advanced vitreoretinal repairs, squint correction, and corneal cross-linking using US-FDA approved technologies."
        whatDoesItInvolve="From your very first enquiry, our team coordinates your medical journey seamlessly: complimentary tele-consultation reviews, expedited medical visa assistance for eye treatment India (V-Visa paperwork), personalized airport pickup and stay assistance for eye care India, and priority daycare surgical scheduling. Most procedures require only a 3 to 7 day stay in Bangalore for complete recovery and flight clearance."
        suitableFor="This care pathway is ideal for medical travelers from the UK, USA, Middle East, Africa, SAARC countries, and global expats seeking high-quality, cost-effective vision correction, laser refractive surgery, or complex ophthalmic treatments without prolonged NHS or insurance waitlists."
        risks="All surgical procedures adhere to rigorous sterile modular operation theater protocols and international safety benchmarks. Our dedicated patient desk monitors your healing daily and coordinates virtual tele-follow-ups after you return to your home country to ensure uninterrupted ocular health."
        costInfo="Eye care in India typically costs 65% to 80% less than equivalent procedures in North America, Europe, or Australia, with identical surgical outcomes and premium FDA-approved implants. Vijaya Eye Clinic provides upfront, all-inclusive transparent package estimates with multiple international payment options and zero hidden costs."
        ctaLine="Request a Free International Treatment Estimate & Virtual Consultation Today."
      />
    </SpecialityLayout>
  </>
);

export default InternationalPatientTreatment;
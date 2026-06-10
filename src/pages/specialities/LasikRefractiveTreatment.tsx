import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-lasik.jpg";

const LasikRefractiveTreatment = () => (
  <>
    <Helmet>
      <title>LASIK Surgery in Bangalore | Refractive Surgery - Vijaya Eye Clinic</title>
      <meta name="description" content="LASIK eye surgery in Bangalore for vision correction. Advanced refractive surgery for myopia, hyperopia, and astigmatism." />
      <meta name="keywords" content="LASIK surgery bangalore, refractive surgery, vision correction, laser eye surgery, myopia treatment" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/lasik-refractive-treatment" />
      <meta property="og:title" content="LASIK Surgery in Bangalore | Refractive Surgery - Vijaya Eye Clinic" />
      <meta property="og:description" content="LASIK eye surgery in Bangalore for vision correction. Advanced refractive surgery for clear vision." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/lasik-refractive-treatment" />
      <meta name="twitter:title" content="LASIK Surgery in Bangalore | Refractive Surgery - Vijaya Eye Clinic" />
      <meta name="twitter:description" content="LASIK eye surgery in Bangalore for vision correction. Advanced refractive surgery." />
    </Helmet>
    <SpecialityLayout title="LASIK & Refractive Treatment">
      <SpecialityContent
        heading="LASIK & Refractive Treatment Services At Vijaya Eye Clinic"
        intro="Step into a world of visual freedom with our LASIK & Refractive Treatment services at Vijaya Eye Clinic. Whether you're tired of glasses or contact lenses, our expert team is here to reshape your vision and liberate you from visual constraints."
        image={specialityImg}
        description="Our LASIK procedures are conducted with precision, utilizing state-of-the-art technology to reshape the cornea and correct refractive errors. From nearsightedness to astigmatism, our skilled ophthalmologists tailor treatments to your specific needs, ensuring optimal results. Experience the joy of waking up to a clearer world."
        whatIsIt="LASIK (Laser-Assisted In Situ Keratomileusis) and refractive treatments are advanced procedures aimed at correcting common refractive errors such as nearsightedness (myopia), farsightedness (hyperopia), and astigmatism. These procedures use laser technology to reshape the cornea, improving the eye's ability to focus light accurately onto the retina."
        whatDoesItInvolve="LASIK and refractive treatments involve a thorough assessment of the patient's eye health and refractive error to determine suitability for the procedure. During the treatment, a precise laser is used to reshape the cornea, correcting the refractive error and improving visual acuity. The procedure is typically quick and minimally invasive, with many patients experiencing improved vision almost immediately."
        suitableFor="LASIK and refractive treatments are suitable for individuals seeking to reduce or eliminate their dependence on glasses or contact lenses for vision correction. Ideal candidates are generally in good overall health, have stable vision prescription, and have realistic expectations about the outcome of the procedure."
        risks="While LASIK and refractive treatments are considered safe and effective for the majority of patients, like any surgical procedure, there are potential risks and complications to consider. Risks may include dryness, glare, halos, overcorrection or undercorrection of vision, and infection. Patient safety and satisfaction are our top priorities."
        costInfo="The cost of LASIK and refractive treatment can vary depending on factors such as the specific procedure recommended, individual eye characteristics, and any additional testing or follow-up care required. To obtain accurate pricing information and explore your options, we encourage you to schedule an appointment."
        ctaLine="Say Goodbye To Blurry Vision And Hello To Clearer Sight!"
      />
    </SpecialityLayout>
  </>
);

export default LasikRefractiveTreatment;

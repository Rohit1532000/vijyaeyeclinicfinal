import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-cataract.jpg";

const CataractTreatment = () => (
  <>
    <Helmet>
      <title>Cataract Surgery in Bangalore | Advanced Treatment - Vijaya Eye Clinic</title>
      <meta name="description" content="Advanced cataract surgery in Bangalore with premium intraocular lenses. Phacoemulsification technique for clear vision restoration." />
      <meta name="keywords" content="cataract surgery bangalore, phacoemulsification, IOL, cataract treatment, eye surgery" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/cataract-treatment" />
      <meta property="og:title" content="Cataract Surgery in Bangalore | Advanced Treatment - Vijaya Eye Clinic" />
      <meta property="og:description" content="Advanced cataract surgery in Bangalore with premium intraocular lenses." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/cataract-treatment" />
      <meta name="twitter:title" content="Cataract Surgery in Bangalore | Advanced Treatment - Vijaya Eye Clinic" />
      <meta name="twitter:description" content="Advanced cataract surgery in Bangalore with premium intraocular lenses." />
    </Helmet>
    <SpecialityLayout title="Cataract Treatment">
      <SpecialityContent
        heading="Cataract Treatment Services At Vijaya Eye Clinic"
        intro="Welcome to Vijaya Eye Clinic, where we offer advanced cataract treatment services to restore your vision. A cataract is a clouding of the natural lens inside the eye, leading to blurred vision, glare, and difficulty with daily activities."
        image={specialityImg}
        description="At Vijaya Eye Clinic, we understand the impact cataracts can have on your daily life. Our experienced team of ophthalmologists uses the latest surgical techniques and premium intraocular lenses to provide safe, effective cataract surgery with excellent visual outcomes."
        whatIsIt="Cataract treatment at Vijaya Eye Clinic involves the surgical removal of the clouded natural lens and its replacement with a clear artificial intraocular lens (IOL). We offer phacoemulsification, a modern technique that uses ultrasound energy to break up and remove the cataract through a tiny incision."
        whatDoesItInvolve="The procedure begins with a comprehensive pre-operative assessment to determine the most suitable IOL for your eyes. During surgery, the clouded lens is removed through a small incision and replaced with a premium IOL. The procedure typically takes 15-20 minutes and is performed under local anesthesia."
        suitableFor="Cataract treatment is suitable for individuals experiencing symptoms such as blurred or cloudy vision, increased sensitivity to glare, difficulty reading or driving, and fading of colors. If cataracts are affecting your quality of life, our ophthalmologists can evaluate your condition and recommend the best treatment approach."
        risks="While cataract surgery is generally safe and effective, there are potential risks associated with any surgical procedure. These may include infection, inflammation, posterior capsule opacification, and rarely, retinal detachment. Our experienced surgeons discuss all potential risks and benefits with each patient."
        costInfo="The cost of cataract treatment can vary depending on factors such as the type of IOL selected, the surgical technique used, and individual eye characteristics. To obtain accurate pricing information, we encourage you to schedule an appointment at Vijaya Eye Clinic."
        ctaLine="Don't Let Cataracts Cloud Your Vision."
      />
    </SpecialityLayout>
  </>
);

export default CataractTreatment;

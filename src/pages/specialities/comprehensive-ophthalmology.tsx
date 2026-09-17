import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-comprehensive.jpg";

const ComprehensiveOphthalmology = () => (
  <>
    <Helmet>
      <title>Comprehensive Ophthalmology in Bangalore | Full Eye Care - Vijaya Eye Clinic</title>
      <meta name="description" content="Complete ophthalmology services in Bangalore including eye exams, diagnosis, and treatment of all eye conditions." />
      <meta name="keywords" content="ophthalmology in bangalore, comprehensive eye care, eye examination, eye diseases, vision care" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/comprehensive-ophthalmology" />
      <meta property="og:title" content="Comprehensive Ophthalmology in Bangalore | Full Eye Care - Vijaya Eye Clinic" />
      <meta property="og:description" content="Complete ophthalmology services in Bangalore including eye exams, diagnosis, and treatment." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/comprehensive-ophthalmology" />
      <meta name="twitter:title" content="Comprehensive Ophthalmology in Bangalore | Full Eye Care - Vijaya Eye Clinic" />
      <meta name="twitter:description" content="Complete ophthalmology services in Bangalore including eye exams, diagnosis, and treatment." />
    </Helmet>
    <SpecialityLayout title="Comprehensive Ophthalmology">
      <SpecialityContent
        heading="Comprehensive Ophthalmology Services At Vijaya Eye Clinic"
        intro="Welcome to Vijaya Eye Clinic, your trusted partner in complete eye care. Our comprehensive ophthalmology services cover the full spectrum of eye health, from routine eye examinations to the diagnosis and management of complex eye conditions."
        image={specialityImg}
        description="Our experienced team of ophthalmologists utilizes state-of-the-art diagnostic technologies and imaging tools to assess your eye health thoroughly. We provide preventive care, medical treatments, and surgical interventions to ensure optimal vision and eye health for patients of all ages."
        whatIsIt="Comprehensive ophthalmology encompasses the full range of eye care services, including routine eye exams, diagnosis of eye diseases, medical management, and surgical treatment. Our ophthalmologists are trained to handle all aspects of eye health, from prescribing corrective lenses to managing chronic conditions like glaucoma and macular degeneration."
        whatDoesItInvolve="A comprehensive eye examination includes visual acuity testing, refraction, intraocular pressure measurement, slit-lamp examination, dilated fundus examination, and additional specialized tests as needed. Based on findings, our ophthalmologists develop personalized treatment plans tailored to each patient's specific needs."
        suitableFor="Comprehensive ophthalmology services are suitable for individuals of all ages, from children needing their first eye exam to seniors managing age-related eye conditions. Whether you need a routine check-up, have specific vision concerns, or require ongoing management of an eye condition, our team is here to help."
        risks="Comprehensive eye examinations are non-invasive and carry minimal risks. Some patients may experience temporary light sensitivity after dilation. Our ophthalmologists take every precaution to ensure patient comfort and safety during all examinations and procedures."
        costInfo="The cost of comprehensive eye care varies depending on the services required. We encourage you to schedule an appointment or visit our clinic for accurate pricing. Our team will assess your needs, conduct a thorough examination, and provide personalized treatment recommendations."
        ctaLine="Your Vision Deserves Comprehensive Care."
      />
    </SpecialityLayout>
  </>
);

export default ComprehensiveOphthalmology;

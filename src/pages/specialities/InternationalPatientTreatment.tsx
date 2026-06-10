import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-international.jpg";

const InternationalPatientTreatment = () => (
  <>
    <Helmet>
      <title>International Patient Services | Vijaya Eye Clinic Bangalore</title>
      <meta name="description" content="International patient services at Vijaya Eye Clinic. Travel assistance, accommodation, multilingual support, and comprehensive eye care." />
      <meta name="keywords" content="international patients, medical tourism, travel assistance, eye treatment abroad, global eye care" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/international-patient-treatment" />
      <meta property="og:title" content="International Patient Services | Vijaya Eye Clinic Bangalore" />
      <meta property="og:description" content="International patient services at Vijaya Eye Clinic. Travel assistance, accommodation, multilingual support." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/international-patient-treatment" />
      <meta name="twitter:title" content="International Patient Services | Vijaya Eye Clinic Bangalore" />
      <meta name="twitter:description" content="International patient services at Vijaya Eye Clinic. Travel assistance, accommodation, multilingual support." />
    </Helmet>
    <SpecialityLayout title="International Patient Treatment">
      <SpecialityContent
        heading="Comprehensive International Patient Treatment Services At Vijaya Eye Clinic"
        intro="We are dedicated to providing world-class eye care services to patients from around the globe. Our International Patient Treatment services are tailored to meet the unique needs of patients travelling from abroad, ensuring a seamless and comfortable experience throughout their journey to better vision and eye health."
        image={specialityImg}
        description="At Vijaya Eye Clinic, we are committed to excellence in eye care, offering a comprehensive range of services to address various eye conditions and concerns. Our team of experienced ophthalmologists, optometrists, and support staff are dedicated to providing personalized and compassionate care to all our patients, regardless of their country of origin."
        whatIsIt="Vijaya Eye Clinic offers specialized International Patient Treatment services designed to cater to the unique needs of patients travelling from abroad seeking exceptional eye care. Our services ensure a seamless and comfortable experience, providing access to our advanced treatments and facilities regardless of geographic location."
        whatDoesItInvolve="Our International Patient Treatment involves: Comprehensive consultation and examination to assess the patient's eye health and needs. Customized treatment planning, which may include advanced diagnostic tests, surgical interventions, or specialized therapies. Coordination of travel arrangements, accommodations, translation services, and other logistical support. Ongoing communication and assistance from initial patient contact to ensuring a smooth experience from arrival to departure."
        suitableFor="Our International Patient Treatment services are suitable for individuals seeking world-class eye care services outside of their home country. It is ideal for patients with complex eye conditions, those seeking specialized treatments not available locally, or individuals who value the expertise and reputation of Vijaya Eye Clinic for their eye care needs."
        risks="While receiving treatment abroad may involve logistical considerations, such as travel and accommodation arrangements, there are minimal risks associated with the medical care provided at Vijaya Eye Clinic. Our experienced team of ophthalmologists, optometrists, and support staff adhere to the highest standards of safety and quality, ensuring the best possible outcomes for internationally-served patients."
        costInfo="The cost of International Patient Treatment at Vijaya Eye Clinic can vary depending on several factors, including the specific services required, the complexity of the treatment, and any additional medical procedures or accommodations necessary. To obtain accurate pricing information and explore your options for International Patient Treatment at Vijaya Eye Clinic, we encourage you to schedule an appointment or visit our clinic. Our dedicated team will assess your individual needs, provide personalized treatment recommendations, and assist you every step of the way to ensure a comfortable and successful experience."
        ctaLine="Reach Out To Our International Patient Treatment Team Today!"
      />
    </SpecialityLayout>
  </>
);

export default InternationalPatientTreatment;

import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-diabetic.jpg";

const DiabeticEyeCare = () => (
  <>
    <Helmet>
      <title>Diabetic Eye Care in Bangalore - Vijaya Eye Clinic</title>
      <meta name="description" content="Specialized diabetic eye care services in Bangalore. Early detection and treatment of diabetic retinopathy and diabetes-related eye conditions." />
      <meta name="keywords" content="diabetic eye care in bangalore, diabetic retinopathy, diabetes eye treatment, vision protection, eye screening" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/diabetic-eye-care" />
      <meta property="og:title" content="Diabetic Eye Care in Bangalore - Vijaya Eye Clinic" />
      <meta property="og:description" content="Specialized diabetic eye care services in Bangalore. Early detection and treatment of diabetes-related eye conditions." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/diabetic-eye-care" />
      <meta name="twitter:title" content="Diabetic Eye Care in Bangalore - Vijaya Eye Clinic" />
      <meta name="twitter:description" content="Specialized diabetic eye care services in Bangalore. Early detection and treatment of diabetes-related eye conditions." />
    </Helmet>
    <SpecialityLayout title="Diabetic Eye Care">
      <SpecialityContent
        heading="Diabetic Eye Care Treatment At Vijaya Eye Clinic"
        intro="Welcome to Vijaya Eye Clinic, your trusted partner in diabetic eye care. Diabetes can have significant implications for eye health, potentially leading to diabetic retinopathy, diabetic macular edema, and other vision-threatening complications."
        image={specialityImg}
        description="Our specialized diabetic eye care services are designed to monitor, manage, and treat diabetic eye conditions, helping you preserve your vision and maintain optimal eye health. We provide comprehensive education on diabetes management, lifestyle modifications, and the importance of regular eye examinations."
        whatIsIt="Diabetic eye care at Vijaya Eye Clinic focuses on the management and treatment of eye conditions related to diabetes, such as diabetic retinopathy and diabetic macular edema. These conditions can develop when high blood sugar levels damage blood vessels in the retina, leading to vision impairment or even blindness if left untreated."
        whatDoesItInvolve="Our diabetic eye care involves a comprehensive approach to assess, monitor, and manage diabetic eye conditions. This includes regular dilated eye examinations to evaluate the retina and optic nerve, as well as specialized imaging tests like optical coherence tomography (OCT) and fluorescein angiography to detect changes in the retina."
        suitableFor="Diabetic eye care at Vijaya Eye Clinic is suitable for individuals with diabetes, especially those at higher risk of developing diabetic eye complications. This includes individuals with poorly controlled blood sugar levels, long-standing diabetes, high blood pressure, or other systemic conditions. Regular eye examinations are recommended for all individuals with diabetes."
        risks="While diabetic eye care is generally safe and effective, there are some risks associated with certain treatment options. For example, laser therapy may cause temporary discomfort or changes in vision, and surgery carries risks such as infection or bleeding. However, these risks are typically minimal compared to the potential benefits of preserving vision."
        costInfo="The cost of diabetic eye care treatment can vary depending on factors such as the specific treatment plan recommended, the severity of diabetic eye disease, and any additional tests or procedures required. To obtain accurate pricing information, we encourage you to schedule an appointment."
        ctaLine="Don't Let Diabetes Affect Your Vision."
      />
    </SpecialityLayout>
  </>
);

export default DiabeticEyeCare;

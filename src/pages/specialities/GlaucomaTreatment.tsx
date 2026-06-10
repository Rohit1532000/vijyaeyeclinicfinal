import SpecialityLayout from "@/components/SpecialityLayout";
import SpecialityContent from "@/components/SpecialityContent";
import { Helmet } from "react-helmet-async";
import specialityImg from "@/assets/speciality-glaucoma.jpg";

const GlaucomaTreatment = () => (
  <>
    <Helmet>
      <title>Glaucoma Treatment in Bangalore | Early Detection - Vijaya Eye Clinic</title>
      <meta name="description" content="Advanced glaucoma treatment and early detection services in Bangalore. Protect your vision from glaucoma with expert care." />
      <meta name="keywords" content="glaucoma treatment bangalore, glaucoma surgery, eye pressure, vision protection, glaucoma care" />
      <link rel="canonical" href="https://vijayaeyeclinic.com/specialities/glaucoma-treatment" />
      <meta property="og:title" content="Glaucoma Treatment in Bangalore | Early Detection - Vijaya Eye Clinic" />
      <meta property="og:description" content="Advanced glaucoma treatment and early detection services in Bangalore." />
      <meta property="og:url" content="https://vijayaeyeclinic.com/specialities/glaucoma-treatment" />
      <meta name="twitter:title" content="Glaucoma Treatment in Bangalore | Early Detection - Vijaya Eye Clinic" />
      <meta name="twitter:description" content="Advanced glaucoma treatment and early detection services in Bangalore." />
    </Helmet>
    <SpecialityLayout title="Glaucoma Treatment">
      <SpecialityContent
        heading="Advanced Glaucoma Treatment Services At Vijaya Eye Clinic"
        intro="Welcome to Vijaya Eye Clinic, where we offer advanced and comprehensive glaucoma treatment services to safeguard your vision and enhance your quality of life. Glaucoma is a progressive eye disease characterized by damage to the optic nerve, often resulting from elevated intraocular pressure (IOP)."
        image={specialityImg}
        description="At Vijaya Eye Clinic, we understand the importance of early diagnosis and personalized treatment in managing glaucoma effectively. Our experienced team of ophthalmologists utilizes state-of-the-art diagnostic technologies and imaging tools to assess your eye health and detect glaucoma at its earliest stages. We then develop customized treatment plans tailored to your specific needs."
        whatIsIt="Glaucoma treatment at Vijaya Eye Clinic involves a comprehensive approach to managing this progressive eye disease, which damages the optic nerve and can lead to irreversible vision loss if left untreated. Our specialized services aim to detect glaucoma early, control intraocular pressure, and preserve vision through personalized treatment plans."
        whatDoesItInvolve="Our glaucoma treatment begins with thorough diagnostic evaluations, including tonometry, visual field testing, and optic nerve imaging, to assess the severity and progression of the disease. Based on the findings, our experienced ophthalmologists develop personalized treatment plans. Treatment options may include prescription eye drops, laser therapy, or surgical intervention."
        suitableFor="Glaucoma treatment at Vijaya Eye Clinic is suitable for individuals diagnosed with glaucoma or those at risk of developing the disease. This includes individuals with a family history of glaucoma, older adults, individuals with elevated intraocular pressure, and those with other risk factors such as diabetes or high myopia."
        risks="While glaucoma treatment is generally safe and effective, there are potential risks and complications associated with certain treatment modalities. Risks may include temporary or permanent changes in vision, eye discomfort, infection, or complications related to surgery. Our experienced ophthalmologists thoroughly discuss potential risks and benefits with each patient."
        costInfo="The cost of glaucoma treatment can vary depending on factors such as the specific treatment plan recommended, the severity of the condition, and any additional tests or procedures required. To obtain accurate pricing information, we encourage you to schedule an appointment or visit our clinic."
        ctaLine="Don't Let Glaucoma Compromise Your Vision."
      />
    </SpecialityLayout>
  </>
);

export default GlaucomaTreatment;

/**
 * SEO Configuration and utility functions for the Vijaya Eye Clinic website
 * Centralized management of SEO metadata and structured data
 */

export const SITE_CONFIG = {
  siteName: 'Vijaya Eye Clinic',
  siteUrl: 'https://vijayaeyeclinic.com',
  description:
    'Vijaya Eye Clinic - Leading super specialty eye hospital in Bangalore since 1985. Expert ophthalmologists, LASIK, cataract surgery, glaucoma, retina treatment, and more. 35+ years of excellence.',
  keywords:
    'eye clinic bangalore, eye hospital bangalore, cataract surgery, LASIK surgery, retina treatment, glaucoma treatment, ophthalmologist, eye care, vision correction',
  logo: 'https://vijayaeyeclinic.com/logo.jpg',
  favicon: '/fevicon.jpg',
  social: {
    facebook: 'https://www.facebook.com/vijayaeyeclinic',
    instagram: 'https://www.instagram.com/vijayaeyeclinic',
    youtube: 'https://www.youtube.com/@vijayaeyeclinic',
    twitter: '@vijayaeyeclinic',
  },
  contact: {
    phone: '+91-9008021523',
    email: 'info@vijayaeyeclinic.com',
  },
  address: {
    main: 'Pv Plaza, #2, 5th Main Road MC Layout, Opp. to Sarvajna Bus Stop, Near Govindharajanagra Signal, Vijayanagar, Bengaluru, Karnataka 560040',
    branch: '12/2/B, Outer Ring Rd, Bhuvaneshwari Nagar, Nagadevanahalli, Bengaluru, Karnataka 560060',
  },
  businessHours: {
    open: '09:00 AM',
    close: '9:30 PM',
  },
};

/**
 * Generate JSON-LD schema for Organization
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.siteUrl,
    logo: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.youtube,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.main,
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560040',
      addressCountry: 'IN',
    },
    telephone: SITE_CONFIG.contact.phone,
    priceRange: '$$',
    medicalSpecialty: [
      'Ophthalmology',
      'Cataract Surgery',
      'LASIK Surgery',
      'Glaucoma Treatment',
      'Retina Treatment',
      'Pediatric Ophthalmology',
      'Cornea Treatment',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: SITE_CONFIG.businessHours.open,
      closes: SITE_CONFIG.businessHours.close,
    },
  };
};

/**
 * Generate JSON-LD schema for Local Business
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.siteName,
    image: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: [
      {
        '@type': 'PostalAddress',
        name: 'Vijayanagar Branch',
        streetAddress: SITE_CONFIG.address.main,
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560040',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        name: 'Nagadevanahalli Branch',
        streetAddress: SITE_CONFIG.address.branch,
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560060',
        addressCountry: 'IN',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3000',
    },
  };
};

/**
 * Generate JSON-LD schema for WebPage
 */
export const generateWebPageSchema = (
  title: string,
  description: string,
  url: string,
  image?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    image: image || SITE_CONFIG.logo,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.siteName,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo,
      },
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };
};

/**
 * Generate JSON-LD schema for Medical Service
 */
export const generateMedicalServiceSchema = (
  name: string,
  description: string,
  provider: string = SITE_CONFIG.siteName
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name: name,
    description: description,
    provider: {
      '@type': 'MedicalBusiness',
      name: provider,
      url: SITE_CONFIG.siteUrl,
    },
  };
};

/**
 * Page metadata configuration for all routes
 */
export const PAGE_META_CONFIG: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string;
    ogImage?: string;
  }
> = {
  '/': {
    title: 'Vijaya Eye Clinic | Super Specialty Eye Hospital Bangalore',
    description:
      'Vijaya Eye Clinic - Leading super specialty eye hospital in Bangalore since 1985. Expert ophthalmologists, LASIK, cataract surgery, glaucoma, retina treatment, and more. 35+ years of excellence.',
    keywords:
      'eye clinic bangalore, eye hospital bangalore, cataract surgery, LASIK surgery, retina treatment, glaucoma treatment, ophthalmologist, eye care',
  },
  '/about-us': {
    title: 'About Us - Vijaya Eye Clinic | 35+ Years of Excellence',
    description:
      'Learn about Vijaya Eye Clinic, established in 1985. Discover our mission, vision, and commitment to providing world-class eye care in Bangalore.',
    keywords:
      'about vijaya eye clinic, eye hospital history, ophthalmology bangalore, eye care specialists',
  },
  '/specialities': {
    title: 'Eye Specialities & Treatments - Vijaya Eye Clinic Bangalore',
    description:
      'Explore our comprehensive eye care specialities including cataract surgery, LASIK, glaucoma treatment, retina treatment, and more at Vijaya Eye Clinic.',
    keywords:
      'eye specialities, cataract surgery bangalore, LASIK bangalore, glaucoma treatment, retina treatment, ophthalmology services',
  },
  '/specialities/cataract-treatment': {
    title: 'Cataract Surgery in Bangalore | Advanced Treatment - Vijaya Eye Clinic',
    description:
      'Advanced cataract surgery with premium IOL options and latest technology at Vijaya Eye Clinic. Expert ophthalmologists, rapid recovery, crystal-clear vision.',
    keywords:
      'cataract surgery bangalore, cataract treatment, phacoemulsification, IOL implant, advanced cataract surgery',
  },
  '/specialities/lasik-refractive-treatment': {
    title: 'LASIK Surgery in Bangalore | Refractive Surgery - Vijaya Eye Clinic',
    description:
      'Freedom from glasses with LASIK refractive surgery at Vijaya Eye Clinic. State-of-the-art technology, experienced surgeons, safe and effective vision correction.',
    keywords:
      'LASIK surgery bangalore, refractive surgery, laser eye surgery, vision correction, lasik treatment',
  },
  '/specialities/glaucoma-treatment': {
    title: 'Glaucoma Treatment in Bangalore | Early Detection - Vijaya Eye Clinic',
    description:
      'Comprehensive glaucoma management and treatment at Vijaya Eye Clinic. Early detection, advanced diagnostic tools, and expert ophthalmologists for vision preservation.',
    keywords:
      'glaucoma treatment bangalore, glaucoma surgery, intraocular pressure, glaucoma management, eye pressure treatment',
  },
  '/specialities/retina-treatment': {
    title: 'Retina Treatment in Bangalore | Diabetic Retinopathy - Vijaya Eye Clinic',
    description:
      'Advanced retinal diagnosis and treatment including diabetic retinopathy, macular degeneration, and retinal detachment at Vijaya Eye Clinic.',
    keywords:
      'retina treatment bangalore, diabetic retinopathy, retinal detachment, macular degeneration, retina specialist',
  },
  '/appointment-booking': {
    title: 'Book Appointment - Vijaya Eye Clinic Bangalore',
    description:
      'Schedule your eye examination appointment with our expert ophthalmologists at Vijaya Eye Clinic. Easy online booking available.',
    keywords:
      'book appointment, eye examination, doctor appointment, vijaya eye clinic appointment',
  },
  '/contact-us': {
    title: 'Contact Us - Vijaya Eye Clinic Bangalore',
    description:
      'Get in touch with Vijaya Eye Clinic. Find our contact information, branches, and inquiry form for all eye care needs.',
    keywords:
      'contact vijaya eye clinic, eye clinic bangalore contact, ophthalmologist contact, medical inquiry',
  },
};

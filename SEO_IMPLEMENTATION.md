# SEO Implementation Guide - Vijaya Eye Clinic

## Overview
This document outlines the SEO implementation and best practices applied to the Vijaya Eye Clinic website to improve search engine visibility and rankings.

---

## Files Added for SEO

### 1. **index.html** (Enhanced)
- **Location**: `/index.html`
- **Improvements**:
  - Added comprehensive meta tags (charset, viewport, description, keywords)
  - Implemented Open Graph (OG) tags for social media sharing
  - Added Twitter Card meta tags
  - Included JSON-LD schema markup for MedicalBusiness
  - Added canonical URL tag
  - Configured preconnect and dns-prefetch for performance
  - Added favicon and apple-touch-icon references

### 2. **robots.txt** (Enhanced)
- **Location**: `/public/robots.txt`
- **Purpose**: Controls how search engines crawl the website
- **Contents**:
  - Crawl-delay specifications for different bots
  - Allow/Disallow rules
  - Sitemap URL reference
  - Rules for major search engines (Google, Bing, etc.)

### 3. **sitemap.xml** (New)
- **Location**: `/public/sitemap.xml`
- **Purpose**: Comprehensive XML sitemap for all website pages
- **Contents**:
  - All 40+ pages with priority and change frequency
  - Image sitemap support
  - Mobile sitemap support
  - Last modified dates
  - Priority levels (0.5 - 1.0)

### 4. **usePageMeta Hook** (New)
- **Location**: `/src/hooks/usePageMeta.ts`
- **Purpose**: Dynamic meta tag management per page
- **Features**:
  - Sets page titles and descriptions
  - Manages Open Graph tags
  - Handles Twitter Card tags
  - Updates canonical URLs
  - Enables/disables indexing per page

### 5. **SEO Configuration** (New)
- **Location**: `/src/lib/seoConfig.ts`
- **Purpose**: Centralized SEO configuration and schema generation
- **Contents**:
  - Site configuration constants
  - JSON-LD schema generators
  - Page metadata mapping
  - Structured data schemas

### 6. **Security Configuration** (New)
- **Location**: `/public/.well-known/security.txt`
- **Purpose**: Security policy and contact information
- **Contents**:
  - Security contact email
  - Expiration date
  - Preferred languages

---

## SEO Implementation Details

### Schema Markup (JSON-LD)
The website includes multiple JSON-LD schema types:
- **MedicalBusiness**: Main organization schema
- **LocalBusiness**: Local business information with multiple locations
- **WebPage**: Individual page schema
- **MedicalService**: Service offerings schema

### Meta Tags Implemented

#### Essential Meta Tags
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="robots" content="index, follow" />
```

#### Open Graph Tags
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
```

#### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
```

#### Canonical URL
```html
<link rel="canonical" href="https://vijayaeyeclinic.com/" />
```

---

## How to Use the Meta Hook

### Example Usage in Components

```typescript
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us - Vijaya Eye Clinic',
    description: 'Get in touch with Vijaya Eye Clinic for all eye care needs.',
    keywords: 'contact, eye clinic, bangalore',
    canonical: 'https://vijayaeyeclinic.com/contact-us',
  });

  return (
    <div>
      {/* Page content */}
    </div>
  );
}
```

---

## Sitemap Structure

The sitemap is organized by priority:
- **Priority 1.0**: Homepage
- **Priority 0.9**: Main pages (About, Specialities, Appointment)
- **Priority 0.8**: Service pages (Individual specialities, facilities)
- **Priority 0.7**: Information pages (Team, Values, Community)
- **Priority 0.5**: Legal pages (Privacy, Terms, Refund)

---

## Robots.txt Configuration

### Allowed Paths
- `/` - Full access to website
- All public pages

### Disallowed Paths
- `/node_modules/` - Source files
- `/.git/` - Version control
- `/dist/` - Build files

### Crawl Delays
- **Googlebot**: 0.5 seconds
- **Bingbot**: 1 second
- **Default**: 1 second

---

## SEO Best Practices Implemented

### 1. **Meta Tags**
- ✅ Unique titles for each page
- ✅ Descriptive meta descriptions (150-160 characters)
- ✅ Relevant keywords
- ✅ Canonical URLs to prevent duplicate content

### 2. **Structured Data**
- ✅ JSON-LD format for machine readability
- ✅ Schema.org markup for medical business
- ✅ Rich snippets for search results
- ✅ Local business information with multiple locations

### 3. **Social Media Integration**
- ✅ Open Graph tags for Facebook
- ✅ Twitter Card tags for Twitter/X
- ✅ Social media links in schema
- ✅ Proper image dimensions (1200x630)

### 4. **Technical SEO**
- ✅ Responsive design (Mobile-first)
- ✅ Fast loading (Lazy loading, code splitting)
- ✅ Clean URL structure
- ✅ XML sitemap with 40+ pages
- ✅ Robots.txt for crawler management

### 5. **Local SEO**
- ✅ Multiple branch locations in schema
- ✅ Local business markup
- ✅ Address and contact information
- ✅ Opening hours specification

---

## Google Search Console Setup

### To Submit Website:

1. **Verify Ownership**:
   - Add meta verification tag in index.html (provided by Google)
   - Or use robots.txt method

2. **Submit Sitemap**:
   - Go to Google Search Console
   - Navigate to Sitemaps
   - Submit: `https://vijayaeyeclinic.com/sitemap.xml`

3. **Monitor**:
   - Check indexing status
   - Review search appearance
   - Check for errors and warnings

---

## Future SEO Improvements

### Phase 1 (Immediate)
- [ ] Implement breadcrumb schema
- [ ] Add FAQ schema for common questions
- [ ] Optimize images with proper alt text
- [ ] Implement structured data for doctors/staff

### Phase 2 (Short-term)
- [ ] Create blog content strategy
- [ ] Implement AMP for mobile pages
- [ ] Add internal linking strategy
- [ ] Create FAQ page with rich snippets

### Phase 3 (Long-term)
- [ ] Implement voice search optimization
- [ ] Create local landing pages
- [ ] Develop content hub for services
- [ ] Implement review schema with testimonials

---

## Performance Optimization for SEO

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Strategies
1. Image optimization and compression
2. Code splitting and lazy loading
3. Caching strategies
4. CDN implementation
5. Minification of CSS and JavaScript

---

## Contact Information

For SEO-related queries, contact: **security@vijayaeyeclinic.com**

---

## Changelog

### Version 1.0 (2026-06-02)
- Initial SEO implementation
- Added all necessary SEO files
- Implemented meta tags and schema markup
- Created SEO documentation

---

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

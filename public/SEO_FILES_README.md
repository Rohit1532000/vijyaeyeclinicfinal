# Vijaya Eye Clinic - SEO Configuration Files

## Overview
This directory contains essential SEO configuration files that enhance the website's search engine visibility, performance, and user experience.

## Files Overview

### 1. **sitemap.xml**
- **Purpose**: XML sitemap for search engines
- **Contents**: All 40+ pages with priority and change frequency
- **Update**: Auto-generated or manual updates when pages change
- **Submit to**: Google Search Console, Bing Webmaster Tools

### 2. **robots.txt**
- **Purpose**: Instructs search engine crawlers how to crawl the site
- **Contains**:
  - Crawl-delay settings
  - Disallow rules for non-public directories
  - Sitemap reference
- **Location**: `/public/robots.txt`

### 3. **.htaccess**
- **Purpose**: Apache server configuration for SEO and security
- **Features**:
  - Gzip compression
  - Browser caching
  - HTTPS enforcement
  - Security headers
- **Location**: `/public/.htaccess`
- **Note**: Only works on Apache servers; not needed for Vercel/Netlify

### 4. **manifest.json**
- **Purpose**: PWA (Progressive Web App) manifest
- **Benefits**:
  - Enables installation on mobile devices
  - Improves SEO and mobile UX
  - Provides app metadata
- **Location**: `/public/manifest.json`
- **Linked in**: `index.html`

### 5. **ads.txt**
- **Purpose**: Ad verification and brand safety
- **Contents**: Ad network declarations
- **Location**: `/public/ads.txt`
- **Update**: Add your actual ad network information

### 6. **.well-known/security.txt**
- **Purpose**: Security policy contact information
- **Location**: `/public/.well-known/security.txt`
- **Contains**: Security contact details and expiration date

## Implementation Status

| File | Status | Location | Priority |
|------|--------|----------|----------|
| index.html (enhanced) | ✅ Done | `/index.html` | Critical |
| sitemap.xml | ✅ Done | `/public/sitemap.xml` | Critical |
| robots.txt | ✅ Done | `/public/robots.txt` | Critical |
| manifest.json | ✅ Done | `/public/manifest.json` | High |
| .htaccess | ✅ Done | `/public/.htaccess` | High |
| ads.txt | ✅ Done | `/public/ads.txt` | Medium |
| .well-known/security.txt | ✅ Done | `/public/.well-known/security.txt` | Medium |
| usePageMeta hook | ✅ Done | `/src/hooks/usePageMeta.ts` | High |
| seoConfig | ✅ Done | `/src/lib/seoConfig.ts` | High |

## Quick Setup Checklist

### Immediate Tasks
- [x] Create and validate sitemap.xml
- [x] Update robots.txt with sitemap reference
- [x] Add meta tags to index.html
- [x] Create manifest.json
- [x] Add security headers (.htaccess)

### Next Steps (Manual)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site ownership in GSC
- [ ] Update ads.txt with your ad network IDs
- [ ] Test mobile app installability
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals

### Search Console Setup
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add/select your property
3. Go to Sitemaps section
4. Add: `https://vijayaeyeclinic.com/sitemap.xml`
5. Monitor indexing status

### Bing Webmaster Tools Setup
1. Visit [Bing Webmaster Tools](https://www.bing.com/webmaster)
2. Add your site
3. Submit sitemap
4. Verify ownership

## Meta Tags in index.html

The enhanced `index.html` includes:

### Essential Tags
- Charset, viewport, X-UA-Compatible
- Meta description, keywords
- Author information

### SEO Tags
- Canonical URL
- Robots meta tags
- Language specification

### Social Media Tags
- Open Graph tags (Facebook)
- Twitter Card tags
- OG image with proper dimensions

### Schema Markup
- JSON-LD MedicalBusiness schema
- Organization information
- Medical specialties

## Using the usePageMeta Hook

For dynamic page-specific meta tags:

```typescript
import { usePageMeta } from '@/hooks/usePageMeta';

export default function MyPage() {
  usePageMeta({
    title: 'Page Title',
    description: 'Page description',
    keywords: 'relevant, keywords',
    canonical: 'https://vijayaeyeclinic.com/page-path',
  });

  return <div>{/* Content */}</div>;
}
```

## SEO Configuration

Access centralized SEO config in `/src/lib/seoConfig.ts`:

```typescript
import { SITE_CONFIG, PAGE_META_CONFIG } from '@/lib/seoConfig';

// Access site information
console.log(SITE_CONFIG.siteName); // "Vijaya Eye Clinic"
console.log(SITE_CONFIG.siteUrl); // "https://vijayaeyeclinic.com"

// Generate JSON-LD schemas
const organizationSchema = generateOrganizationSchema();
const localBusinessSchema = generateLocalBusinessSchema();
```

## Performance Impact

These SEO configurations provide:

- **Better Indexing**: Sitemap ensures all pages are discovered
- **Faster Loading**: Gzip compression and caching
- **Better Mobile UX**: Manifest.json and responsive design
- **Higher Rankings**: Proper meta tags and structured data
- **Rich Snippets**: Schema markup for enhanced search results
- **Social Sharing**: OG tags for previews

## Maintenance

### Regular Updates
- Update sitemap when new pages are added
- Review robots.txt for any crawl issues
- Monitor Google Search Console for errors
- Check Core Web Vitals monthly

### SEO Monitoring
- Track keyword rankings
- Monitor organic traffic
- Check for indexing issues
- Review search console reports

## Troubleshooting

### Sitemap Not Indexed
- Verify XML format: `xmllint sitemap.xml`
- Check robots.txt allows crawling
- Resubmit in Google Search Console

### Pages Not Indexed
- Verify robots meta tag
- Check canonical URLs
- Review crawl errors in GSC
- Ensure no noindex directives

### Poor Core Web Vitals
- Optimize image sizes
- Minimize CSS/JS
- Use CDN
- Implement lazy loading

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse Audit](https://developers.google.com/web/tools/lighthouse)

## Contact

For SEO inquiries: **security@vijayaeyeclinic.com**

## Version History

- **v1.0** (2026-06-02): Initial SEO implementation
  - Added all essential SEO files
  - Implemented schema markup
  - Created meta tag management hooks
  - Added documentation

---

**Last Updated**: 2026-06-02
**Maintained by**: Development Team

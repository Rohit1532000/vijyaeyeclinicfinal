import { Helmet } from 'react-helmet-async';
import React from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

/**
 * SEO Helmet Component for page metadata
 * Easily add SEO tags to any page
 */
export const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  keywords = '',
  canonical = '',
  ogTitle,
  ogDescription,
  ogUrl,
  twitterTitle,
  twitterDescription,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    {ogUrl && <meta property="og:url" content={ogUrl} />}
    <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
    <meta
      name="twitter:description"
      content={twitterDescription || ogDescription || description}
    />
  </Helmet>
);

export default PageSEO;

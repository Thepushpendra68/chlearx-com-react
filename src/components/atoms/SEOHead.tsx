'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  canonical?: string;
  schema?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'CHLEARX - Performance-Driven E-commerce Marketing Agency',
  description = 'Accelerate your e-commerce growth with data-driven marketing strategies. Specializing in conversion optimization, PPC advertising, and revenue growth for online businesses.',
  keywords = ['e-commerce marketing', 'conversion optimization', 'PPC advertising', 'digital marketing agency', 'online marketing', 'revenue growth'],
  image = '/og-image.jpg',
  url = 'https://chlearx.com',
  type = 'website',
  author = 'CHLEARX Team',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noIndex = false,
  canonical,
  schema,
}) => {
  const fullTitle = title.includes('CHLEARX') ? title : `${title} | CHLEARX`;
  const imageUrl = image.startsWith('http') ? image : `${url}${image}`;
  const canonicalUrl = canonical || url;

  // Generate structured data schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CHLEARX',
    description: 'Performance-driven e-commerce marketing agency',
    url: 'https://chlearx.com',
    logo: `${url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://linkedin.com/company/chlearx',
      'https://twitter.com/chlearx',
      'https://facebook.com/chlearx'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Avenue, Suite 456',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    }
  };

  const schemaData = schema || defaultSchema;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CHLEARX" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific Open Graph tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chlearx" />
      <meta name="twitter:creator" content="@chlearx" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="application-name" content="CHLEARX" />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Head>
  );
};

export { SEOHead };
export type { SEOHeadProps }; 
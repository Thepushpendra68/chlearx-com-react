import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chlearx.com'
  
  // Static pages with high importance
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ]

  // Service pages
  const servicePages = [
    'discovery-strategy',
    'creative-excellence',
    'growth-acceleration'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts (in a real app, you'd fetch these from your CMS/database)
  const blogPosts = [
    'conversion-rate-optimization-strategies',
    'google-ads-ecommerce-guide-2024',
    'email-marketing-automation-workflows',
    'seo-ecommerce-technical-checklist',
    'social-media-platform-strategies-2024',
    'analytics-attribution-measuring-roi'
  ].map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Case study pages (in a real app, you'd fetch these from your CMS/database)
  const caseStudyPages = [
    'fashionforward-ecommerce-growth',
    'techsolutions-b2b-lead-generation',
    'homecare-heroes-digital-transformation'
  ].map(study => ({
    url: `${baseUrl}/case-studies/${study}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...blogPosts,
    ...caseStudyPages
  ]
} 
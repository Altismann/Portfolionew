import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://www.sitecraft.se',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
  ]
}
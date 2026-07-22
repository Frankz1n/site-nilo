import type { MetadataRoute } from 'next';
import { brandGroups } from '@/lib/portfolio';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const brandPages = brandGroups.map((brand) => ({
    url: `${site.url}/portfolio/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...brandPages,
  ];
}

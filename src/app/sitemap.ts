/**
 * sitemap.xml 生成
 *
 * Next.js 15 动态生成 sitemap.xml
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { MetadataRoute } from 'next';
import { source, blogSource } from '../../source';

/**
 * 获取网站基础 URL
 */
function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://codecli.dev';
}

/**
 * 生成 sitemap.xml
 *
 * 包含:
 * - 首页
 * - 文档页面
 * - 博客页面
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // 首页 - 最高优先级
  entries.push({
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // 文档首页
  entries.push({
    url: `${baseUrl}/docs`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // 所有文档页面
  const pages = source.getPages();
  for (const page of pages) {
    entries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // 博客列表页
  entries.push({
    url: `${baseUrl}/blog`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  });

  // 所有博客文章
  const blogPages = blogSource.getPages();
  for (const page of blogPages) {
    entries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}

/**
 * sitemap.xml 生成
 *
 * Next.js 15 动态生成 sitemap.xml
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { MetadataRoute } from 'next';
import { source } from '../../source';

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
 * - 文档页面
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // 添加文档首页
  entries.push({
    url: `${baseUrl}/docs`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // 添加所有文档页面
  const pages = source.getPages();
  for (const page of pages) {
    entries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  return entries;
}

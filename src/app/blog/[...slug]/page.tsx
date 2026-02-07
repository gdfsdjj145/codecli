import { blogSource } from '@/../source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '../mdx-components';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codecli.dev';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const pageUrl = `${siteUrl}${page.url}`;

  // Article JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.data.title,
    description: page.data.description || '',
    url: pageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'CodeCli',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/brand/logo.png`,
      },
    },
    inLanguage: 'zh-CN',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return blogSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  const title = page.data.title;
  const description = page.data.description || 'CodeCli 博客文章';
  const pageUrl = `${siteUrl}${page.url}`;

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      locale: 'zh_CN',
      url: pageUrl,
      siteName: 'CodeCli',
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

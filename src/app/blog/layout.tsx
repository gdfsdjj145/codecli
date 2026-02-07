import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './blog-styles.css';
import { blogSource } from '../../../source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '../layout.config';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codecli.dev';

export const metadata: Metadata = {
  title: 'CodeCli 博客',
  description: 'CodeCli 团队分享的技术文章、使用教程和最新动态。',
  keywords: ['CodeCli 博客', 'Claude Code 教程', 'AI 编程技巧'],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: `${siteUrl}/blog`,
    siteName: 'CodeCli',
    title: 'CodeCli 博客',
    description: 'CodeCli 团队分享的技术文章、使用教程和最新动态。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCli 博客',
    description: 'CodeCli 团队分享的技术文章、使用教程和最新动态。',
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // @ts-ignore
    <DocsLayout 
      tree={blogSource.pageTree} 
      sidebar={{
        enabled: false
      }}
    >
      <div className="blog-layout">
        {children}
      </div>
    </DocsLayout>
  );
}
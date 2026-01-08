import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import 'fumadocs-ui/style.css';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codecli.dev';

export const metadata: Metadata = {
  title: {
    default: 'CodeCli - Claude Code API 服务',
    template: '%s | CodeCli',
  },
  description:
    'CodeCli 提供专业的 Claude Code API 中转服务，支持按量计费、日卡、月卡，稳定高速住宅 IP，让每位开发者都能享受 AI 编程助手带来的效率提升。',
  keywords: [
    'Claude Code',
    'Claude API',
    'AI 编程',
    'AI 代码助手',
    'Anthropic',
    'Claude',
    'API 服务',
    '按量计费',
    '月卡',
    '日卡',
  ],
  authors: [{ name: 'CodeCli Team' }],
  creator: 'CodeCli',
  publisher: 'CodeCli',
  metadataBase: new URL(siteUrl),

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteUrl,
    siteName: 'CodeCli',
    title: 'CodeCli - Claude Code API 服务',
    description:
      'CodeCli 提供专业的 Claude Code API 中转服务，支持按量计费、日卡、月卡，稳定高速住宅 IP。',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CodeCli - Claude Code API 服务',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCli - Claude Code API 服务',
    description:
      'CodeCli 提供专业的 Claude Code API 中转服务，支持按量计费、日卡、月卡，稳定高速住宅 IP。',
    images: [`${siteUrl}/og-image.png`],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 图标
  icons: {
    icon: [
      { url: '/favicons/icon_16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/icon_32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/icon_48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/icon_128x128.png', sizes: '128x128', type: 'image/png' },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
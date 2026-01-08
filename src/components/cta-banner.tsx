'use client';

import Link from 'next/link';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

export function CTABanner({
  title = '开始使用 CodeCli 服务',
  description = 'Claude Code API 中转服务，支持按量、日卡、月卡，稳定高速住宅 IP',
  buttonText = '立即开始',
  href = '/docs/service',
}: CTABannerProps) {
  return (
    <div className="not-prose my-6 relative overflow-hidden rounded-xl border border-[#00abb6]/20 bg-gradient-to-r from-[#00abb6]/10 via-[#00abb6]/5 to-transparent p-6">
      <div className="absolute -right-8 -top-8 size-32 rounded-full bg-[#00abb6]/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 size-24 rounded-full bg-[#00abb6]/10 blur-xl" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold text-[#00abb6] text-lg">{title}</h3>
          <p className="text-sm text-fd-muted-foreground">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00abb6] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#009aa8] hover:shadow-lg hover:shadow-[#00abb6]/25"
        >
          {buttonText}
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

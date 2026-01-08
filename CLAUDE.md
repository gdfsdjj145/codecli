# CLAUDE.md

This file provides guidance to Claude Code when working with this codebase.

## Project Overview

**CodeCli Docs** is a documentation website for Claude Code API service, built with Next.js 15 and Fumadocs framework. It provides installation guides, tutorials, and FAQ for CodeCli users.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Docs Framework**: Fumadocs with MDX
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app/
│   ├── docs/              # Documentation pages (Fumadocs)
│   │   ├── layout.tsx     # Docs layout with sidebar
│   │   └── [...slug]/     # Dynamic doc pages
│   ├── llms-full.txt/     # Full docs export for LLM
│   ├── llms.mdx/          # Single page MDX export
│   ├── layout.tsx         # Root layout with metadata
│   ├── layout.config.tsx  # Navigation config
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt config
├── components/
│   ├── cta-banner.tsx     # CTA banner component
│   └── mdx-components.tsx # Custom MDX components
└── lib/
    └── get-llm-text.ts    # LLM text extraction

content/
└── docs/                  # MDX documentation content
    ├── meta.json          # Sidebar configuration
    ├── service.mdx        # Service introduction
    ├── faq.mdx            # FAQ
    ├── best-practices.mdx # Best practices
    ├── claude-init.mdx    # Installation guide
    ├── claude-window-init.mdx  # Windows setup
    └── claude-cache.mdx   # Cache cleanup

source.ts                  # Fumadocs source configuration
```

## Common Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm lint         # Run ESLint
```

## Documentation Structure

The docs sidebar is organized using `meta.json`:

```json
{
  "pages": [
    "--- 🏠 CodeCli 使用 ---",
    "best-practices",
    "service",
    "faq",
    "--- 📖 Claude Code 教程 ---",
    "claude-init",
    "claude-window-init",
    "claude-cache"
  ]
}
```

## Code Conventions

### MDX Files
- Use frontmatter for `title` and `description`
- Do NOT add H1 heading (title is auto-generated from frontmatter)
- Use `<CTABanner />` at top and bottom of tutorial pages
- Use `<Cards>` and `<Card>` for navigation links
- Use `<Callout>` for tips and warnings

### Components
- Custom components in `src/components/`
- Register MDX components in `mdx-components.tsx`
- Use brand color `#00abb6` for primary elements

### Styling
- Brand color CSS variable: `--fd-primary: 0 171 182`
- Layout widths defined in `globals.css`
- Sidebar: light gray background (#fafafa)
- Content/TOC: white background

## Key Files

- `src/app/layout.tsx` - Root metadata (SEO, Open Graph)
- `src/app/docs/[...slug]/page.tsx` - Doc page with per-page metadata
- `src/app/globals.css` - Global styles and CSS variables
- `src/components/cta-banner.tsx` - Reusable CTA component
- `content/docs/meta.json` - Sidebar navigation config

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://codecli.dev
```

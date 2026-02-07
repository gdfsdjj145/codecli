'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

/* ── animation helpers ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  // SSR renders with visible state so crawlers see full content.
  // After hydration, animations play normally.
  const [hydrated, setHydrated] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => { setHydrated(true); }, []);
  const shouldAnimate = hydrated && !prefersReducedMotion;
  const initialState = shouldAnimate ? 'hidden' : 'visible';
  return (
    <div className="min-h-screen bg-[#fafbfc] antialiased">
      {/* ───────── Header ───────── */}
      <header className="h-[72px] bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100/80 flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight text-gray-900">
            <Image src="/brand/logo.png" alt="CodeCli" width={26} height={26} />
            Code<span className="text-[#00abb6]">Cli</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {[
              { href: '#features', label: '服务特点' },
              { href: '#compare', label: '优势对比' },
              { href: '#why', label: '为什么选择' },
              { href: '/docs/service', label: '使用文档', isLink: true },
            ].map((item) =>
              item.isLink ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[15px] text-gray-500 hover:text-[#00abb6] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[15px] text-gray-500 hover:text-[#00abb6] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <Link
            href="/docs/service"
            className="bg-[#00abb6] text-white px-5 py-2 rounded-full text-[14px] font-semibold tracking-wide hover:bg-[#009aa4] transition-all duration-300 hover:shadow-lg hover:shadow-[#00abb6]/25"
          >
            立即体验
          </Link>
        </div>
      </header>

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden pt-28 pb-32 md:pt-36 md:pb-40">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0fafb] via-white to-[#fafbfc]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(0,171,182,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-[100px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,171,182,0.04)_0%,transparent_70%)] pointer-events-none" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,171,182,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,171,182,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div
          initial={initialState}
          animate="visible"
          variants={stagger}
          className="max-w-[800px] mx-auto px-6 relative z-10 text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00abb6]/[0.08] text-[#00919c] text-[13px] font-semibold tracking-wide border border-[#00abb6]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00abb6] animate-pulse" />
              基于官方 API 构建
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-[40px] md:text-[54px] font-extrabold leading-[1.15] mb-7 tracking-tight text-gray-900"
          >
            专业的 Claude Code
            <br />
            <span className="bg-gradient-to-r from-[#00abb6] to-[#00858e] bg-clip-text text-transparent">
              API 中转服务平台
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[17px] md:text-[19px] text-gray-500 mb-12 leading-relaxed max-w-[600px] mx-auto"
          >
            基于官方 API 构建，让开发者以更合理的成本、更稳定的连接
            <br className="hidden md:block" />
            无缝使用全球领先的 AI 编程辅助工具。
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/docs/service"
              className="group inline-flex items-center gap-2 px-7 py-3 text-[15px] font-semibold rounded-full border-2 border-[#00abb6]/30 text-[#00919c] hover:border-[#00abb6] hover:bg-[#00abb6]/[0.04] transition-all duration-300"
            >
              免费试用
            </Link>
            <Link
              href="/docs/service"
              className="group inline-flex items-center gap-2 px-7 py-3 text-[15px] font-semibold rounded-full bg-[#00abb6] text-white hover:bg-[#009aa4] transition-all duration-300 hover:shadow-xl hover:shadow-[#00abb6]/20"
            >
              查看文档
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ───────── Features ───────── */}
      <section id="features" className="py-28 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,171,182,0.04),transparent)] pointer-events-none" />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <motion.div
            initial={initialState}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[13px] font-semibold text-[#00abb6] tracking-widest uppercase mb-3">
              Core Features
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-[32px] md:text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">
              核心服务特点
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[17px] text-gray-500 max-w-[460px] mx-auto">
              为开发者量身打造的高效 API 解决方案
            </motion.p>
          </motion.div>

          <motion.div
            initial={initialState}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: '独享服务保障',
                desc: '采用企业级账号池隔离技术，确保每个 API Key 的调用独立互不干扰，极大降低封号风险，保障业务连续性。',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: '全球极速响应',
                desc: '部署全球多节点加速网络，自动选择最优线路，显著降低 API 调用延迟，提供媲美官方直连的流畅体验。',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                ),
                title: '灵活透明计费',
                desc: '拒绝隐形消费，支持按 Token 用量精准计费。提供多种套餐选择，实时监控额度消耗，每一分钱都花在刀刃上。',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i}
                className="group relative bg-white rounded-2xl p-9 border border-gray-100 transition-all duration-500 hover:border-[#00abb6]/30 hover:shadow-2xl hover:shadow-[#00abb6]/[0.06] hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00abb6]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00abb6]/10 to-[#00abb6]/[0.04] text-[#00abb6] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00abb6]/10">
                    {card.icon}
                  </div>
                  <h3 className="text-[20px] font-bold mb-3 text-gray-900 tracking-tight">{card.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── Compare ───────── */}
      <section id="compare" className="py-28 bg-[#fafbfc] relative">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={initialState}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-start"
          >
            {/* Left: Table */}
            <motion.div variants={fadeUp} custom={0}>
              <p className="text-[13px] font-semibold text-[#00abb6] tracking-widest uppercase mb-3">Comparison</p>
              <h2 className="text-[28px] md:text-[34px] font-extrabold mb-8 text-gray-900 tracking-tight">
                适用人群与优势对比
              </h2>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-gray-50/80 rounded-xl mb-1 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
                  <div>适用对象</div>
                  <div>官方直连</div>
                  <div>CodeCli 中转</div>
                </div>
                {/* Rows */}
                {[
                  { user: '个人开发者', official: '需海外信用卡', codecli: '支持支付宝/微信' },
                  { user: '初创团队', official: '封号风险高', codecli: '企业级账号池保护' },
                  { user: '企业用户', official: '无法开具发票', codecli: '合规发票支持' },
                ].map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 px-4 py-5 border-b border-gray-50 last:border-b-0 items-center"
                  >
                    <div className="font-semibold text-[15px] text-gray-900">{row.user}</div>
                    <div className="text-gray-400 text-[14px] line-through decoration-gray-200">{row.official}</div>
                    <div className="text-[#00919c] font-semibold text-[14px] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#00abb6]/10 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#00abb6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {row.codecli}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Features & Languages */}
            <motion.div variants={fadeUp} custom={1} className="space-y-10">
              <div>
                <h3 className="text-[18px] font-bold mb-5 flex items-center gap-2.5 text-gray-900">
                  <span className="w-7 h-7 rounded-lg bg-[#00abb6]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#00abb6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  完整功能支持
                </h3>
                <ul className="space-y-3.5">
                  {[
                    '支持 Claude 4.5 Opus/Sonnet 全系模型',
                    '100% 兼容 OpenAI 接口格式',
                    '支持 Function Calling 能力',
                    '长文本 Context Window 无损传输',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] text-gray-600">
                      <svg className="w-4.5 h-4.5 text-[#00abb6] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] font-bold mb-5 flex items-center gap-2.5 text-gray-900">
                  <span className="w-7 h-7 rounded-lg bg-[#00abb6]/10 flex items-center justify-center text-[12px] font-mono font-bold text-[#00abb6]">
                    {'</>'}
                  </span>
                  适配编程语言
                </h3>
                <div className="grid grid-cols-4 gap-2.5">
                  {['Python', 'JavaScript', 'Go', 'Java', 'Rust', 'C++', 'PHP', 'Swift'].map((lang) => (
                    <div
                      key={lang}
                      className="bg-white border border-gray-100 rounded-xl h-12 flex items-center justify-center text-[13px] text-gray-500 font-semibold hover:border-[#00abb6]/40 hover:text-[#00abb6] hover:bg-[#00abb6]/[0.02] transition-all duration-300 cursor-default"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────── Why Section ───────── */}
      <section id="why" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,171,182,0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <motion.div
            initial={initialState}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-[13px] font-semibold text-[#00abb6] tracking-widest uppercase mb-3">
              Why CodeCli
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-[32px] md:text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">
              为什么选择 CodeCli
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[17px] text-gray-500 max-w-[420px] mx-auto">
              构建开发者信赖的 AI 基础设施
            </motion.p>
          </motion.div>

          {/* Row 1: 3 cards */}
          <motion.div
            initial={initialState}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-5"
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: '高可用架构',
                desc: '采用分布式集群架构，承诺 99.9% 服务可用性，故障自动切换，确保业务不中断。',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: '隐私安全',
                desc: '严格的数据隐私保护协议，请求日志脱敏处理，不留存用户具体的代码内容。',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: '技术支持',
                desc: '提供详尽的开发文档和 7x12 小时技术客服，快速解决接入过程中的任何问题。',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="group bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-500 hover:border-[#00abb6]/25 hover:shadow-xl hover:shadow-[#00abb6]/[0.05]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00abb6]/10 to-[#00abb6]/[0.03] text-[#00abb6] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-[18px] font-bold mb-2.5 text-gray-900 tracking-tight">{item.title}</h4>
                <p className="text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2: 2 cards centered */}
          <motion.div
            initial={initialState}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="flex justify-center gap-5 mt-5"
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: '无缝迁移',
                desc: '完全兼容官方 SDK，只需修改 BaseURL 和 Key 即可无缝切换，无需改动业务代码。',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '成本可控',
                desc: '相比官方定价提供更具竞争力的汇率折算，结合预充值优惠，大幅降低研发成本。',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="group bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-500 hover:border-[#00abb6]/25 hover:shadow-xl hover:shadow-[#00abb6]/[0.05] w-full md:w-[calc(33.333%-6px)]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00abb6]/10 to-[#00abb6]/[0.03] text-[#00abb6] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="text-[18px] font-bold mb-2.5 text-gray-900 tracking-tight">{item.title}</h4>
                <p className="text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── CTA Banner ───────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00abb6] to-[#007a83]" />
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <motion.div
          initial={initialState}
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-[600px] mx-auto px-6 text-center relative z-10"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-[30px] md:text-[38px] font-extrabold text-white tracking-tight mb-5">
            准备好开始了吗？
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-white/70 text-[16px] mb-10 leading-relaxed">
            注册即可获得免费额度，几分钟内完成接入。
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/docs/service"
              className="inline-flex items-center gap-2 px-7 py-3 text-[15px] font-semibold rounded-full bg-white text-[#00919c] hover:bg-gray-50 transition-all duration-300 hover:shadow-xl"
            >
              免费试用
            </Link>
            <Link
              href="/docs/service"
              className="inline-flex items-center gap-2 px-7 py-3 text-[15px] font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              查看文档
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="bg-[#0c1117] text-gray-400 pt-20 pb-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-16 pb-16 border-b border-white/[0.06]">
            {/* Brand */}
            <div>
              <Link href="/" className="text-[22px] font-bold text-white mb-4 inline-flex items-center gap-2.5 tracking-tight">
                <Image src="/brand/logo.png" alt="CodeCli" width={22} height={22} />
                Code<span className="text-[#00abb6]">Cli</span>
              </Link>
              <p className="text-gray-500 leading-relaxed max-w-[380px] mt-4 text-[14px]">
                CodeCli 致力于为中国开发者提供稳定、高速、便捷的 AI 模型接口服务。连接全球智慧，赋能本土创新。
              </p>
            </div>

            {/* Usage Rules */}
            <div>
              <h4 className="text-[14px] font-semibold text-gray-300 mb-6 uppercase tracking-wider">使用须知</h4>
              <ul className="space-y-3.5">
                {['严禁用于违法违规用途', '请妥善保管 API Key', '遵守各大模型厂商的使用规范', '以学习 AI 编程为主要目的'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2.5 text-gray-500 text-[14px]">
                      <svg className="w-4 h-4 text-[#00abb6]/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[14px] font-semibold text-gray-300 mb-6 uppercase tracking-wider">联系我们</h4>
              <div className="bg-white/[0.04] border border-white/[0.06] p-5 rounded-2xl text-center">
                <div className="w-32 h-32 bg-white rounded-xl mx-auto mb-3 overflow-hidden flex items-center justify-center">
                  <Image src="/docs/assets/客服1.jpg" alt="客服微信" width={128} height={128} className="object-cover" />
                </div>
                <p className="text-gray-500 text-[13px]">扫码添加客服微信</p>
                <p className="text-[#00abb6]/80 text-[13px] mt-1.5 font-medium">备注: CodeCli</p>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center text-gray-600 text-[13px]">
            &copy; {new Date().getFullYear()} CodeCli Technology. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

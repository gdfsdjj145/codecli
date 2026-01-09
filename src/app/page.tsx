import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="h-20 bg-white/95 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Image src="/brand/logo.png" alt="CodeCli" width={28} height={28} />
            Code<span className="text-blue-600">Cli</span>
          </Link>
          <nav className="hidden md:flex gap-10">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">服务特点</a>
            <a href="#compare" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">优势对比</a>
            <a href="#why" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">为什么选择</a>
            <Link href="/docs/service" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">使用文档</Link>
          </nav>
          <Link
            href="/docs/service"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/20"
          >
            立即体验
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-center relative overflow-hidden">
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(37,99,235,0.03)_0%,transparent_70%)]" />
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent tracking-tight">
            专业的 Claude Code API 中转服务平台
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            基于官方 API 构建，让开发者以更合理的成本、更稳定的连接<br className="hidden md:block" />
            无缝使用全球领先的 AI 编程辅助工具。
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link
              href="/docs/service"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all hover:-translate-y-0.5"
            >
              免费试用
            </Link>
            <Link
              href="/docs/service"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/20"
            >
              查看文档
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">核心服务特点</h2>
          <p className="text-lg text-gray-600 text-center mb-16">为开发者量身打造的高效 API 解决方案</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 hover:border-blue-300 group">
              <div className="w-16 h-16 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center text-3xl mb-6 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">独享服务保障</h3>
              <p className="text-gray-600 leading-relaxed">采用企业级账号池隔离技术，确保每个 API Key 的调用独立互不干扰，极大降低封号风险，保障业务连续性。</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 hover:border-blue-300 group">
              <div className="w-16 h-16 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center text-3xl mb-6 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">全球极速响应</h3>
              <p className="text-gray-600 leading-relaxed">部署全球多节点加速网络，自动选择最优线路，显著降低 API 调用延迟，提供媲美官方直连的流畅体验。</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 hover:border-blue-300 group">
              <div className="w-16 h-16 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center text-3xl mb-6 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">灵活透明计费</h3>
              <p className="text-gray-600 leading-relaxed">拒绝隐形消费，支持按 Token 用量精准计费。提供多种套餐选择，实时监控额度消耗，每一分钱都花在刀刃上。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section id="compare" className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
            {/* Left: Table */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">适用人群与优势对比</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg mb-2 font-bold text-gray-900">
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
                  <div key={index} className="grid grid-cols-3 gap-4 py-6 border-b border-gray-100 last:border-b-0 items-center">
                    <div className="font-medium text-gray-900">{row.user}</div>
                    <div className="text-gray-400">{row.official}</div>
                    <div className="text-teal-600 font-medium flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {row.codecli}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Features & Languages */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <span className="text-blue-600">⚡</span> 完整功能支持
                </h3>
                <ul className="space-y-4">
                  {['支持 Claude 4.5 Opus/Sonnet 全系模型', '100% 兼容 OpenAI 接口格式', '支持 Function Calling 能力', '长文本 Context Window 无损传输'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <span className="text-blue-600">{"</>"}</span> 适配编程语言
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {['Python', 'JavaScript', 'Go', 'Java', 'Rust', 'C++', 'PHP', 'Swift'].map((lang) => (
                    <div key={lang} className="bg-white border border-gray-200 rounded-lg h-16 flex items-center justify-center text-gray-600 font-medium hover:border-blue-600 hover:text-blue-600 transition-all hover:-translate-y-0.5 cursor-default">
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">为什么选择 CodeCli</h2>
          <p className="text-lg text-gray-600 text-center mb-16">构建开发者信赖的 AI 基础设施</p>

          {/* Row 1: 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🖥️', title: '高可用架构', desc: '采用分布式集群架构，承诺 99.9% 服务可用性，故障自动切换，确保业务不中断。' },
              { icon: '🔒', title: '隐私安全', desc: '严格的数据隐私保护协议，请求日志脱敏处理，不留存用户具体的代码内容。' },
              { icon: '💬', title: '技术支持', desc: '提供详尽的开发文档和 7x12 小时技术客服，快速解决接入过程中的任何问题。' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-8 transition-all hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-5">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="flex justify-center gap-6 mt-6">
            {[
              { icon: '⚡', title: '无缝迁移', desc: '完全兼容官方 SDK，只需修改 BaseURL 和 Key 即可无缝切换，无需改动业务代码。' },
              { icon: '💰', title: '成本可控', desc: '相比官方定价提供更具竞争力的汇率折算，结合预充值优惠，大幅降低研发成本。' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-8 transition-all hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 w-full md:w-[450px]">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-5">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-20 pb-16 border-b border-gray-700">
            {/* Brand */}
            <div>
              <Link href="/" className="text-2xl font-bold text-white mb-6 inline-flex items-center gap-2">
                <Image src="/brand/logo.png" alt="CodeCli" width={24} height={24} />
                Code<span className="text-blue-500">Cli</span>
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-[400px] mt-4">
                CodeCli 致力于为中国开发者提供稳定、高速、便捷的 AI 模型接口服务。连接全球智慧，赋能本土创新。
              </p>
            </div>

            {/* Usage Rules */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">使用须知</h4>
              <ul className="space-y-3">
                {['严禁用于违法违规用途', '请妥善保管 API Key', '遵守各大模型厂商的使用规范', '以学习 AI 编程为主要目的'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-[15px]">
                    <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">联系我们</h4>
              <div className="bg-gray-800 p-6 rounded-xl text-center">
                <div className="w-36 h-36 bg-white rounded-lg mx-auto mb-4 overflow-hidden flex items-center justify-center">
                  <Image src="/docs/assets/客服1.jpg" alt="客服微信" width={136} height={136} className="object-cover" />
                </div>
                <p className="text-gray-400 text-sm">扫码添加客服微信</p>
                <p className="text-blue-400 text-sm mt-2">备注: CodeCli</p>
              </div>
            </div>
          </div>

          <div className="pt-10 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CodeCli Technology. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

import Link from 'next/link'
import { Hero } from '@/components/sections'
import { heroData } from '@/data/hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <Hero {...heroData} />

      {/* Core Expertise - Premium Cards */}
      <section className="relative py-32 bg-gradient-to-b from-black to-slate-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">What I Do</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">Core Expertise</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative p-10 bg-slate-900 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud & Infrastructure</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Architecting enterprise-scale cloud solutions on AWS, Azure, and GCP. Leading migrations, 
                  modernization programs, and building resilient, secure infrastructures.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Azure</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">GCP</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative p-10 bg-slate-900 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI & Data Platforms</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Building AI governance frameworks, foundation platforms, and central data ecosystems 
                  that drive data-driven decision-making and business intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">AI/ML</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Data</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Analytics</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative p-10 bg-slate-900 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Technology Leadership</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Leading cross-functional teams, managing $50M+ portfolios, and driving strategic 
                  initiatives that align technology with business outcomes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm">Strategy</span>
                  <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm">Teams</span>
                  <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm">Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights - Timeline */}
      <section className="relative py-32 bg-slate-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">Success Stories</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">Recent Highlights</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative pl-20">
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg shadow-blue-500/50"></div>
                <div className="group p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">AI Foundation Platform</h3>
                    <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold">Financial Services</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Architected and delivered comprehensive AI platform on AWS with thorough capability review, 
                    architecture design, and critical use case delivery that expedited SDLC processes and 
                    enabled enterprise-wide AI adoption.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-20">
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-purple-500 border-4 border-slate-950 shadow-lg shadow-purple-500/50"></div>
                <div className="group p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Central Data Platform</h3>
                    <span className="px-4 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-semibold">Gaming & Casino</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Delivered GCP-based data platform that significantly raised visibility into financial and 
                    operational metrics, enabling data-driven efficiencies and strategic decision-making 
                    across the enterprise.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-20">
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-pink-500 border-4 border-slate-950 shadow-lg shadow-pink-500/50"></div>
                <div className="group p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">AI Governance Framework</h3>
                    <span className="px-4 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm font-semibold">Fintech</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Established comprehensive AI governance framework for mid-sized Fintech, creating solid 
                    foundation for evaluating opportunities, risks, and buy/build processes while ensuring 
                    regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Let's Build Something Extraordinary</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to discuss cloud transformation, AI strategy, or technology leadership? 
            Let's connect and explore how we can drive your digital future.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10">Schedule a Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <a 
              href="https://www.linkedin.com/in/venu-gudipati" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

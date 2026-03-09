import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or markdown files
const blogPosts: Record<string, any> = {
  'ai-governance-framework': {
    title: 'Building an Effective AI Governance Framework',
    date: '2024-01-15',
    category: 'AI & ML',
    readTime: '8 min read',
    content: `
      <p>As organizations rapidly adopt AI technologies, establishing robust governance frameworks has become critical. Based on my experience implementing AI governance for financial services and fintech clients, here are the key components of an effective framework.</p>

      <h2>1. Define Clear AI Principles</h2>
      <p>Start with organizational principles that guide AI development and deployment:</p>
      <ul>
        <li>Transparency and explainability</li>
        <li>Fairness and bias mitigation</li>
        <li>Privacy and data protection</li>
        <li>Accountability and human oversight</li>
        <li>Security and robustness</li>
      </ul>

      <h2>2. Establish Governance Structure</h2>
      <p>Create a multi-tiered governance structure with clear roles and responsibilities:</p>
      <ul>
        <li><strong>AI Ethics Board:</strong> Executive-level oversight and strategic direction</li>
        <li><strong>AI Review Committee:</strong> Technical evaluation of AI systems</li>
        <li><strong>Domain Experts:</strong> Subject matter expertise for specific use cases</li>
        <li><strong>Compliance Team:</strong> Regulatory and legal compliance</li>
      </ul>

      <h2>3. Implement Risk Assessment Process</h2>
      <p>Develop a systematic approach to evaluate AI risks:</p>
      <ul>
        <li>Risk categorization (high, medium, low)</li>
        <li>Impact assessment on stakeholders</li>
        <li>Bias and fairness evaluation</li>
        <li>Security and privacy review</li>
        <li>Regulatory compliance check</li>
      </ul>

      <h2>4. Create Buy/Build Decision Framework</h2>
      <p>Establish criteria for evaluating AI solutions:</p>
      <ul>
        <li>Strategic alignment with business objectives</li>
        <li>Technical feasibility and scalability</li>
        <li>Cost-benefit analysis</li>
        <li>Vendor assessment (for buy decisions)</li>
        <li>Internal capability assessment (for build decisions)</li>
      </ul>

      <h2>5. Monitor and Audit</h2>
      <p>Implement ongoing monitoring and periodic audits:</p>
      <ul>
        <li>Performance metrics and KPIs</li>
        <li>Bias detection and mitigation</li>
        <li>Model drift monitoring</li>
        <li>Compliance audits</li>
        <li>Incident response procedures</li>
      </ul>

      <h2>Conclusion</h2>
      <p>An effective AI governance framework balances innovation with responsibility. It should be flexible enough to adapt to evolving technologies while maintaining strong ethical and compliance standards. The key is to start with clear principles, establish appropriate oversight, and continuously refine your approach based on learnings.</p>
    `
  },
  'cloud-migration-strategy': {
    title: 'Cloud Migration Strategy: Lessons from the Field',
    date: '2024-01-10',
    category: 'Cloud Architecture',
    readTime: '10 min read',
    content: `
      <p>Having led numerous cloud migration projects across financial services, I've learned that success depends on more than just technical execution. Here are key lessons from the field.</p>

      <h2>Start with Assessment</h2>
      <p>Before migrating anything, conduct a thorough assessment of your current state...</p>
      
      <p><em>Full article content would go here...</em></p>
    `
  },
  'data-platform-modernization': {
    title: 'Modernizing Data Platforms for the AI Era',
    date: '2024-01-05',
    category: 'Data Engineering',
    readTime: '12 min read',
    content: `
      <p>Modern data platforms must support both traditional analytics and emerging AI/ML workloads. Here's how to build platforms that enable data-driven innovation.</p>

      <h2>Key Architecture Principles</h2>
      <p>Design your data platform with these principles in mind...</p>
      
      <p><em>Full article content would go here...</em></p>
    `
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <article className="container mx-auto px-6 max-w-4xl">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to Blog
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
            <span className="text-gray-500">• {post.readTime}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Written by</p>
                <p className="font-bold text-gray-900">Venu Gudipati</p>
                <p className="text-sm text-gray-600">Managing Director, Cloud, Data & AI at PwC</p>
              </div>
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

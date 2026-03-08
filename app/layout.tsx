import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils"
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

// Inter for body text
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Playfair Display for headings
const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://venugudipati.com'),
  title: 'Venu Gudipati | Cloud, Data & AI Executive',
  description: 'Technology executive with 22+ years driving enterprise digital transformation, cloud modernization, and AI-driven innovation.',
  keywords: ['Cloud Architecture', 'AI', 'Data Platforms', 'Technology Leadership', 'AWS', 'Azure', 'GCP'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://venugudipati.com',
    siteName: 'Venu Gudipati Portfolio',
    title: 'Venu Gudipati | Cloud, Data & AI Executive',
    description: 'Technology executive with 22+ years driving enterprise digital transformation, cloud modernization, and AI-driven innovation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venu Gudipati | Cloud, Data & AI Executive',
    description: 'Technology executive with 22+ years driving enterprise digital transformation.',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Venu Gudipati',
  jobTitle: 'Managing Director, Cloud, Data & AI',
  worksFor: {
    '@type': 'Organization',
    name: 'PwC Canada',
  },
  url: 'https://venugudipati.com',
  sameAs: [
    'https://www.linkedin.com/in/venu-gudipati',
    'https://github.com/venugudipati',
  ],
  knowsAbout: [
    'Cloud Architecture',
    'Artificial Intelligence',
    'Data Platforms',
    'Digital Transformation',
    'Technology Leadership',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Venu Gudipati Portfolio',
  url: 'https://venugudipati.com',
  description: 'Professional portfolio of Venu Gudipati, technology executive specializing in cloud, data, and AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, playfairDisplay.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Christopher Baughman',
    default:
      'Christopher Baughman - Software developer, music aficionado, amateur astrophysicist',
  },
  description:
    'I\'m Chris, a software developer based in Harrisburg. I\'m a senior software developer with 20+ years of experience building and optimizing enterprise web applications. I specialize in creating robust, high-performance solutions with a focus on front-end excellence (responsive design, mobile optimization, accessibility, and SEO).  My expertise extends to database administration, system administration (Unix/Linux/Windows), and even custom Linux kernel development.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <SpeedInsights/>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TindaMo Blog - Community Stories & Trading Tips 🇵🇭',
  description:
    'Discover real stories from our Filipino trading community, learn trading strategies, and get inspired by creative bartering ideas on TindaMo.',
  twitter: {
    images: {
      url: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/blog/tindamo-blog.png`,
      alt: 'TindaMo Blog - Community Stories & Trading Tips 🇵🇭',
      type: 'image/png',
      width: 300,
      height: 300
    }
  },
  openGraph: {
    title: 'TindaMo Blog - Community Stories & Trading Tips 🇵🇭',
    images: {
      url: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/blog/tindamo-blog.png`,
      alt: 'TindaMo Blog - Community Stories & Trading Tips 🇵🇭',
      type: 'image/png',
      width: 300,
      height: 300
    },
    siteName: 'TindaMo Blog - Community Stories & Trading Tips 🇵🇭',
    description:
      'Discover real stories from our Filipino trading community, learn trading strategies, and get inspired by creative bartering ideas on TindaMo.'
  }
}

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}

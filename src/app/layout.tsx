import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const title = 'TindaMo - Local Buy, Sell & Barter App 🇵🇭'
const description =
  'Discover, trade, and bid on items and services in your neighborhood with TindaMo – the hyper-local, hassle-free marketplace.'
const alt = 'TindaMo - Local Buy, Sell & Barter App 🇵🇭'

export const metadata: Metadata = {
  title: title,
  description: description,
  twitter: {
    images: {
      url: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/logo-seo.png`,
      alt: alt,
      type: 'image/png',
      width: 300,
      height: 300
    }
  },
  openGraph: {
    title: title,
    images: {
      url: `${process.env.NEXT_PUBLIC_R2_FILES_URL}/images/logo-seo.png`,
      alt: alt,
      type: 'image/png',
      width: 300,
      height: 300
    },
    siteName: title,
    description: description
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

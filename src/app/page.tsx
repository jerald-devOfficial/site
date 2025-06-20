import BlogFaq from '@/components/blog-faq'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Listings from '@/components/listings'
import Onboarding from '@/components/onboarding'
import Safety from '@/components/safety'
import TrustSafety from '@/components/trust-safety'
import WaitlistSection from '@/components/waitlist-section'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-[#F9FAFB] text-[#222] font-sans'>
      <Header />
      <main className='flex-1 flex flex-col gap-12'>
        <Hero />
        <WaitlistSection />
        <Onboarding />
        <TrustSafety />
        <Features />
        <Listings />
        <BlogFaq />
        <Safety />
      </main>
      <Footer />
    </div>
  )
}

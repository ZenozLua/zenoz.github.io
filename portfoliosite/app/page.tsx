import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CodeShowcase } from '@/components/code-showcase'
import { Marquee } from '@/components/marquee'
import { Services } from '@/components/services'
import { Stats } from '@/components/stats'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { ContactCta } from '@/components/contact-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <CodeShowcase />
        <Marquee />
        <Services />
        <Stats />
        <Pricing />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}

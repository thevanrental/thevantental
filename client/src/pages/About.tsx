import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSEO } from '../hooks/useSEO'

export function About() {
  const { t } = useTranslation()

  useSEO({
    title: 'About Us | The Van Rental — Gavriloff LLC',
    description: 'The Van Rental by Gavriloff LLC. Premium vehicle rentals for film crews, event producers, and business travelers in Southern California.',
    canonical: 'https://www.thevanrental.com/about',
  })

  const stats = t('about.stats', { returnObjects: true }) as { num: string; label: string; desc: string }[]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-8 leading-tight">
                {t('about.h1a')}<br />{t('about.h1b')}
              </h1>
            </div>
            <div className="pt-4">
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-6">
                {t('about.p1')}
              </p>
              <p className="text-zinc-500 font-light leading-relaxed mb-6">
                {t('about.p2')}
              </p>
              <p className="text-zinc-500 font-light leading-relaxed">
                {t('about.p3')}
              </p>
            </div>
          </div>

          <div className="aspect-video bg-zinc-50 overflow-hidden mb-24">
            <img src="/images/we.jpeg" alt="The Van Rental team" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="border-t border-zinc-200 pt-8">
                <div className="text-5xl font-medium tracking-tight mb-3">{stat.num}</div>
                <div className="font-medium mb-2">{stat.label}</div>
                <div className="text-zinc-500 font-light text-sm leading-relaxed">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-medium px-8 h-12 hover:bg-zinc-800 transition-colors group">
              {t('about.getInTouch')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              {t('about.viewFleet')}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

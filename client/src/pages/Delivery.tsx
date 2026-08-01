import { Link } from 'react-router-dom'
import { ArrowRight, Plane, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'
import { AIRPORTS } from '../data/airports'
import { CITIES } from '../data/cities'

export function Delivery() {
  const { t } = useTranslation()

  useSEO({
    title: 'Where We Deliver — Airports & Cities | The Van Rental',
    description: 'The Van Rental delivers Mercedes vans, GLC & GLB SUVs, and Highlander Hybrids across Southern California — including LAX, ONT, SNA, and LGB airports, plus 19 cities in LA, Orange County, and the Inland Empire.',
    canonical: 'https://www.thevanrental.com/delivery',
  })

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />

      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">{t('delivery.eyebrow')}</div>
          <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-6">{t('delivery.h1')}</h1>
          <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
            {t('delivery.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-10">{t('delivery.airports.h2')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AIRPORTS.map((airport) => (
              <Link
                key={airport.slug}
                to={`/airport-${airport.slug}`}
                className="group bg-white border border-zinc-200 p-8 hover:border-zinc-400 transition-colors"
              >
                <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6">
                  <Plane className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-1">{airport.city}</div>
                <h3 className="text-2xl font-medium mb-4">{airport.code}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  {t('delivery.airports.viewDelivery')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-10">{t('delivery.cities.h2')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                to={`/van-rental-${city.slug}`}
                className="group flex items-center justify-between gap-3 border border-zinc-200 px-6 py-4 hover:border-zinc-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span className="font-medium">{city.name}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

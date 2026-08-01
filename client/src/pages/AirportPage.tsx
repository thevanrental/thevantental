import { Link } from 'react-router-dom'
import { ArrowRight, Plane, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'
import { Airport } from '../data/airports'

export function AirportPage({ airport }: { airport: Airport }) {
  const { t } = useTranslation()

  useSEO({
    title: `${airport.code} Airport Van Rental Delivery | The Van Rental`,
    description: `We deliver Mercedes Cargo Vans, Crew Vans, GLC & GLB SUVs, and Highlander Hybrids directly to ${airport.name} (${airport.code}). No counters, no shuttles — book on Turo and drive.`,
    canonical: `https://www.thevanrental.com/airport-${airport.slug}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AutoRental',
      name: `The Van Rental — ${airport.code} Airport Delivery`,
      url: `https://www.thevanrental.com/airport-${airport.slug}`,
      telephone: '+13236107634',
      email: 'info@thevanrental.com',
      areaServed: {
        '@type': 'Airport',
        name: airport.name,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '50',
        bestRating: '5',
      },
    },
  })

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />

      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-zinc-400 border border-zinc-200 px-3 py-1.5 w-fit">
              <Plane className="w-3.5 h-3.5" /> {airport.code} &middot; {airport.city}
            </div>
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tighter leading-[1.05]">
              {t('airportPage.h1a')}<br />
              <span className="text-zinc-400">{t('airportPage.h1bTpl', { code: airport.code })}</span>
            </h1>
            <p className="text-xl text-zinc-500 font-light max-w-md leading-relaxed">
              {t('airportPage.subtitleTpl', { name: airport.name })}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link to="/vans" className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors h-14 px-8 text-base font-medium flex items-center">
                {t('airportPage.viewFleet')}
              </Link>
              <a href="tel:+13236107634" className="border border-zinc-200 hover:border-zinc-400 transition-colors h-14 px-8 text-base font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" /> (323) 610-7634
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] bg-zinc-50 w-full overflow-hidden">
              <img
                src={airport.heroImage}
                alt={`Vehicle available for delivery at ${airport.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">
            {t('airportPage.deliveryEyebrowTpl', { code: airport.code })}
          </div>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">
            {t('airportPage.builtForTpl', { name: airport.name })}
          </h2>
          <p className="text-zinc-500 font-light text-lg leading-relaxed mb-6">
            {airport.blurb}
          </p>
          <p className="text-zinc-500 font-light text-lg leading-relaxed mb-6">
            {t('airportPage.coordinateNote')}
          </p>
          <p className="text-zinc-500 font-light text-lg leading-relaxed">
            {airport.shuttleNote}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-12">
            {t('airportPage.availableH2Tpl', { code: airport.code })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/vans" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('airportPage.vansCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('airportPage.vansCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('airportPage.vansCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('airportPage.vansCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link to="/suvs" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('airportPage.suvsCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('airportPage.suvsCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('airportPage.suvsCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('airportPage.suvsCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link to="/hybrid" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('airportPage.hybridCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('airportPage.hybridCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('airportPage.hybridCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('airportPage.hybridCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

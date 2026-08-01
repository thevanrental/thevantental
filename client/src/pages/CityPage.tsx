import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'
import { City } from '../data/cities'

export function CityPage({ city }: { city: City }) {
  const { t } = useTranslation()

  useSEO({
    title: `Van Rental in ${city.name}, CA | Mercedes Vans, GLC & Highlander | The Van Rental`,
    description: `Rent a Mercedes Cargo Van, Crew Van, GLC SUV, or Highlander Hybrid in ${city.name}. Serving ${city.useCase} near ${city.landmark}. Delivery available near ${city.nearestAirport}.`,
    canonical: `https://www.thevanrental.com/van-rental-${city.slug}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AutoRental',
      name: `The Van Rental — ${city.name}`,
      url: `https://www.thevanrental.com/van-rental-${city.slug}`,
      telephone: '+13236107634',
      email: 'info@thevanrental.com',
      areaServed: {
        '@type': 'City',
        name: city.name,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressRegion: 'CA',
        addressCountry: 'US',
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
              <MapPin className="w-3.5 h-3.5" /> {city.name}, {city.region}
            </div>
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tighter leading-[1.05]">
              {t('cityPage.h1a')}<br />
              <span className="text-zinc-400">{city.name}, CA.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-light max-w-md leading-relaxed">
              {t('cityPage.subtitleTpl', { useCase: city.useCase, name: city.name, landmark: city.landmark })}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link to="/vans" className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors h-14 px-8 text-base font-medium flex items-center">
                {t('cityPage.viewFleet')}
              </Link>
              <a href="tel:+13236107634" className="border border-zinc-200 hover:border-zinc-400 transition-colors h-14 px-8 text-base font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" /> (323) 610-7634
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] bg-zinc-50 w-full overflow-hidden">
              <img
                src={city.heroImage}
                alt={`Vehicle rental fleet available in ${city.name}, CA`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">
            {t('cityPage.localEyebrowTpl', { name: city.name })}
          </div>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">
            {t('cityPage.localH2Tpl', { name: city.name })}
          </h2>
          <p className="text-zinc-500 font-light text-lg leading-relaxed mb-6">
            {city.blurb}
          </p>
          <p className="text-zinc-500 font-light text-lg leading-relaxed">
            {t('cityPage.nearestAirportTpl', { airport: city.nearestAirport, name: city.name })}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-12">
            {t('cityPage.availableH2Tpl', { name: city.name })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/vans" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('cityPage.vansCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('cityPage.vansCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('cityPage.vansCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('cityPage.vansCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link to="/suvs" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('cityPage.suvsCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('cityPage.suvsCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('cityPage.suvsCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('cityPage.suvsCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link to="/hybrid" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('cityPage.hybridCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('cityPage.hybridCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('cityPage.hybridCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('cityPage.hybridCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

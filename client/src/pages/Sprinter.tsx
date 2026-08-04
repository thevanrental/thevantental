import { Link } from 'react-router-dom'
import { ArrowRight, Users, Fuel, Package } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

export function Sprinter() {
  const { t } = useTranslation()

  useSEO({
    title: 'Mercedes Sprinter Van Rental Southern California | 9 Passenger',
    description: 'Rent a Mercedes-Benz Sprinter 9-passenger van in Southern California. Airport delivery, room for luggage and gear, and direct booking on Turo.',
    canonical: 'https://www.thevanrental.com/sprinter',
  })

  const features = [
    { icon: Users, label: t('home.sprinter.tag1') },
    { icon: Fuel, label: t('home.sprinter.tag2') },
    { icon: Package, label: t('home.sprinter.tag3') },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />

      {/* Hero */}
      <section className="pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase bg-zinc-900 text-white px-3 py-1.5 w-fit mb-8">
            {t('home.sprinter.badge')}
          </div>
          <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] mb-6">
            {t('home.sprinter.h2a')}<br />
            <span className="text-zinc-400">{t('home.sprinter.h2b')}</span>
          </h1>
          <p className="text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
            {t('home.sprinter.desc')}
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://turo.com/us/en/van-rental/united-states/brea-ca/mercedes-benz/sprinter-crew/3043514"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors h-14 px-8 text-base font-medium group"
            >
              Check availability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
              <img
                src="/images/sprinter-exterior.png"
                alt="Black Mercedes-Benz Sprinter 9-passenger van exterior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
              <img
                src="/images/sprinter-interior.jpeg"
                alt="Mercedes-Benz Sprinter interior — 9 passenger seats"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">Rental details</p>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-12">Mercedes Sprinter rental questions</h2>
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {[
              ['How many passengers does this Sprinter seat?', 'This Mercedes-Benz Sprinter is configured for up to 9 passengers, with room for luggage and production or adventure gear.'],
              ['Where is delivery available?', 'Delivery is available throughout Southern California, including Los Angeles, Orange County, LAX, SNA, LGB, and ONT. Availability and delivery fees vary by trip.'],
              ['Can I use it for airport transportation?', 'Yes. The passenger and cargo layout works well for airport groups carrying multiple suitcases. Arrange the delivery location when booking.'],
              ['How do I reserve the van?', 'Use the Check availability button to view live dates, trip pricing, protection options, and complete a secure reservation through Turo.'],
            ].map(([question, answer]) => (
              <div key={question} className="py-7">
                <h3 className="font-medium text-lg mb-2">{question}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + description */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">
                {t('home.sprinter.usecaseTitle')}
              </h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed mb-8">
                {t('home.sprinter.usecaseDesc')}
              </p>
              <p className="text-zinc-500 font-light leading-relaxed">
                {t('sprinter.extraDesc')}
              </p>
            </div>

            <div className="flex flex-col gap-px bg-zinc-100">
              {[
                { label: t('sprinter.spec.config'), value: t('sprinter.spec.configVal') },
                { label: t('sprinter.spec.engine'), value: t('sprinter.spec.engineVal') },
                { label: t('sprinter.spec.cargo'), value: t('sprinter.spec.cargoVal') },
                { label: t('sprinter.spec.color'), value: t('sprinter.spec.colorVal') },
                { label: t('sprinter.spec.delivery'), value: t('sprinter.spec.deliveryVal') },
              ].map(s => (
                <div key={s.label} className="bg-white px-6 py-5 flex justify-between items-center gap-4">
                  <div className="text-xs font-medium tracking-widest uppercase text-zinc-400">{s.label}</div>
                  <div className="font-medium text-right">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature tags */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {features.map((f, i) => (
              <div key={i} className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-6 py-4 text-sm font-medium">
                <f.icon className="w-4 h-4 text-zinc-400" />
                {f.label}
              </div>
            ))}
            <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-6 py-4 text-sm font-medium">
              <Package className="w-4 h-4 text-zinc-400" />
              {t('home.sprinter.tag4')}
            </div>
            <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-6 py-4 text-sm font-medium">
              <ArrowRight className="w-4 h-4 text-zinc-400" />
              {t('home.sprinter.tag5')}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            {t('sprinter.cta.h2')}
          </h2>
          <p className="text-zinc-400 font-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            {t('sprinter.cta.desc')}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://turo.com/us/en/van-rental/united-states/brea-ca/mercedes-benz/sprinter-crew/3043514"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors h-14 px-10 text-base font-medium group"
            >
              {t('home.sprinter.bookBtn')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/vans"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 transition-colors h-14 px-10 text-base font-medium"
            >
              {t('common.viewFleet')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

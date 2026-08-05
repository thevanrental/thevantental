import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, MapPin, Truck, Users, Fuel, Package, CarFront, BarChart3, KeyRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'
import { CITIES } from '../data/cities'

export function Home() {
  const { t } = useTranslation()

  useSEO({
    title: 'The Van Rental — Premium Vehicle Rentals in Southern California',
    description: 'Mercedes-Benz Sprinter 9-passenger van, cargo vans, crew vans, GLC SUVs, Highlander hybrid, Silverado 1500. Diesel fleet for film crews, groups, e-bikes, kayaks & executive travel in Southern California.',
    canonical: 'https://www.thevanrental.com/',
  })

  const vans = [
    {
      tag: t('home.vans.cargo.tag'),
      type: t('home.vans.cargo.type'),
      desc: t('home.vans.cargo.desc'),
      specs: t('home.vans.cargo.specs', { returnObjects: true }) as string[],
      badge: '',
      img: '/images/cargo.jpeg',
    },
    {
      tag: t('home.vans.crew.tag'),
      type: t('home.vans.crew.type'),
      desc: t('home.vans.crew.desc'),
      specs: t('home.vans.crew.specs', { returnObjects: true }) as string[],
      badge: t('home.vans.crew.badge'),
      img: '/images/crew.jpeg',
    },
  ]

  const silveradoSpecs = t('home.silverado.specs', { returnObjects: true }) as string[]

  const airports = [
    { code: 'LAX', name: 'Los Angeles International', slug: 'lax' },
    { code: 'SNA', name: 'John Wayne Airport', slug: 'sna' },
    { code: 'ONT', name: 'Ontario International', slug: 'ont' },
    { code: 'LGB', name: 'Long Beach Airport', slug: 'lgb' },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />

      {/* Hero */}
      <section className="pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-zinc-400 border border-zinc-200 px-3 py-1.5 w-fit">
              {t('home.hero.location')}
            </div>
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05]">
              {t('home.hero.h1a')}<br />
              <span className="text-zinc-400">{t('home.hero.h1b')}</span>
            </h1>
            <p className="text-xl text-zinc-500 font-light max-w-md leading-relaxed">
              {t('home.hero.desc')}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link to="/vans" className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors h-14 px-8 text-base font-medium flex items-center">
                {t('common.viewFleet')}
              </Link>
              <Link to="/trucks" className="border border-zinc-200 hover:border-zinc-400 transition-colors h-14 px-8 text-base font-medium flex items-center gap-2">
                <Truck className="w-4 h-4" /> {t('home.hero.silveradoBtn')}
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] bg-zinc-50 w-full overflow-hidden">
              <img
                src="/images/hero.jpeg"
                alt="Premium vehicle fleet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle management — owner acquisition */}
      <section className="relative overflow-hidden bg-zinc-950 text-white border-y border-zinc-800">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border-[64px] border-zinc-800/70" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-300 border border-zinc-700 px-3 py-2 mb-7">
                <CarFront className="w-4 h-4" /> For Southern California car owners
              </div>
              <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] mb-7">
                Your car.<br />
                <span className="text-zinc-500">Our full-service Turo management.</span>
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mb-10">
                Put an underused vehicle to work without handling the daily grind. We manage the listing, pricing, guests, handoffs, cleaning, and trip operations — while you keep visibility into performance and earnings.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@thevanrental.com?subject=Vehicle%20management%20for%20Turo"
                  className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors h-14 px-8 text-base font-medium group"
                >
                  Tell us about your car <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:info@thevanrental.com?subject=Vehicle%20management%20questions"
                  className="inline-flex items-center h-14 px-8 border border-zinc-700 hover:border-zinc-400 transition-colors text-base font-medium"
                >
                  Ask how revenue sharing works
                </a>
              </div>
            </div>

            <div className="bg-white text-zinc-950 p-8 lg:p-10 shadow-2xl">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-8">Hands-off hosting</div>
              <div className="space-y-7">
                {[
                  { icon: KeyRound, title: 'We run the operation', desc: 'Listing setup, guest communication, check-in and return coordination, cleaning, and day-to-day trip support.' },
                  { icon: BarChart3, title: 'Transparent performance', desc: 'Track bookings and earnings with clear reporting. Revenue-share terms are agreed before your vehicle goes live.' },
                  { icon: CarFront, title: 'Built around your vehicle', desc: 'We review eligibility, condition, location, availability, and earning potential before accepting a car.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-5 pb-7 border-b border-zinc-200 last:border-0 last:pb-0">
                    <div className="w-11 h-11 flex-shrink-0 bg-zinc-950 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">{title}</h3>
                      <p className="text-zinc-500 font-light text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed mt-8">
                Earnings vary by vehicle, availability, pricing, demand, seasonality, mileage, and expenses. Turo cites approximately $634/month as an average owner share in its passive-income program; this is not a guarantee. Direct co-host payment availability is subject to Turo rollout and account eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sprinter 9-passenger — featured strip */}
      <section className="py-0 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[540px]">

            <div className="relative overflow-hidden bg-zinc-900 order-2 lg:order-1">
              <img
                src="/images/sprinter-exterior.png"
                alt="Mercedes-Benz Sprinter 9-passenger black van"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 to-transparent" />
            </div>

            <div className="flex flex-col justify-center px-12 py-16 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase bg-zinc-900 text-white px-3 py-1.5 w-fit mb-6">
                {t('home.sprinter.badge')}
              </div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-3">{t('home.sprinter.eyebrow')}</div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter leading-tight mb-6">
                {t('home.sprinter.h2a')}<br />
                <span className="text-zinc-400">{t('home.sprinter.h2b')}</span>
              </h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed mb-6">
                {t('home.sprinter.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {(['tag1','tag2','tag3','tag4','tag5'] as const).map(k => (
                  <span key={k} className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 border border-zinc-200 px-3 py-1.5">
                    {k === 'tag1' && <Users className="w-3 h-3" />}
                    {k === 'tag2' && <Fuel className="w-3 h-3" />}
                    {k === 'tag3' && <Package className="w-3 h-3" />}
                    {t(`home.sprinter.${k}`)}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/sprinter"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors h-12 px-8 text-sm font-medium group"
                >
                  {t('common.learnMore')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://turo.com/us/en/van-rental/united-states/brea-ca/mercedes-benz/sprinter-crew/3043514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-200 hover:border-zinc-400 transition-colors h-12 px-8 text-sm font-medium"
                >
                  {t('home.sprinter.bookBtn')}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mercedes Vans — dark section */}
      <section className="py-28 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-6">{t('home.vans.eyebrow')}</div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8 leading-tight">
                {t('home.vans.h2a')}<br />{t('home.vans.h2b')}<br />{t('home.vans.h2c')}
              </h2>
              <p className="text-zinc-400 font-light text-lg leading-relaxed mb-12">
                {t('home.vans.desc')}
              </p>
              <Link to="/vans" className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors h-12 px-8 text-sm font-medium group">
                {t('home.vans.exploreBtn')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              {vans.map((van, i) => (
                <Link key={i} to="/vans" className="border border-zinc-800 p-8 relative group hover:border-zinc-600 transition-colors block">
                  {van.badge && (
                    <div className="absolute top-4 right-4 text-[10px] font-medium tracking-widest uppercase text-zinc-500 border border-zinc-700 px-2 py-1">
                      {van.badge}
                    </div>
                  )}
                  <div className="flex gap-6 mb-6">
                    <img src={van.img} alt={van.type} className="w-28 h-20 object-cover flex-shrink-0 opacity-70" />
                    <div>
                      <div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-1">{van.tag}</div>
                      <h3 className="text-2xl font-medium">{van.type}</h3>
                    </div>
                  </div>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed mb-5">{van.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {van.specs.map((s, j) => (
                      <span key={j} className="text-xs text-zinc-500 border border-zinc-800 px-3 py-1">{s}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">{t('extras.eyebrow')}</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4">{t('extras.h2')}</h2>
              <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">{t('extras.desc')}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {([
              { key: 'sup',      img: '/images/extra-sup.jpg'      },
              { key: 'starlink', img: '/images/extra-starlink.jpg' },
              { key: 'cooler',   img: '/images/extra-cooler.jpg'   },
              { key: 'ebike',    img: '/images/extra-ebike.jpg'    },
            ] as const).map(({ key, img }) => (
              <div key={key} className="bg-white border border-zinc-100 overflow-hidden hover:border-zinc-300 transition-colors group">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-50">
                  <img src={img} alt={t(`extras.${key}.name`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-medium tracking-widest uppercase text-zinc-400 mb-2">
                    {t(`extras.${key}.tag`)}
                  </div>
                  <div className="font-medium mb-2">{t(`extras.${key}.name`)}</div>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">{t(`extras.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silverado featured strip */}
      <section className="py-0 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

            <div className="relative overflow-hidden bg-zinc-100 order-2 lg:order-1">
              <img
                src="/images/silverado.jpeg"
                alt="2022 Chevrolet Silverado 1500 LTZ"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/20" />
            </div>

            <div className="flex flex-col justify-center px-12 py-16 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase bg-zinc-900 text-white px-3 py-1.5 w-fit mb-6">
                {t('home.silverado.badge')}
              </div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-3">{t('home.silverado.eyebrow')}</div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter leading-tight mb-6">
                {t('home.silverado.h2a')}<br />
                <span className="text-zinc-400">{t('home.silverado.h2b')}</span>
              </h2>
              <p className="text-zinc-500 font-light text-lg leading-relaxed mb-4">
                {t('home.silverado.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {silveradoSpecs.map((s) => (
                  <span key={s} className="text-xs font-medium text-zinc-500 border border-zinc-200 px-3 py-1.5">{s}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/trucks"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors h-12 px-8 text-sm font-medium group"
                >
                  {t('home.silverado.seeBtn')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://turo.com/us/en/truck-rental/united-states/brea-ca/chevrolet/silverado-1500/3689421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-200 hover:border-zinc-400 transition-colors h-12 px-8 text-sm font-medium"
                >
                  {t('home.silverado.bookBtn')}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Fleet */}
      <section className="py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4">{t('home.fleet.h2')}</h2>
              <p className="text-zinc-500 font-light text-lg max-w-md">
                {t('home.fleet.desc')}
              </p>
            </div>
            <Link to="/delivery" className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
              {t('home.fleet.whereDeliver')} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Silverado — dark card */}
            <Link to="/trucks" className="group bg-zinc-900 text-white p-8 block relative">
              <div className="absolute top-4 right-4 text-[10px] font-medium tracking-widest uppercase text-zinc-400 border border-zinc-700 px-2 py-1">
                {t('home.fleet.silverado.badge')}
              </div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-2">{t('home.fleet.silverado.eyebrow')}</div>
              <h3 className="text-3xl font-medium tracking-tight mb-4">{t('home.fleet.silverado.h3')}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
                {t('home.fleet.silverado.desc')}
              </p>
              <div className="aspect-video overflow-hidden mb-6 bg-zinc-800">
                <img src="/images/silverado2.jpeg" alt="Chevrolet Silverado 1500 LTZ" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('home.fleet.silverado.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/suvs" className="group bg-white border border-zinc-200 p-8 block">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('home.fleet.glc.eyebrow')}</div>
              <h3 className="text-3xl font-medium tracking-tight mb-4">{t('home.fleet.glc.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-8">
                {t('home.fleet.glc.desc')}
              </p>
              <div className="aspect-video overflow-hidden mb-6 bg-zinc-100">
                <img src="/images/glcb.jpeg" alt="Mercedes GLC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 group-hover:gap-3 transition-all">
                {t('home.fleet.glc.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/hybrid" className="group bg-white border border-zinc-200 p-8 block">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('home.fleet.highlander.eyebrow')}</div>
              <h3 className="text-3xl font-medium tracking-tight mb-4">{t('home.fleet.highlander.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-8">
                {t('home.fleet.highlander.desc')}
              </p>
              <div className="aspect-video overflow-hidden mb-6 bg-zinc-50">
                <img src="/images/highlander.jpeg" alt="Toyota Highlander" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 group-hover:gap-3 transition-all">
                {t('home.fleet.highlander.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* Airport Delivery */}
      <section className="py-28 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8">
                {t('home.airports.h2a')}<br />{t('home.airports.h2b')}
              </h2>
              <p className="text-xl text-zinc-500 font-light mb-12">
                {t('home.airports.desc')}
              </p>
              <div className="space-y-0">
                {airports.map((a, i) => (
                  <Link
                    key={i}
                    to={`/airport-${a.slug}`}
                    className="flex items-center gap-6 py-5 border-b border-zinc-100 last:border-0 group hover:bg-zinc-50 transition-colors -mx-2 px-2"
                  >
                    <div className="w-14 h-14 bg-zinc-50 flex items-center justify-center text-xs font-medium tracking-widest text-zinc-400 flex-shrink-0">
                      {a.code}
                    </div>
                    <div className="font-medium flex-1">{a.name}</div>
                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-zinc-50 relative p-12 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
              <MapPin className="w-12 h-12 text-zinc-300" strokeWidth={1} />
              <div className="relative z-10">
                <div className="text-xs font-medium tracking-widest uppercase mb-4 text-zinc-400">{t('home.airports.process.eyebrow')}</div>
                <h3 className="text-3xl font-medium tracking-tight mb-4">{t('home.airports.process.h3')}</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  {t('home.airports.process.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4">{t('home.cities.h2')}</h2>
            <p className="text-zinc-500 font-light text-lg max-w-md">
              {t('home.cities.desc')}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                to={`/van-rental-${city.slug}`}
                className="group bg-white border border-zinc-200 hover:border-zinc-400 transition-colors p-6 flex items-center justify-between"
              >
                <span className="font-medium">{city.name}</span>
                <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

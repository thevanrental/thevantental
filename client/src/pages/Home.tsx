import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, MapPin, CarFront, BarChart3, KeyRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'
import { CITIES } from '../data/cities'

export function Home() {
  const { t } = useTranslation()

  useSEO({
    title: 'The Van Rental — Premium Vehicle Rentals in Southern California',
    description: 'Mercedes-Benz GLC and GLE premium SUV rentals for airport arrivals, executive travel, family weekends, and Southern California drives.',
    canonical: 'https://www.thevanrental.com/',
  })

  const silveradoSpecs = t('home.silverado.specs', { returnObjects: true }) as string[]

  const airports = [
    { code: 'LAX', name: 'Los Angeles International', slug: 'lax' },
    { code: 'SNA', name: 'John Wayne Airport', slug: 'sna' },
    { code: 'ONT', name: 'Ontario International', slug: 'ont' },
    { code: 'LGB', name: 'Long Beach Airport', slug: 'lgb' },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav overlay />

      {/* Hero */}
      <section className="relative min-h-[92svh] lg:min-h-screen overflow-hidden bg-zinc-950 text-white flex items-end">
        <img
          src="/images/gle-front.jpg"
          alt="2022 Mercedes-Benz GLE 350 premium SUV in Southern California"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-28 pt-32 lg:pt-28">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/75 mb-7">
              {t('home.hero.location')}
            </div>
            <h1 className="font-display text-[4.25rem] sm:text-7xl lg:text-[6.25rem] tracking-[-0.045em] leading-[0.84] mb-8">
              {t('home.hero.h1a')}<br />
              <span className="italic font-normal text-[#e7a77a]">{t('home.hero.h1b')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 font-light max-w-xl leading-relaxed mb-9">
              {t('home.hero.desc')}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/mercedes-gle" className="bg-[#df7748] text-white hover:bg-[#ca683c] transition-colors h-14 px-8 text-sm font-semibold tracking-wide uppercase flex items-center rounded-full">
                Explore the GLE 350
              </Link>
              <Link to="/suvs" className="border border-white/50 hover:border-white bg-black/10 hover:bg-white/10 transition-colors h-14 px-8 text-sm font-semibold tracking-wide uppercase flex items-center gap-2 rounded-full">
                Explore the GLC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-6 right-6 border-t border-white/20 py-5 flex items-center justify-between text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/65">
            <span>Mercedes-Benz GLE 350</span>
            <span className="hidden sm:block">GLC · GLE · Southern California</span>
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

      {/* Mercedes GLC — featured strip */}
      <section className="relative min-h-[78svh] overflow-hidden bg-zinc-950 text-white flex items-end">
            <div className="absolute inset-0 overflow-hidden bg-zinc-900">
              <img
                src="/images/glcb.jpeg"
                alt="Mercedes-Benz GLC premium SUV"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-16 lg:py-24">
              <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase border border-white/35 text-white px-4 py-2 w-fit mb-6">
                Premium SUV
              </div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white/55 mb-3">Mercedes-Benz GLC</div>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tight leading-[0.94] mb-6">
                GLC comfort.<br />
                <span className="italic text-[#e7a77a]">Made for the city.</span>
              </h2>
              <p className="text-white/75 font-light text-lg leading-relaxed mb-6">
                A refined, easy-to-place SUV for airport pickups, business travel, coastal weekends, and everyday Southern California driving.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Premium interior', 'Parking assistance', 'Executive travel', 'Airport delivery'].map(item => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75 border border-white/25 bg-black/15 px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/suvs"
                  className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-white/85 transition-colors h-12 px-8 text-sm font-semibold group rounded-full"
                >
                  Explore the GLC <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glc-class/3262667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white transition-colors h-12 px-8 text-sm font-medium rounded-full"
                >
                  Book on Turo
                </a>
              </div>
              </div>
            </div>
      </section>

      {/* Mercedes SUVs — dark section */}
      <section className="py-24 lg:py-32 bg-[#11100f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-6">Mercedes-Benz · GLC & GLE</div>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tight mb-8 leading-[0.94]">
                Two premium SUVs.<br />One effortless experience.
              </h2>
              <p className="text-zinc-400 font-light text-lg leading-relaxed mb-12">
                Choose the agile GLC for city travel or the roomier GLE 350 for longer drives. Both deliver composed Mercedes-Benz comfort.
              </p>
              <Link to="/suvs" className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors h-12 px-8 text-sm font-medium group">
                Explore Mercedes SUVs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { to: '/suvs', tag: 'Compact premium SUV', type: 'Mercedes-Benz GLC', desc: 'Refined comfort, confident road manners, and an airport-friendly size.', img: '/images/glcb1.jpeg' },
                { to: '/mercedes-gle', tag: 'Midsize premium SUV', type: 'Mercedes-Benz GLE 350', desc: 'More space for family weekends, executive trips, and longer California drives.', img: '/images/gle-rear.jpg' },
              ].map((vehicle) => (
                <Link key={vehicle.type} to={vehicle.to} className="relative min-h-[420px] overflow-hidden group block border border-white/10">
                  <img src={vehicle.img} alt={vehicle.type} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/55 mb-2">{vehicle.tag}</div>
                    <h3 className="font-display text-3xl mb-3">{vehicle.type}</h3>
                    <p className="text-white/65 font-light text-sm leading-relaxed mb-5">{vehicle.desc}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-24 lg:py-32 bg-[#11100f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-medium tracking-[0.22em] uppercase text-white/45 mb-6">{t('extras.eyebrow')}</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tight leading-[0.94] mb-5">{t('extras.h2')}</h2>
              <p className="text-xl text-white/55 font-light max-w-xl leading-relaxed">{t('extras.desc')}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {([
              { key: 'sup',      img: '/images/extra-sup.jpg'      },
              { key: 'starlink', img: '/images/extra-starlink.jpg' },
              { key: 'cooler',   img: '/images/extra-cooler.jpg'   },
              { key: 'ebike',    img: '/images/extra-ebike.jpg'    },
            ] as const).map(({ key, img }) => (
              <div key={key} className="relative min-h-[380px] overflow-hidden border border-white/10 group">
                <img src={img} alt={t(`extras.${key}.name`)} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-2">
                    {t(`extras.${key}.tag`)}
                  </div>
                  <div className="font-display text-3xl mb-2">{t(`extras.${key}.name`)}</div>
                  <p className="text-white/65 font-light text-sm leading-relaxed">{t(`extras.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silverado featured strip */}
      <section className="relative min-h-[82svh] overflow-hidden bg-zinc-950 text-white flex items-end">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/images/silverado.jpeg"
                alt="2022 Chevrolet Silverado 1500 LTZ"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-16 lg:py-24">
              <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase border border-white/35 px-4 py-2 w-fit mb-6">
                {t('home.silverado.badge')}
              </div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white/55 mb-3">{t('home.silverado.eyebrow')}</div>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tight leading-[0.94] mb-6">
                {t('home.silverado.h2a')}<br />
                <span className="italic text-[#e7a77a]">{t('home.silverado.h2b')}</span>
              </h2>
              <p className="text-white/70 font-light text-lg leading-relaxed mb-5 max-w-xl">
                {t('home.silverado.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {silveradoSpecs.map((s) => (
                  <span key={s} className="text-xs font-medium text-white/70 border border-white/25 bg-black/15 px-3 py-1.5">{s}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/trucks"
                  className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-white/85 transition-colors h-12 px-8 text-sm font-semibold group rounded-full"
                >
                  {t('home.silverado.seeBtn')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://turo.com/us/en/truck-rental/united-states/brea-ca/chevrolet/silverado-1500/3689421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white transition-colors h-12 px-8 text-sm font-medium rounded-full"
                >
                  {t('home.silverado.bookBtn')}
                </a>
              </div>
              </div>
            </div>
      </section>

      {/* Full Fleet */}
      <section className="py-24 lg:py-32 bg-[#e9e3dc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-zinc-500 mb-5">Mercedes-Benz · Toyota</div>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tight leading-[0.94] mb-5">{t('home.fleet.h2')}</h2>
              <p className="text-zinc-600 font-light text-lg max-w-md">
                {t('home.fleet.desc')}
              </p>
            </div>
            <Link to="/delivery" className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
              {t('home.fleet.whereDeliver')} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { to: '/mercedes-gle', eyebrow: 'Mercedes-Benz · New', name: 'GLE 350', desc: 'Midsize premium comfort, generous space, and refined technology for longer Southern California drives.', img: '/images/gle-front.jpg' },
              { to: '/suvs', eyebrow: t('home.fleet.glc.eyebrow'), name: t('home.fleet.glc.h3'), desc: t('home.fleet.glc.desc'), img: '/images/glcb1.jpeg' },
              { to: '/hybrid', eyebrow: t('home.fleet.highlander.eyebrow'), name: t('home.fleet.highlander.h3'), desc: t('home.fleet.highlander.desc'), img: '/images/highlander.jpeg' },
            ].map((vehicle) => (
              <Link key={vehicle.name} to={vehicle.to} className="group relative min-h-[520px] overflow-hidden text-white block">
                <img src={vehicle.img} alt={vehicle.name} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/55 mb-3">{vehicle.eyebrow}</div>
                  <h3 className="font-display text-4xl mb-4">{vehicle.name}</h3>
                  <p className="text-white/65 font-light text-sm leading-relaxed mb-6">{vehicle.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Delivery */}
      <section className="py-24 lg:py-32 bg-[#11100f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/45 mb-5">Southern California arrival</div>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tight leading-[0.94] mb-8">
                {t('home.airports.h2a')}<br />{t('home.airports.h2b')}
              </h2>
              <p className="text-xl text-white/55 font-light mb-12">
                {t('home.airports.desc')}
              </p>
              <div className="space-y-0">
                {airports.map((a, i) => (
                  <Link
                    key={i}
                    to={`/airport-${a.slug}`}
                    className="flex items-center gap-6 py-5 border-b border-white/10 last:border-0 group hover:bg-white/5 transition-colors -mx-2 px-2"
                  >
                    <div className="w-14 h-14 border border-white/20 flex items-center justify-center text-xs font-medium tracking-widest text-white/55 flex-shrink-0">
                      {a.code}
                    </div>
                    <div className="font-medium flex-1">{a.name}</div>
                    <ArrowRight className="w-4 h-4 text-white/35 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="aspect-[4/5] lg:aspect-square relative p-10 lg:p-12 flex flex-col justify-between overflow-hidden border border-white/10">
              <img src="/images/glcsilver.jpeg" alt="Mercedes-Benz airport delivery in Southern California" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10" />
              <MapPin className="relative z-10 w-12 h-12 text-white/70" strokeWidth={1} />
              <div className="relative z-10">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-white/55">{t('home.airports.process.eyebrow')}</div>
                <h3 className="font-display text-4xl tracking-tight mb-4">{t('home.airports.process.h3')}</h3>
                <p className="text-white/65 font-light text-sm leading-relaxed">
                  {t('home.airports.process.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-32 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/45 mb-5">Los Angeles · Orange County · Inland Empire</div>
            <h2 className="font-display text-5xl lg:text-7xl tracking-tight leading-[0.94] mb-5">{t('home.cities.h2')}</h2>
            <p className="text-white/55 font-light text-lg max-w-md">
              {t('home.cities.desc')}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                to={`/van-rental-${city.slug}`}
                className="group border border-white/15 hover:border-[#e7a77a] hover:bg-white/5 transition-colors p-6 flex items-center justify-between"
              >
                <span className="font-medium">{city.name}</span>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#e7a77a] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

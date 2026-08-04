import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

export function Trucks() {
  const { t } = useTranslation()

  useSEO({
    title: 'Chevy Silverado 1500 Truck Rental | The Van Rental',
    description: 'Rent a 2022 Chevrolet Silverado 1500 LTZ in Southern California. 3.0L Duramax diesel, towing package, backup cameras, parking sensors. Book on Turo.',
    canonical: 'https://www.thevanrental.com/trucks',
  })

  const specs = t('trucks.specs', { returnObjects: true }) as { label: string; value: string }[]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />

      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">{t('trucks.eyebrow')}</div>
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] mb-6">
              {t('trucks.h1a')}<br />
              <span className="text-zinc-400">{t('trucks.h1b')}</span>
            </h1>
            <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
              {t('trucks.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
            <div className="aspect-[4/3] overflow-hidden bg-zinc-50">
              <img
                src="/images/silverado.jpeg"
                alt="2022 Chevrolet Silverado 1500 LTZ"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden bg-zinc-50">
                <img
                  src="/images/silverado2.jpeg"
                  alt="Chevrolet Silverado 1500 front"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-zinc-50">
                <img
                  src="/images/silverado3.jpeg"
                  alt="Chevrolet Silverado 1500 rear"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="col-span-2 overflow-hidden bg-zinc-50" style={{ aspectRatio: '2/1' }}>
                <img
                  src="/images/silverado-interior.jpeg"
                  alt="Chevrolet Silverado 1500 interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-6">{t('trucks.story.eyebrow')}</div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8 leading-tight">
                {t('trucks.story.h2')}
              </h2>
              <p className="text-zinc-400 font-light text-lg leading-relaxed mb-8">
                {t('trucks.story.p1')}
              </p>
              <p className="text-zinc-400 font-light text-lg leading-relaxed mb-12">
                {t('trucks.story.p2')}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://turo.com/us/en/truck-rental/united-states/brea-ca/chevrolet/silverado-1500/3689421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 transition-colors h-12 px-8 text-sm font-medium group"
                >
                  {t('nav.bookOnTuro')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-zinc-800">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-zinc-900 p-6">
                  <div className="text-xs font-medium tracking-widest uppercase text-zinc-600 mb-2">{spec.label}</div>
                  <div className="text-white font-medium">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-12">{t('trucks.alsoInFleet')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/vans" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('trucks.vansCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('trucks.vansCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('trucks.vansCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('trucks.vansCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link to="/suvs" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('trucks.suvsCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('trucks.suvsCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('trucks.suvsCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('trucks.suvsCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link to="/hybrid" className="group border border-zinc-200 p-8 hover:border-zinc-400 transition-colors">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{t('trucks.hybridCard.eyebrow')}</div>
              <h3 className="text-2xl font-medium mb-3">{t('trucks.hybridCard.h3')}</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">{t('trucks.hybridCard.desc')}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                {t('trucks.hybridCard.link')} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

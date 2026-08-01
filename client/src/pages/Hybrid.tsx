import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const TURO_URL = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/toyota/grand-highlander/2721871'

export function Hybrid() {
  const { t } = useTranslation()

  useSEO({
    title: 'Toyota Highlander Hybrid Rental — 7 Seats | The Van Rental',
    description: 'Rent a 7-seat Toyota Highlander Hybrid in Southern California. Perfect for large groups, family road trips, and extended travel. Delivery to LAX, SNA, ONT.',
    canonical: 'https://www.thevanrental.com/hybrid',
  })

  const specs = t('hybrid.specs', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">{t('hybrid.eyebrow')}</div>
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-6">{t('hybrid.h1')}</h1>
            <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
              {t('hybrid.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <a
              href={TURO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video bg-zinc-50 overflow-hidden group"
            >
              <img src="/images/highlander.jpeg" alt="Toyota Highlander" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </a>
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h2 className="text-3xl font-medium tracking-tight mb-4">{t('hybrid.room.h2')}</h2>
                <p className="text-zinc-500 font-light leading-relaxed mb-4">
                  {t('hybrid.room.p1')}
                </p>
                <p className="text-zinc-500 font-light leading-relaxed">
                  {t('hybrid.room.p2')}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {specs.map((s, i) => (
                  <span key={i} className="text-xs font-medium border border-zinc-200 px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

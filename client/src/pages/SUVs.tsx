import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const GLC_LISTINGS = [
  { img: '/images/glcb.jpeg', url: 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glc-class/3003416' },
  { img: '/images/glcb1.jpeg', url: 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glc-class/3142732' },
  { img: '/images/glcb2.jpeg', url: 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glc-class/3307505' },
  { img: '/images/glcw.jpeg', url: 'https://turo.com/us/en/suv-rental/united-states/undefined-undefined/mercedes-benz/glc-class/3262667' },
]

const GLB_URL = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glb-class/2204008'
const BMW_URL = 'https://turo.com/us/en/car-rental/united-states/santa-ana-ca/bmw/5-series/3544320'

export function SUVs() {
  const { t } = useTranslation()

  useSEO({
    title: 'Mercedes GLC & GLB SUV Rental | The Van Rental',
    description: 'Rent a Mercedes GLC or GLB SUV in Southern California. Premium executive vehicles for airport transfers, business travel, and client transport. Delivery to LAX, SNA, ONT.',
    canonical: 'https://www.thevanrental.com/suvs',
  })

  const specs = t('suvs.specs', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">{t('suvs.eyebrow')}</div>
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-6">{t('suvs.h1')}</h1>
            <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
              {t('suvs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {GLC_LISTINGS.map((t2, i) => (
              <a
                key={i}
                href={t2.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-zinc-50 overflow-hidden group"
              >
                <img src={t2.img} alt="Mercedes GLC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-3xl font-medium tracking-tight mb-6">{t('suvs.premium.h2')}</h2>
              <p className="text-zinc-500 font-light leading-relaxed mb-6">
                {t('suvs.premium.p1')}
              </p>
              <p className="text-zinc-500 font-light leading-relaxed">
                {t('suvs.premium.p2')}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {specs.map((s, i) => (
                  <span key={i} className="text-xs font-medium border border-zinc-200 px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">{t('suvs.glb.eyebrow')}</div>
                <h2 className="text-3xl font-medium tracking-tight mb-6">{t('suvs.glb.h2')}</h2>
                <p className="text-zinc-500 font-light leading-relaxed">
                  {t('suvs.glb.desc')}
                </p>
              </div>
              <a
                href={GLB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-zinc-50 overflow-hidden group"
              >
                <img src="/images/glb.jpeg" alt="Mercedes GLB" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </a>
            </div>
          </div>

          {/* Partners section */}
          <div className="border-t border-zinc-100 pt-16 mt-16">
            <div className="mb-12">
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">Our Partners</div>
              <h2 className="text-3xl font-medium tracking-tight mb-3">More options, same standard.</h2>
              <p className="text-zinc-500 font-light max-w-xl">
                Through our partner network we can arrange additional premium vehicles. Book directly on Turo.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <a
                href={BMW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-zinc-50 overflow-hidden group"
              >
                <img src="/images/bmw5.jpeg" alt="BMW 5 Series" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </a>
              <div>
                <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">{t('suvs.bmw.eyebrow')}</div>
                <h3 className="text-3xl font-medium tracking-tight mb-6">{t('suvs.bmw.h2')}</h3>
                <p className="text-zinc-500 font-light leading-relaxed mb-8">
                  {t('suvs.bmw.desc')}
                </p>
                <a
                  href={BMW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white text-sm font-medium px-6 py-3 hover:bg-zinc-700 transition-colors"
                >
                  {t('suvs.bmw.book')}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
}

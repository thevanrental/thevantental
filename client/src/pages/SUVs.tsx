import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const GLC_LISTINGS = [
  { img: '/images/glcb.jpeg', url: 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glc-class/3003416' },
  { img: '/images/glcb1.jpeg', url: 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glc-class/3142732' },
  { img: '/images/glcb2.jpeg', url: 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glc-class/3307505' },
  { img: '/images/glcw.jpeg', url: 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glc-class/3262667' },
]

const GLE_URL = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/gle-class/3907726'
const GLE_2025_URL = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/gle-class/3934466'
const GLE_WHITE_URL = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/gle-class/3925053'
const GLB_URL = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/glb-class/2204008'

export function SUVs() {
  const { t } = useTranslation()

  useSEO({
    title: 'Mercedes GLC & GLE SUV Rental | The Van Rental',
    description: 'Rent a Mercedes GLC or GLE SUV in Southern California. Premium vehicles for airport transfers, business travel, and family trips. Delivery to LAX, SNA, ONT.',
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#2a1f1a] text-white p-8 lg:p-12 mb-6">
            <Link to="/mercedes-gle-2025" className="block aspect-[4/3] overflow-hidden bg-zinc-900 group">
              <img src="/images/gle-2025/front-sunset.jpg" alt="2025 Mercedes-Benz GLE 350 4MATIC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </Link>
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-[#e7a77a] mb-4">New to the fleet · 2025</div>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">Mercedes-Benz GLE 350 4MATIC</h2>
              <p className="text-white/65 font-light leading-relaxed mb-8">A premium all-wheel-drive SUV with a 360° camera, adaptive cruise control, soft-close doors, and heated and ventilated front seats.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/mercedes-gle-2025" className="inline-flex items-center bg-white text-zinc-950 text-sm font-medium px-6 py-3 hover:bg-zinc-200 transition-colors">Explore the 2025 GLE</Link>
                <a href={GLE_2025_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-white/30 text-white text-sm font-medium px-6 py-3 hover:border-white transition-colors">Book this 4MATIC</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#e9e3dc] text-zinc-950 p-8 lg:p-12 mb-6">
            <Link to="/mercedes-gle-white" className="block aspect-[4/3] overflow-hidden bg-zinc-100 group">
              <img src="/images/gle-white/exterior.jpg" alt="White Mercedes-Benz GLE 350" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </Link>
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-[#a95937] mb-4">White on white · Panoramic roof</div>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">Mercedes-Benz GLE 350</h2>
              <p className="text-zinc-600 font-light leading-relaxed mb-8">A bright, fully appointed GLE with a white leather interior, panoramic glass roof, ventilated seating, premium audio, ambient lighting, and a modern digital cockpit.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/mercedes-gle-white" className="inline-flex items-center bg-zinc-950 text-white text-sm font-medium px-6 py-3 hover:bg-zinc-700 transition-colors">Explore the white GLE</Link>
                <a href={GLE_WHITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-zinc-400 text-zinc-900 text-sm font-medium px-6 py-3 hover:border-zinc-950 transition-colors">Book this GLE</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-zinc-950 text-white p-8 lg:p-12 mb-20">
            <Link to="/mercedes-gle" className="block aspect-[4/3] overflow-hidden bg-zinc-900 group">
              <img src="/images/gle-front.jpg" alt="2022 Mercedes-Benz GLE 350" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </Link>
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">Featured midsize SUV</div>
              <h2 className="text-4xl font-medium tracking-tight mb-6">2022 Mercedes-Benz GLE 350</h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-8">A spacious, refined Mercedes-Benz SUV with five seats, Apple CarPlay, a panoramic sunroof, driver-assistance technology, and convenient Southern California delivery.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/mercedes-gle" className="inline-flex items-center bg-white text-zinc-950 text-sm font-medium px-6 py-3 hover:bg-zinc-200 transition-colors">Explore the GLE</Link>
                <a href={GLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-zinc-700 text-white text-sm font-medium px-6 py-3 hover:border-zinc-400 transition-colors">Book on Turo</a>
              </div>
            </div>
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

        </div>
      </section>
      <Footer />
    </div>
  )
}

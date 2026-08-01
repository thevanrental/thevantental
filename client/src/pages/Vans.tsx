import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const TURO = [
  {
    turo: [
      { url: 'https://turo.com/us/en/van-rental/united-states/brea-ca/mercedes-benz/sprinter-cargo/2546625' },
    ],
    imgs: ['/images/cargo.jpeg'],
  },
  {
    turo: [
      { url: 'https://turo.com/us/en/van-rental/united-states/brea-ca/mercedes-benz/sprinter-crew/3398630' },
    ],
    imgs: ['/images/crew2.jpeg'],
  },
]

const EXTRAS = [
  { key: 'sup',      img: '/images/extra-sup.jpg'      },
  { key: 'starlink', img: '/images/extra-starlink.jpg' },
  { key: 'cooler',   img: '/images/extra-cooler.jpg'   },
  { key: 'ebike',    img: '/images/extra-ebike.jpg'    },
] as const

export function Vans() {
  const { t } = useTranslation()

  useSEO({
    title: 'Mercedes Vans — Cargo, Crew & 9-Passenger Sprinter | The Van Rental',
    description: 'Rent a Mercedes Cargo Van, Crew Van, or 9-passenger Sprinter in Southern California. Add extras like paddle boards, Starlink, e-bikes, and coolers on Turo.',
    canonical: 'https://www.thevanrental.com/vans',
  })

  const vans = [
    {
      tag: t('vans.cargo.tag'),
      name: t('vans.cargo.name'),
      desc: t('vans.cargo.desc'),
      specs: t('vans.cargo.specs', { returnObjects: true }) as string[],
      bookLabel: t('vans.bookCargo'),
      ...TURO[0],
    },
    {
      tag: t('vans.crew.tag'),
      name: t('vans.crew.name'),
      desc: t('vans.crew.desc'),
      specs: t('vans.crew.specs', { returnObjects: true }) as string[],
      bookLabel: t('vans.crew.bookGray'),
      ...TURO[1],
    },
  ]

  const sprinterSpecs = t('vans.sprinter.specs', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16">
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">{t('vans.eyebrow')}</div>
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-6">{t('vans.h1')}</h1>
            <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
              {t('vans.subtitle')}
            </p>
          </div>

          {/* Cargo + Crew grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {vans.map((van, i) => (
              <div key={i} className="bg-zinc-50 p-10">
                <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">{van.tag}</div>
                <h2 className="text-3xl font-medium mb-2">Mercedes {van.name}</h2>
                <p className="text-zinc-500 font-light text-sm leading-relaxed mb-8">{van.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {van.imgs.map((img, j) => (
                    <a
                      key={j}
                      href={van.turo[j]?.url ?? van.turo[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video overflow-hidden group"
                    >
                      <img src={img} alt={van.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {van.specs.map((s, j) => (
                    <span key={j} className="text-xs font-medium border border-zinc-200 px-3 py-1.5">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sprinter 9-passenger — featured full-width card */}
          <div className="bg-zinc-900 text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden" style={{ minHeight: '340px' }}>
                <img
                  src="/images/sprinter-exterior.png"
                  alt="Black Mercedes-Benz Sprinter 9-passenger van"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/40 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase bg-white text-zinc-900 px-3 py-1.5 w-fit mb-6">
                  NEW · BLACK
                </div>
                <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-3">{t('vans.sprinter.tag')}</div>
                <h2 className="text-3xl font-medium mb-4">Mercedes {t('vans.sprinter.name')}</h2>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">{t('vans.sprinter.desc')}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {sprinterSpecs.map((s, i) => (
                    <span key={i} className="text-xs text-zinc-400 border border-zinc-700 px-3 py-1.5">{s}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/sprinter"
                    className="inline-flex items-center gap-2 bg-white text-zinc-900 text-sm font-medium px-6 py-3 hover:bg-zinc-100 transition-colors group"
                  >
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://turo.com/us/en/van-rental/united-states/brea-ca/mercedes-benz/sprinter-crew/3043514"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-zinc-600 text-sm font-medium px-6 py-3 hover:border-zinc-400 transition-colors"
                  >
                    {t('vans.sprinter.book')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Extras section */}
          <div className="mt-24 pt-16 border-t border-zinc-100">
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">{t('extras.eyebrow')}</div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="text-4xl font-medium tracking-tight mb-4">{t('extras.h2')}</h2>
                <p className="text-zinc-500 font-light text-lg max-w-xl leading-relaxed">{t('extras.desc')}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EXTRAS.map(({ key, img }) => (
                <div key={key} className="border border-zinc-100 overflow-hidden hover:border-zinc-300 transition-colors group">
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-50">
                    <img src={img} alt={t(`extras.${key}.name`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] font-medium tracking-widest uppercase text-zinc-400 mb-2">
                      {t(`extras.${key}.tag`)}
                    </div>
                    <div className="text-lg font-medium mb-2">{t(`extras.${key}.name`)}</div>
                    <p className="text-zinc-500 font-light text-sm leading-relaxed">{t(`extras.${key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
}

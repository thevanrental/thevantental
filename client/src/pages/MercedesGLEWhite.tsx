import { ArrowRight } from 'lucide-react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const TURO_LISTING = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/gle-class/3925053'

const features = [
  'Panoramic glass roof',
  'White leather interior',
  'Ventilated front seats',
  'Heated front seats',
  'Premium audio system',
  'Ambient interior lighting',
  'Digital cockpit and navigation',
  'Parking camera views',
]

export function MercedesGLEWhite() {
  useSEO({
    title: 'White Mercedes-Benz GLE 350 Rental | The Van Rental',
    description: 'Rent a white Mercedes-Benz GLE 350 in Southern California with a white leather interior, panoramic glass roof, ventilated and heated seats, premium audio, and ambient lighting.',
    canonical: 'https://www.thevanrental.com/mercedes-gle-white',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Vehicle',
      name: 'White Mercedes-Benz GLE 350',
      manufacturer: { '@type': 'Organization', name: 'Mercedes-Benz' },
      vehicleConfiguration: 'GLE 350 premium package',
      color: 'White exterior with white leather interior',
      vehicleTransmission: 'Automatic',
      image: [
        'https://www.thevanrental.com/images/gle-white/exterior.jpg',
        'https://www.thevanrental.com/images/gle-white/panorama.jpg',
        'https://www.thevanrental.com/images/gle-white/interior.jpg',
      ],
      url: 'https://www.thevanrental.com/mercedes-gle-white',
    },
  })

  const gallery = [
    ['/images/gle-white/exterior.jpg', 'White Mercedes-Benz GLE 350 exterior'],
    ['/images/gle-white/panorama.jpg', 'Mercedes-Benz GLE 350 panoramic glass roof and white leather cabin'],
    ['/images/gle-white/interior.jpg', 'White Mercedes-Benz GLE 350 driver cabin with premium interior'],
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-5">Mercedes-Benz · White on white</div>
              <h1 className="font-display text-5xl lg:text-7xl tracking-tighter leading-[0.95]">
                GLE 350.<br /><span className="italic font-normal text-[#c8744d]">Bright, open, refined.</span>
              </h1>
            </div>
            <div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-8">A beautifully specified GLE 350 pairing a clean white exterior with a light leather cabin. The panoramic glass roof fills the interior with natural light, while ventilated seating and premium cabin technology keep every Southern California drive calm and comfortable.</p>
              <a href={TURO_LISTING} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 text-white h-14 px-8 text-base font-medium hover:bg-zinc-700 transition-colors group">
                Check availability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
            {gallery.map(([src, alt], index) => (
              <div key={src} className={`overflow-hidden bg-zinc-100 ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <img src={src} alt={alt} className={`w-full object-cover ${index === 0 ? 'aspect-[16/8]' : 'aspect-video'}`} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-zinc-100 pt-16">
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight leading-[0.98]">A premium cabin made for California light.</h2>
            <div>
              <p className="text-zinc-500 font-light text-lg leading-relaxed mb-8">This GLE 350 is centered on comfort and atmosphere: a panoramic roof above, white leather throughout, and ventilated front seats for warm afternoons. Digital displays, navigation, premium audio, ambient lighting, and useful parking camera views complete a quiet, upscale experience for airport arrivals, client travel, family weekends, and longer drives.</p>
              <div className="flex flex-wrap gap-2">
                {features.map(feature => <span key={feature} className="text-xs font-medium border border-zinc-200 px-3 py-2">{feature}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

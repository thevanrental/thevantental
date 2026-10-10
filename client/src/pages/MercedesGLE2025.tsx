import { ArrowRight } from 'lucide-react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const TURO_LISTING = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/gle-class/3934466'

const features = [
  '4MATIC all-wheel drive',
  '360° surround-view camera',
  'Adaptive cruise control',
  'Soft-close doors',
  'Heated front seats',
  'Ventilated front seats',
  'Premium audio system',
  'Ambient interior lighting',
]

export function MercedesGLE2025() {
  useSEO({
    title: '2025 Mercedes-Benz GLE 350 4MATIC Rental | The Van Rental',
    description: 'Rent a 2025 Mercedes-Benz GLE 350 4MATIC in Southern California with all-wheel drive, a 360-degree camera, adaptive cruise control, soft-close doors, and heated and ventilated seats.',
    canonical: 'https://www.thevanrental.com/mercedes-gle-2025',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Vehicle',
      name: '2025 Mercedes-Benz GLE 350 4MATIC',
      vehicleModelDate: '2025',
      manufacturer: { '@type': 'Organization', name: 'Mercedes-Benz' },
      vehicleConfiguration: 'GLE 350 4MATIC',
      driveWheelConfiguration: 'All-wheel drive',
      vehicleTransmission: 'Automatic',
      image: [
        'https://www.thevanrental.com/images/gle-2025/front-sunset.jpg',
        'https://www.thevanrental.com/images/gle-2025/dashboard.jpg',
        'https://www.thevanrental.com/images/gle-2025/rear.jpg',
      ],
      url: 'https://www.thevanrental.com/mercedes-gle-2025',
    },
  })

  const gallery = [
    ['/images/gle-2025/front-sunset.jpg', '2025 Mercedes-Benz GLE 350 4MATIC front three-quarter view at sunset'],
    ['/images/gle-2025/dashboard.jpg', '2025 Mercedes-Benz GLE 350 digital cockpit and brown leather interior'],
    ['/images/gle-2025/driver-cabin.jpg', '2025 Mercedes-Benz GLE 350 driver cabin with ambient lighting'],
    ['/images/gle-2025/seat-controls.jpg', 'Heated and ventilated seat controls and premium audio'],
    ['/images/gle-2025/rear.jpg', '2025 Mercedes-Benz GLE 350 4MATIC rear view'],
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-5">2025 · Mercedes-Benz · New to the fleet</div>
              <h1 className="font-display text-5xl lg:text-7xl tracking-tighter leading-[0.95]">
                GLE 350 4MATIC.<br /><span className="italic font-normal text-[#c8744d]">Modern luxury.</span>
              </h1>
            </div>
            <div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-8">A polished all-wheel-drive SUV with the cabin comfort and driver-assistance technology to make airport arrivals, client travel, family weekends, and longer drives feel effortless.</p>
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
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight leading-[0.98]">Premium comfort, without the fuss.</h2>
            <div>
              <p className="text-zinc-500 font-light text-lg leading-relaxed mb-8">The 2025 GLE 350 4MATIC balances confident all-wheel-drive road manners with a calm, richly finished cabin. Adaptive cruise control helps take the edge off longer highway drives, the 360-degree camera makes tight spaces easier to manage, and soft-close doors add a quiet finishing touch. Heated and ventilated front seats keep the cabin comfortable through Southern California mornings and warm afternoons.</p>
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

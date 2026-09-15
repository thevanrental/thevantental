import { ArrowRight } from 'lucide-react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

const TURO_URL = 'https://turo.com/us/en/suv-rental/united-states/brea-ca/mercedes-benz/gle-class/3907726'

export function MercedesGLE() {
  useSEO({
    title: '2022 Mercedes-Benz GLE 350 Rental in Brea, CA | The Van Rental',
    description: 'Rent a 2022 Mercedes-Benz GLE 350 in Southern California. Five seats, Apple CarPlay, heated seats, sunroof, parking assistance, and a 360-degree camera.',
    canonical: 'https://www.thevanrental.com/mercedes-gle',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Vehicle',
      name: '2022 Mercedes-Benz GLE 350',
      vehicleModelDate: '2022',
      manufacturer: { '@type': 'Organization', name: 'Mercedes-Benz' },
      vehicleConfiguration: 'GLE 350',
      seatingCapacity: 5,
      fuelType: 'Premium gasoline',
      url: 'https://www.thevanrental.com/mercedes-gle',
    },
  })

  const features = ['Five seats', 'Automatic transmission', 'Apple CarPlay and Android Auto', 'Heated seats and sunroof', '360° camera and parking assistance']

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
            <div>
              <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-5">2022 · Mercedes-Benz · Premium SUV</div>
              <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.02]">GLE 350.<br /><span className="text-zinc-400">Premium comfort.</span></h1>
            </div>
            <div>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-8">A polished five-seat SUV for airport arrivals, business travel, family weekends, and longer Southern California drives.</p>
              <a href={TURO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 text-white h-14 px-8 text-base font-medium hover:bg-zinc-700 transition-colors group">
                Book this GLE on Turo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
            <img src="/images/gle-front.jpg" alt="2022 Mercedes-Benz GLE 350 front three-quarter view at night" className="w-full aspect-video object-cover" />
            <img src="/images/gle-rear.jpg" alt="2022 Mercedes-Benz GLE 350 rear three-quarter view at night" className="w-full aspect-video object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-zinc-100 pt-16">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Comfort that works for every part of the trip.</h2>
            <div>
              <p className="text-zinc-500 font-light text-lg leading-relaxed mb-8">The GLE 350 pairs a quiet premium cabin with the visibility and space of a midsize SUV. It is equally suited to an airport pickup, client travel, or a California road trip.</p>
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

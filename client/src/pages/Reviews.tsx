import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

export function Reviews() {
  const { t } = useTranslation()

  useSEO({
    title: 'Customer Reviews | The Van Rental',
    description: '5.0 stars on Google. Read what film producers, event coordinators, and business travelers say about renting from The Van Rental in Southern California.',
    canonical: 'https://www.thevanrental.com/reviews',
  })

  const items = t('reviews.items', { returnObjects: true }) as { name: string; role: string; text: string }[]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-6">{t('reviews.h1')}</h1>
              <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
                {t('reviews.subtitle')}
              </p>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-zinc-900 text-zinc-900" />)}
              <span className="ml-3 font-medium">5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((r, i) => (
              <div key={i} className="bg-zinc-50 p-8 flex flex-col gap-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-zinc-900 text-zinc-900" />)}
                </div>
                <p className="text-zinc-600 font-light text-sm leading-relaxed flex-1">"{r.text}"</p>
                <div>
                  <div className="font-medium text-sm">{r.name}</div>
                  <div className="text-xs text-zinc-400">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

export function Contact() {
  const { t } = useTranslation()

  useSEO({
    title: 'Book a Vehicle | The Van Rental',
    description: 'Book a Mercedes van, SUV, hybrid, or truck in Southern California through our secure Turo listings. Check live availability, trip pricing, and vehicle details.',
    canonical: 'https://www.thevanrental.com/contact',
  })

  const contactItems = [
    { icon: ArrowRight, label: 'Reservations', value: t('nav.bookOnTuro'), href: 'https://turo.com/us/en/drivers/14886572' },
    { icon: Mail, label: t('contact.emailLbl'), value: 'info@thevanrental.com', href: 'mailto:info@thevanrental.com' },
    { icon: MapPin, label: t('contact.serviceAreaLbl'), value: t('contact.serviceAreaVal'), href: '#' },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-6">{t('contact.h1')}</h1>
            <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-10">
              {contactItems.map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-50 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-100 transition-colors">
                    <item.icon className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-1">{item.label}</div>
                    <div className="font-medium text-lg group-hover:text-zinc-500 transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}

              <div className="pt-4 border-t border-zinc-100">
                <h3 className="font-medium mb-4">{t('contact.airportDelivery')}</h3>
                <div className="flex flex-col gap-2 text-sm text-zinc-500 font-light">
                  <div>LAX — Los Angeles International</div>
                  <div>SNA — John Wayne Airport</div>
                  <div>ONT — Ontario International</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 text-white p-10 flex flex-col justify-between min-h-[360px]">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">Secure booking</p>
                <h2 className="text-3xl font-medium mb-5">Check live availability on Turo</h2>
                <p className="text-zinc-400 font-light leading-relaxed">Choose a vehicle, see the exact price for your dates, review delivery options, and complete your reservation securely.</p>
              </div>
              <a href="https://turo.com/us/en/drivers/14886572" target="_blank" rel="noopener noreferrer" className="mt-10 bg-white text-zinc-900 h-14 px-8 inline-flex items-center justify-center gap-2 font-medium group">
                {t('nav.bookOnTuro')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

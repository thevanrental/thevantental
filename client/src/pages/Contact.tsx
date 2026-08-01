import { Phone, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useSEO } from '../hooks/useSEO'

export function Contact() {
  const { t } = useTranslation()

  useSEO({
    title: 'Book a Vehicle | The Van Rental',
    description: 'Contact The Van Rental to book a Mercedes van, GLC SUV, or Highlander hybrid in Southern California. Call (323) 610-7634 or email info@thevanrental.com.',
    canonical: 'https://www.thevanrental.com/contact',
  })

  const contactItems = [
    { icon: Phone, label: t('contact.phoneLbl'), value: '(323) 610-7634', href: 'tel:+13236107634' },
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

            <div className="bg-zinc-50 p-10">
              <h2 className="text-2xl font-medium mb-8">{t('contact.form.h2')}</h2>
              <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-widest uppercase text-zinc-400">{t('contact.form.nameLbl')}</label>
                  <input type="text" className="border border-zinc-200 px-4 h-12 text-sm focus:outline-none focus:border-zinc-400 transition-colors bg-white" placeholder={t('contact.form.namePh')} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-widest uppercase text-zinc-400">{t('contact.form.contactLbl')}</label>
                  <input type="text" className="border border-zinc-200 px-4 h-12 text-sm focus:outline-none focus:border-zinc-400 transition-colors bg-white" placeholder={t('contact.form.contactPh')} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-widest uppercase text-zinc-400">{t('contact.form.vehicleLbl')}</label>
                  <select className="border border-zinc-200 px-4 h-12 text-sm focus:outline-none focus:border-zinc-400 transition-colors bg-white">
                    <option value="">{t('contact.form.vehicleDefault')}</option>
                    <option>Mercedes Cargo Van</option>
                    <option>Mercedes Crew Van</option>
                    <option>Mercedes GLC SUV</option>
                    <option>Toyota Highlander Hybrid</option>
                    <option>Chevy Silverado 1500</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-widest uppercase text-zinc-400">{t('contact.form.messageLbl')}</label>
                  <textarea rows={4} className="border border-zinc-200 px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors bg-white resize-none" placeholder={t('contact.form.messagePh')} />
                </div>
                <button type="submit" className="bg-zinc-900 text-white h-12 text-sm font-medium hover:bg-zinc-800 transition-colors mt-2">
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

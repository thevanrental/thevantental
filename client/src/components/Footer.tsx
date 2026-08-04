import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CITIES } from '../data/cities'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-white py-20 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-medium tracking-tight mb-6">THE VAN RENTAL</div>
            <p className="text-zinc-500 font-light max-w-sm mb-10 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
              <a href="https://turo.com/us/en/drivers/14886572" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-500 transition-colors">
                <ArrowRight className="w-4 h-4" /> {t('nav.bookOnTuro')}
              </a>
              <a href="mailto:info@thevanrental.com" className="flex items-center gap-2 hover:text-zinc-500 transition-colors">
                <Mail className="w-4 h-4" /> info@thevanrental.com
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-widest uppercase mb-6 text-zinc-400">{t('footer.fleetLbl')}</div>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <Link to="/vans" className="hover:text-zinc-500 transition-colors">{t('footer.cargoVan')}</Link>
              <Link to="/vans" className="hover:text-zinc-500 transition-colors">{t('footer.crewVan')}</Link>
              <Link to="/suvs" className="hover:text-zinc-500 transition-colors">{t('footer.glcSuv')}</Link>
              <Link to="/hybrid" className="hover:text-zinc-500 transition-colors">{t('footer.highlander')}</Link>
              <Link to="/trucks" className="hover:text-zinc-500 transition-colors">{t('footer.silverado')}</Link>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-widest uppercase mb-6 text-zinc-400">{t('footer.companyLbl')}</div>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <Link to="/about" className="hover:text-zinc-500 transition-colors">{t('footer.aboutUs')}</Link>
              <Link to="/reviews" className="hover:text-zinc-500 transition-colors">{t('footer.reviews')}</Link>
              <Link to="/contact" className="hover:text-zinc-500 transition-colors">{t('footer.contact')}</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-zinc-100">
          <div className="text-xs font-medium tracking-widest uppercase mb-6 text-zinc-400">{t('footer.serviceAreasLbl')}</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-3">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                to={`/van-rental-${city.slug}`}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {t('footer.vanRentalCity', { city: city.name })}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-400">
          <div>{t('footer.copyright', { year: new Date().getFullYear() })}</div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            <span className="ml-2">{t('footer.rating')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ru from './locales/ru.json'
import uk from './locales/uk.json'

export type Locale = 'en' | 'es' | 'fr' | 'ru' | 'uk'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      ru: { translation: ru },
      uk: { translation: uk },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n

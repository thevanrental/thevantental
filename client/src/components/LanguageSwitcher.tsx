import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'fr', label: 'FR' },
  { code: 'ru', label: 'RU' },
  { code: 'uk', label: 'UK' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const change = (code: string) => {
    i18n.changeLanguage(code)
    localStorage.setItem('lang', code)
  }

  return (
    <div className="flex items-center gap-0.5">
      {LANGS.map((l, idx) => (
        <button
          key={l.code}
          onClick={() => change(l.code)}
          className={`text-[11px] font-medium px-1.5 py-1 tracking-wide transition-colors ${
            i18n.language === l.code
              ? 'text-zinc-900'
              : 'text-zinc-400 hover:text-zinc-600'
          }`}
        >
          {l.label}{idx < LANGS.length - 1 && <span className="ml-0.5 text-zinc-200">·</span>}
        </button>
      ))}
    </div>
  )
}

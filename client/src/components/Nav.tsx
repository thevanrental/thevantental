import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Nav({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/vans', label: t('nav.vans') },
    { to: '/suvs', label: t('nav.suvs') },
    { to: '/hybrid', label: t('nav.hybrid') },
    { to: '/trucks', label: t('nav.trucks') },
    { to: '/delivery', label: t('nav.delivery') },
    { to: '/reviews', label: t('nav.reviews') },
    { to: '/about', label: t('nav.about') },
  ]

  return (
    <header className={`${overlay ? 'absolute top-0 left-0 w-full text-white border-b border-white/15 bg-gradient-to-b from-black/55 to-transparent' : 'sticky top-0 bg-white/90 border-b border-zinc-100'} z-50 backdrop-blur-[2px]`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium tracking-tight">THE VAN RENTAL</Link>

        <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${overlay ? 'text-white/65' : 'text-zinc-500'}`}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-colors ${overlay ? 'hover:text-white' : 'hover:text-zinc-900'} ${location.pathname === l.to ? (overlay ? 'text-white' : 'text-zinc-900') : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <a
              href="https://turo.com/us/en/host/14886572"
              target="_blank"
              rel="noopener noreferrer"
              className={`${overlay ? 'bg-white text-zinc-950 hover:bg-white/85' : 'bg-zinc-900 text-white hover:bg-zinc-800'} text-sm font-medium px-6 h-9 flex items-center transition-colors whitespace-nowrap`}
            >
              {t('nav.bookOnTuro')}
            </a>
            <LanguageSwitcher dark={overlay} />
          </div>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-100 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-lg font-medium transition-colors ${location.pathname === l.to ? 'text-zinc-900' : 'text-zinc-500'}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://turo.com/us/en/host/14886572"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white text-sm font-medium px-6 h-12 flex items-center justify-center hover:bg-zinc-800 transition-colors"
          >
            {t('nav.bookOnTuro')}
          </a>
          <div className="pt-1">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}

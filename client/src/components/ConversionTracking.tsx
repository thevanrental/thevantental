import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { captureAttribution, trackEvent } from '../lib/analytics'

export function ConversionTracking() {
  const location = useLocation()

  useEffect(() => {
    captureAttribution()
  }, [location.pathname, location.search])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const link = target?.closest('a')
      if (!link) return

      const href = link.href
      const label = link.textContent?.trim().replace(/\s+/g, ' ').slice(0, 120)

      if (href.includes('turo.com/')) {
        trackEvent('turo_booking_click', { link_url: href, link_text: label })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

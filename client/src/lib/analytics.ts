type AnalyticsPayload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

const ATTRIBUTION_KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

export function captureAttribution() {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key)
    if (value) window.sessionStorage.setItem(`tvr_${key}`, value)
  }
}

export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === 'undefined') return

  const attribution = Object.fromEntries(
    ATTRIBUTION_KEYS.map(key => [key, window.sessionStorage.getItem(`tvr_${key}`) || undefined]),
  )

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    page_path: window.location.pathname,
    ...attribution,
    ...payload,
  })

  if (event === 'turo_booking_click' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17276473534/0dhmCK-K7dscEL6hiK5A',
      value: 1,
      currency: 'USD',
    })
  }
}

import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  structuredData?: object
}

export function useSEO({ title, description, canonical, structuredData }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title

    // Description
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      document.head.appendChild(desc)
    }
    desc.setAttribute('content', description)

    // Open Graph
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:type': 'website',
      'og:site_name': 'The Van Rental',
    }
    if (canonical) ogTags['og:url'] = canonical

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })

    // Twitter Card
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
    }
    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    })

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    // Structured data (JSON-LD)
    const existingScript = document.getElementById('page-structured-data')
    if (existingScript) existingScript.remove()
    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'page-structured-data'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    return () => {
      const script = document.getElementById('page-structured-data')
      if (script) script.remove()
    }
  }, [title, description, canonical, structuredData])
}

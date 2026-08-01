export interface Airport {
  slug: string
  code: string
  name: string
  city: string
  blurb: string
  heroImage: string
  shuttleNote: string
}

export const AIRPORTS: Airport[] = [
  {
    slug: 'lax',
    code: 'LAX',
    name: 'Los Angeles International Airport',
    city: 'Los Angeles',
    blurb: 'LAX is Southern California\'s busiest hub, and we coordinate delivery right to your vehicle at a nearby meeting point so you can skip the rental counter entirely. Whether you\'re flying in for a shoot, a business trip, or a family vacation, our Mercedes Cargo Van, Crew Van, GLC or GLB SUV, or Highlander Hybrid can be ready and waiting the moment you land.',
    heroImage: '/images/crew.jpeg',
    shuttleNote: 'From your terminal, take the free LAX shuttle to Budget Parking — that\'s where we\'ll have your vehicle waiting. Just let us know your flight details and we\'ll time the handoff so there\'s no waiting around.',
  },
  {
    slug: 'ont',
    code: 'ONT',
    name: 'Ontario International Airport',
    city: 'Ontario',
    blurb: 'Ontario International Airport sits at the center of the Inland Empire\'s logistics corridor, making it a natural pickup point for freight runs, warehouse routes, and airport-adjacent business. We deliver our Mercedes vans and GLC SUVs directly to ONT so your trip starts the second you land.',
    heroImage: '/images/cargo.jpeg',
    shuttleNote: 'No shuttle needed — we park within walking distance of the terminal, so you can walk straight from baggage claim to your vehicle.',
  },
  {
    slug: 'sna',
    code: 'SNA',
    name: 'John Wayne Airport',
    city: 'Santa Ana',
    blurb: 'John Wayne Airport serves Orange County\'s business and leisure travelers, and we meet you there with a vehicle ready to go. From executive GLC transfers to a 7-seat Highlander for the whole family, delivery to SNA means no lines, no shuttles, no waiting around.',
    heroImage: '/images/glcb.jpeg',
    shuttleNote: 'No shuttle needed — we park within walking distance of the terminal, so you can walk straight from baggage claim to your vehicle.',
  },
  {
    slug: 'lgb',
    code: 'LGB',
    name: 'Long Beach Airport',
    city: 'Long Beach',
    blurb: 'Long Beach Airport keeps things simple with a small, easy-to-navigate terminal. We take advantage of that by parking within walking distance so you can go straight from baggage claim to your Mercedes van, GLC or GLB SUV, or Highlander Hybrid.',
    heroImage: '/images/glcb.jpeg',
    shuttleNote: 'No shuttle needed — we park within walking distance of the terminal, so you can walk straight from baggage claim to your vehicle.',
  },
]

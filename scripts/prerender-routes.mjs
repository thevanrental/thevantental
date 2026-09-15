import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'client-dist');
const serverEntry = path.join(root, 'server-dist', 'entry-server.js');
const { render } = await import(serverEntry);
const citiesSrc = fs.readFileSync(path.join(root, 'client/src/data/cities.ts'), 'utf-8');
const airportsSrc = fs.readFileSync(path.join(root, 'client/src/data/airports.ts'), 'utf-8');

function extractBlocks(src, arrayName) {
  const items = [];
  const re = /\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
  let m;
  while ((m = re.exec(src))) {
    const block = m[1];
    const get = (key) => {
      const r = new RegExp(`${key}:\\s*['\`]([^'\`]+)['\`]`);
      const match = block.match(r);
      return match ? match[1] : '';
    };
    const slug = get('slug');
    if (!slug) continue;
    items.push({
      slug,
      name: get('name'),
      code: get('code'),
      useCase: get('useCase'),
      landmark: get('landmark'),
      nearestAirport: get('nearestAirport'),
      heroImage: get('heroImage'),
      city: get('city'),
    });
  }
  return items;
}

const cities = extractBlocks(citiesSrc);
const airports = extractBlocks(airportsSrc);

const BASE = 'https://www.thevanrental.com';
const OG_IMAGE = `${BASE}/images/crew.jpeg`;

const staticRoutes = [
  {
    route: '/',
    title: 'The Van Rental — Premium Vehicle Rentals in Southern California',
    description: 'Mercedes-Benz GLC and GLE premium SUV rentals in Southern California, with airport delivery and direct Turo booking.',
    ogImage: `${BASE}/images/gle-front.jpg`,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${BASE}/#website`,
          name: 'The Van Rental',
          url: `${BASE}/`,
          inLanguage: 'en-US',
          publisher: { '@id': `${BASE}/#business` },
        },
        {
          '@type': 'FAQPage',
          '@id': `${BASE}/#faq`,
          mainEntity: [
            ['Where can I rent a Mercedes-Benz GLC or GLE in Southern California?', 'The Van Rental offers Mercedes-Benz GLC and GLE SUV rentals in Brea and serves Los Angeles, Orange County, and surrounding Southern California cities.'],
            ['Does The Van Rental deliver vehicles to Southern California airports?', 'Yes. Airport delivery is available for LAX, John Wayne Airport (SNA), Ontario International Airport (ONT), and Long Beach Airport (LGB).'],
            ['How do I book a vehicle?', 'Choose a vehicle on thevanrental.com and continue to the linked Turo listing or the official Turo host profile to confirm current pricing and availability.'],
            ['What vehicles are available?', 'The fleet includes Mercedes-Benz GLC and GLE SUVs, Mercedes-Benz Sprinter vans, a Chevrolet Silverado 1500 LTZ, and a Toyota Grand Highlander Hybrid.'],
            ['Is The Van Rental highly rated?', 'The Van Rental is operated by a Turo All-Star Host with a 5.0 rating, 579 reviews, and 638 completed trips as reported on the linked Turo host profile.'],
          ].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
        },
      ],
    },
  },
  {
    route: '/trucks',
    title: 'Chevy Silverado 1500 Truck Rental | The Van Rental',
    description: 'Rent a 2022 Chevrolet Silverado 1500 LTZ in Southern California. 3.0L Duramax diesel, towing package, backup cameras, parking sensors. Book on Turo.',
    ogImage: `${BASE}/images/silverado.jpeg`,
  },
  {
    route: '/vans',
    title: 'Mercedes Vans — Cargo & Crew | The Van Rental',
    description: 'Rent a Mercedes Cargo Van or Crew Van in Southern California. Cargo for logistics and equipment. Crew for film productions and events. Delivery to LAX, SNA, ONT.',
    ogImage: `${BASE}/images/cargo.jpeg`,
  },
  {
    route: '/suvs',
    title: 'Mercedes GLC & GLE SUV Rental | The Van Rental',
    description: 'Rent a Mercedes GLC or GLE SUV in Southern California. Premium vehicles for airport transfers, business travel, and family trips.',
    ogImage: `${BASE}/images/glcsilver.jpeg`,
  },
  {
    route: '/mercedes-gle',
    title: '2022 Mercedes-Benz GLE 350 Rental in Brea, CA | The Van Rental',
    description: 'Rent a 2022 Mercedes-Benz GLE 350 in Southern California. Five seats, Apple CarPlay, heated seats, sunroof, parking assistance, and a 360-degree camera.',
    ogImage: `${BASE}/images/gle-front.jpg`,
  },
  {
    route: '/hybrid',
    title: 'Toyota Highlander Hybrid Rental — 7 Seats | The Van Rental',
    description: 'Rent a 7-seat Toyota Highlander Hybrid in Southern California. Perfect for large groups, family road trips, and extended travel. Delivery to LAX, SNA, ONT.',
    ogImage: `${BASE}/images/highlander.jpeg`,
  },
  {
    route: '/sprinter',
    title: 'Mercedes-Benz Sprinter Passenger Van Rental | The Van Rental',
    description: 'Rent a black Mercedes-Benz Sprinter passenger van with seating for 9 in Southern California. Ideal for productions, events, airport transfers, and group travel.',
    ogImage: `${BASE}/images/sprinter-exterior.png`,
  },
  {
    route: '/delivery',
    title: 'Where We Deliver — Airports & Cities | The Van Rental',
    description: 'The Van Rental delivers Mercedes vans, GLC & GLB SUVs, and Highlander Hybrids across Southern California — including LAX, ONT, SNA, and LGB airports, plus 19 cities in LA, Orange County, and the Inland Empire.',
    ogImage: OG_IMAGE,
  },
  {
    route: '/reviews',
    title: 'Turo Guest Reviews | The Van Rental',
    description: 'Read selected five-star Turo guest feedback for The Van Rental, a 5.0 All-Star Host with 579 reviews and 638 trips.',
    ogImage: OG_IMAGE,
  },
  {
    route: '/about',
    title: 'About Us | The Van Rental — Gavriloff LLC',
    description: 'The Van Rental by Gavriloff LLC. Premium vehicle rentals for film crews, event producers, and business travelers in Southern California.',
    ogImage: OG_IMAGE,
  },
  {
    route: '/contact',
    title: 'Book a Vehicle | The Van Rental',
    description: 'Contact The Van Rental to book a Mercedes van, GLC SUV, or Highlander hybrid in Southern California. Call (323) 610-7634 or email info@thevanrental.com.',
    ogImage: OG_IMAGE,
  },
];

const cityRoutes = cities.map((c) => ({
  route: `/van-rental-${c.slug}`,
  title: `Van Rental in ${c.name}, CA | Mercedes Vans, GLC & Highlander | The Van Rental`,
  description: `Rent a Mercedes Cargo Van, Crew Van, GLC SUV, or Highlander Hybrid in ${c.name}. Serving ${c.useCase} near ${c.landmark}. Delivery available near ${c.nearestAirport}.`,
  ogImage: c.heroImage ? `${BASE}${c.heroImage}` : OG_IMAGE,
  canonical: `${BASE}/van-rental-${c.slug}`,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Van Rental in ${c.name}, CA`,
    provider: { '@type': 'LocalBusiness', name: 'The Van Rental', url: BASE, telephone: '+13236107634' },
    areaServed: { '@type': 'City', name: c.name },
    serviceType: 'Vehicle rental and delivery',
    url: `${BASE}/van-rental-${c.slug}`,
  },
}));

const airportRoutes = airports.map((a) => ({
  route: `/airport-${a.slug}`,
  title: `${a.code} Airport Van Rental Delivery | The Van Rental`,
  description: `We deliver Mercedes Cargo Vans, Crew Vans, GLC & GLB SUVs, and Highlander Hybrids directly to ${a.name} (${a.code}). No counters, no shuttles — book on Turo and drive.`,
  ogImage: a.heroImage ? `${BASE}${a.heroImage}` : OG_IMAGE,
  canonical: `${BASE}/airport-${a.slug}`,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${a.code} Airport Van Rental Delivery`,
    provider: { '@type': 'LocalBusiness', name: 'The Van Rental', url: BASE, telephone: '+13236107634' },
    areaServed: { '@type': 'Airport', name: a.name, iataCode: a.code },
    serviceType: 'Airport vehicle rental delivery',
    url: `${BASE}/airport-${a.slug}`,
  },
}));

const allRoutes = [...staticRoutes, ...cityRoutes, ...airportRoutes];

function escape(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function injectMeta(html, { title, description, canonical, ogImage, route, structuredData }) {
  const canonicalHref = canonical || `${BASE}${route}`;
  const safeTitle = escape(title);
  const safeDesc = escape(description);
  const safeCanonical = escape(canonicalHref);
  const safeOgImage = escape(ogImage || OG_IMAGE);

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`);

  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${safeDesc}" />`
  );

  const metaBlock = [
    `<meta property="og:title" content="${safeTitle}" />`,
    `<meta property="og:description" content="${safeDesc}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="The Van Rental" />`,
    `<meta property="og:url" content="${safeCanonical}" />`,
    `<meta property="og:image" content="${safeOgImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeDesc}" />`,
    `<meta name="twitter:image" content="${safeOgImage}" />`,
    `<link rel="canonical" href="${safeCanonical}" />`,
  ].join('\n    ');

  html = html.replace('</head>', `    ${metaBlock}\n  </head>`);

  if (structuredData) {
    const json = JSON.stringify(structuredData).replace(/</g, '\\u003c');
    html = html.replace('</head>', `    <script id="page-structured-data" type="application/ld+json">${json}</script>\n  </head>`);
  }

  return html;
}

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

let count = 0;
for (const routeData of allRoutes) {
  const routePath = routeData.route.replace(/^\//, '');
  const dir = routePath ? path.join(distDir, routePath) : distDir;
  fs.mkdirSync(dir, { recursive: true });
  let html = injectMeta(baseHtml, routeData);
  html = html.replace('<div id="root"></div>', `<div id="root">${render(routeData.route)}</div>`);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  count++;
}

console.log(`Prerendered ${count} route shells with unique meta tags into client-dist/`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allRoutes
  .map(({ route }) => `  <url><loc>${BASE}${route}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod><changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq></url>`)
  .join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
process.exit(0);

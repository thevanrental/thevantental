import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'client-dist');
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
    title: 'Mercedes GLC & GLB SUV Rental | The Van Rental',
    description: 'Rent a Mercedes GLC or GLB SUV in Southern California. Premium executive vehicles for airport transfers, business travel, and client transport. Delivery to LAX, SNA, ONT.',
    ogImage: `${BASE}/images/glcsilver.jpeg`,
  },
  {
    route: '/hybrid',
    title: 'Toyota Highlander Hybrid Rental — 7 Seats | The Van Rental',
    description: 'Rent a 7-seat Toyota Highlander Hybrid in Southern California. Perfect for large groups, family road trips, and extended travel. Delivery to LAX, SNA, ONT.',
    ogImage: `${BASE}/images/highlander.jpeg`,
  },
  {
    route: '/delivery',
    title: 'Where We Deliver — Airports & Cities | The Van Rental',
    description: 'The Van Rental delivers Mercedes vans, GLC & GLB SUVs, and Highlander Hybrids across Southern California — including LAX, ONT, SNA, and LGB airports, plus 19 cities in LA, Orange County, and the Inland Empire.',
    ogImage: OG_IMAGE,
  },
  {
    route: '/reviews',
    title: 'Customer Reviews | The Van Rental',
    description: '5.0 stars on Google. Read what film producers, event coordinators, and business travelers say about renting from The Van Rental in Southern California.',
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
}));

const airportRoutes = airports.map((a) => ({
  route: `/airport-${a.slug}`,
  title: `${a.code} Airport Van Rental Delivery | The Van Rental`,
  description: `We deliver Mercedes Cargo Vans, Crew Vans, GLC & GLB SUVs, and Highlander Hybrids directly to ${a.name} (${a.code}). No counters, no shuttles — book on Turo and drive.`,
  ogImage: a.heroImage ? `${BASE}${a.heroImage}` : OG_IMAGE,
  canonical: `${BASE}/airport-${a.slug}`,
}));

const allRoutes = [...staticRoutes, ...cityRoutes, ...airportRoutes];

function escape(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function injectMeta(html, { title, description, canonical, ogImage, route }) {
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

  return html;
}

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

let count = 0;
for (const routeData of allRoutes) {
  const dir = path.join(distDir, routeData.route.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  const html = injectMeta(baseHtml, routeData);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  count++;
}

console.log(`Prerendered ${count} route shells with unique meta tags into client-dist/`);

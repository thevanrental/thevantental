import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Vans } from './pages/Vans'
import { SUVs } from './pages/SUVs'
import { Hybrid } from './pages/Hybrid'
import { Contact } from './pages/Contact'
import { Reviews } from './pages/Reviews'
import { About } from './pages/About'
import { CityPage } from './pages/CityPage'
import { CITIES } from './data/cities'
import { AirportPage } from './pages/AirportPage'
import { AIRPORTS } from './data/airports'
import { Delivery } from './pages/Delivery'
import { Trucks } from './pages/Trucks'
import { Sprinter } from './pages/Sprinter'
import { ScrollToTop } from './components/ScrollToTop'

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/suvs" element={<SUVs />} />
        <Route path="/hybrid" element={<Hybrid />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/sprinter" element={<Sprinter />} />
        {CITIES.map((city) => (
          <Route key={city.slug} path={`/van-rental-${city.slug}`} element={<CityPage city={city} />} />
        ))}
        {AIRPORTS.map((airport) => (
          <Route key={airport.slug} path={`/airport-${airport.slug}`} element={<AirportPage airport={airport} />} />
        ))}
      </Routes>
    </>
  )
}

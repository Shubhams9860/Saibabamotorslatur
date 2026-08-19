import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Saibaba Motors — Best Car Service & Repair Garage in Latur',
  description: 'Saibaba Motors at Rajiv Gandhi Chowk, Latur — trusted four-wheeler service center for engine repair, diagnostics, brakes, AC, wheel alignment and periodic maintenance. Transparent pricing, expert technicians.',
  keywords: ['Best car garage in Latur', 'Car repair in Latur', 'Car service center in Latur', 'Four-wheeler garage Latur', 'Saibaba Motors Latur', 'Vehicle maintenance Latur'],
  openGraph: {
    title: 'Saibaba Motors — Complete Car Care Under One Roof',
    description: 'Professional diagnostics, maintenance and repairs for your four-wheeler at Rajiv Gandhi Chowk, Latur.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: 'index, follow',
}

export const viewport = {
  themeColor: '#0b0b0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Saibaba Motors',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f',
    '@id': 'https://saibabamotors.com',
    url: 'https://saibabamotors.com',
    telephone: '+91-9850051244',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rajiv Gandhi Chowk',
      addressLocality: 'Latur',
      addressRegion: 'Maharashtra',
      postalCode: '413512',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 18.3811024, longitude: 76.559354 },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens: '09:00', closes: '20:00',
    }],
  }
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased bg-[#0b0b0d] text-neutral-100 selection:bg-orange-500 selection:text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  )
}

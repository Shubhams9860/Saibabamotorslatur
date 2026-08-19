'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, MapPin, MessageCircle, Wrench, Cog, Gauge, Zap, Snowflake, Battery,
  Disc3, CircleDot, Settings2, ShieldCheck, Clock, Users, Star, ChevronRight,
  ChevronLeft, Menu, X, Car, CheckCircle2, Send, Mail, Calendar, Languages
} from 'lucide-react'

const PHONE = '+919850051244'
const PHONE_DISPLAY = '+91 98500 51244'
const WHATSAPP = '919850051244'
const OWNER = 'Sangappa Lasune'
const MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=18.3811024%2C76.559354&destination_place_id=ChIJMWcPmmeDzzsRjaj0t_LaCGg&travelmode=driving'
const MAPS_PLACE_URL = 'https://www.google.com/maps/place/Saibaba+Motors,+Rajiv+Gandhi+Chowk,+Latur/@18.3811024,76.559354,17z'
const EMBED_MAP = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.6!2d76.559354!3d18.3811024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83679a0f6731%3A0x68f2daf2b7f4a88d!2sSaibaba%20Motors%2C%20Rajiv%20Gandhi%20Chowk%20%2C%20Latur!5e0!3m2!1sen!2sin!4v1700000000000'

const HERO_IMG = 'https://customer-assets-v7afamib.emergentagent.net/job_auto-repair-latur/artifacts/f0k8o4zc_6.jpeg'
const GALLERY = [
  'https://customer-assets-v7afamib.emergentagent.net/job_auto-repair-latur/artifacts/9biesolu_1.jpeg',
  'https://customer-assets-v7afamib.emergentagent.net/job_auto-repair-latur/artifacts/f0k8o4zc_6.jpeg',
  'https://customer-assets-v7afamib.emergentagent.net/job_auto-repair-latur/artifacts/3dw0jy15_2.jpeg',
  'https://customer-assets-v7afamib.emergentagent.net/job_auto-repair-latur/artifacts/2rnn6oml_4.jpeg',
  'https://customer-assets-v7afamib.emergentagent.net/job_auto-repair-latur/artifacts/9y6vm3so_5.jpeg',
]

const I18N = {
  en: {
    nav: { services: 'Services', why: 'Why Us', gallery: 'Gallery', reviews: 'Reviews', contact: 'Contact', book: 'Book Now', call: 'Call Now' },
    brand: { sub: `By ${OWNER} • Latur` },
    hero: {
      badge: 'Trusted Four-Wheeler Service Partner • Latur',
      title1: 'Complete', title2: 'Car Care', title3: 'Under One Roof',
      subtitle: 'Professional diagnostics, maintenance, repairs and trusted service for your vehicle — right at Rajiv Gandhi Chowk, Latur.',
      callBtn: 'Call Now', directionsBtn: 'Get Directions',
    },
    stats: [
      { value: '10,000+', label: 'Happy Customers' },
      { value: '15+', label: 'Years of Experience' },
      { value: '100%', label: 'Transparent Pricing' },
      { value: '24hr', label: 'Fast Turnaround' },
    ],
    services: {
      eyebrow: 'Our Services', title: 'Everything Your Car Needs',
      desc: 'From routine maintenance to complex repairs — one workshop, every solution.',
      learnMore: 'Learn more',
      items: [
        { title: 'Engine Repair', desc: 'Complete engine diagnostics, overhaul & rebuild by expert technicians.' },
        { title: 'Oil & Filter Change', desc: 'Genuine oils, OEM filters and full service to keep your engine healthy.' },
        { title: 'Brake Repair', desc: 'Brake pads, discs, calipers and ABS diagnostics for total safety.' },
        { title: 'Clutch Repair', desc: 'Smooth gear shifts with precision clutch inspection and replacement.' },
        { title: 'Suspension Repair', desc: 'Shocks, struts and bushings restored for a comfortable ride.' },
        { title: 'Battery Replacement', desc: 'Original batteries with free health check and doorstep support.' },
        { title: 'AC Service', desc: 'AC gas refill, compressor repair and cabin cooling optimization.' },
        { title: 'Wheel Alignment', desc: 'Computerized alignment & balancing for tyre longevity.' },
        { title: 'Electrical Diagnostics', desc: 'Wiring, sensors & ECU scan with modern OBD-II equipment.' },
        { title: 'Vehicle Inspection', desc: '50+ point pre-purchase and pre-trip inspection reports.' },
        { title: 'Periodic Maintenance', desc: 'Scheduled servicing to extend the life of your vehicle.' },
        { title: 'Transmission Repair', desc: 'Manual & automatic gearbox service by certified experts.' },
      ],
    },
    why: {
      eyebrow: 'Why Choose Us', title: 'Built On Trust & Expertise',
      desc: 'Six reasons Latur trusts Saibaba Motors with their vehicles.',
      items: [
        { title: 'Experienced Technicians', desc: 'A skilled team trained on all Indian & imported car brands.' },
        { title: 'Transparent Pricing', desc: 'Upfront estimates, no hidden charges — ever.' },
        { title: 'Quality Workmanship', desc: 'OEM-grade parts and rigorous quality checks on every job.' },
        { title: 'Fast Turnaround', desc: 'Most services completed the same day you drop off.' },
        { title: 'Advanced Diagnostics', desc: 'Modern OBD-II scanners for accurate fault identification.' },
        { title: 'Customer-First Service', desc: 'Honest advice and post-service support you can trust.' },
      ],
    },
    gallery: { eyebrow: 'Workshop Gallery', title: 'Inside Saibaba Motors', desc: 'A glimpse of our workshop, tools and craftsmanship.', chip: 'Workshop' },
    reviews: {
      eyebrow: 'Customer Reviews', title: 'Loved By Drivers Across Latur',
      items: [
        { name: 'Rahul Deshmukh', vehicle: 'Hyundai Creta', service: 'Engine Overhaul', text: 'Saibaba Motors gave my Creta a new life. Transparent pricing and world-class work. Highly recommended in Latur!' },
        { name: 'Priya Kulkarni', vehicle: 'Maruti Swift', service: 'AC Service', text: 'Cooling was gone in peak summer. They fixed it in a few hours. Cool, calm, professional staff.' },
        { name: 'Amit Patil', vehicle: 'Mahindra XUV700', service: 'Wheel Alignment', text: 'Best alignment I have ever had. My SUV drives straight as an arrow now. Value for money.' },
        { name: 'Sneha Joshi', vehicle: 'Honda City', service: 'Brake Repair', text: 'Explained everything clearly, showed me the worn pads, and did the job neatly. Trustworthy garage.' },
        { name: 'Vikas Shinde', vehicle: 'Toyota Innova', service: 'Periodic Maintenance', text: 'My family vehicle is in safe hands. Always on time, always honest. 10/10.' },
      ],
    },
    contact: {
      eyebrow: 'Get In Touch', title: 'Visit Our Workshop',
      desc: "Drop by at Rajiv Gandhi Chowk, Latur or reach out — we're here to help.",
      owner: 'Owner', ownerName: OWNER,
      address: 'Address', addressVal: 'Saibaba Motors, Rajiv Gandhi Chowk, Latur, Maharashtra',
      phone: 'Phone', hours: 'Working Hours',
      hoursVal: 'Mon – Sat • 9:00 AM – 8:00 PM', sundayVal: 'Sunday • On Call',
      call: 'Call', whatsapp: 'WhatsApp',
      formTitle: 'Send an enquiry',
      name: 'Your name', phoneField: 'Phone number',
      vehicle: 'Vehicle (e.g. Hyundai Creta)', message: 'How can we help?',
      submit: 'Send Enquiry', submitting: 'Sending…',
      success: "Thanks! We'll call you back shortly.",
      error: 'Something went wrong. Please call us directly.',
    },
    footer: { rights: 'All rights reserved.' },
    booking: {
      eyebrow: 'Online Booking', title: 'Book Your Service Slot',
      desc: 'Pick a date, time and service — we\'ll have your car ready when you arrive.',
      name: 'Full name', phone: 'Phone number', vehicle: 'Vehicle (e.g. Hyundai Creta)',
      service: 'Select Service', date: 'Preferred Date', time: 'Preferred Time',
      notes: 'Any notes for us? (optional)',
      submit: 'Confirm Booking on WhatsApp', submitting: 'Opening WhatsApp…',
      helper: 'Your booking details will be sent to Saibaba Motors on WhatsApp for confirmation.',
      success: 'WhatsApp opened! Please press Send to confirm your booking.',
      error: 'Could not open WhatsApp. Please call us directly.',
      validate: 'Please fill in all required fields (name, phone, service, date and time).',
      slots: ['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM'],
    },
  },
  mr: {
    nav: { services: 'सेवा', why: 'आम्ही का?', gallery: 'गॅलरी', reviews: 'रिव्ह्यूज', contact: 'संपर्क', book: 'बुक करा', call: 'कॉल करा' },
    brand: { sub: `${OWNER} • लातूर` },
    hero: {
      badge: 'लातूरचे विश्वासू फोर-व्हीलर सर्व्हिस पार्टनर',
      title1: 'संपूर्ण', title2: 'कार सेवा', title3: 'एकाच छताखाली',
      subtitle: 'तज्ञ डायग्नोस्टिक्स, देखभाल, दुरुस्ती आणि विश्वासार्ह सेवा — राजीव गांधी चौक, लातूर येथे.',
      callBtn: 'कॉल करा', directionsBtn: 'रस्ता दाखवा',
    },
    stats: [
      { value: '१०,०००+', label: 'समाधानी ग्राहक' },
      { value: '१५+', label: 'वर्षांचा अनुभव' },
      { value: '१००%', label: 'पारदर्शक दर' },
      { value: '२४ तास', label: 'जलद सेवा' },
    ],
    services: {
      eyebrow: 'आमच्या सेवा', title: 'आपल्या गाडीसाठी सर्व काही',
      desc: 'नियमित देखभालीपासून मोठ्या दुरुस्तीपर्यंत — एका ठिकाणी सर्व उपाय.',
      learnMore: 'अधिक जाणून घ्या',
      items: [
        { title: 'इंजिन दुरुस्ती', desc: 'तज्ञ मेकॅनिकद्वारे संपूर्ण इंजिन डायग्नोस्टिक्स, ओव्हरहॉल आणि रिबिल्ड.' },
        { title: 'ऑइल आणि फिल्टर बदल', desc: 'इंजिन उत्तम ठेवण्यासाठी जेन्युइन ऑइल, OEM फिल्टर आणि पूर्ण सर्व्हिस.' },
        { title: 'ब्रेक दुरुस्ती', desc: 'सुरक्षिततेसाठी ब्रेक पॅड, डिस्क, कॅलिपर आणि ABS डायग्नोस्टिक्स.' },
        { title: 'क्लच दुरुस्ती', desc: 'गिअर सहज बदलण्यासाठी अचूक क्लच तपासणी आणि बदल.' },
        { title: 'सस्पेन्शन दुरुस्ती', desc: 'आरामदायी प्रवासासाठी शॉक, स्ट्रट्स आणि बुशिंग्स दुरुस्त.' },
        { title: 'बॅटरी बदल', desc: 'ओरिजनल बॅटरी, मोफत हेल्थ चेक आणि घरपोच सेवा.' },
        { title: 'AC सर्व्हिस', desc: 'AC गॅस रिफिल, कंप्रेसर दुरुस्ती आणि केबिन कूलिंग.' },
        { title: 'व्हील अलाइनमेंट', desc: 'टायर टिकाऊपणासाठी कॉम्प्युटरीकृत अलाइनमेंट आणि बॅलन्सिंग.' },
        { title: 'इलेक्ट्रिकल डायग्नोस्टिक्स', desc: 'आधुनिक OBD-II उपकरणांसह वायरिंग, सेन्सर आणि ECU स्कॅन.' },
        { title: 'गाडीची तपासणी', desc: 'खरेदीपूर्व आणि प्रवासपूर्व ५०+ पॉइंट तपासणी अहवाल.' },
        { title: 'नियमित देखभाल', desc: 'आपल्या गाडीचे आयुष्य वाढवण्यासाठी नियोजित सर्व्हिसिंग.' },
        { title: 'ट्रान्समिशन दुरुस्ती', desc: 'प्रमाणित तज्ञांकडून मॅन्युअल आणि ऑटोमॅटिक गिअरबॉक्स सेवा.' },
      ],
    },
    why: {
      eyebrow: 'आम्ही का?', title: 'विश्वास आणि तज्ञतेवर आधारित',
      desc: 'लातूर साईबाबा मोटर्सवर विश्वास ठेवण्याची सहा कारणे.',
      items: [
        { title: 'अनुभवी तंत्रज्ञ', desc: 'सर्व भारतीय आणि आयात केलेल्या गाड्यांसाठी प्रशिक्षित कुशल टीम.' },
        { title: 'पारदर्शक दर', desc: 'आगाऊ अंदाज, कोणतेही छुपे शुल्क नाही — कधीही नाही.' },
        { title: 'दर्जेदार काम', desc: 'OEM दर्जाचे पार्ट्स आणि प्रत्येक कामाची कठोर तपासणी.' },
        { title: 'जलद सेवा', desc: 'बहुतांश सर्व्हिस त्याच दिवशी पूर्ण.' },
        { title: 'प्रगत डायग्नोस्टिक्स', desc: 'अचूक दोष ओळखण्यासाठी आधुनिक OBD-II स्कॅनर.' },
        { title: 'ग्राहक-प्रथम सेवा', desc: 'प्रामाणिक सल्ला आणि सेवा नंतरचा विश्वासार्ह पाठिंबा.' },
      ],
    },
    gallery: { eyebrow: 'वर्कशॉप गॅलरी', title: 'साईबाबा मोटर्समध्ये एक झलक', desc: 'आमचे वर्कशॉप, साधने आणि कारागिरीचे दर्शन.', chip: 'वर्कशॉप' },
    reviews: {
      eyebrow: 'ग्राहक अभिप्राय', title: 'लातूरच्या ड्रायव्हर्सचे आवडते',
      items: [
        { name: 'राहुल देशमुख', vehicle: 'ह्युंदाई क्रेटा', service: 'इंजिन ओव्हरहॉल', text: 'साईबाबा मोटर्सने माझ्या क्रेटाला नवीन जीवन दिले. पारदर्शक दर आणि जागतिक दर्जाचे काम. लातूरमध्ये सर्वोत्तम!' },
        { name: 'प्रिया कुलकर्णी', vehicle: 'मारुती स्विफ्ट', service: 'AC सर्व्हिस', text: 'उन्हाळ्यात AC बंद पडले. काही तासांतच दुरुस्त केले. शांत, व्यावसायिक स्टाफ.' },
        { name: 'अमित पाटील', vehicle: 'महिंद्रा XUV700', service: 'व्हील अलाइनमेंट', text: 'आतापर्यंतचे सर्वोत्तम अलाइनमेंट. माझी SUV आता एकदम सरळ चालते. पैशाचा योग्य मोबदला.' },
        { name: 'स्नेहा जोशी', vehicle: 'होंडा सिटी', service: 'ब्रेक दुरुस्ती', text: 'सर्व काही स्पष्ट समजावले, झिजलेले पॅड दाखवले आणि नीटनेटके काम केले. विश्वासार्ह गॅरेज.' },
        { name: 'विकास शिंदे', vehicle: 'टोयोटा इनोव्हा', service: 'नियमित देखभाल', text: 'माझी कौटुंबिक गाडी सुरक्षित हातांत आहे. नेहमी वेळेवर, नेहमी प्रामाणिक. १०/१०.' },
      ],
    },
    contact: {
      eyebrow: 'संपर्क करा', title: 'आमच्या वर्कशॉपला भेट द्या',
      desc: 'राजीव गांधी चौक, लातूर येथे या किंवा संपर्क करा — आम्ही मदतीसाठी आहोत.',
      owner: 'मालक', ownerName: 'सांगप्पा लासुणे',
      address: 'पत्ता', addressVal: 'साईबाबा मोटर्स, राजीव गांधी चौक, लातूर, महाराष्ट्र',
      phone: 'फोन', hours: 'कामाच्या वेळा',
      hoursVal: 'सोम – शनि • सकाळी ९:०० ते रात्री ८:००', sundayVal: 'रविवार • कॉल केल्यावर',
      call: 'कॉल', whatsapp: 'व्हॉट्सअॅप',
      formTitle: 'चौकशी पाठवा',
      name: 'आपले नाव', phoneField: 'फोन नंबर',
      vehicle: 'गाडी (उदा. ह्युंदाई क्रेटा)', message: 'आम्ही कशी मदत करू शकतो?',
      submit: 'चौकशी पाठवा', submitting: 'पाठवत आहे…',
      success: 'धन्यवाद! आम्ही लवकरच परत कॉल करू.',
      error: 'काहीतरी चूक झाली. कृपया थेट कॉल करा.',
    },
    footer: { rights: 'सर्व हक्क राखीव.' },
    booking: {
      eyebrow: 'ऑनलाइन बुकिंग', title: 'सर्व्हिस स्लॉट बुक करा',
      desc: 'तारीख, वेळ आणि सेवा निवडा — तुम्ही येताच तुमची गाडी तयार असेल.',
      name: 'पूर्ण नाव', phone: 'फोन नंबर', vehicle: 'गाडी (उदा. ह्युंदाई क्रेटा)',
      service: 'सेवा निवडा', date: 'तारीख', time: 'वेळ',
      notes: 'काही सूचना? (ऐच्छिक)',
      submit: 'व्हॉट्सअॅपवर बुकिंग निश्चित करा', submitting: 'व्हॉट्सअॅप उघडत आहे…',
      helper: 'आपले बुकिंग तपशील पुष्टीकरणासाठी व्हॉट्सअॅपवर साईबाबा मोटर्सला पाठवले जातील.',
      success: 'व्हॉट्सअॅप उघडले! कृपया बुकिंग निश्चित करण्यासाठी Send दाबा.',
      error: 'व्हॉट्सअॅप उघडता आले नाही. कृपया थेट कॉल करा.',
      validate: 'कृपया सर्व आवश्यक माहिती भरा (नाव, फोन, सेवा, तारीख आणि वेळ).',
      slots: ['सकाळी ९:००','सकाळी १०:००','सकाळी ११:००','दुपारी १२:००','दुपारी २:००','दुपारी ३:००','दुपारी ४:००','संध्याकाळी ५:००','संध्याकाळी ६:००'],
    },
  },
}

const SERVICE_ICONS = [Cog, Wrench, Disc3, Settings2, CircleDot, Battery, Snowflake, Gauge, Zap, ShieldCheck, Calendar, Car]
const STAT_ICONS = [Users, Wrench, ShieldCheck, Clock]
const WHY_ICONS = [Users, ShieldCheck, Star, Clock, Gauge, MessageCircle]

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

function LangToggle({ lang, setLang }) {
  return (
    <button onClick={() => setLang(lang === 'en' ? 'mr' : 'en')} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white transition">
      <Languages className="w-4 h-4 text-orange-400" />
      <span className="font-semibold">{lang === 'en' ? 'मराठी' : 'English'}</span>
    </button>
  )
}

function Navbar({ lang, setLang }) {
  const t = I18N[lang]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#why', label: t.nav.why },
    { href: '#booking', label: t.nav.book },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ]
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/60 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 grid place-items-center shadow-lg shadow-orange-600/30">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-white tracking-tight">Saibaba Motors</div>
            <div className="text-[10px] uppercase tracking-widest text-orange-400/90">{t.brand.sub}</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-300 hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition shadow-lg shadow-orange-600/20">
            <Phone className="w-4 h-4" /> {t.nav.call}
          </a>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <button className="text-white" onClick={() => setOpen(v => !v)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/5">
            <div className="px-5 py-4 flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-neutral-200">{l.label}</a>
              ))}
              <a href={`tel:${PHONE}`} className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-500 text-white font-semibold">
                <Phone className="w-4 h-4" /> {t.nav.call} {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero({ lang }) {
  const t = I18N[lang]
  return (
    <section id="top" className="relative min-h-screen overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Saibaba Motors workshop" className="w-full h-full object-cover opacity-40 mask-fade-b" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0b0b0d]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-36 lg:pt-48 pb-20">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs uppercase tracking-widest text-orange-300">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" /> {t.hero.badge}
        </motion.div>
        <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }} className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02]">
          {t.hero.title1} <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">{t.hero.title2}</span><br />
          {t.hero.title3}
        </motion.h1>
        <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-300">
          {t.hero.subtitle}
        </motion.p>
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }} className="mt-9 flex flex-wrap items-center gap-4">
          <a href={`tel:${PHONE}`} className="shine group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base shadow-2xl shadow-orange-600/30 transition">
            <Phone className="w-5 h-5" /> {t.hero.callBtn}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 backdrop-blur transition">
            <MapPin className="w-5 h-5" /> {t.hero.directionsBtn}
          </a>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.5 }} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {t.stats.map((s, i) => {
            const Icon = STAT_ICONS[i]
            return (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-4 lg:p-5">
                <Icon className="w-5 h-5 text-orange-400 mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 mt-1">{s.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-xs uppercase tracking-widest text-orange-300">{eyebrow}</div>
      <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">{title}</h2>
      {desc && <p className="mt-4 text-neutral-400 text-base md:text-lg">{desc}</p>}
    </motion.div>
  )
}

function Services({ lang }) {
  const t = I18N[lang].services
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} desc={t.desc} />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {t.items.map((s, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 hover:border-orange-500/40 transition">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 grid place-items-center border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition">
                    {t.learnMore} <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhyUs({ lang }) {
  const t = I18N[lang].why
  return (
    <section id="why" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} desc={t.desc} />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((w, i) => {
            const Icon = WHY_ICONS[i]
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-400 grid place-items-center border border-orange-500/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Gallery({ lang }) {
  const t = I18N[lang].gallery
  const [active, setActive] = useState(null)
  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} desc={t.desc} />
        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {GALLERY.map((src, i) => (
            <motion.button key={i} onClick={() => setActive(src)} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.05 }} className="group block w-full break-inside-avoid rounded-2xl overflow-hidden border border-white/10 relative">
              <img src={src} alt="Workshop" loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 right-3 text-left opacity-0 group-hover:opacity-100 transition">
                <div className="text-xs uppercase tracking-widest text-orange-300">{t.chip}</div>
                <div className="text-sm font-semibold text-white">Saibaba Motors • Latur</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)} className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-xl p-4 grid place-items-center">
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={active} className="max-h-[90vh] max-w-[95vw] rounded-2xl border border-white/10" alt="Preview" />
            <button onClick={() => setActive(null)} className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 grid place-items-center text-white"><X /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Testimonials({ lang }) {
  const t = I18N[lang].reviews
  const [i, setI] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setI(v => (v + 1) % t.items.length), 5000)
    return () => clearInterval(timer)
  }, [t.items.length])
  const item = t.items[i]
  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-14 relative">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
              <div className="flex items-center gap-1 text-orange-400">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-5 h-5 fill-orange-400" />)}
              </div>
              <blockquote className="mt-5 text-xl md:text-2xl leading-relaxed text-neutral-100 font-medium">“{item.text}”</blockquote>
              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-neutral-400">{item.vehicle} • {item.service}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setI(v => (v - 1 + t.items.length) % t.items.length)} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white hover:bg-white/10"><ChevronLeft className="w-5 h-5" /></button>
                  <button onClick={() => setI(v => (v + 1) % t.items.length)} className="w-10 h-10 rounded-full bg-orange-500 grid place-items-center text-white hover:bg-orange-600"><ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 flex items-center justify-center gap-2">
            {t.items.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? 'w-8 bg-orange-500' : 'w-3 bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Booking({ lang }) {
  const t = I18N[lang]
  const services = I18N[lang].services.items.map(x => x.title)
  const today = new Date().toISOString().split('T')[0]
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', service: '', date: today, time: '', notes: '' })
  const [status, setStatus] = useState('idle')
  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      setStatus('validate')
      return
    }
    setStatus('loading')
    try {
      const message = `🚗 NEW SERVICE BOOKING - SAIBABA MOTORS\n👤 Customer Name: ${form.name}\n📞 Customer Phone: ${form.phone}\n🚘 Vehicle: ${form.vehicle || 'N/A'}\n🔧 Service: ${form.service}\n📅 Preferred Date: ${form.date}\n⏰ Preferred Time: ${form.time}${form.notes ? `\n📝 Notes: ${form.notes}` : ''}\n\nPlease confirm this service booking with the customer.`
      const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
      const win = window.open(whatsappUrl, '_blank')
      if (!win) {
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }
  return (
    <section id="booking" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow={t.booking.eyebrow} title={t.booking.title} desc={t.booking.desc} />
        <motion.form onSubmit={submit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={t.booking.name} className="px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60" />
          <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder={t.booking.phone} className="px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60" />
          <input value={form.vehicle} onChange={e => setForm({ ...form, vehicle: e.target.value })} placeholder={t.booking.vehicle} className="px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60" />
          <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-orange-500/60">
            <option value="" className="bg-neutral-900">{t.booking.service}</option>
            {services.map(s => <option key={s} value={s} className="bg-neutral-900">{s}</option>)}
          </select>
          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-400 mb-2 block">{t.booking.date}</label>
            <input required type="date" min={today} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-orange-500/60 [color-scheme:dark]" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-400 mb-2 block">{t.booking.time}</label>
            <div className="grid grid-cols-3 gap-2">
              {t.booking.slots.map((slot, i) => (
                <button type="button" key={i} onClick={() => setForm({ ...form, time: slot })} className={`px-2 py-2.5 rounded-lg text-xs font-medium border transition ${form.time === slot ? 'bg-orange-500 border-orange-500 text-white' : 'bg-black/40 border-white/10 text-neutral-300 hover:border-orange-500/40'}`}>{slot}</button>
              ))}
            </div>
          </div>
          <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder={t.booking.notes} rows={3} className="md:col-span-2 px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60" />
          <button disabled={status === 'loading' || !form.time} className="md:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-base shadow-2xl shadow-orange-600/30">
            {status === 'loading' ? t.booking.submitting : <><MessageCircle className="w-5 h-5" /> {t.booking.submit}</>}
          </button>
          <p className="md:col-span-2 text-center text-xs text-neutral-400 -mt-2">{t.booking.helper}</p>
          {status === 'validate' && <div className="md:col-span-2 text-amber-400 text-sm">{t.booking.validate}</div>}
          {status === 'success' && <div className="md:col-span-2 flex items-center gap-2 text-emerald-400 text-sm"><CheckCircle2 className="w-4 h-4" /> {t.booking.success}</div>}
          {status === 'error' && <div className="md:col-span-2 text-red-400 text-sm">{t.booking.error}</div>}
        </motion.form>
      </div>
    </section>
  )
}

function Contact({ lang }) {
  const t = I18N[lang].contact
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', message: '' })
  const [status, setStatus] = useState('idle')
  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error('fail')
      setStatus('success')
      setForm({ name: '', phone: '', vehicle: '', message: '' })
    } catch {
      setStatus('error')
    }
  }
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} desc={t.desc} />
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-3xl border border-white/10 overflow-hidden bg-black/40 min-h-[420px]">
            <iframe title="Saibaba Motors on Google Maps" src={EMBED_MAP} className="w-full h-full min-h-[420px]" style={{ filter: 'grayscale(0.6) contrast(1.1) invert(0.92) hue-rotate(180deg)' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-400 grid place-items-center border border-orange-500/20"><Users className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-400">{t.owner}</div>
                  <div className="text-white font-medium">{t.ownerName}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-400 grid place-items-center border border-orange-500/20"><MapPin className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-400">{t.address}</div>
                  <div className="text-white font-medium">{t.addressVal}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-400 grid place-items-center border border-orange-500/20"><Phone className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-400">{t.phone}</div>
                  <a href={`tel:${PHONE}`} className="text-white font-medium">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-400 grid place-items-center border border-orange-500/20"><Clock className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-400">{t.hours}</div>
                  <div className="text-white font-medium">{t.hoursVal}</div>
                  <div className="text-sm text-neutral-400">{t.sundayVal}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold"><Phone className="w-4 h-4" /> {t.call}</a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold"><MessageCircle className="w-4 h-4" /> {t.whatsapp}</a>
              </div>
            </div>
            <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-3">
              <div className="text-white font-semibold flex items-center gap-2"><Mail className="w-4 h-4 text-orange-400" /> {t.formTitle}</div>
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={t.name} className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60" />
              <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder={t.phoneField} className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60" />
              <input value={form.vehicle} onChange={e => setForm({ ...form, vehicle: e.target.value })} placeholder={t.vehicle} className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60" />
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder={t.message} rows={3} className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/60" />
              <button disabled={status === 'loading'} className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold">
                {status === 'loading' ? t.submitting : <>{t.submit} <Send className="w-4 h-4" /></>}
              </button>
              {status === 'success' && <div className="flex items-center gap-2 text-emerald-400 text-sm"><CheckCircle2 className="w-4 h-4" /> {t.success}</div>}
              {status === 'error' && <div className="text-red-400 text-sm">{t.error}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ lang }) {
  const t = I18N[lang]
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-500 grid place-items-center"><Wrench className="w-4 h-4 text-white" /></div>
          <div className="text-white font-semibold">Saibaba Motors</div>
          <span className="text-neutral-500 text-sm">• {t.contact.addressVal}</span>
        </div>
        <div className="text-sm text-neutral-500">© {new Date().getFullYear()} Saibaba Motors. {t.footer.rights}</div>
      </div>
    </footer>
  )
}

function StickyCTAs() {
  return (
    <div className="fixed z-40 right-4 bottom-4 md:right-6 md:bottom-6 flex flex-col gap-3">
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 grid place-items-center text-white shadow-2xl pulse-ring" aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>
      <a href={`tel:${PHONE}`} className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 grid place-items-center text-white shadow-2xl" aria-label="Call">
        <Phone className="w-6 h-6" />
      </a>
      <a href={MAPS_URL} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white text-black hover:bg-neutral-200 grid place-items-center shadow-2xl" aria-label="Directions">
        <MapPin className="w-6 h-6" />
      </a>
    </div>
  )
}

function App() {
  const [lang, setLang] = useState('en')
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('sm_lang') : null
    if (saved === 'mr' || saved === 'en') setLang(saved)
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('sm_lang', lang)
  }, [lang])
  return (
    <main>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <WhyUs lang={lang} />
      <Booking lang={lang} />
      <Gallery lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <StickyCTAs />
    </main>
  )
}

export default App

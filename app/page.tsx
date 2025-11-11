"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const [scrollY, setScrollY] = useState(0)
  const isMobile = useIsMobile()

  // State for mobile submenu expansion
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Oblicz cenę na podstawie liczby parafian
  const getPricing = (count: number) => {
    if (count <= 2500) {
      return { monthly: 97, yearly: 997, label: "do 2 500" }
    } else if (count <= 5500) {
      return { monthly: 149, yearly: 1490, label: "do 5 500" }
    } else if (count <= 12000) {
      return { monthly: 197, yearly: 1970, label: "do 12 000" }
    } else {
      return { monthly: null, yearly: null, label: "Więcej niż 12 000" }
    }
  }

  const currentPricing = getPricing(2500) // Placeholder value, adjust as needed

  const features = [
    {
      title: "Sakramenty",
      description: "Rejestracja chrztów, bierzmowań, ślubów i pogrzebów z numeracją aktów",
      icon: "⛪",
    },
    {
      title: "Intencje Mszalne",
      description: "Kalendarz mszy i zarządzanie intencjami z ofiarami",
      icon: "📅",
    },
    {
      title: "Dokumenty PDF",
      description: "Automatyczne generowanie świadectw i dokumentów parafialnych",
      icon: "📄",
    },
    {
      title: "Synchronizacja",
      description: "Praca offline z automatyczną synchronizacją danych w chmurze",
      icon: "🔄",
    },
    {
      title: "Konfiguracja Parafii",
      description: "Zarządzanie danymi parafii, kapłanami i ustawieniami",
      icon: "⚙️",
    },
    {
      title: "Bezpieczeństwo",
      description: "Szyfrowanie danych i system kontroli dostępu",
      icon: "🔒",
    },
  ]

  const sacraments = [
    {
      id: "chrzty",
      title: "Chrzty Święte",
      icon: "💧",
      description: "Kompleksowe zarządzanie sakramentem chrztu świętego",
      features: [
        "Dane dziecka i rodziców",
        "Chrzestni z pełnymi danymi",
        "Numeracja aktów chrztów",
        "Historia sakramentów",
        "Relacje rodzinne",
      ],
      documents: [
        "Świadectwo chrztu",
        "Kancelaryjna karta chrztu",
        "Ad sacra (wyciąg z aktu)",
        "Świadectwo rodzica chrzestnego",
        "Przygotowanie do chrztu",
        "Zgoda na chrzest poza parafią",
      ],
    },
    {
      id: "bierzmowania",
      title: "Bierzmowania",
      icon: "🕊️",
      description: "Organizacja i dokumentacja sakramentu bierzmowania",
      features: [
        "Lista kandydatów",
        "Świadkowie bierzmowania",
        "Dane biskupa",
        "Katecheza przedbierzmowaniowa",
        "Historia przygotowania",
      ],
      documents: ["Świadectwo bierzmowania", "Świadectwo świadka kandydata"],
    },
    {
      id: "sluby",
      title: "Śluby",
      icon: "💍",
      description: "Pełna obsługa sakramentu małżeństwa",
      features: [
        "Dane nowożeńców",
        "Świadkowie ślubu",
        "Dokumentacja przedślubna",
        "Kurs przedmałżeński",
        "Protokoły kościelne",
      ],
      documents: ["Świadectwo ślubu"],
    },
    {
      id: "pogrzeby",
      title: "Pogrzeby",
      icon: "🕯️",
      description: "Dokumentacja ceremonii pogrzebowych",
      features: ["Dane zmarłego", "Rodzina zmarłego", "Ceremonie pogrzebowe", "Miejsca pochówku", "Historia liturgii"],
      documents: ["Świadectwo pogrzebu", "Zgoda na pogrzeb poza parafią"],
    },
  ]

  const menuItems_original = [
    // Renamed to avoid redeclaration
    {
      label: "Funkcje",
      href: "#funkcje",
      icon: "✨",
    },
    {
      label: "Sakramenty",
      href: "#sakramenty",
      icon: "⛪",
      submenu: [
        { label: "Chrzty", href: "#chrzty", icon: "💧" },
        { label: "Bierzmowania", href: "#bierzmowania", icon: "🕊️" },
        { label: "Śluby", href: "#sluby", icon: "💍" },
        { label: "Pogrzeby", href: "#pogrzeby", icon: "🕯️" },
      ],
    },
    {
      label: "Wydruki",
      href: "#wydruki",
      icon: "📄",
    },
    {
      label: "Platformy",
      href: "#platformy",
      icon: "💻",
    },
    {
      label: "FAQ",
      href: "#faq",
      icon: "❓",
    },
    {
      label: "Cennik",
      href: "#cennik",
      icon: "💰",
    },
  ]

  const landingCategories = [
    {
      id: "parafie",
      title: "Parafie i Kościoły",
      icon: "⛪",
      description: "Nowoczesne strony dla wspólnot religijnych",
      href: "/parafie",
    },
    {
      id: "szkoly",
      title: "Szkoły i Uczelnie",
      icon: "🎓",
      description: "Platformy edukacyjne i portale szkół",
      href: "/szkoly",
    },
    {
      id: "przedszkola",
      title: "Przedszkola i Żłobki",
      icon: "🧸",
      description: "Kolorowe strony dla najmłodszych",
      href: "/przedszkola",
    },
    {
      id: "urzedy",
      title: "Urzędy i Administracja",
      icon: "🏛️",
      description: "Portale dla instytucji publicznych",
      href: "/urzedy",
    },
    {
      id: "firmy",
      title: "Firmy i Korporacje",
      icon: "🏢",
      description: "Strony biznesowe i korporacyjne",
      href: "/firmy",
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      icon: "🛒",
      description: "Sklepy internetowe i platformy sprzedażowe",
      href: "/ecommerce",
    },
    {
      id: "medycyna",
      title: "Gabinety i Kliniki",
      icon: "🏥",
      description: "Strony dla placówek medycznych",
      href: "/medycyna",
    },
    {
      id: "gastronomia",
      title: "Hotele i Restauracje",
      icon: "🍽️",
      description: "Witryny dla branży hotelarskiej i gastronomicznej",
      href: "/gastronomia",
    },
  ]

  const services = [
    {
      id: "strony-www",
      icon: "🌐",
      title: "Strony Internetowe",
      description: "Nowoczesne, responsywne strony WWW z wykorzystaniem najnowszych technologii",
      features: [
        "Strony instytucji publicznych",
        "Witryny parafii i kościołów",
        "Platformy edukacyjne dla szkół",
        "Strony przedszkoli i żłobków",
        "Portale urzędów",
        "Landing pages biznesowe",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      id: "ai-solutions",
      icon: "🤖",
      title: "Rozwiązania AI",
      description: "Sztuczna inteligencja w służbie Twojego biznesu i procesów",
      features: [
        "Automatyzacja obiegu dokumentów",
        "AI w księgowości i fakturowaniu",
        "Chatboty obsługi klienta",
        "Analiza i klasyfikacja dokumentów",
        "Asystenci głosowi AI",
        "Inteligentne wyszukiwarki",
      ],
      tech: ["OpenAI", "Claude", "Gemini", "AI SDK"],
    },
    {
      id: "digitalizacja",
      icon: "📁",
      title: "Digitalizacja Archiwów",
      description: "Kompleksowa digitalizacja i zarządzanie archiwami dokumentów",
      features: [
        "Skanowanie dokumentów",
        "OCR i rozpoznawanie tekstu",
        "Indeksowanie i katalogowanie",
        "Systemy zarządzania dokumentami",
        "Archiwizacja w chmurze",
        "Zgodność z RODO",
      ],
      tech: ["Cloud Storage", "OCR", "Database", "Security"],
    },
    {
      id: "wsparcie-it",
      icon: "🛠️",
      title: "Wsparcie IT",
      description: "Kompleksowe wsparcie techniczne i administracja systemami",
      features: [
        "Zdalne wsparcie techniczne 24/7",
        "Administracja serwerami",
        "Konfiguracja sieci",
        "Instalacje oprogramowania",
        "Backup i recovery",
        "Monitoring systemów",
      ],
      tech: ["Remote Support", "Linux", "Windows", "Cloud"],
    },
    {
      id: "systemy-crm",
      icon: "📊",
      title: "Systemy CRM i ERP",
      description: "Dedykowane systemy zarządzania relacjami z klientami i zasobami",
      features: [
        "CRM dla instytucji",
        "Systemy rezerwacji",
        "Zarządzanie projektami",
        "Systemy kadrowe",
        "Planowanie zasobów",
        "Integracje z API",
      ],
      tech: ["Next.js", "Database", "API", "Cloud"],
    },
    {
      id: "marketing",
      icon: "📈",
      title: "Marketing Cyfrowy",
      description: "Kompleksowe usługi marketingowe wspierane AI",
      features: [
        "SEO i pozycjonowanie",
        "Kampanie Google Ads",
        "Social Media Marketing",
        "Content marketing z AI",
        "Email marketing",
        "Analityka i raporty",
      ],
      tech: ["SEO", "Analytics", "AI Content", "Automation"],
    },
  ]

  const technologies = [
    { name: "Next.js", icon: "▲" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Supabase", icon: "⚡" },
    { name: "Vercel", icon: "▲" },
  ]

  const benefits = [
    {
      icon: "⚡",
      title: "Szybka Realizacja",
      description: "Projekty realizujemy w 2-6 tygodni w zależności od skomplikowania",
    },
    {
      icon: "💎",
      title: "Najwyższa Jakość",
      description: "Kod najwyższej jakości, najnowsze technologie i best practices",
    },
    {
      icon: "🤝",
      title: "Pełne Wsparcie",
      description: "Wsparcie techniczne 24/7, szkolenia i dokumentacja",
    },
    {
      icon: "🔒",
      title: "Bezpieczeństwo",
      description: "Pełna zgodność z RODO, szyfrowanie i zabezpieczenia",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Wszystkie projekty w pełni responsywne na każdym urządzeniu",
    },
    {
      icon: "🚀",
      title: "Nowoczesne Technologie",
      description: "Next.js, React, AI - wykorzystujemy to co najlepsze",
    },
  ]

  const menuItems = [
    // This is the second definition of menuItems, which will be used for the mobile navigation
    { label: "Usługi", href: "#uslugi", icon: "✨" },
    { label: "Dla Kogo", href: "#dla-kogo", icon: "👥" },
    { label: "Technologie", href: "#technologie", icon: "⚙️" },
    { label: "Dlaczego my", href: "#dlaczego", icon: "💡" },
    { label: "Portfolio", href: "#portfolio", icon: "🎨" },
    { label: "Kontakt", href: "#kontakt", icon: "📧" },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1A33 0%, #102C57 50%, #0E2340 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(218, 192, 163, 0.15) 0%, transparent 50%)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        style={{
          background: "radial-gradient(circle, #DAC0A3 0%, transparent 70%)",
          transform: `translateZ(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0001})`,
        }}
      />
      <div
        className="absolute top-40 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000"
        style={{
          background: "radial-gradient(circle, #EADBC8 0%, transparent 70%)",
          transform: `translateZ(${scrollY * 0.15}px) rotate(${scrollY * 0.1}deg)`,
        }}
      />
      <div
        className="absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        style={{ background: "radial-gradient(circle, #102C57 0%, transparent 70%)" }}
      />

      {/* Liquid wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#DAC0A3"
            fillOpacity="0.3"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Navigation - Responsive with Mobile Menu */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto px-4">
        <div
          className="hidden md:flex items-center gap-0 backdrop-blur-2xl shadow-2xl py-0.5 px-2"
          style={{
            background: "rgba(10, 26, 51, 0.4)",
            border: "1px solid rgba(218, 192, 163, 0.3)",
            borderRadius: "32px",
            boxShadow:
              "0 8px 32px 0 rgba(10, 26, 51, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(218, 192, 163, 0.1)",
          }}
        >
          <Link
            href="/"
            className="flex items-center rounded-3xl transition-all duration-500 hover:bg-white/5 gap-0.5 px-0.5 py-0.5 opacity-100"
          >
            <Image
              src="/acutis-logo.png"
              alt="Acutis.Agency Logo"
              width={160}
              height={160}
              className="h-12 w-auto object-contain rounded-xl"
            />
          </Link>

          <div className="flex items-center gap-0 mx-1">
            {menuItems_original.map((item, i) => {
              // Use the original menuItems here
              const isActive = activeSection === item.href.substring(1)
              return (
                <div
                  key={i}
                  className="relative"
                  // onMouseEnter={() => item.submenu && setOpenMenu(item.label)} // Removed to avoid redeclaration of state and potential conflicts
                  // onMouseLeave={() => setOpenMenu(null)} // Removed
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-1.5 py-2 text-sm rounded-3xl transition-all duration-500 px-2 ${
                      isActive ? "text-[#0A1A33] font-semibold" : "text-[#EADBC8] hover:text-[#DAC0A3] hover:bg-white/5"
                    }`}
                    style={
                      isActive
                        ? {
                            background: "rgba(218, 192, 163, 0.5)",
                            boxShadow: "0 4px 16px rgba(218, 192, 163, 0.4)",
                          }
                        : {}
                    }
                    // onClick={() => setOpenMenu(null)} // Removed
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                    {item.submenu && <span className="text-xs opacity-60">▾</span>}
                  </a>

                  {/* Dropdown with liquid morphism - Removed due to state conflicts */}
                </div>
              )
            })}
          </div>

          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
            <Link
              href="#kontakt"
              className="px-4 py-2 text-sm text-[#EADBC8] hover:text-[#DAC0A3] rounded-3xl transition-all duration-500 hover:bg-white/5"
            >
              Kontakt
            </Link>
            <Link
              href="#wycena"
              className="px-4 py-2 text-sm rounded-3xl transition-all duration-500 hover:scale-105 text-[#0A1A33] font-semibold"
              style={{
                background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                boxShadow: "0 4px 16px rgba(218, 192, 163, 0.4)",
              }}
            >
              Darmowa Wycena
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className="flex md:hidden items-center justify-between backdrop-blur-2xl px-4 py-2 shadow-2xl w-full max-w-md"
          style={{
            background: "rgba(10, 26, 51, 0.4)",
            border: "1px solid rgba(218, 192, 163, 0.3)",
            borderRadius: "32px",
            boxShadow: "0 8px 32px 0 rgba(10, 26, 51, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <Link href="/" className="flex items-center gap-2 px-2 py-1 rounded-2xl">
            <Image
              src="/acutis-logo.png"
              alt="Acutis.Agency Logo"
              width={120}
              height={120}
              className="h-9 w-auto object-contain rounded-xl"
            />
          </Link>

          {/* Hamburger Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-full transition-all duration-300 hover:bg-white/5"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-[#EADBC8]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] p-0 overflow-hidden"
              style={{
                background: "rgba(10, 26, 51, 0.98)",
                border: "1px solid rgba(218, 192, 163, 0.3)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex flex-col h-full">
                <div
                  className="flex items-center justify-center px-6 py-8 border-b"
                  style={{ borderColor: "rgba(218, 192, 163, 0.2)" }}
                >
                  <Image
                    src="/acutis-logo.png"
                    alt="Acutis.Agency Logo"
                    width={160}
                    height={53}
                    className="h-12 w-auto object-contain rounded-xl"
                  />
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <div className="flex flex-col gap-2">
                    {menuItems.map((item, i) => {
                      // Use the second menuItems here for mobile
                      const isActive = activeSection === item.href.substring(1)
                      return (
                        <div key={i}>
                          {item.submenu ? (
                            <div>
                              <button
                                onClick={() =>
                                  setExpandedMobileSubmenu(expandedMobileSubmenu === item.label ? null : item.label)
                                }
                                className={`flex items-center justify-between w-full px-5 py-3 rounded-2xl transition-all duration-500 ${
                                  isActive
                                    ? "text-[#0A1A33] font-semibold"
                                    : "text-[#EADBC8] hover:text-[#DAC0A3] hover:bg-white/5"
                                }`}
                                style={
                                  isActive
                                    ? {
                                        background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                                        boxShadow: "0 4px 16px rgba(218, 192, 163, 0.3)",
                                      }
                                    : {}
                                }
                              >
                                <span className="flex items-center gap-3 font-medium">
                                  <span className="text-lg">{item.icon}</span>
                                  {item.label}
                                </span>
                                <span
                                  className={`text-xs transition-transform duration-300 ${expandedMobileSubmenu === item.label ? "rotate-180" : ""}`}
                                >
                                  ▾
                                </span>
                              </button>
                              {expandedMobileSubmenu === item.label && (
                                <div className="ml-4 mt-2 space-y-1">
                                  {item.submenu.map((subitem, j) => {
                                    const isSubActive = activeSection === subitem.href.substring(1)
                                    return (
                                      <a
                                        key={j}
                                        href={subitem.href}
                                        className={`flex items-center gap-3 px-5 py-2 text-sm rounded-xl transition-all duration-500 ${
                                          isSubActive
                                            ? "text-[#0A1A33] font-semibold"
                                            : "text-[#EADBC8] hover:text-[#DAC0A3] hover:bg-white/5"
                                        }`}
                                        style={
                                          isSubActive
                                            ? {
                                                background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                                                boxShadow: "0 2px 8px rgba(218, 192, 163, 0.3)",
                                              }
                                            : {}
                                        }
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        <span className="text-lg">{subitem.icon}</span>
                                        {subitem.label}
                                      </a>
                                    )
                                  })}
                                </div>
                              )}
                            </div>
                          ) : (
                            <a
                              href={item.href}
                              className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-500 font-medium ${
                                isActive
                                  ? "text-[#0A1A33] font-semibold"
                                  : "text-[#EADBC8] hover:text-[#DAC0A3] hover:bg-white/5"
                              }`}
                              style={
                                isActive
                                  ? {
                                      background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                                      boxShadow: "0 4px 16px rgba(218, 192, 163, 0.3)",
                                    }
                                  : {}
                              }
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="text-lg">{item.icon}</span>
                              {item.label}
                            </a>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile CTA Buttons - Fixed at bottom */}
                <div className="flex flex-col gap-3 p-6 border-t" style={{ borderColor: "rgba(218, 192, 163, 0.2)" }}>
                  <Link
                    href="#kontakt"
                    className="px-6 py-3 text-center text-[#EADBC8] hover:text-[#DAC0A3] rounded-2xl transition-all duration-500 hover:bg-white/5 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kontakt
                  </Link>
                  <Link
                    href="#wycena"
                    className="px-6 py-3 text-center rounded-2xl transition-all duration-500 hover:scale-105 text-[#0A1A33] font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                      boxShadow: "0 4px 16px rgba(218, 192, 163, 0.4)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Darmowa Wycena
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <section id="hero" className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-4 sm:mb-6 animate-fade-in" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <Image
              src="/acutis-logo.png"
              alt="Acutis.Agency"
              width={120}
              height={40}
              className="h-16 sm:h-20 w-auto object-contain mx-auto opacity-90 rounded-xl"
            />
          </div>

          <div
            className="inline-block backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-fade-in shadow-lg"
            style={{ background: "rgba(218, 192, 163, 0.15)", border: "1px solid rgba(234, 219, 200, 0.3)" }}
          >
            <p className="text-[#EADBC8] font-medium text-sm sm:text-base">🚀 Software House · AI · Digitalizacja</p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-br from-[#FEFAF6] via-[#EADBC8] to-[#DAC0A3] bg-clip-text text-transparent animate-slide-up drop-shadow-2xl leading-tight">
            Tworzymy Nowoczesne
            <br />
            Rozwiązania Cyfrowe
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-[#EADBC8] mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200 px-4">
            Strony internetowe, systemy AI, digitalizacja procesów i wsparcie IT dla instytucji, firm i organizacji
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-16 animate-slide-up animation-delay-400 px-0">
            <Link
              href="#wycena"
              className="px-6 py-2 text-[#0A1A33] text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl font-bold sm:px-4 sm:py-3 rounded-full"
              style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
            >
              🚀 Bezpłatna Wycena
            </Link>
            <a
              href="#uslugi"
              className="px-6 sm:px-8 py-2 sm:py-3 backdrop-blur-xl text-[#FEFAF6] text-base sm:text-lg transition-all duration-300 hover:scale-105 rounded-full"
              style={{ background: "rgba(254, 250, 246, 0.1)", border: "1px solid rgba(218, 192, 163, 0.4)" }}
            >
              Nasze Usługi
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            {[
              { number: "50+", label: "Projektów" },
              { number: "100%", label: "Satysfakcji" },
              { number: "24/7", label: "Wsparcie" },
            ].map((stat, i) => (
              <div
                key={i}
                className="backdrop-blur-xl rounded-2xl p-4 sm:p-6"
                style={{
                  background: "rgba(254, 250, 246, 0.08)",
                  border: "1px solid rgba(218, 192, 163, 0.25)",
                  transform: `translateY(${Math.sin((scrollY + i * 100) * 0.01) * 10}px)`,
                }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#DAC0A3] mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-[#EADBC8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="dla-kogo"
        className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden"
      >
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Dla Kogo Tworzymy
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">
            Dedykowane rozwiązania dla różnych branż i instytucji
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll hover:pause-animation">
            {/* First set */}
            {landingCategories.map((category, i) => (
              <Link
                key={`set1-${i}`}
                href={category.href}
                className="group backdrop-blur-xl rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex-shrink-0 cursor-pointer"
                style={{
                  background: "rgba(254, 250, 246, 0.08)",
                  border: "1px solid rgba(218, 192, 163, 0.25)",
                  minWidth: "280px",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#FEFAF6] mb-2">{category.title}</h3>
                  <p className="text-sm text-[#EADBC8]">{category.description}</p>
                </div>
              </Link>
            ))}
            {/* Second set - duplicate for seamless loop */}
            {landingCategories.map((category, i) => (
              <Link
                key={`set2-${i}`}
                href={category.href}
                className="group backdrop-blur-xl rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex-shrink-0 cursor-pointer"
                style={{
                  background: "rgba(254, 250, 246, 0.08)",
                  border: "1px solid rgba(218, 192, 163, 0.25)",
                  minWidth: "280px",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#FEFAF6] mb-2">{category.title}</h3>
                  <p className="text-sm text-[#EADBC8]">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="uslugi" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">Nasze Usługi</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">
            Kompleksowe rozwiązania IT dla Twojego biznesu
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              id={service.id}
              className="group backdrop-blur-xl rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              style={{
                animationDelay: `${i * 100}ms`,
                background: "rgba(254, 250, 246, 0.08)",
                border: "1px solid rgba(218, 192, 163, 0.25)",
                transform: `translateY(${Math.sin((scrollY + i * 150) * 0.005) * 5}px)`,
              }}
            >
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FEFAF6] mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-[#EADBC8] leading-relaxed mb-4">{service.description}</p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-[#EADBC8]">
                    <span className="mr-2 text-[#DAC0A3]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {service.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      background: "rgba(218, 192, 163, 0.15)",
                      border: "1px solid rgba(234, 219, 200, 0.3)",
                      color: "#DAC0A3",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="technologie"
        className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden"
      >
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">Technologie</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">
            Wykorzystujemy najnowsze i sprawdzone narzędzia
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-8 animate-scroll hover:pause-animation">
            {/* First set */}
            {technologies.map((tech, i) => (
              <div
                key={`set1-${i}`}
                className="group backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 hover:scale-110 hover:shadow-2xl flex-shrink-0"
                style={{
                  background: "rgba(254, 250, 246, 0.08)",
                  border: "1px solid rgba(218, 192, 163, 0.25)",
                  minWidth: "140px",
                }}
              >
                <div className="flex flex-col items-center">
                  {/* Icon representation of technology */}
                  <div className="w-16 h-16 flex items-center justify-center text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-sm text-[#EADBC8] text-center font-medium">{tech.name}</p>
                </div>
              </div>
            ))}
            {/* Second set - duplicate for seamless loop */}
            {technologies.map((tech, i) => (
              <div
                key={`set2-${i}`}
                className="group backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 hover:scale-110 hover:shadow-2xl flex-shrink-0"
                style={{
                  background: "rgba(254, 250, 246, 0.08)",
                  border: "1px solid rgba(218, 192, 163, 0.25)",
                  minWidth: "140px",
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-sm text-[#EADBC8] text-center font-medium">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dlaczego" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Dlaczego Acutis.Agency?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">Twój sukces to nasz priorytet</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="backdrop-blur-xl rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-105"
              style={{
                background: "rgba(254, 250, 246, 0.08)",
                border: "1px solid rgba(218, 192, 163, 0.25)",
                transform: `translateY(${Math.cos((scrollY + i * 120) * 0.006) * 8}px)`,
              }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#FEFAF6] mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#EADBC8] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Nasze Projekty
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4"> Zobacz co już stworzyliśmy</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Portal Parafii",
              category: "Strona WWW",
              image: "/parish-website.jpg",
              tech: ["Next.js", "React", "Tailwind"],
            },
            {
              title: "System CRM dla Urzędu",
              category: "Aplikacja Web",
              image: "/crm-system.jpg",
              tech: ["React", "Node.js", "PostgreSQL"],
            },
            {
              title: "Chatbot AI",
              category: "Sztuczna Inteligencja",
              image: "/ai-chatbot-concept.png",
              tech: ["OpenAI", "Next.js", "API"],
            },
            {
              title: "Strona Przedszkola",
              category: "Strona WWW",
              image: "/kindergarten-website.jpg",
              tech: ["Next.js", "CMS", "SEO"],
            },
            {
              title: "System Digitalizacji",
              category: "Archiwizacja",
              image: "/document-management.jpg",
              tech: ["OCR", "Cloud", "AI"],
            },
            {
              title: "Portal Szkoły",
              category: "Platforma Edukacyjna",
              image: "/school-portal.jpg",
              tech: ["Next.js", "Auth", "Database"],
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              style={{
                background: "rgba(254, 250, 246, 0.08)",
                border: "1px solid rgba(218, 192, 163, 0.25)",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(218, 192, 163, 0.9)",
                    color: "#0A1A33",
                  }}
                >
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#FEFAF6] mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(218, 192, 163, 0.15)",
                        border: "1px solid rgba(234, 219, 200, 0.3)",
                        color: "#DAC0A3",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">
            Jesteśmy gotowi pomóc w realizacji Twojego projektu
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="backdrop-blur-xl rounded-2xl p-8"
              style={{
                background: "rgba(254, 250, 246, 0.08)",
                border: "1px solid rgba(218, 192, 163, 0.25)",
              }}
            >
              <h3 className="text-2xl font-bold text-[#FEFAF6] mb-6">Dane Kontaktowe</h3>
              <div className="space-y-4 text-[#EADBC8]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-[#DAC0A3]">Email</p>
                    <a href="mailto:kontakt@acutis.agency" className="hover:text-[#DAC0A3] transition-colors">
                      kontakt@acutis.agency
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold text-[#DAC0A3]">Telefon</p>
                    <a href="tel:+48123456789" className="hover:text-[#DAC0A3] transition-colors">
                      +48 123 456 789
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-[#DAC0A3]">Godziny pracy</p>
                    <p>Pn-Pt: 9:00 - 18:00</p>
                    <p className="text-sm opacity-75">Wsparcie 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="wycena"
              className="backdrop-blur-xl rounded-2xl p-8"
              style={{
                background: "rgba(254, 250, 246, 0.08)",
                border: "1px solid rgba(218, 192, 163, 0.25)",
              }}
            >
              <h3 className="text-2xl font-bold text-[#FEFAF6] mb-6">Bezpłatna Wycena</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Imię i nazwisko"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#FEFAF6] placeholder:text-[#EADBC8]/50 focus:outline-none focus:border-[#DAC0A3]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#FEFAF6] placeholder:text-[#EADBC8]/50 focus:outline-none focus:border-[#DAC0A3]"
                />
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#FEFAF6] placeholder:text-[#EADBC8]/50 focus:outline-none focus:border-[#DAC0A3]"
                />
                <textarea
                  placeholder="Opisz swój projekt..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#FEFAF6] placeholder:text-[#EADBC8]/50 focus:outline-none focus:border-[#DAC0A3] resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 text-[#0A1A33]"
                  style={{
                    background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                    boxShadow: "0 4px 16px rgba(218, 192, 163, 0.4)",
                  }}
                >
                  Wyślij zapytanie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div
          className="max-w-4xl mx-auto text-center backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)",
            border: "1px solid rgba(218, 192, 163, 0.4)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-4 sm:mb-6">
            Rozpocznij Swój Projekt
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] mb-6 sm:mb-8 px-4">
            Dołącz do zadowolonych klientów i przekształć swój biznes cyfrowo
          </p>
          <Link
            href="#wycena"
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 text-[#0A1A33] text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
            style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
          >
            🚀 Bezpłatna Konsultacja
          </Link>
        </div>
      </section>

      <footer
        className="relative z-10 container mx-auto px-6 py-16"
        style={{ borderTop: "1px solid rgba(218, 192, 163, 0.2)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Image
                src="/acutis-logo.png"
                alt="Acutis.Agency Logo"
                width={200}
                height={67}
                className="h-16 w-auto object-contain mb-4"
              />
              <p className="text-[#EADBC8] text-sm mb-4">
                Software House specjalizujący się w tworzeniu nowoczesnych rozwiązań cyfrowych z wykorzystaniem AI i
                najnowszych technologii.
              </p>
            </div>

            <div>
              <h4 className="text-[#FEFAF6] font-bold mb-4">Usługi</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#strony-www" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Strony WWW
                  </a>
                </li>
                <li>
                  <a href="#ai-solutions" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Rozwiązania AI
                  </a>
                </li>
                <li>
                  <a href="#digitalizacja" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Digitalizacja
                  </a>
                </li>
                <li>
                  <a href="#wsparcie-it" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Wsparcie IT
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FEFAF6] font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-[#EADBC8]">
                <li>
                  <a href="mailto:kontakt@acutis.agency" className="hover:text-[#DAC0A3] transition-colors">
                    📧 kontakt@acutis.agency
                  </a>
                </li>
                <li>
                  <a href="tel:+48123456789" className="hover:text-[#DAC0A3] transition-colors">
                    📱 +48 123 456 789
                  </a>
                </li>
                <li className="pt-2">
                  <span className="text-xs opacity-75">Wsparcie 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#EADBC8]">
            <p>© 2025 Acutis.Agency. Wszystkie prawa zastrzeżone.</p>
            <div className="flex gap-6">
              <Link href="/regulamin" className="hover:text-[#DAC0A3] transition-colors">
                Regulamin
              </Link>
              <Link href="/polityka-prywatnosci" className="hover:text-[#DAC0A3] transition-colors">
                Polityka Prywatności
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

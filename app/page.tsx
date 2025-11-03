"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { platforms } from "./_data/platforms"
import { useIsMobile } from "@/hooks/use-mobile"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [parishCount, setParishCount] = useState(2500)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("")
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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

  const currentPricing = getPricing(parishCount)

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

  const menuItems = [
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

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1A33 0%, #102C57 50%, #0E2340 100%)" }}
    >
      {/* Animated liquid gradient */}
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(218, 192, 163, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Liquid glassmorphism blobs */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        style={{ background: "radial-gradient(circle, #DAC0A3 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-40 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000"
        style={{ background: "radial-gradient(circle, #EADBC8 0%, transparent 70%)" }}
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
              alt="Acutis Logo"
              width={160}
              height={160}
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-0 mx-1">
            {menuItems.map((item, i) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => item.submenu && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
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
                    onClick={() => setOpenMenu(null)}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                    {item.submenu && <span className="text-xs opacity-60">▾</span>}
                  </a>

                  {/* Dropdown with liquid morphism */}
                  {item.submenu && openMenu === item.label && (
                    <div
                      className="absolute top-full left-0 mt-2 backdrop-blur-2xl shadow-2xl overflow-hidden min-w-[200px]"
                      style={{
                        background: "rgba(10, 26, 51, 0.85)",
                        border: "1px solid rgba(218, 192, 163, 0.3)",
                        borderRadius: "24px",
                        boxShadow: "0 8px 32px 0 rgba(10, 26, 51, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {item.submenu.map((subitem, j) => {
                        const isSubActive = activeSection === subitem.href.substring(1)
                        return (
                          <a
                            key={j}
                            href={subitem.href}
                            className={`flex items-center gap-3 px-5 py-3 text-sm transition-all duration-500 ${
                              isSubActive
                                ? "text-[#0A1A33] font-semibold"
                                : "text-[#EADBC8] hover:text-[#DAC0A3] hover:bg-white/5"
                            }`}
                            style={
                              isSubActive
                                ? {
                                    background: "rgba(218, 192, 163, 0.5)",
                                  }
                                : {}
                            }
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className="text-lg">{subitem.icon}</span>
                            {subitem.label}
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
            <Link
              href="https://dash.acutisapp.com"
              className="px-4 py-2 text-sm text-[#EADBC8] hover:text-[#DAC0A3] rounded-3xl transition-all duration-500 hover:bg-white/5"
            >
              Zaloguj
            </Link>
            <Link
              href="https://dash.acutisapp.com/register"
              className="px-4 py-2 text-sm rounded-3xl transition-all duration-500 hover:scale-105 text-[#0A1A33] font-semibold"
              style={{
                background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                boxShadow: "0 4px 16px rgba(218, 192, 163, 0.4)",
              }}
            >
              Wypróbuj
            </Link>
          </div>
        </div>

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
              alt="Acutis Logo"
              width={120}
              height={120}
              className="h-9 w-auto object-contain"
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
                  <div
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl"
                    style={{
                      background: "rgba(254, 250, 246, 0.95)",
                      border: "1px solid rgba(218, 192, 163, 0.3)",
                    }}
                  >
                    <Image
                      src="/acutis-logo.png"
                      alt="Acutis Logo"
                      width={160}
                      height={53}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <div className="flex flex-col gap-2">
                    {menuItems.map((item, i) => {
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
                    href="https://dash.acutisapp.com"
                    className="px-6 py-3 text-center text-[#EADBC8] hover:text-[#DAC0A3] rounded-2xl transition-all duration-500 hover:bg-white/5 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Zaloguj
                  </Link>
                  <Link
                    href="https://dash.acutisapp.com/register"
                    className="px-6 py-3 text-center rounded-2xl transition-all duration-500 hover:scale-105 text-[#0A1A33] font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                      boxShadow: "0 4px 16px rgba(218, 192, 163, 0.4)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Wypróbuj za darmo
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-4 sm:mb-6 animate-fade-in">
            <Image
              src="/acutis-logo.png"
              alt="Acutis"
              width={120}
              height={40}
              className="h-16 sm:h-20 w-auto object-contain mx-auto opacity-90 rounded-xl"
            />
          </div>

          <div
            className="inline-block backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-fade-in shadow-lg"
            style={{ background: "rgba(218, 192, 163, 0.15)", border: "1px solid rgba(234, 219, 200, 0.3)" }}
          >
            <p className="text-[#EADBC8] font-medium text-sm sm:text-base">🚀 Beta Testing Aktywny</p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-br from-[#FEFAF6] via-[#EADBC8] to-[#DAC0A3] bg-clip-text text-transparent animate-slide-up drop-shadow-2xl leading-tight">
            Nowoczesne Zarządzanie
            <br />
            Twoją Parafią
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-[#EADBC8] mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200 px-4">
            Kompleksowy system do zarządzania parafią. Kartoteka, sakramenty, intencje mszalne i wiele więcej. Wszystko
            w jednym miejscu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-16 animate-slide-up animation-delay-400 px-0">
            <Link
              href="https://dash.acutisapp.com/register"
              className="px-6 py-2 text-[#0A1A33] text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl font-bold sm:px-4 sm:py-3 rounded-full"
              style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
            >
              🚀 Rozpocznij za darmo
            </Link>
            <a
              href="#cennik"
              className="px-6 sm:px-8 py-2 sm:py-3 backdrop-blur-xl text-[#FEFAF6] text-base sm:text-lg transition-all duration-300 hover:scale-105 rounded-full"
              style={{ background: "rgba(254, 250, 246, 0.1)", border: "1px solid rgba(218, 192, 163, 0.4)" }}
            >
              Zobacz cennik
            </a>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}

      {/* Features Section */}
      <section id="funkcje" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Wszystko czego potrzebujesz
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">
            Kompleksowe narzędzie do zarządzania parafią
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group backdrop-blur-xl rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${i * 100}ms`,
                background: "rgba(254, 250, 246, 0.08)",
                border: "1px solid rgba(218, 192, 163, 0.25)",
              }}
            >
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FEFAF6] mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#EADBC8] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sacraments Detailed Section */}
      <section id="sakramenty" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Sakramenty - Szczegółowo
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">Kompleksowa obsługa każdego sakramentu</p>
        </div>

        <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto">
          {sacraments.map((sacrament, i) => (
            <div
              key={i}
              id={sacrament.id}
              className="backdrop-blur-xl rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl"
              style={{ background: "rgba(254, 250, 246, 0.08)", border: "1px solid rgba(218, 192, 163, 0.25)" }}
            >
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <span className="text-4xl sm:text-5xl md:text-6xl">{sacrament.icon}</span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#FEFAF6]">{sacrament.title}</h3>
                      <p className="text-sm sm:text-base text-[#EADBC8] mt-2">{sacrament.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-lg sm:text-xl font-bold text-[#DAC0A3] mb-3 sm:mb-4">📋 Funkcje:</h4>
                    <ul className="space-y-2">
                      {sacrament.features.map((feature, j) => (
                        <li key={j} className="flex items-center text-sm sm:text-base text-[#EADBC8]">
                          <span className="mr-3 text-[#DAC0A3]">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#DAC0A3] mb-3 sm:mb-4">📄 Dostępne wydruki:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sacrament.documents.map((doc, j) => (
                      <div
                        key={j}
                        className="backdrop-blur-md rounded-xl p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105"
                        style={{
                          background: "rgba(218, 192, 163, 0.15)",
                          border: "1px solid rgba(234, 219, 200, 0.3)",
                        }}
                      >
                        <div className="text-xl sm:text-2xl mb-2">📄</div>
                        <div className="text-xs sm:text-sm text-[#EADBC8] font-medium">{doc}</div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl"
                    style={{ background: "rgba(218, 192, 163, 0.1)" }}
                  >
                    <p className="text-xs text-[#EADBC8] text-center">
                      💡 Wszystkie dokumenty w formacie PDF z możliwością dostosowania stylów
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Print Examples Section */}
      <section id="wydruki" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Przykładowe Wydruki
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">Profesjonalne dokumenty kościelne</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              { title: "Świadectwo Chrztu", type: "Standardowy" },
              { title: "Świadectwo Ślubu", type: "Standardowy" },
              { title: "Świadectwo Bierzmowania", type: "Standardowy" },
              { title: "Ad Sacra", type: "Standardowy" },
            ].map((doc, i) => (
              <div
                key={i}
                className="group backdrop-blur-xl rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ background: "rgba(254, 250, 246, 0.08)", border: "1px solid rgba(218, 192, 163, 0.25)" }}
              >
                <div
                  className="aspect-[3/4] rounded-lg mb-3 sm:mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)",
                  }}
                >
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">📄</div>
                    <div className="text-[#DAC0A3] font-bold text-base sm:text-lg">{doc.type}</div>
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#FEFAF6] text-center">{doc.title}</h4>
              </div>
            ))}
          </div>

          <div
            className="backdrop-blur-xl rounded-2xl p-6 sm:p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)",
              border: "1px solid rgba(218, 192, 163, 0.4)",
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#FEFAF6] mb-2">🎨 Styl Dokumentów</h3>
            <p className="text-[#EADBC8] text-xs sm:text-sm mb-4 sm:mb-6 opacity-90">
              Obecnie dostępny jeden profesjonalny styl, więcej stylów w przygotowaniu
            </p>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-[#EADBC8]">
              <div
                className="backdrop-blur-md rounded-xl p-4 sm:p-6"
                style={{ background: "rgba(218, 192, 163, 0.25)", border: "2px solid rgba(218, 192, 163, 0.5)" }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">✨</div>
                <div className="font-bold text-base sm:text-lg text-[#DAC0A3] mb-2">Standardowy</div>
                <div className="text-xs sm:text-sm opacity-90 mb-2 sm:mb-3">
                  Profesjonalny styl dokumentów kościelnych
                </div>
                <div className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-400/30">
                  ✓ Dostępny
                </div>
              </div>

              <div
                className="backdrop-blur-md rounded-xl p-4 sm:p-6 opacity-60"
                style={{ background: "rgba(254, 250, 246, 0.05)", border: "1px solid rgba(218, 192, 163, 0.2)" }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">💎</div>
                <div className="font-bold text-base sm:text-lg text-[#EADBC8] mb-2">Classic</div>
                <div className="text-xs sm:text-sm opacity-75 mb-2 sm:mb-3">Tradycyjny styl z ozdobnymi elementami</div>
                <div className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-400/30">
                  🚀 Wkrótce
                </div>
              </div>

              <div
                className="backdrop-blur-md rounded-xl p-4 sm:p-6 opacity-60"
                style={{ background: "rgba(254, 250, 246, 0.05)", border: "1px solid rgba(218, 192, 163, 0.2)" }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎯</div>
                <div className="font-bold text-base sm:text-lg text-[#EADBC8] mb-2">Modern</div>
                <div className="text-xs sm:text-sm opacity-75 mb-2 sm:mb-3">Nowoczesny minimalistyczny design</div>
                <div className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-400/30">
                  🚀 Wkrótce
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platformy" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Dostępne Platformy
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">Pracuj na każdym urządzeniu</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`group backdrop-blur-xl rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 flex flex-col items-center ${
                platform.available ? "hover:scale-105 hover:shadow-2xl cursor-pointer" : "opacity-70"
              }`}
              style={{
                background: platform.available
                  ? "linear-gradient(135deg, rgba(218, 192, 163, 0.15) 0%, rgba(234, 219, 200, 0.08) 100%)"
                  : "rgba(254, 250, 246, 0.05)",
                border: `2px solid rgba(218, 192, 163, ${platform.available ? "0.4" : "0.15"})`,
              }}
            >
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 blur-3xl transition-opacity duration-500 ${
                    platform.available ? "opacity-40 group-hover:opacity-60" : "opacity-20"
                  }`}
                  style={{ background: "radial-gradient(circle, rgba(218, 192, 163, 0.8) 0%, transparent 70%)" }}
                />
                <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={platform.image.src || "/placeholder.svg"}
                    alt={platform.image.alt}
                    width={platform.image.width}
                    height={platform.image.height}
                    className="mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                    style={{
                      filter: "brightness(2.5) contrast(1.2) saturate(0.8) invert(0.9)",
                    }}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-[#FEFAF6] font-bold mb-3 text-xl sm:text-2xl">{platform.name}</h3>
                <p className="text-sm sm:text-base text-[#EADBC8] opacity-90 mb-6 leading-relaxed flex-1">
                  {platform.description}
                </p>

                {platform.available ? (
                  <Link
                    href={platform.downloadUrl ?? "https://dash.acutisapp.com"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl text-[#0A1A33]"
                    style={{
                      background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
                      boxShadow: "0 4px 16px rgba(218, 192, 163, 0.3)",
                    }}
                  >
                    <span className="text-lg">⬇️</span>
                    {platform.downloadLabel ?? "Pobierz"}
                  </Link>
                ) : (
                  <div
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                    style={{
                      background: "rgba(254, 250, 246, 0.08)",
                      border: "2px dashed rgba(218, 192, 163, 0.4)",
                    }}
                  >
                    <span className="text-lg">🚧</span>
                    <span className="text-[#EADBC8]">Wkrótce</span>
                    {platform.comingSoonLabel && (
                      <span className="text-[#DAC0A3] text-xs">({platform.comingSoonLabel})</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Najczęściej Zadawane Pytania
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">Odpowiedzi na najważniejsze pytania</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {[
            {
              q: "Czy Acutis działa bez połączenia z internetem?",
              a: "Tak! Acutis to aplikacja offline-first. Wszystkie dane są przechowywane lokalnie na Twoim urządzeniu. Połączenie internetowe jest potrzebne tylko do synchronizacji danych między urządzeniami.",
            },
            {
              q: "Czy moje dane są bezpieczne?",
              a: "Absolutnie. Wszystkie dane są szyfrowane zarówno lokalnie, jak i podczas transmisji. Wykorzystujemy najnowsze standardy bezpieczeństwa. Dane są przechowywane w certyfikowanej infrastrukturze Supabase z regularnym backup.",
            },
            {
              q: "Ile urządzeń mogę używać?",
              a: "Plan PRO pozwala na pracę na 3 urządzeniach jednocześnie. Możesz zainstalować aplikację na komputerze w kancelarii, laptopie i dodatkowym stanowisku. Wszystkie dane synchronizują się automatycznie.",
            },
            {
              q: "Czy mogę przenieść dane z mojego obecnego systemu?",
              a: "Tak. Acutis obsługuje import danych z plików CSV. Pomożemy Ci w migracji danych z Twojego obecnego systemu. W razie potrzeby oferujemy wsparcie techniczne przy większych migracjach.",
            },
            {
              q: "Czy otrzymam szkolenie z obsługi?",
              a: "Tak. Każdy abonament PRO zawiera szkolenie online z obsługi aplikacji. Dodatkowo dostępna jest dokumentacja wideo i wsparcie techniczne przez email.",
            },
            {
              q: "Co się stanie po zakończeniu okresu trial?",
              a: "Po 14 dniach trial aplikacja przestanie działać, ale Twoje dane pozostaną bezpieczne. Po wykupieniu abonamentu natychmiast odzyskasz dostęp do wszystkich funkcji i danych.",
            },
            {
              q: "Czy mogę anulować subskrypcję w każdej chwili?",
              a: "Tak. Możesz anulować subskrypcję w dowolnym momencie bez dodatkowych opłat. Aplikacja będzie działać do końca opłaconego okresu.",
            },
            {
              q: "Czy aplikacja będzie dostępna na telefony?",
              a: "Tak! Pracujemy nad aplikacjami mobilnymi dla iOS i Android. Planowane wydanie: Q2 2026. Będą one synchronizować się z wersją desktopową.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: "rgba(254, 250, 246, 0.08)", border: "1px solid rgba(218, 192, 163, 0.25)" }}
            >
              <summary className="cursor-pointer p-4 sm:p-6 flex justify-between items-center hover:bg-white/5 transition-colors">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FEFAF6] pr-4">{faq.q}</h3>
                <span className="text-[#DAC0A3] text-xl sm:text-2xl group-open:rotate-180 transition-transform duration-300 flex-shrink-0">
                  ▼
                </span>
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                <p className="text-[#EADBC8] leading-relaxed text-xs sm:text-sm md:text-base">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-[#EADBC8] mb-3 sm:mb-4 text-sm sm:text-base px-4">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <Link
            href="mailto:support@acutisapp.com"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-[#FEFAF6] font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            style={{ background: "rgba(254, 250, 246, 0.1)", border: "1px solid rgba(218, 192, 163, 0.4)" }}
          >
            📧 Skontaktuj się z nami
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-3 sm:mb-4 px-4">
            Przejrzyste Ceny
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] px-4">
            Wybierz plan dopasowany do Twojej parafii
          </p>
        </div>

        <div className="grid lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* TRIAL - 2 kolumny */}
          <div
            className="lg:col-span-2 backdrop-blur-xl rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(254, 250, 246, 0.08)", border: "1px solid rgba(218, 192, 163, 0.25)" }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#FEFAF6] mb-2">TRIAL</h3>
              <p className="text-[#EADBC8] text-xs mb-4">Bezpłatny okres próbny</p>
              <div className="text-4xl font-bold text-[#DAC0A3] mb-2">0 zł</div>
              <div className="text-[#EADBC8] text-sm">14 dni</div>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Wszystkie funkcje
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Do 100 parafian
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Import/Export danych
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Email support
              </li>
            </ul>
            <Link
              href="https://dash.acutisapp.com/register"
              className="block w-full py-2 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105 text-[#FEFAF6] text-sm"
              style={{ background: "rgba(254, 250, 246, 0.1)", border: "1px solid rgba(218, 192, 163, 0.4)" }}
            >
              Rozpocznij Trial
            </Link>
          </div>

          {/* PRO - 2 kolumny (główna karta) */}
          <div
            className="lg:col-span-2 relative backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, rgba(218, 192, 163, 0.25) 0%, rgba(234, 219, 200, 0.15) 100%)",
              border: "2px solid rgba(218, 192, 163, 0.5)",
            }}
          >
            <div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-[#0A1A33] px-4 py-1 rounded-full text-sm font-bold shadow-lg"
              style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
            >
              🔥 Najpopularniejszy
            </div>

            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-[#FEFAF6] mb-1">PRO</h3>
              <p className="text-[#EADBC8] text-xs mb-4">Dla parafii</p>

              {/* Toggle miesięcznie/rocznie */}
              <div className="flex justify-center gap-1 mb-4">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${billingCycle === "monthly" ? "text-[#0A1A33]" : "text-[#EADBC8]"}`}
                  style={{
                    background:
                      billingCycle === "monthly"
                        ? "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)"
                        : "rgba(254, 250, 246, 0.1)",
                  }}
                >
                  Miesięcznie
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 relative ${billingCycle === "yearly" ? "text-[#0A1A33]" : "text-[#EADBC8]"}`}
                  style={{
                    background:
                      billingCycle === "yearly"
                        ? "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)"
                        : "rgba(254, 250, 246, 0.1)",
                  }}
                >
                  Rocznie
                  <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                    -17%
                  </span>
                </button>
              </div>

              {/* Slider */}
              <div className="mb-4">
                <label className="block text-[#EADBC8] text-xs mb-2">
                  Liczba parafian:{" "}
                  <span className="text-[#DAC0A3] font-bold">{parishCount.toLocaleString("pl-PL")}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="13000"
                  step="100"
                  value={parishCount}
                  onChange={(e) => setParishCount(Number.parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #DAC0A3 0%, #DAC0A3 ${(parishCount / 13000) * 100}%, rgba(254, 250, 246, 0.2) ${(parishCount / 13000) * 100}%, rgba(254, 250, 246, 0.2) 100%)`,
                  }}
                />
                <div className="flex justify-between text-[10px] text-[#EADBC8] mt-1">
                  <span>0</span>
                  <span>13 000+</span>
                </div>
              </div>

              {/* Cena */}
              {currentPricing.monthly !== null ? (
                <>
                  <div className="text-4xl font-bold text-[#DAC0A3] mb-1">
                    {billingCycle === "monthly" ? currentPricing.monthly : currentPricing.yearly} zł
                  </div>
                  <div className="text-[#EADBC8] text-xs mb-2">
                    {billingCycle === "monthly" ? "miesięcznie" : "rocznie"}
                  </div>
                  {billingCycle === "yearly" && (
                    <div
                      className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold text-[#0A1A33] mb-2"
                      style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
                    >
                      🎁 2 miesiące gratis
                    </div>
                  )}
                  <div className="text-xs text-[#EADBC8] opacity-75">{currentPricing.label} parafian</div>
                </>
              ) : (
                <>
                  <div className="text-4xl font-bold text-[#DAC0A3] mb-1">Custom</div>
                  <div className="text-[#EADBC8] text-xs mb-2">Skontaktuj się z nami</div>
                  <div className="text-xs text-[#EADBC8]">Powyżej 12 000 parafian</div>
                </>
              )}
            </div>

            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                {currentPricing.label} parafian
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Wszystkie funkcje
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Import/Export danych
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Backup co godzinę
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Priority support 24/7
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>3 urządzenia
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Szkolenie online
              </li>
            </ul>

            <Link
              href={
                currentPricing.monthly !== null ? "https://dash.acutisapp.com/register" : "mailto:kontakt@acutisapp.com"
              }
              className="block w-full py-3 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105 text-[#0A1A33]"
              style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
            >
              {currentPricing.monthly !== null ? "Wybierz Plan" : "Skontaktuj się"}
            </Link>
          </div>

          {/* DIECEZJE - 2 kolumny */}
          <div
            className="lg:col-span-2 backdrop-blur-xl rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(254, 250, 246, 0.08)", border: "1px solid rgba(218, 192, 163, 0.25)" }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-[#FEFAF6] mb-2">DIECEZJE</h3>
              <p className="text-[#EADBC8] text-xs mb-4">Dla diecezji</p>
              <div className="text-4xl font-bold text-[#DAC0A3] mb-2">Custom</div>
              <div className="text-[#EADBC8] text-sm">kontakt</div>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Nielimitowane parafie
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Centralne zarządzanie
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Dedykowany support
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Szkolenie stacjonarne
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Custom integracje
              </li>
            </ul>
            <Link
              href="mailto:kontakt@acutisapp.com"
              className="block w-full py-2 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105 text-[#FEFAF6] text-sm"
              style={{ background: "rgba(254, 250, 246, 0.1)", border: "1px solid rgba(218, 192, 163, 0.4)" }}
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div
          className="max-w-4xl mx-auto text-center backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)",
            border: "1px solid rgba(218, 192, 163, 0.4)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFAF6] mb-4 sm:mb-6">Gotowy na start?</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#EADBC8] mb-6 sm:mb-8 px-4">
            Dołącz do setek parafii, które już korzystają z Acutis.
            <br className="hidden sm:block" />
            Wypróbuj za darmo przez 14 dni.
          </p>
          <Link
            href="https://dash.acutisapp.com/register"
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 md:py-5 text-[#0A1A33] text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
            style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
          >
            🚀 Wypróbuj Acutis za darmo
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="relative z-10 container mx-auto px-6 py-16"
        style={{ borderTop: "1px solid rgba(218, 192, 163, 0.2)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo i opis */}
            <div className="md:col-span-2">
              <div
                className="inline-block px-6 py-4 rounded-2xl mb-4"
                style={{
                  background: "linear-gradient(135deg, #0A1A33 0%, #102C57 100%)",
                  border: "2px solid rgba(218, 192, 163, 0.4)",
                  boxShadow: "0 4px 16px rgba(10, 26, 51, 0.5)",
                }}
              >
                <Image
                  src="/acutis-logo.png"
                  alt="Acutis Logo"
                  width={200}
                  height={67}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-[#EADBC8] text-sm mb-4">
                Nowoczesny system zarządzania parafią. Offline-first, bezpieczny i intuicyjny.
              </p>
            </div>

            {/* Szybkie linki */}
            <div>
              <h4 className="text-[#FEFAF6] font-bold mb-4">Nawigacja</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#funkcje" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Funkcje
                  </a>
                </li>
                <li>
                  <a href="#sakramenty" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Sakramenty
                  </a>
                </li>
                <li>
                  <a href="#platformy" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Platformy
                  </a>
                </li>
                <li>
                  <a href="#changelog" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#cennik" className="text-[#EADBC8] hover:text-[#DAC0A3] transition-colors">
                    Cennik
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="text-[#FEFAF6] font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-[#EADBC8]">
                <li>
                  <a href="mailto:support@acutisapp.com" className="hover:text-[#DAC0A3] transition-colors">
                    📧 pomoc@acutisapp.com
                  </a>
                </li>
                <li></li>
                <li className="pt-2">
                  <span className="text-xs opacity-75">Wsparcie techniczne 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright i linki prawne */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#EADBC8]">
            <p>© 2025 Acutis. Wszystkie prawa zastrzeżone.</p>
            <div className="flex gap-6">
              <Link href="/regulamin" className="hover:text-[#DAC0A3] transition-colors">
                Regulamin
              </Link>
              <Link href="/polityka-prywatnosci" className="hover:text-[#DAC0A3] transition-colors">
                Polityka Prywatności
              </Link>
              <Link href="/rodo" className="hover:text-[#DAC0A3] transition-colors">
                RODO
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

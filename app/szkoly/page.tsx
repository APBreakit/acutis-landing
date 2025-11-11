"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function SzkolyPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: "📚",
      title: "Portal Edukacyjny",
      description: "Kompleksowy portal dla uczniów, nauczycieli i rodziców z dostępem do materiałów dydaktycznych",
    },
    {
      icon: "🎓",
      title: "E-dziennik",
      description: "Integracja z systemem e-dziennika i zarządzanie ocenami online",
    },
    {
      icon: "📅",
      title: "Plan Lekcji",
      description: "Interaktywny plan lekcji, zastępstwa i wydarzenia szkolne",
    },
    {
      icon: "📢",
      title: "Komunikaty",
      description: "System ogłoszeń i komunikacji szkoła-rodzic-uczeń",
    },
    {
      icon: "🏆",
      title: "Osiągnięcia",
      description: "Galeria sukcesów uczniów, konkursy, olimpiady i wydarzenia",
    },
    {
      icon: "📝",
      title: "Zapisy Online",
      description: "System zapisów do szkoły, klas i zajęć dodatkowych",
    },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1A33 0%, #102C57 50%, #0E2340 100%)" }}
    >
      <div
        className="absolute top-20 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, #EADBC8 0%, transparent 70%)",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className="flex items-center gap-4 backdrop-blur-2xl px-6 py-3 shadow-2xl"
          style={{
            background: "rgba(10, 26, 51, 0.4)",
            border: "1px solid rgba(218, 192, 163, 0.3)",
            borderRadius: "32px",
          }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/acutis-logo.png"
              alt="Acutis.Agency"
              width={120}
              height={40}
              className="h-10 w-auto object-contain rounded-xl"
            />
          </Link>
          <Link
            href="/#kontakt"
            className="px-4 py-2 text-sm rounded-3xl transition-all duration-500 hover:scale-105 text-[#0A1A33] font-semibold"
            style={{
              background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
            }}
          >
            Kontakt
          </Link>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-6xl mb-6">🎓</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-[#FEFAF6] via-[#EADBC8] to-[#DAC0A3] bg-clip-text text-transparent">
            Portale dla Szkół i Uczelni
          </h1>
          <p className="text-xl text-[#EADBC8] mb-8">
            Nowoczesne platformy edukacyjne łączące szkołę, uczniów i rodziców. E-dziennik, portal edukacyjny i system
            zarządzania zajęciami w jednym miejscu
          </p>
          <Link
            href="/#wycena"
            className="inline-block px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 text-[#0A1A33] font-semibold"
            style={{
              background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)",
              boxShadow: "0 4px 16px rgba(218, 192, 163, 0.4)",
            }}
          >
            Bezpłatna Wycena
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 hover:scale-105"
              style={{
                background: "rgba(254, 250, 246, 0.08)",
                border: "1px solid rgba(218, 192, 163, 0.25)",
              }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#FEFAF6] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#EADBC8]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className="max-w-4xl mx-auto text-center backdrop-blur-xl rounded-3xl p-12"
          style={{
            background: "linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)",
            border: "1px solid rgba(218, 192, 163, 0.4)",
          }}
        >
          <h2 className="text-4xl font-bold text-[#FEFAF6] mb-6">Zmodernizuj Swoją Szkołę Cyfrowo</h2>
          <p className="text-xl text-[#EADBC8] mb-8">
            Otrzymaj dedykowaną platformę edukacyjną dostosowaną do potrzeb Twojej szkoły
          </p>
          <Link
            href="/#kontakt"
            className="inline-block px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 text-[#0A1A33]"
            style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
          >
            Skontaktuj się
          </Link>
        </div>
      </section>
    </div>
  )
}

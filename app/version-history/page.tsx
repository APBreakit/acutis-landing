"use client"

import Link from "next/link"
import Image from "next/image"
import { platforms } from "../_data/platforms"

const betaTimeline = [
  {
    id: "beta-2024-10-30",
    title: "Beta Testing",
    date: "30 października 2024",
    status: "Aktualna wersja",
    statusTone: "success",
    description:
      "Otwarcie programu Beta Testing dla wybranych parafii i pełna funkcjonalność sakramentów oraz intencji mszalnych.",
    highlights: [
      "Synchronizacja danych pomiędzy urządzeniami",
      "System generowania dokumentów PDF w stylu Classic",
      "Nowy interfejs Material Design 3",
      "Integracje RLS i zaawansowane bezpieczeństwo",
    ],
  },
  {
    id: "alpha-2024-09-07",
    title: "Alpha Release",
    date: "7 września 2024",
    status: "Archiwalna",
    statusTone: "warning",
    description:
      "Pierwsza wersja testowa aplikacji Acutis z obsługą chrztów, bierzmowań i podstawowym systemem intencji.",
    highlights: [
      "Podstawowa rejestracja sakramentów",
      "Lokalna baza danych (offline-first)",
      "Generowanie świadectw PDF",
      "Testowanie architektury i workflow kancelarii",
    ],
  },
]

const roadmap = [
  {
    id: "mobile-q2-2025",
    icon: "📱",
    title: "Aplikacje mobilne iOS/Android",
    description: "Pełna obsługa kancelarii z telefonu. Synchronizacja offline i mobilne podpisy dokumentów.",
    eta: "Q1 2026",
  },
  {
    id: "pdf-styles",
    icon: "🎨",
    title: "Nowe style dokumentów PDF",
    description: "Dodatkowe warianty wydruków: Classic, Modern i minimalistyczne wersje do korespondencji.",
    eta: "Q3 2025",
  },
  {
    id: "integrations",
    icon: "🤝",
    title: "Integracje z zewnętrznymi systemami",
    description: "API do synchronizacji z systemami diecezjalnymi i narzędziami finansowymi.",
    eta: "Q4 2025",
  },
  {
    id: "kolęda",
    icon: "🏠",
    title: "Moduł Kolędy",
    description: "Planowanie i raportowanie wizyt duszpasterskich, integracja z kartoteką parafian.",
    eta: "Q1 2026",
  },
]

const statusPillStyles: Record<string, string> = {
  success: "bg-green-500/20 text-green-400 border border-green-400/30",
  warning: "bg-purple-500/20 text-purple-300 border border-purple-400/30",
}

export default function VersionHistoryPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #031325 0%, #0A1D3D 50%, #06152A 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle 1200px at top left, rgba(218, 192, 163, 0.2) 0%, transparent 60%), radial-gradient(circle 1000px at bottom right, rgba(16, 44, 87, 0.35) 0%, transparent 65%)",
        }}
      />

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-2xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#FEFAF6]">
            <span className="text-2xl">⛪</span>
            <span className="text-xl font-bold bg-gradient-to-r from-[#FEFAF6] to-[#DAC0A3] bg-clip-text text-transparent">
              Acutis
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-2 rounded-full text-sm text-[#EADBC8] hover:text-[#DAC0A3] transition-colors"
            >
              Strona główna
            </Link>
            <span className="px-4 py-2 rounded-full text-sm" style={{ background: "rgba(218, 192, 163, 0.15)" }}>
              Historia wersji
            </span>
            <Link
              href="https://dash.acutisapp.com/register"
              className="px-4 py-2 rounded-full text-sm font-semibold text-[#0A1A33]"
              style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
            >
              Wypróbuj Acutis
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 pt-16 pb-12">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(218, 192, 163, 0.15)" }}
            >
              <span className="text-sm text-[#DAC0A3]">📘</span>
              <span className="text-sm text-[#EADBC8] font-medium">Historia rozwoju aplikacji Acutis</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#FEFAF6] via-[#EADBC8] to-[#DAC0A3] bg-clip-text text-transparent mb-6">
              Historia wersji i rozwój Acutis
            </h1>
            <p className="text-lg text-[#EADBC8] leading-relaxed">
              Poznaj kamienie milowe rozwoju Acutis, zobacz co planujemy w kolejnych wydaniach oraz sprawdź, na jakich
              platformach możesz korzystać z systemu już dziś.
            </p>
          </div>
        </section>

        {/* Platforms summary */}
        <section className="container mx-auto px-6 pb-16">
          <div
            className="backdrop-blur-xl rounded-3xl p-10"
            style={{ background: "rgba(254, 250, 246, 0.06)", border: "1px solid rgba(218, 192, 163, 0.2)" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-[#FEFAF6] mb-2">Dostępne platformy</h2>
                <p className="text-[#EADBC8] text-sm md:text-base max-w-xl">
                  Acutis wspiera najpopularniejsze systemy operacyjne. Wersje desktopowe są zoptymalizowane do pracy w
                  kancelarii, a wersja webowa zapewnia dostęp z każdego miejsca.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0A1A33]"
                style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
              >
                🔁 Powrót na stronę główną
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className="backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  style={{ background: platform.available ? "rgba(254, 250, 246, 0.1)" : "rgba(16, 44, 87, 0.25)" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="relative w-14 h-14 flex items-center justify-center rounded-full"
                      style={{ background: "rgba(218, 192, 163, 0.2)" }}
                    >
                      <Image
                        src={platform.image.src || "/placeholder.svg"}
                        alt={platform.image.alt}
                        width={platform.image.width}
                        height={platform.image.height}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#FEFAF6]">{platform.name}</h3>
                      <p className="text-xs text-[#EADBC8] opacity-75">{platform.description}</p>
                    </div>
                  </div>
                  {platform.available ? (
                    <Link
                      href={platform.downloadUrl ?? "https://dash.acutisapp.com"}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#0A1A33]"
                      style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
                    >
                      ⬇️ {platform.downloadLabel ?? "Pobierz"}
                    </Link>
                  ) : (
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#DAC0A3]"
                      style={{ background: "rgba(254, 250, 246, 0.08)", border: "1px dashed rgba(218, 192, 163, 0.4)" }}
                    >
                      🚧 Wkrótce {platform.comingSoonLabel ? `— ${platform.comingSoonLabel}` : ""}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[#FEFAF6] mb-8">Kamienie milowe</h2>
            <div className="relative pl-10">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DAC0A3] via-[#EADBC8] to-transparent opacity-40" />
              <div className="space-y-10">
                {betaTimeline.map((entry) => (
                  <div key={entry.id} className="relative">
                    <div
                      className="absolute -left-[42px] top-2 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)" }}
                    >
                      <span className="text-lg">🚀</span>
                    </div>
                    <div
                      className="backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                      style={{ background: "rgba(254, 250, 246, 0.08)" }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-[#DAC0A3] mr-2">{entry.title}</h3>
                        <span className="text-xs text-[#EADBC8] opacity-75">{entry.date}</span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusPillStyles[entry.statusTone]}`}
                        >
                          {entry.status}
                        </span>
                      </div>
                      <p className="text-sm text-[#EADBC8] mb-4">{entry.description}</p>
                      <ul className="space-y-2 text-sm text-[#EADBC8]">
                        {entry.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span className="text-[#DAC0A3]">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-bold text-[#FEFAF6] mb-8">Co dalej?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {roadmap.map((item) => (
                <div
                  key={item.id}
                  className="backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  style={{ background: "rgba(254, 250, 246, 0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#FEFAF6]">{item.title}</h3>
                      <p className="text-xs text-[#DAC0A3] opacity-80">{item.eta}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#EADBC8] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#EADBC8]">
            <p>© 2024-2025 Acutis. Wszystkie prawa zastrzeżone.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-[#DAC0A3] transition-colors">
                Regulamin
              </Link>
              <Link href="#" className="hover:text-[#DAC0A3] transition-colors">
                Polityka Prywatności
              </Link>
              <Link href="#" className="hover:text-[#DAC0A3] transition-colors">
                RODO
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

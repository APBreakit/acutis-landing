export type PlatformInfo = {
  id: string
  name: string
  description: string
  available: boolean
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  downloadUrl?: string
  downloadLabel?: string
  comingSoonLabel?: string
}

export const platforms: PlatformInfo[] = [
  {
    id: "windows",
    name: "Windows",
    description: "Instalator dla systemów Windows 10 i 11 (64-bit)",
    available: true,
    image: {
      src: "/platforms/windows.svg",
      alt: "Logo Microsoft Windows",
      width: 64,
      height: 64,
    },
    downloadUrl: "https://dash.acutisapp.com/download/windows",
    downloadLabel: "Pobierz .exe",
  },
  {
    id: "macos",
    name: "macOS",
    description: "Uniwersalny pakiet DMG dla Apple Silicon i Intel",
    available: true,
    image: {
      src: "/platforms/apple.svg",
      alt: "Logo Apple",
      width: 64,
      height: 64,
    },
    downloadUrl: "https://dash.acutisapp.com/download/macos",
    downloadLabel: "Pobierz .dmg",
  },
  {
    id: "web",
    name: "Web",
    description: "Aplikacja dostępna w przeglądarce – zawsze aktualna",
    available: true,
    image: {
      src: "/platforms/chrome-white.svg",
      alt: "Ikona aplikacji webowej",
      width: 64,
      height: 64,
    },
    downloadUrl: "https://dash.acutisapp.com",
    downloadLabel: "Uruchom aplikację",
  },
  {
    id: "ios",
    name: "iOS",
    description: "Aplikacja mobilna dla iPhone i iPad (TestFlight w przygotowaniu)",
    available: false,
    comingSoonLabel: "Q1 2026",
    image: {
      src: "/platforms/apple.svg",
      alt: "Logo Apple",
      width: 64,
      height: 64,
    },
  },
  {
    id: "android",
    name: "Android",
    description: "Aplikacja mobilna dla Android (wersja beta w przygotowaniu)",
    available: false,
    comingSoonLabel: "Q1 2026",
    image: {
      src: "/platforms/android.svg",
      alt: "Logo Android",
      width: 64,
      height: 64,
    },
  },
]

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://acutis.agency"),
  title: {
    default: "Acutis.Agency - Software House | Strony WWW, AI, Digitalizacja",
    template: "%s | Acutis.Agency",
  },
  description:
    "Profesjonalny software house specjalizujący się w tworzeniu stron internetowych, rozwiązaniach AI, digitalizacji procesów i wsparciu IT dla instytucji, firm i organizacji. Parafie, szkoły, przedszkola, urzędy, gabinety medyczne.",
  keywords: [
    "software house",
    "strony internetowe",
    "strony dla parafii",
    "strony dla szkół",
    "strony dla przedszkoli",
    "strony dla urzędów",
    "strony dla firm",
    "sklepy internetowe",
    "strony dla gabinetów",
    "strony dla restauracji",
    "AI",
    "sztuczna inteligencja",
    "digitalizacja",
    "digitalizacja archiwów",
    "wsparcie IT",
    "CRM",
    "ERP",
    "marketing cyfrowy",
    "SEO",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Acutis.Agency" }],
  creator: "Acutis.Agency",
  publisher: "Acutis.Agency",
  icons: {
    icon: "/favicon.ico",
    apple: "/acutis-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://acutis.agency",
    title: "Acutis.Agency - Software House | Strony WWW, AI, Digitalizacja",
    description:
      "Profesjonalny software house specjalizujący się w tworzeniu stron internetowych, rozwiązaniach AI i digitalizacji procesów dla parafii, szkół, przedszkoli, urzędów i firm.",
    siteName: "Acutis.Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acutis.Agency - Software House | Strony WWW, AI, Digitalizacja",
    description: "Strony WWW, AI, digitalizacja dla instytucji i firm. Parafie, szkoły, urzędy, gabinety, restauracje.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://acutis.agency",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}

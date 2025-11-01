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
  title: "Acutis - Nowoczesne Zarządzanie Parafią",
  description: "Kompleksowy system do zarządzania parafią. Kartoteka, sakramenty, intencje mszalne i wiele więcej.",
  keywords: ["parafia", "zarządzanie", "sakramenty", "intencje mszalne", "kartoteka parafialna"],
  authors: [{ name: "Acutis" }],
  icons: {
    icon: "/acutis-logo.png",
    apple: "/acutis-logo.png",
  },
  openGraph: {
    title: "Acutis - Nowoczesne Zarządzanie Parafią",
    description: "Kompleksowy system do zarządzania parafią. Kartoteka, sakramenty, intencje mszalne i wiele więcej.",
    type: "website",
    locale: "pl_PL",
    siteName: "Acutis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acutis - Nowoczesne Zarządzanie Parafią",
    description: "Kompleksowy system do zarządzania parafią. Kartoteka, sakramenty, intencje mszalne i wiele więcej.",
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

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [parishCount, setParishCount] = useState(2500);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Oblicz cenę na podstawie liczby parafian
  const getPricing = (count: number) => {
    if (count <= 2500) {
      return { monthly: 97, yearly: 997, label: 'do 2 500' };
    } else if (count <= 5500) {
      return { monthly: 149, yearly: 1490, label: 'do 5 500' };
    } else if (count <= 12000) {
      return { monthly: 197, yearly: 1970, label: 'do 12 000' };
    } else {
      return { monthly: null, yearly: null, label: 'Więcej niż 12 000' };
    }
  };

  const currentPricing = getPricing(parishCount);

  const features = [
    {
      title: 'Zarządzanie Parafianami',
      description: 'Kompletna kartoteka z historią sakramentów i relacjami rodzinnymi',
      icon: '👥',
    },
    {
      title: 'Sakramenty',
      description: 'Rejestracja chrztów, bierzmowań, ślubów i pogrzebów z numeracją aktów',
      icon: '⛪',
    },
    {
      title: 'Intencje Mszalne',
      description: 'Kalendarz mszy i zarządzanie intencjami z ofiarami',
      icon: '📅',
    },
    {
      title: 'Dokumenty PDF',
      description: 'Automatyczne generowanie zaświadczeń i dokumentów parafialnych',
      icon: '📄',
    },
    {
      title: 'Kolęda',
      description: 'System organizacji wizyt duszpasterskich z historią i notatkami',
      icon: '🏠',
    },
    {
      title: 'Synchronizacja',
      description: 'Praca offline z automatyczną synchronizacją danych',
      icon: '🔄',
    },
  ];

  const sacraments = [
    {
      id: 'chrzty',
      title: 'Chrzty Święte',
      icon: '💧',
      description: 'Kompleksowe zarządzanie sakramentem chrztu świętego',
      features: [
        'Dane dziecka i rodziców',
        'Chrzestni z pełnymi danymi',
        'Numeracja aktów chrztów',
        'Historia sakramentów',
        'Relacje rodzinne',
      ],
      documents: [
        'Zaświadczenie o chrzcie',
        'Akt chrztu',
        'Karta sakramentów',
        'Metryka chrztu',
      ],
    },
    {
      id: 'bierzmowania',
      title: 'Bierzmowania',
      icon: '🕊️',
      description: 'Organizacja i dokumentacja sakramentu bierzmowania',
      features: [
        'Lista kandydatów',
        'Świadkowie bierzmowania',
        'Dane biskupa',
        'Katecheza przedbierzmowaniowa',
        'Historia przygotowania',
      ],
      documents: [
        'Zaświadczenie o bierzmowaniu',
        'Akt bierzmowania',
        'Lista kandydatów',
        'Certyfikat bierzmowania',
      ],
    },
    {
      id: 'sluby',
      title: 'Śluby',
      icon: '💍',
      description: 'Pełna obsługa sakramentu małżeństwa',
      features: [
        'Dane nowożeńców',
        'Świadkowie ślubu',
        'Dokumentacja przedślubna',
        'Kurs przedmałżeński',
        'Protokoły kościelne',
      ],
      documents: [
        'Akt małżeństwa',
        'Zaświadczenie o ślubie',
        'Protokół przedślubny',
        'Metryka małżeństwa',
      ],
    },
    {
      id: 'pogrzeby',
      title: 'Pogrzeby',
      icon: '🕯️',
      description: 'Dokumentacja ceremonii pogrzebowych',
      features: [
        'Dane zmarłego',
        'Rodzina zmarłego',
        'Ceremonie pogrzebowe',
        'Miejsca pochówku',
        'Historia liturgii',
      ],
      documents: [
        'Akt zgonu',
        'Zaświadczenie o pogrzebie',
        'Karta pogrzebu',
        'Protokół ceremonii',
      ],
    },
  ];

  const platforms = [
    { name: 'Windows', icon: '🪟', available: true },
    { name: 'macOS', icon: '🍎', available: true },
    { name: 'Linux', icon: '🐧', available: true },
    { name: 'Web', icon: '🌐', available: true },
    { name: 'iOS', icon: '📱', available: false, soon: true },
    { name: 'Android', icon: '🤖', available: false, soon: true },
  ];

  const menuItems = [
    {
      label: 'Funkcje',
      href: '#funkcje',
      submenu: [
        { label: 'Parafianie', href: '#funkcje', icon: '👥' },
        { label: 'Intencje', href: '#funkcje', icon: '📅' },
        { label: 'Kolęda', href: '#funkcje', icon: '🏠' },
      ],
    },
    {
      label: 'Sakramenty',
      href: '#sakramenty',
      submenu: [
        { label: 'Chrzty', href: '#chrzty', icon: '💧' },
        { label: 'Bierzmowania', href: '#bierzmowania', icon: '🕊️' },
        { label: 'Śluby', href: '#sluby', icon: '💍' },
        { label: 'Pogrzeby', href: '#pogrzeby', icon: '🕯️' },
      ],
    },
    {
      label: 'Wydruki',
      href: '#wydruki',
    },
    {
      label: 'Platformy',
      href: '#platformy',
    },
    {
      label: 'Cennik',
      href: '#cennik',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #102C57 50%, #0E2340 100%)' }}>
      {/* Animated liquid gradient */}
      <div 
        className="absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(218, 192, 163, 0.15) 0%, transparent 50%)`,
        }}
      />
      
      {/* Liquid glassmorphism blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" style={{ background: 'radial-gradient(circle, #DAC0A3 0%, transparent 70%)' }} />
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000" style={{ background: 'radial-gradient(circle, #EADBC8 0%, transparent 70%)' }} />
      <div className="absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{ background: 'radial-gradient(circle, #102C57 0%, transparent 70%)' }} />
      
      {/* Liquid wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#DAC0A3" fillOpacity="0.3" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Navigation - Minimalist & Narrow */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
        <div className="flex items-center gap-1 backdrop-blur-xl rounded-full px-3 py-2 shadow-2xl" style={{ background: 'rgba(10, 26, 51, 0.6)', border: '1px solid rgba(218, 192, 163, 0.3)' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-white/5">
            <span className="text-2xl">⛪</span>
            <span className="text-lg font-bold bg-gradient-to-r from-[#FEFAF6] to-[#DAC0A3] bg-clip-text text-transparent">Acutis</span>
          </Link>

          {/* Menu Items */}
          <div className="flex items-center gap-1 mx-2">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm text-[#EADBC8] hover:text-[#DAC0A3] rounded-full transition-all duration-300 hover:bg-white/5"
                  onClick={() => setOpenMenu(null)}
                >
                  {item.label}
                  {item.submenu && (
                    <span className="text-xs opacity-60">▾</span>
                  )}
                </a>

                {/* Dropdown */}
                {item.submenu && openMenu === item.label && (
                  <div className="absolute top-full left-0 mt-2 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden min-w-[180px]" style={{ background: 'rgba(10, 26, 51, 0.9)', border: '1px solid rgba(218, 192, 163, 0.3)' }}>
                    {item.submenu.map((subitem, j) => (
                      <a
                        key={j}
                        href={subitem.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#EADBC8] hover:text-[#DAC0A3] hover:bg-white/5 transition-all duration-300"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="text-lg">{subitem.icon}</span>
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
            <Link
              href="https://dash.acutisapp.com"
              className="px-4 py-1.5 text-sm text-[#EADBC8] hover:text-[#DAC0A3] rounded-full transition-all duration-300 hover:bg-white/5"
            >
              Zaloguj
            </Link>
            <Link
              href="https://dash.acutisapp.com/register"
              className="px-4 py-1.5 text-sm rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-[#0A1A33] font-semibold"
              style={{ background: 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' }}
            >
              Wypróbuj
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block backdrop-blur-xl rounded-2xl px-6 py-3 mb-8 animate-fade-in shadow-lg" style={{ background: 'rgba(218, 192, 163, 0.15)', border: '1px solid rgba(234, 219, 200, 0.3)' }}>
            <p className="text-[#EADBC8] font-medium">🎉 Nowa wersja 2.0 już dostępna</p>
          </div>
          
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-br from-[#FEFAF6] via-[#EADBC8] to-[#DAC0A3] bg-clip-text text-transparent animate-slide-up drop-shadow-2xl">
            Nowoczesne Zarządzanie
            <br />
            Twoją Parafią
          </h1>
          
          <p className="text-2xl text-[#EADBC8] mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Kompleksowy system do zarządzania parafią. Kartoteka, sakramenty, intencje mszalne i wiele więcej.
            Wszystko w jednym miejscu.
          </p>

          <div className="flex gap-6 justify-center mb-16 animate-slide-up animation-delay-400">
            <Link
              href="https://dash.acutisapp.com/register"
              className="px-8 py-4 text-[#0A1A33] text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl font-bold"
              style={{ background: 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' }}
            >
              🚀 Rozpocznij za darmo
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-4 backdrop-blur-xl text-[#FEFAF6] text-lg rounded-xl transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(254, 250, 246, 0.1)', border: '1px solid rgba(218, 192, 163, 0.4)' }}
            >
              Zobacz cennik
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in animation-delay-600">
            {[
              { number: '500+', label: 'Aktywnych Parafii' },
              { number: '50k+', label: 'Parafian' },
              { number: '99.9%', label: 'Uptime' },
            ].map((stat, i) => (
              <div key={i} className="backdrop-blur-xl rounded-2xl p-6 shadow-lg" style={{ background: 'rgba(218, 192, 163, 0.1)', border: '1px solid rgba(234, 219, 200, 0.25)' }}>
                <div className="text-4xl font-bold text-[#DAC0A3] mb-2">{stat.number}</div>
                <div className="text-[#EADBC8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {['Funkcje', 'Sakramenty', 'Wydruki', 'Platformy', 'Cennik'].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="px-6 py-2 backdrop-blur-xl rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 text-[#EADBC8] hover:text-[#DAC0A3]"
              style={{ background: 'rgba(254, 250, 246, 0.08)', border: '1px solid rgba(218, 192, 163, 0.25)' }}
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="funkcje" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#FEFAF6] mb-4">Wszystko czego potrzebujesz</h2>
          <p className="text-xl text-[#EADBC8]">Kompleksowe narzędzie do zarządzania parafią</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group backdrop-blur-xl rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${i * 100}ms`, background: 'rgba(254, 250, 246, 0.08)', border: '1px solid rgba(218, 192, 163, 0.25)' }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#FEFAF6] mb-3">{feature.title}</h3>
              <p className="text-[#EADBC8] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sacraments Detailed Section */}
      <section id="sakramenty" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#FEFAF6] mb-4">Sakramenty - Szczegółowo</h2>
          <p className="text-xl text-[#EADBC8]">Kompleksowa obsługa każdego sakramentu</p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {sacraments.map((sacrament, i) => (
            <div
              key={i}
              id={sacrament.id}
              className="backdrop-blur-xl rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl"
              style={{ background: 'rgba(254, 250, 246, 0.08)', border: '1px solid rgba(218, 192, 163, 0.25)' }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl">{sacrament.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-[#FEFAF6]">{sacrament.title}</h3>
                      <p className="text-[#EADBC8] mt-2">{sacrament.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-xl font-bold text-[#DAC0A3] mb-4">📋 Funkcje:</h4>
                    <ul className="space-y-2">
                      {sacrament.features.map((feature, j) => (
                        <li key={j} className="flex items-center text-[#EADBC8]">
                          <span className="mr-3 text-[#DAC0A3]">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#DAC0A3] mb-4">📄 Dostępne wydruki:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {sacrament.documents.map((doc, j) => (
                      <div
                        key={j}
                        className="backdrop-blur-md rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                        style={{ background: 'rgba(218, 192, 163, 0.15)', border: '1px solid rgba(234, 219, 200, 0.3)' }}
                      >
                        <div className="text-2xl mb-2">📄</div>
                        <div className="text-sm text-[#EADBC8] font-medium">{doc}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(218, 192, 163, 0.1)' }}>
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

      {/* Print Examples Section with Scroll Animation */}
      <section id="wydruki" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#FEFAF6] mb-4">Przykładowe Wydruki</h2>
          <p className="text-xl text-[#EADBC8]">Profesjonalne dokumenty kościelne</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'Zaświadczenie o Chrzcie', type: 'Classic' },
              { title: 'Akt Małżeństwa', type: 'Modern' },
              { title: 'Certyfikat Bierzmowania', type: 'Elegant' },
              { title: 'Karta Sakramentów', type: 'Minimalist' },
            ].map((doc, i) => (
              <div
                key={i}
                className="group backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ background: 'rgba(254, 250, 246, 0.08)', border: '1px solid rgba(218, 192, 163, 0.25)' }}
              >
                <div className="aspect-[3/4] rounded-lg mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)' }}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <div className="text-[#DAC0A3] font-bold text-lg">{doc.type}</div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#FEFAF6] text-center">{doc.title}</h4>
              </div>
            ))}
          </div>

          <div className="backdrop-blur-xl rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)', border: '1px solid rgba(218, 192, 163, 0.4)' }}>
            <h3 className="text-2xl font-bold text-[#FEFAF6] mb-2">🎨 Styl Dokumentów</h3>
            <p className="text-[#EADBC8] text-sm mb-6 opacity-90">Obecnie dostępny jeden styl, więcej stylów w przygotowaniu</p>
            <div className="grid md:grid-cols-3 gap-6 text-[#EADBC8]">
              {/* Dostępny styl */}
              <div className="backdrop-blur-md rounded-xl p-6" style={{ background: 'rgba(218, 192, 163, 0.25)', border: '2px solid rgba(218, 192, 163, 0.5)' }}>
                <div className="text-4xl mb-3">✨</div>
                <div className="font-bold text-lg text-[#DAC0A3] mb-2">Classic</div>
                <div className="text-sm opacity-90 mb-3">Tradycyjny styl z ozdobnymi elementami</div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-400/30">
                  ✓ Dostępny
                </div>
              </div>
              
              {/* Wkrótce - Modern */}
              <div className="backdrop-blur-md rounded-xl p-6 opacity-60" style={{ background: 'rgba(254, 250, 246, 0.05)', border: '1px solid rgba(218, 192, 163, 0.2)' }}>
                <div className="text-4xl mb-3">🎯</div>
                <div className="font-bold text-lg text-[#EADBC8] mb-2">Modern</div>
                <div className="text-sm opacity-75 mb-3">Nowoczesny minimalistyczny design</div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-400/30">
                  🚀 Wkrótce
                </div>
              </div>
              
              {/* Wkrótce - Minimalist */}
              <div className="backdrop-blur-md rounded-xl p-6 opacity-60" style={{ background: 'rgba(254, 250, 246, 0.05)', border: '1px solid rgba(218, 192, 163, 0.2)' }}>
                <div className="text-4xl mb-3">💎</div>
                <div className="font-bold text-lg text-[#EADBC8] mb-2">Minimalist</div>
                <div className="text-sm opacity-75 mb-3">Czysty i prosty layout</div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-400/30">
                  🚀 Wkrótce
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platformy" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#FEFAF6] mb-4">Dostępne Platformy</h2>
          <p className="text-xl text-[#EADBC8]">Pracuj na każdym urządzeniu</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className={`backdrop-blur-xl rounded-2xl p-6 text-center transition-all duration-300 ${platform.available ? 'hover:scale-110' : 'opacity-60'}`}
              style={{ background: 'rgba(254, 250, 246, 0.08)', border: `1px solid rgba(218, 192, 163, ${platform.available ? '0.25' : '0.15'})` }}
            >
              <div className="text-5xl mb-3">{platform.icon}</div>
              <div className="text-[#FEFAF6] font-bold mb-1">{platform.name}</div>
              {platform.available ? (
                <div className="text-xs text-green-400">✓ Dostępne</div>
              ) : platform.soon ? (
                <div className="text-xs text-[#DAC0A3]">🚀 Wkrótce</div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto backdrop-blur-xl rounded-2xl p-8 text-center" style={{ background: 'rgba(218, 192, 163, 0.15)', border: '1px solid rgba(234, 219, 200, 0.3)' }}>
          <h3 className="text-2xl font-bold text-[#FEFAF6] mb-4">📱 Wersja Mobilna w Przygotowaniu</h3>
          <p className="text-[#EADBC8] mb-6">
            Pracujemy nad aplikacjami mobilnymi dla iOS i Android. 
            Już wkrótce będziesz mógł zarządzać parafią z telefonu!
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-4 py-2 rounded-lg" style={{ background: 'rgba(254, 250, 246, 0.1)' }}>
              <span className="text-2xl mr-2">📱</span>
              <span className="text-[#DAC0A3] font-semibold">iOS - Q2 2025</span>
            </div>
            <div className="px-4 py-2 rounded-lg" style={{ background: 'rgba(254, 250, 246, 0.1)' }}>
              <span className="text-2xl mr-2">🤖</span>
              <span className="text-[#DAC0A3] font-semibold">Android - Q2 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#FEFAF6] mb-4">Przejrzyste Ceny</h2>
          <p className="text-xl text-[#EADBC8]">Wybierz plan dopasowany do Twojej parafii</p>
        </div>

        <div className="grid lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {/* TRIAL - 2 kolumny */}
          <div className="lg:col-span-2 backdrop-blur-xl rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105" style={{ background: 'rgba(254, 250, 246, 0.08)', border: '1px solid rgba(218, 192, 163, 0.25)' }}>
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
                Email support
              </li>
            </ul>
            <Link href="https://dash.acutisapp.com/register" className="block w-full py-2 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105 text-[#FEFAF6] text-sm" style={{ background: 'rgba(254, 250, 246, 0.1)', border: '1px solid rgba(218, 192, 163, 0.4)' }}>
              Rozpocznij Trial
            </Link>
          </div>

          {/* PRO - 2 kolumny (główna karta) */}
          <div className="lg:col-span-2 relative backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, rgba(218, 192, 163, 0.25) 0%, rgba(234, 219, 200, 0.15) 100%)', border: '2px solid rgba(218, 192, 163, 0.5)' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-[#0A1A33] px-4 py-1 rounded-full text-sm font-bold shadow-lg" style={{ background: 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' }}>
              🔥 Najpopularniejszy
            </div>
            
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-[#FEFAF6] mb-1">PRO</h3>
              <p className="text-[#EADBC8] text-xs mb-4">Dla parafii</p>
              
              {/* Toggle miesięcznie/rocznie */}
              <div className="flex justify-center gap-1 mb-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${billingCycle === 'monthly' ? 'text-[#0A1A33]' : 'text-[#EADBC8]'}`}
                  style={{ background: billingCycle === 'monthly' ? 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' : 'rgba(254, 250, 246, 0.1)' }}
                >
                  Miesięcznie
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 relative ${billingCycle === 'yearly' ? 'text-[#0A1A33]' : 'text-[#EADBC8]'}`}
                  style={{ background: billingCycle === 'yearly' ? 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' : 'rgba(254, 250, 246, 0.1)' }}
                >
                  Rocznie
                  <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">-17%</span>
                </button>
              </div>

              {/* Slider */}
              <div className="mb-4">
                <label className="block text-[#EADBC8] text-xs mb-2">
                  Liczba parafian: <span className="text-[#DAC0A3] font-bold">{parishCount.toLocaleString('pl-PL')}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="13000"
                  step="100"
                  value={parishCount}
                  onChange={(e) => setParishCount(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #DAC0A3 0%, #DAC0A3 ${(parishCount / 13000) * 100}%, rgba(254, 250, 246, 0.2) ${(parishCount / 13000) * 100}%, rgba(254, 250, 246, 0.2) 100%)`
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
                    {billingCycle === 'monthly' ? currentPricing.monthly : currentPricing.yearly} zł
                  </div>
                  <div className="text-[#EADBC8] text-xs mb-2">
                    {billingCycle === 'monthly' ? 'miesięcznie' : 'rocznie'}
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold text-[#0A1A33] mb-2" style={{ background: 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' }}>
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
                Backup co godzinę
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Priority support 24/7
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                3 urządzenia
              </li>
              <li className="flex items-center text-[#EADBC8]">
                <span className="mr-2 text-[#DAC0A3]">✓</span>
                Szkolenie online
              </li>
            </ul>

            <Link
              href={currentPricing.monthly !== null ? "https://dash.acutisapp.com/register" : "mailto:kontakt@acutisapp.com"}
              className="block w-full py-3 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105 text-[#0A1A33]"
              style={{ background: 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' }}
            >
              {currentPricing.monthly !== null ? 'Wybierz Plan' : 'Skontaktuj się'}
            </Link>
          </div>

          {/* DIECEZJE - 2 kolumny */}
          <div className="lg:col-span-2 backdrop-blur-xl rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105" style={{ background: 'rgba(254, 250, 246, 0.08)', border: '1px solid rgba(218, 192, 163, 0.25)' }}>
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
            <Link href="mailto:kontakt@acutisapp.com" className="block w-full py-2 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105 text-[#FEFAF6] text-sm" style={{ background: 'rgba(254, 250, 246, 0.1)', border: '1px solid rgba(218, 192, 163, 0.4)' }}>
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-xl rounded-3xl p-12 shadow-2xl" style={{ background: 'linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)', border: '1px solid rgba(218, 192, 163, 0.4)' }}>
          <h2 className="text-5xl font-bold text-[#FEFAF6] mb-6">Gotowy na start?</h2>
          <p className="text-xl text-[#EADBC8] mb-8">
            Dołącz do setek parafii, które już korzystają z Acutis.
            <br />
            Wypróbuj za darmo przez 14 dni.
          </p>
          <Link
            href="https://dash.acutisapp.com/register"
            className="inline-block px-10 py-5 text-[#0A1A33] text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' }}
          >
            🚀 Wypróbuj Acutis za darmo
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-12" style={{ borderTop: '1px solid rgba(218, 192, 163, 0.2)' }}>
        <div className="text-center text-[#EADBC8]">
          <p className="mb-4">© 2025 Acutis. Wszystkie prawa zastrzeżone.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-[#DAC0A3] transition-colors">Regulamin</a>
            <a href="#" className="hover:text-[#DAC0A3] transition-colors">Polityka Prywatności</a>
            <a href="mailto:support@acutisapp.com" className="hover:text-[#DAC0A3] transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

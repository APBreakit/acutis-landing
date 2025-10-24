'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const pricing = [
    {
      name: 'TRIAL',
      price: '0',
      period: '30 dni',
      description: 'Bezpłatny okres próbny',
      features: [
        'Wszystkie funkcje',
        'Do 100 parafian',
        '30 dni dostępu',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'BASIC',
      price: '49',
      period: 'miesięcznie',
      description: 'Dla małych parafii',
      features: [
        'Do 500 parafian',
        'Wszystkie funkcje',
        'Backup codzienne',
        'Email + Chat support',
        '1 urządzenie',
      ],
      popular: false,
    },
    {
      name: 'PRO',
      price: '99',
      period: 'miesięcznie',
      description: 'Dla średnich parafii',
      features: [
        'Do 2000 parafian',
        'Wszystkie funkcje',
        'Backup co godzinę',
        'Priority support 24/7',
        '3 urządzenia',
        'Szkolenie online',
      ],
      popular: true,
    },
    {
      name: 'ENTERPRISE',
      price: 'Custom',
      period: 'kontakt',
      description: 'Dla dużych parafii',
      features: [
        'Nielimitowani parafianie',
        'Wszystkie funkcje',
        'Dedykowany support',
        'Nieograniczone urządzenia',
        'Szkolenie stacjonarne',
        'Custom integracje',
      ],
      popular: false,
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

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex justify-between items-center backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl" style={{ background: 'rgba(254, 250, 246, 0.08)', border: '1px solid rgba(218, 192, 163, 0.3)' }}>
          <div className="text-3xl font-bold flex items-center gap-3">
            <span className="text-4xl">⛪</span>
            <span className="bg-gradient-to-r from-[#FEFAF6] via-[#EADBC8] to-[#DAC0A3] bg-clip-text text-transparent">Acutis</span>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://dash.acutisapp.com"
              className="px-6 py-3 backdrop-blur-md rounded-xl transition-all duration-300 hover:scale-105 text-[#FEFAF6] border hover:shadow-lg"
              style={{ background: 'rgba(254, 250, 246, 0.1)', borderColor: 'rgba(218, 192, 163, 0.4)' }}
            >
              Zaloguj się
            </Link>
            <Link
              href="https://dash.acutisapp.com/register"
              className="px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-[#0A1A33] font-semibold"
              style={{ background: 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' }}
            >
              Wypróbuj za darmo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
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

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
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

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#FEFAF6] mb-4">Przejrzyste Ceny</h2>
          <p className="text-xl text-[#EADBC8]">Wybierz plan dopasowany do Twojej parafii</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricing.map((plan, i) => (
            <div
              key={i}
              className="relative backdrop-blur-xl rounded-2xl p-8 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                background: plan.popular 
                  ? 'linear-gradient(135deg, rgba(218, 192, 163, 0.25) 0%, rgba(234, 219, 200, 0.15) 100%)'
                  : 'rgba(254, 250, 246, 0.08)',
                border: plan.popular 
                  ? '2px solid rgba(218, 192, 163, 0.5)'
                  : '1px solid rgba(218, 192, 163, 0.25)'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-[#0A1A33] px-4 py-1 rounded-full text-sm font-bold shadow-lg" style={{ background: 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)' }}>
                  🔥 Najpopularniejszy
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#FEFAF6] mb-2">{plan.name}</h3>
                <p className="text-[#EADBC8] text-sm mb-4">{plan.description}</p>
                <div className="text-5xl font-bold text-[#DAC0A3] mb-2">
                  {plan.price === 'Custom' ? plan.price : `${plan.price} zł`}
                </div>
                <div className="text-[#EADBC8]">{plan.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-[#EADBC8]">
                    <span className="mr-2 text-[#DAC0A3]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="https://dash.acutisapp.com/register"
                className="block w-full py-3 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: plan.popular
                    ? 'linear-gradient(135deg, #DAC0A3 0%, #EADBC8 100%)'
                    : 'rgba(254, 250, 246, 0.1)',
                  color: plan.popular ? '#0A1A33' : '#FEFAF6',
                  border: plan.popular ? 'none' : '1px solid rgba(218, 192, 163, 0.4)'
                }}
              >
                {plan.price === '0' ? 'Rozpocznij Trial' : plan.price === 'Custom' ? 'Skontaktuj się' : 'Wybierz Plan'}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-xl rounded-3xl p-12 shadow-2xl" style={{ background: 'linear-gradient(135deg, rgba(218, 192, 163, 0.2) 0%, rgba(234, 219, 200, 0.1) 100%)', border: '1px solid rgba(218, 192, 163, 0.4)' }}>
          <h2 className="text-5xl font-bold text-[#FEFAF6] mb-6">Gotowy na start?</h2>
          <p className="text-xl text-[#EADBC8] mb-8">
            Dołącz do setek parafii, które już korzystają z Acutis.
            <br />
            Wypróbuj za darmo przez 30 dni.
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

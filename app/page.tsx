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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
        }}
      />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex justify-between items-center backdrop-blur-md bg-white/10 rounded-2xl px-6 py-4 border border-white/20 shadow-xl">
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-4xl">⛪</span>
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Acutis</span>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://dash.acutisapp.com"
              className="px-6 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all duration-300 hover:scale-105"
            >
              Zaloguj się
            </Link>
            <Link
              href="https://dash.acutisapp.com/register"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Wypróbuj za darmo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block backdrop-blur-md bg-white/10 rounded-2xl px-6 py-3 mb-8 border border-white/20 animate-fade-in">
            <p className="text-purple-200 font-medium">🎉 Nowa wersja 2.0 już dostępna</p>
          </div>
          
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent animate-slide-up">
            Nowoczesne Zarządzanie
            <br />
            Twoją Parafią
          </h1>
          
          <p className="text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Kompleksowy system do zarządzania parafią. Kartoteka, sakramenty, intencje mszalne i wiele więcej.
            Wszystko w jednym miejscu.
          </p>

          <div className="flex gap-6 justify-center mb-16 animate-slide-up animation-delay-400">
            <Link
              href="https://dash.acutisapp.com/register"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              🚀 Rozpocznij za darmo
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-4 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white text-lg rounded-xl border border-white/20 transition-all duration-300 hover:scale-105"
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
              <div key={i} className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Wszystko czego potrzebujesz</h2>
          <p className="text-xl text-purple-200">Kompleksowe narzędzie do zarządzania parafią</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-purple-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Przejrzyste Ceny</h2>
          <p className="text-xl text-purple-200">Wybierz plan dopasowany do Twojej parafii</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricing.map((plan, i) => (
            <div
              key={i}
              className={`relative backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-500/30 to-pink-500/30 border-purple-400 shadow-2xl'
                  : 'bg-white/10 hover:bg-white/20 border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  🔥 Najpopularniejszy
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-purple-200 text-sm mb-4">{plan.description}</p>
                <div className="text-5xl font-bold text-white mb-2">
                  {plan.price === 'Custom' ? plan.price : `${plan.price} zł`}
                </div>
                <div className="text-purple-200">{plan.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-purple-100">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="https://dash.acutisapp.com/register"
                className={`block w-full py-3 rounded-xl text-center font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg'
                    : 'backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {plan.price === '0' ? 'Rozpocznij Trial' : plan.price === 'Custom' ? 'Skontaktuj się' : 'Wybierz Plan'}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-white/20">
          <h2 className="text-5xl font-bold text-white mb-6">Gotowy na start?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Dołącz do setek parafii, które już korzystają z Acutis.
            <br />
            Wypróbuj za darmo przez 30 dni.
          </p>
          <Link
            href="https://dash.acutisapp.com/register"
            className="inline-block px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            🚀 Wypróbuj Acutis za darmo
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center text-purple-200">
          <p className="mb-4">© 2025 Acutis. Wszystkie prawa zastrzeżone.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
            <a href="mailto:support@acutisapp.com" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

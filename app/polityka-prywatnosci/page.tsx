import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1A33 0%, #102C57 50%, #0E2340 100%)" }}
    >
      {/* Background effects */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        style={{ background: "radial-gradient(circle, #DAC0A3 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-40 right-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000"
        style={{ background: "radial-gradient(circle, #EADBC8 0%, transparent 70%)" }}
      />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 sm:px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <Image
            src="/acutis-logo.png"
            alt="Acutis Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <span className="text-[#EADBC8] group-hover:text-[#DAC0A3] transition-colors">
            ← Powrót do strony głównej
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
        <div
          className="backdrop-blur-xl rounded-3xl p-8 sm:p-12"
          style={{
            background: "rgba(254, 250, 246, 0.08)",
            border: "1px solid rgba(218, 192, 163, 0.25)",
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FEFAF6] mb-4">Polityka Prywatności</h1>
          <p className="text-[#EADBC8] mb-8">Ostatnia aktualizacja: 1 stycznia 2025</p>

          <div className="space-y-8 text-[#EADBC8]">
            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">1. Wprowadzenie</h2>
              <p className="leading-relaxed mb-4">
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych
                przez Użytkowników w związku z korzystaniem z aplikacji Acutis.
              </p>
              <p className="leading-relaxed">
                Administratorem danych osobowych jest Acutis, z siedzibą w Polsce. Ochrona danych odbywa się zgodnie z
                wymogami powszechnie obowiązujących przepisów prawa, w tym Rozporządzenia Parlamentu Europejskiego i
                Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">2. Rodzaj przetwarzanych danych</h2>
              <p className="leading-relaxed mb-4">W ramach świadczenia usług przetwarzamy następujące dane:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dane identyfikacyjne (imię, nazwisko, adres email)</li>
                <li>Dane parafii (nazwa, adres, dane kontaktowe)</li>
                <li>Dane sakramentalne (informacje o sakramentach udzielonych w parafii)</li>
                <li>Dane techniczne (adres IP, informacje o urządzeniu, logi systemowe)</li>
                <li>Dane dotyczące korzystania z aplikacji</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">3. Cel i podstawa przetwarzania danych</h2>
              <p className="leading-relaxed mb-4">Dane osobowe przetwarzane są w celu:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Świadczenia usług w ramach aplikacji Acutis (art. 6 ust. 1 lit. b RODO)</li>
                <li>Komunikacji z Użytkownikami (art. 6 ust. 1 lit. b RODO)</li>
                <li>Realizacji obowiązków prawnych (art. 6 ust. 1 lit. c RODO)</li>
                <li>Marketingu bezpośredniego (art. 6 ust. 1 lit. f RODO)</li>
                <li>Zapewnienia bezpieczeństwa usług (art. 6 ust. 1 lit. f RODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">4. Bezpieczeństwo danych</h2>
              <p className="leading-relaxed mb-4">
                Stosujemy najnowsze standardy bezpieczeństwa w celu ochrony danych osobowych:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Szyfrowanie danych w tranzycie (TLS/SSL)</li>
                <li>Szyfrowanie danych w spoczynku</li>
                <li>Regularne kopie zapasowe</li>
                <li>Kontrola dostępu i autoryzacja</li>
                <li>Monitoring bezpieczeństwa 24/7</li>
                <li>Regularne audyty bezpieczeństwa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">5. Udostępnianie danych</h2>
              <p className="leading-relaxed mb-4">
                Dane osobowe mogą być udostępniane następującym kategoriom odbiorców:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dostawcom usług IT (hosting, backup, wsparcie techniczne)</li>
                <li>Podmiotom świadczącym usługi płatnicze</li>
                <li>Organom państwowym na podstawie obowiązujących przepisów prawa</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Wszystkie podmioty przetwarzające dane w naszym imieniu gwarantują stosowanie odpowiednich środków
                bezpieczeństwa oraz przetwarzają dane wyłącznie zgodnie z naszymi poleceniami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">6. Prawa użytkowników</h2>
              <p className="leading-relaxed mb-4">Użytkownikom przysługują następujące prawa:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prawo dostępu do danych osobowych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do sprzeciwu wobec przetwarzania</li>
                <li>Prawo do cofnięcia zgody</li>
                <li>Prawo do wniesienia skargi do organu nadzorczego (UODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">7. Okres przechowywania danych</h2>
              <p className="leading-relaxed">
                Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane,
                lub przez okres wymagany przepisami prawa. Po upływie tego okresu dane są bezpiecznie usuwane.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">8. Pliki cookies</h2>
              <p className="leading-relaxed mb-4">
                Aplikacja wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania, analizy ruchu oraz
                personalizacji treści. Użytkownik może w każdej chwili zmienić ustawienia cookies w swojej przeglądarce.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">9. Kontakt</h2>
              <p className="leading-relaxed mb-4">
                W sprawach dotyczących przetwarzania danych osobowych oraz realizacji przysługujących praw prosimy o
                kontakt:
              </p>
              <p className="leading-relaxed">
                Email:{" "}
                <a href="mailto:pomoc@acutisapp.com" className="text-[#DAC0A3] hover:underline">
                  pomoc@acutisapp.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">10. Zmiany w polityce prywatności</h2>
              <p className="leading-relaxed">
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich zmianach
                użytkownicy będą informowani za pośrednictwem aplikacji lub email.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 sm:px-6 py-8 mt-12">
        <div className="text-center text-[#EADBC8] text-sm">
          <p>© 2025 Acutis. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}

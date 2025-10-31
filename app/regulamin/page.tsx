import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FEFAF6] mb-4">Regulamin Świadczenia Usług</h1>
          <p className="text-[#EADBC8] mb-8">Ostatnia aktualizacja: 1 stycznia 2025</p>

          <div className="space-y-8 text-[#EADBC8]">
            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">1. Postanowienia ogólne</h2>
              <p className="leading-relaxed mb-4">
                Niniejszy Regulamin określa zasady świadczenia usług drogą elektroniczną przez Acutis, zasady
                korzystania z aplikacji oraz prawa i obowiązki Użytkowników.
              </p>
              <p className="leading-relaxed">
                Korzystanie z aplikacji Acutis oznacza akceptację niniejszego Regulaminu. Użytkownik zobowiązany jest do
                zapoznania się z treścią Regulaminu przed rozpoczęciem korzystania z usług.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">2. Definicje</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Usługodawca</strong> - Acutis, świadczący usługi drogą elektroniczną
                </li>
                <li>
                  <strong>Użytkownik</strong> - osoba fizyczna, osoba prawna lub jednostka organizacyjna korzystająca z
                  aplikacji
                </li>
                <li>
                  <strong>Aplikacja</strong> - oprogramowanie Acutis dostępne na różnych platformach
                </li>
                <li>
                  <strong>Konto</strong> - zbiór zasobów i ustawień Użytkownika w systemie
                </li>
                <li>
                  <strong>Abonament</strong> - odpłatna usługa dostępu do pełnej funkcjonalności aplikacji
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">3. Warunki świadczenia usług</h2>
              <p className="leading-relaxed mb-4">Aby korzystać z aplikacji Acutis, Użytkownik musi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posiadać dostęp do urządzenia z dostępem do internetu</li>
                <li>Posiadać aktywny adres email</li>
                <li>Zaakceptować niniejszy Regulamin oraz Politykę Prywatności</li>
                <li>Podać prawdziwe dane podczas rejestracji</li>
                <li>Być pełnoletnim lub działać za zgodą opiekuna prawnego</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">4. Rejestracja i konto użytkownika</h2>
              <p className="leading-relaxed mb-4">
                Rejestracja w aplikacji jest dobrowolna, ale niezbędna do korzystania z pełnej funkcjonalności.
                Użytkownik zobowiązuje się do:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Podania prawdziwych i aktualnych danych</li>
                <li>Zachowania poufności danych logowania</li>
                <li>Niezwłocznego informowania o nieautoryzowanym dostępie do konta</li>
                <li>Nieprzekazywania dostępu do konta osobom trzecim</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Usługodawca zastrzega sobie prawo do zablokowania lub usunięcia konta w przypadku naruszenia Regulaminu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">5. Okres próbny (Trial)</h2>
              <p className="leading-relaxed mb-4">
                Nowi użytkownicy mogą korzystać z 14-dniowego bezpłatnego okresu próbnego. W tym czasie dostępne są
                wszystkie funkcje aplikacji z ograniczeniem do 100 parafian.
              </p>
              <p className="leading-relaxed">
                Po zakończeniu okresu próbnego, aby kontynuować korzystanie z aplikacji, należy wykupić odpowiedni plan
                abonamentowy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">6. Płatności i abonament</h2>
              <p className="leading-relaxed mb-4">Zasady dotyczące płatności:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Płatności są realizowane z góry za wybrany okres rozliczeniowy</li>
                <li>Dostępne są płatności miesięczne i roczne</li>
                <li>Ceny są podane w złotych polskich (PLN) brutto</li>
                <li>Abonament odnawia się automatycznie, chyba że zostanie anulowany</li>
                <li>Faktury VAT są wysyłane automatycznie na adres email</li>
                <li>Zwrot środków możliwy jest w ciągu 14 dni od zakupu (prawo odstąpienia)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">7. Anulowanie subskrypcji</h2>
              <p className="leading-relaxed mb-4">
                Użytkownik może anulować subskrypcję w dowolnym momencie z poziomu panelu użytkownika. Anulowanie jest
                skuteczne z końcem bieżącego okresu rozliczeniowego.
              </p>
              <p className="leading-relaxed">
                Po anulowaniu subskrypcji, dostęp do aplikacji zostanie zachowany do końca opłaconego okresu. Dane
                użytkownika są przechowywane przez 30 dni po zakończeniu subskrypcji.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">8. Prawa i obowiązki użytkownika</h2>
              <p className="leading-relaxed mb-4">Użytkownik zobowiązuje się do:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Korzystania z aplikacji zgodnie z jej przeznaczeniem</li>
                <li>Niepodejmowania działań mogących zakłócić działanie aplikacji</li>
                <li>Nienaruszania praw innych użytkowników</li>
                <li>Przestrzegania przepisów prawa, w tym RODO</li>
                <li>Regularnego tworzenia kopii zapasowych danych</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">9. Prawa i obowiązki usługodawcy</h2>
              <p className="leading-relaxed mb-4">Usługodawca zobowiązuje się do:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Zapewnienia dostępności aplikacji na poziomie 99.9% w skali roku</li>
                <li>Ochrony danych osobowych zgodnie z RODO</li>
                <li>Regularnego tworzenia kopii zapasowych</li>
                <li>Informowania o planowanych przerwach technicznych</li>
                <li>Świadczenia wsparcia technicznego</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Usługodawca zastrzega sobie prawo do wprowadzania zmian w aplikacji w celu jej rozwoju i poprawy
                bezpieczeństwa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">10. Odpowiedzialność</h2>
              <p className="leading-relaxed mb-4">Usługodawca nie ponosi odpowiedzialności za:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Szkody wynikające z nieprawidłowego korzystania z aplikacji</li>
                <li>Utratę danych spowodowaną działaniem użytkownika</li>
                <li>Przerwy w działaniu spowodowane siłą wyższą</li>
                <li>Działania osób trzecich (ataki hakerskie, DDoS)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Odpowiedzialność Usługodawcy ograniczona jest do wysokości opłat uiszczonych przez Użytkownika w okresie
                ostatnich 12 miesięcy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">11. Własność intelektualna</h2>
              <p className="leading-relaxed mb-4">
                Wszelkie prawa własności intelektualnej do aplikacji Acutis, w tym kod źródłowy, interfejs użytkownika,
                dokumentacja i materiały marketingowe, należą do Usługodawcy.
              </p>
              <p className="leading-relaxed">
                Użytkownik otrzymuje niewyłączną, nieprzenoszalną licencję na korzystanie z aplikacji zgodnie z
                niniejszym Regulaminem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">12. Reklamacje</h2>
              <p className="leading-relaxed mb-4">
                Reklamacje dotyczące świadczonych usług można składać na adres email:{" "}
                <a href="mailto:pomoc@acutisapp.com" className="text-[#DAC0A3] hover:underline">
                  pomoc@acutisapp.com
                </a>
              </p>
              <p className="leading-relaxed">
                Reklamacja powinna zawierać opis problemu oraz dane kontaktowe. Usługodawca rozpatrzy reklamację w ciągu
                14 dni roboczych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">13. Zmiany regulaminu</h2>
              <p className="leading-relaxed mb-4">
                Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie. O zmianach użytkownicy zostaną
                poinformowani z 14-dniowym wyprzedzeniem.
              </p>
              <p className="leading-relaxed">
                Kontynuowanie korzystania z aplikacji po wejściu w życie zmian oznacza akceptację nowego Regulaminu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#FEFAF6] mb-4">14. Postanowienia końcowe</h2>
              <p className="leading-relaxed mb-4">
                W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy prawa polskiego, w
                szczególności Kodeksu Cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.
              </p>
              <p className="leading-relaxed">
                Wszelkie spory będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.
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

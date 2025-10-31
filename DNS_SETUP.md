# 🌐 Konfiguracja DNS dla acutisapp.com

## ✅ Landing Page Wdrożony!

**URL Preview:** https://acutis-landing-6ipg456xr-breackly.vercel.app  
**Docelowa Domena:** acutisapp.com

---

## 📋 Krok 1: Konfiguracja DNS w OVH

Zaloguj się do panelu OVH i skonfiguruj następujące rekordy DNS:

### Opcja A: A Record (Rekomendowane)

\`\`\`
Type: A
Name: @ (lub puste dla root domain)
Target: 76.76.21.21
TTL: 3600 (1 godzina)
\`\`\`

### Opcja B: CNAME Record

\`\`\`
Type: CNAME
Name: www
Target: cname.vercel-dns.com
TTL: 3600
\`\`\`

---

## 📋 Krok 2: Weryfikacja Domeny

Po skonfigurowaniu DNS w OVH:

1. **Poczekaj 5-30 minut** na propagację DNS
2. Vercel automatycznie wykryje zmianę
3. Otrzymasz email z potwierdzeniem
4. SSL certificate zostanie automatycznie wygenerowany

---

## 🔍 Sprawdzanie Statusu DNS

### Polecenie:

\`\`\`bash
dig acutisapp.com
\`\`\`

lub

\`\`\`bash
nslookup acutisapp.com
\`\`\`

Powinieneś zobaczyć:
\`\`\`
acutisapp.com.  3600  IN  A  76.76.21.21
\`\`\`

---

## 🚀 Alternatywna Opcja: Nameservers Vercel

Jeśli chcesz pełną kontrolę przez Vercel, zmień nameservers w OVH na:

\`\`\`
ns1.vercel-dns.com
ns2.vercel-dns.com
\`\`\`

**Uwaga:** Ta opcja przeniesie CAŁĄ kontrolę DNS do Vercel (w tym emaile, jeśli używasz).

---

## ✅ Checklist

- [ ] Zaloguj się do panelu OVH
- [ ] Przejdź do zarządzania domeną acutisapp.com
- [ ] Dodaj rekord A: @ → 76.76.21.21
- [ ] Poczekaj 5-30 minut
- [ ] Sprawdź status: `dig acutisapp.com`
- [ ] Otwórz: https://acutisapp.com
- [ ] Sprawdź certyfikat SSL (kłódka w przeglądarce)

---

## 🔗 Linki

- **Vercel Dashboard:** https://vercel.com/breackly/acutis-landing
- **Panel OVH:** https://www.ovh.com/manager/
- **Dokumentacja Vercel:** https://vercel.com/docs/projects/domains

---

## 📞 Wsparcie

Jeśli masz problemy:
1. Sprawdź status DNS: https://dnschecker.org/#A/acutisapp.com
2. Kontakt z Vercel Support: https://vercel.com/support
3. Email: support@acutisapp.com

---

**Landing page jest gotowy! Po skonfigurowaniu DNS będzie dostępny pod acutisapp.com** 🎉

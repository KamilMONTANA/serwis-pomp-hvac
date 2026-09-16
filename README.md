# TermoPro - Autoryzowany Serwis Pomp Ciepła i HVAC

Nowoczesna strona lądowania dla serwisu pomp ciepła i HVAC zbudowana w oparciu o framework **Astro v5**, **Tailwind CSS** oraz **TypeScript**.

## 🚀 Uruchomienie projektu

### Wymagania:
- Node.js (wersja 18+)
- npm lub pnpm

### Komendy:
```bash
# Instalacja zależności
npm install

# Uruchomienie lokalnego serwera deweloperskiego
npm run dev

# Weryfikacja typów i diagnostyka Astro
npx astro check

# Zbudowanie zoptymalizowanej wersji produkcyjnej
npm run build

# Podgląd wersji produkcyjnej
npm run preview
```

---

## 📁 Struktura Projektu

```text
serwis-pomp-hvac/
├── .gemini/
│   ├── GEMINI.md                    # Konfiguracja i standardy ECC dla projektu
│   └── rules/                       # Reguły jakości, TS/JS i dostępności (WCAG 2.2 AA)
├── src/
│   ├── components/
│   │   ├── Brands.astro             # Autoryzacje producentów (Daikin, Nibe, Panasonic, UDT)
│   │   ├── CtaBanner.astro          # Baner wezwania do działania przed sezonem
│   │   ├── Faq.astro                # Dostępna sekcja pytań i odpowiedzi (<details>/<summary>)
│   │   ├── Footer.astro             # Stopka z danymi kontaktowymi i statusem 24/7
│   │   ├── Header.astro             # Pasek nawigacji, logo i dyżur 24/7
│   │   ├── Hero.astro               # Nagłówek główny, liczby i wyróżniona realizacja
│   │   ├── InspectionSteps.astro    # 18-krokowa procedura przeglądu technicznego
│   │   ├── Packages.astro           # Pakiety: Przegląd, Pogotowie 4h, Optymalizacja COP
│   │   ├── Realizations.astro       # Galeria realizacji ze wskaźnikami jakości
│   │   ├── SavingsCalculator.astro  # Interaktywny kalkulator oszczędności COP
│   │   ├── ServiceForm.astro        # Formularz zgłoszeniowy z walidacją i a11y
│   │   └── Testimonials.astro       # Opinie klientów i ocena 4.9/5
│   ├── layouts/
│   │   └── Layout.astro             # Główny szablon strony, fonty Google, meta tagi
│   ├── pages/
│   │   └── index.astro              # Strona główna łącząca komponenty
│   └── scripts/
│       ├── calculator.ts            # Czysta funkcja wyliczeń kosztów pomp ciepła
│       └── form-validation.ts       # Logika walidacji numeru telefonu i miejscowości
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## ✨ Cechy i standardy
- **Zero-JS by default (Astro Islands)**: Sekcje statyczne generowane w czasie budowy, zero narzutu na czas ładowania.
- **Dostępność (WCAG 2.2 AA)**: Skip link, etykiety formularza, `aria-invalid`, `aria-describedby`, `role="alert"`.
- **Czysta separacja kodu**: Logika biznesowa (`calculator.ts`, `form-validation.ts`) jest odseparowana od warstwy renderowania DOM.

# Everything Claude Code (ECC) — Project Configuration

**Projekt:** `serwis-pomp-hvac` (TermoPro - Autoryzowany Serwis Pomp Ciepła i HVAC)  
**Środowisko:** Gemini CLI / ECC v2.0.0 (Project-level setup)

---

## 1. Wybrane moduły i umiejętności (Skills)

Dla tego projektu skonfigurowano następujące wyspecjalizowane umiejętności z biblioteki ECC:

### Core & Quality
- **`tdd-workflow` / `test-driven-development`**: Test-driven development (minimum 80% pokrycia dla logiki kalkulatora, walidacji formularza, filtrów).
- **`verification-loop`**: Weryfikacja poprawności kodu, testów, builda i zgodności przed zatwierdzeniem zmian.
- **`security-review`**: Bezpieczeństwo formularzy, walidacja danych wejściowych, sanityzacja, zapobieganie XSS.

### Frontend, UI/UX & Design
- **`frontend-patterns`**: Nowoczesne wzorce komponentów, podział na małe jednostki, zarządzanie stanem i optymalizacja wydajności.
- **`ui-ux-pro-max`**: Standardy estetyczne, dobór typografii (Plus Jakarta Sans, Inter), hierarchia wizualna i spójność brandu.
- **`design-system`**: Spójny system designu (paleta navy `#0a2540`, amber `#ea580c`/`#f97316`, emerald `#059669`, neutralne tła slate).
- **`accessibility`**: Zgodność z normami WCAG 2.2 Level AA (kontrast, etykiety `aria-*`, focus indicators, obsługa klawiaturą i czytnikami ekranu).

---

## 2. Reguły projektu (Rules)

### A. Zasady wspólne (Common Rules)
1. **Niezmienność (Immutability)**: Zawsze twórz nowe obiekty/struktury stanu zamiast mutować istniejące.
2. **Architektura plików**: Krótkie pliki (typowo 200–400 linii, maks 800), podział wedle domeny / komponentu.
3. **Podejście Test-First**: Nowa logika i poprawki błędów rozpoczynają się od testów weryfikujących.
4. **Czystość i prostota**: Brak zagnieżdżeń głębszych niż 4 poziomy, funkcje < 50 linii.

### B. Standardy TypeScript / JavaScript
1. **Ścisłe typowanie**: Zakaz używania `any`. Jawne interfejsy dla zgłoszeń serwisowych, parametrów kalkulatora i pakietów.
2. **Czysta separacja widoku od logiki**:
   - `calculator.ts`: silnik wyliczeń oszczędności pomp ciepła vs paliwa kopalne.
   - `form-validation.ts`: reguły walidacji numeru telefonu (PL), miejscowości, typu pompy.
   - Komponenty UI renderujące stan.
3. **Odporność na błędy**: Czytelne komunikaty błędów w UI dla użytkownika, asercje walidacyjne.

### C. Standardy Dostępności (WCAG 2.2 AA)
1. **Semantyka**: Użycie poprawnych znaczników HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<details>`, `<summary>`).
2. **Formularze**:
   - Każdy `<input>`, `<select>` i `<textarea>` posiada powiązany `<label for="...">`.
   - Pola z błędami mają `aria-invalid="true"` oraz `aria-describedby="[id-bledu]"`.
   - Zestawy opcji radiowych zgrupowane w `<fieldset>` z `<legend>`.
3. **Kontrast i Focus**:
   - Widoczny ring `focus-visible` na wszystkich interaktywnych elementach.
   - Kontrast tekstu minimum 4.5:1 (tekst zwykły) i 3:1 (duży tekst / ikony).
   - Pomijanie nawigacji: widoczny przycisk skip link ("Przejdź do treści").

# Reguły Jakości i Standardów Kodu dla Projektu

## 1. Immutability (Niezmienność)
- Nigdy nie mutuj istniejących tablic ani obiektów stanu bezpośrednio.
- Zwracaj nowe kopie przy aktualizacjach (`{ ...state, updatedProp }`, `array.map()`, `array.filter()`).

## 2. Architektura i Organizacja Kodu
- Pliki krótkie, przejrzyste (maksymalnie 400 linii, optymalnie 100-250 linii).
- Logika biznesowa i kalkulatory całkowicie odseparowane od manipulacji drzewem DOM.
- Czyste nazewnictwo zmiennych i funkcji w języku angielskim lub jednoznacznym technicznym.

## 3. Bezpieczeństwo Formularzy (Security Checklist)
- Wszystkie dane wprowadzone przez użytkownika muszą być walidowane przed przetworzeniem.
- Ochrona przed XSS – nigdy nie wstrzykuj surowych danych użytkownika poprzez `innerHTML`. Używaj `textContent` lub bezpiecznych mechanizmów renderowania.
- Wszystkie dane kontaktowe (telefon, e-mail) podlegają sanityzacji i regexom walidacyjnym.

## 4. Git & Commit Workflow
- Stosuj konwencjonalne commity (`feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`).

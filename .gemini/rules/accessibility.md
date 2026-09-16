# Reguły Dostępności (WCAG 2.2 Level AA)

## 1. Semantyka HTML
- Stosuj właściwe tagi strukturalne: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Hierarchia nagłówków: dokładnie jeden `<h1>` na stronę, logiczny porządek `<h2>`, `<h3>` bez pomijania poziomów.

## 2. Formularze i Walidacja
- Każde pole formularza (`<input>`, `<select>`, `<textarea>`) musi mieć przypisany element `<label for="id">`.
- Pola z błędami muszą mieć `aria-invalid="true"` i być powiązane z opisem błędu za pomocą `aria-describedby="error-id"`.
- Kontenery na komunikaty błędów lub powiadomienia o sukcesie muszą posiadać atrybuty `role="alert"` lub `aria-live="polite"`.
- Grupy opcji typu radio / checkbox muszą znajdować się w `<fieldset>` z nagłówkiem `<legend>`.

## 3. Nawigacja klawiaturą i Focus
- Elementy interaktywne muszą posiadać wyraźny wskaźnik skupienia (`focus-visible:ring-2 focus-visible:ring-offset-2`).
- Dodaj link pomijania nawigacji ("Skip to main content") dla użytkowników czytników ekranu i klawiatury.
- Wszystkie akcje dostępne myszą muszą być w pełni obsługiwane klawiaturą (`Tab`, `Enter`, `Space`, strzałki).

## 4. Kontrast i Kolory
- Minimalny kontrast tekstu: 4.5:1 dla tekstu standardowego, 3:1 dla tekstu dużego (powyżej 18pt / 24px) i elementów graficznych.
- Kolor nigdy nie może być jedynym nośnikiem informacji (np. ikona błędu obok czerwonej ramki).

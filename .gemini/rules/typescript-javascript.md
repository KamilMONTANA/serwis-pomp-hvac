# Reguły TypeScript / JavaScript

## 1. Typowanie i Struktura
- W projektach TS unikaj `any` – definiuj jasne modele danych (np. interfejsy `ServiceRequest`, `CalculationParams`, `CalculationResult`).
- W czystym JS stosuj JSDoc dla kluczowych parametrów funkcji i wartości zwracanych.

## 2. Separacja Zadań
- Kalkulatory i moduły obliczeniowe (`calculator.js`): czyste funkcje (pure functions) bez efektów ubocznych i zależności od DOM.
- Walidacja wejścia (`validation.js`): niezależny zestaw reguł zwracający obiekt z flagą `isValid` i listą błędów.
- Obsługa interfejsu (`ui.js`): odpowiedzialna wyłącznie za zdarzenia (`addEventListener`), prezentację błędów i toastów.

## 3. Asynchroniczność i Błędy
- Używaj `async/await` z blokami `try/catch`.
- Nigdy nie połykaj błędów w pustym bloku `catch` – raportuj je użytkownikowi w przyjaznej formie.

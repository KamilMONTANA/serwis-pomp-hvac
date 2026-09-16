export interface FormValidationResult {
  isValid: boolean;
  errors: {
    phone?: string;
    city?: string;
    name?: string;
  };
}

/**
 * Walidacja polskiego numeru telefonu (dowolny format z min 9 cyframi)
 */
export function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  // Polski numer z kierunkowym 48 (11 cyfr) lub bez kierunkowego (9 cyfr)
  return digits.length === 9 || (digits.length === 11 && digits.startsWith('48'));
}

/**
 * Walidacja nazwy miejscowości lub kodu pocztowego
 */
export function validateCity(city: string): boolean {
  return city.trim().length >= 2;
}

/**
 * Pełna walidacja danych wejściowych formularza
 */
export function validateServiceForm(phone: string, city: string, name?: string): FormValidationResult {
  const errors: FormValidationResult['errors'] = {};

  if (!phone || !validatePhone(phone)) {
    errors.phone = 'Wprowadź poprawny 9-cyfrowy numer telefonu kontaktowego.';
  }

  if (!city || !validateCity(city)) {
    errors.city = 'Podaj miejscowość lub kod pocztowy, aby dobrać najbliższy zespół serwisowy.';
  }

  if (name !== undefined && name.trim().length < 2) {
    errors.name = 'Wpisz imię i nazwisko osoby zgłaszającej.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

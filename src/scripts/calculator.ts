export type FuelType = 'coal' | 'gas' | 'oil';

export interface FuelFactors {
  baseCostFactor: number;
  heatPumpEfficiencyFactor: number;
}

export const FUEL_FACTORS: Record<FuelType, FuelFactors> = {
  coal: { baseCostFactor: 45, heatPumpEfficiencyFactor: 18 },
  gas: { baseCostFactor: 52, heatPumpEfficiencyFactor: 20 },
  oil: { baseCostFactor: 68, heatPumpEfficiencyFactor: 21 },
};

export interface CalculationResult {
  heatPumpCost: number;
  annualSavings: number;
  recommendation: string;
}

/**
 * Czysta funkcja wyliczająca roczne koszty i oszczędności pompy ciepła
 */
export function calculateSavings(area: number, fuelType: FuelType): CalculationResult {
  const factors = FUEL_FACTORS[fuelType] || FUEL_FACTORS.coal;
  const oldHeatingCost = area * factors.baseCostFactor;
  const hpCost = Math.round(area * factors.heatPumpEfficiencyFactor);
  const savings = Math.max(0, oldHeatingCost - hpCost);

  let recommendation = '';
  if (area <= 120) {
    recommendation = `Dla powierzchni ${area} m² zalecamy standardowy coroczny przegląd okresowy oraz czyszczenie parownika przed sezonem grzewczym.`;
  } else if (area <= 220) {
    recommendation = `Dla domu ${area} m² rekomendujemy 1 pełny przegląd okresowy rocznie (wrzesień–październik) oraz kontrolę filtra magnetycznego po 6 miesiącach sezonu.`;
  } else {
    recommendation = `Dla obiektu ${area} m² rekomendujemy rozszerzony pakiet serwisowy: 2 kontrole w roku, test ciśnień kaskadowych i stałą weryfikację nastaw.`;
  }

  return {
    heatPumpCost: hpCost,
    annualSavings: savings,
    recommendation,
  };
}

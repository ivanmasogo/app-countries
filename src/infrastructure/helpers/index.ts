
export function formatPopulation(population: number | null | undefined): string | null {
  if (population !== null && population !== undefined ) {
    return new Intl.NumberFormat('es-ES').format(population);
  }
  return null;
}

export function formatCurrencies(currencies: object | null | undefined ): string | null {
  if (currencies !== null && currencies !== undefined && !isEmpty(currencies)) {
    return Object.values(currencies).map(currency => currency.name).join(', ');
  }
  return null;
}

export function formatLanguages(languages: object | null | undefined): string | null {
  if (languages !== null && languages !== undefined && !isEmpty(languages)) {
    return Object.values(languages).join(', ');
  }
  return null;
}

export function nativeName(names: object | null | undefined): string | null {
  if (names !== null && names !== undefined && !isEmpty(names)) {
    const entries = Object.entries(names);
    return entries[0][1].common;
  }
  return null;
}
const isEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};
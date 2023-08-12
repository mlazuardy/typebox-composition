export function isEmptyOrNull(value?: any) {
  return value === "" || value === undefined || value === null;
}

export function isObjectEmpty(data: Record<string, any>) {
  return JSON.stringify(data) === "{}";
}

export function isTypeOptional(options: any) {
  const optionalSymbol = Object.getOwnPropertySymbols(options).find((s) => {
    return s.description === "TypeBox.Optional";
  });

  if (optionalSymbol) {
    return true;
  }

  return false;
}

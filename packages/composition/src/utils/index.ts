export function isEmptyOrNull(value?: any) {
  return value === "" || value === undefined || value === null;
}

export function isObjectEmpty(data: Record<string, any>) {
  if (!data) {
    return true;
  }

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

export function normalizeField(field: string) {
  // convert field to snake case first
  const snakeCaseValue = field
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");

  return snakeCaseValue.replaceAll("_", " ");
}

export const COOKIE_PREFIX = "typebox-composition";

export function withPrefix(key: string) {
  return COOKIE_PREFIX + "_" + key;
}

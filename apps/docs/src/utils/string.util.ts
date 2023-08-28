export function slugify(value: string, separator = "-") {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, separator)
    .replace(/-+/g, separator)
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

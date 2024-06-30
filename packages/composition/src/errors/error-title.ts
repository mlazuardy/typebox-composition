/**
 * path is return /id
 * or /object/title
 * or /array/0/title
 * get the last string after /
 * e.g if /id then id
 * if /object/name then name
 */
export function getTitleFromPath(path: string) {
  return path.split("/").slice(-1)[0];
}

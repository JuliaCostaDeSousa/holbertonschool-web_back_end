export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array) || !set instanceof Set) {
    throw new TypeError();
  }
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}

export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError();
  }
  return new Set(array);
}

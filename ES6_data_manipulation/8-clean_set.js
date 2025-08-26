export default function cleanSet(set, startString) {
  if (!set instanceof Set || !typeof(startString) === 'string') {
    throw new TypeError();
  }
  if (startString === "") {
    return "";
  }
  let res = [];
  for (const element of set) {
    if (element.startsWith(startString)) {
      res.push(element.slice(startString.length));
    }
  }
  return res.join('-');
}

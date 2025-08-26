export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || !(typeof(startString) === 'string')) {
    return "";
  }
  if (startString === "") {
    return "";
  }
  let res = [];
  for (const element of set) {
    if (typeof(element) === 'string') {
      if (element.startsWith(startString)) {
        if (element.slice(startString.length) !== "") {
          res.push(element.slice(startString.length));
        }
      };   
    };
  };
  return res.join('-');
}

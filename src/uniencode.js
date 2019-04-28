// #!/usr/bin/perl
// # Ⅽоηνеrt аѕⅽіі tօ υtf‐8.
// use utf8;
// binmode STDIN, ":utf8";
// binmode STDOUT, ":utf8";

const getRandFn = require('./lib').getRandFn;

const Δ = {
  // "~": [],
  // "!": [],
  // "@": [],
  // "#": [],
  // $: [],
  '%': [8240],
  // "^": [],
  // "&": [],
  '*': [10033],
  // "(": [],
  // ")": [],
  _: [9418],
  '-': [8208],
  // "+": [],
  // "=": [],
  // "[": [],
  // "]": [],
  // "{": [],
  // "}": [],
  // "\\": [],
  '|': [9475],
  '"': [8223],
  "'": [8217],
  // ":": [],
  // ";": [],
  '<': [8249],
  '>': [8250],
  // ",": [],
  // ".": [],
  '/': [8260],
  // "?": [],

  // "1": [],
  // "2": [],
  '3': [1047],
  // "4": [],
  // "5": [],
  // "6": [],
  // "7": [],
  // "8": [],
  // "9": [],
  '0': [1365],

  a: [1072],
  A: [1040],
  b: [1068],
  B: [1042],
  c: [1089, 8573, 1010],
  C: [663, 1057, 8557],
  d: [1281, 8574],
  D: [8558],
  e: [1077],
  E: [917, 1045],
  // f: [],
  F: [988],
  // g: [],
  G: [1292],
  h: [1210],
  H: [919, 1053],
  i: [1110, 8560],
  I: [921, 1030],
  j: [1011, 1112],
  J: [1032],
  // k: [],
  K: [922, 1050],
  l: [8572],
  L: [8556],
  m: [8575],
  M: [924, 1052, 8559],
  n: [951, 627],
  N: [925],
  o: [1086, 1413],
  O: [927, 1054],
  p: [961, 1088],
  P: [929, 1056],
  // q: [],
  // Q: [],
  // r: [],
  // R: [],
  s: [1109],
  S: [1359],
  // t: [],
  T: [932, 1058],
  u: [965],
  // U: [],
  v: [957, 8910, 8964, 9013],
  V: [947, 8548],
  // w: [],
  // W: [],
  x: [1093, 8569, 215],
  X: [935, 1061, 8553],
  y: [1059, 1091],
  Y: [933],
  // z: [],
  Z: [918],
};

/**
 *
 * @param {string} initialString
 */
function uniencode(initialString) {
  const rand = getRandFn();

  return initialString
    .split('')
    .map((ם) => {
      if (ם in Δ) {
        return String.fromCharCode(Δ[ם][rand() % Δ[ם].length]);
      } else {
        return ם;
      }
    })
    .join('');
}

module.exports = uniencode;

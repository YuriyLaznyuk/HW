//3. Найти суммы только положительных из трех чисел
"use strict";
function getPositiveSum(a, b, c) {
  let rez;
  if (a > 0 && b > 0 && c > 0) {
    rez = a + b + c;
  } else if (a > 0 && b > 0 && c < 0) {
    rez = a + b;
  } else if (a > 0 && b < 0 && c > 0) {
    rez = a + c;
  } else if (a < 0 && b > 0 && c > 0) {
    rez = b + c;
  } else {
    rez = "incorrect input";
  }
  return rez;
}

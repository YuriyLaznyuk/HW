//4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
"use strict";
function getFac(a) {
  let rez = 1;
  for (let i = a; i > 0; i--) {
    rez *= i;
  }

  return rez;
}

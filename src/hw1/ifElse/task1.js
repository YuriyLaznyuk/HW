//1. Если а – четное посчитать а*б, иначе а+б

"use strict";
function sumAndMul(a, b) {
  let c = a % 2 == 0 ? a * b : a + b;
  return c;
 
}

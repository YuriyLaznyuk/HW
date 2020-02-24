//посчитать сумму элементов массива с нечетными индексами
"use strict";
function getSumIndexOdd(array) {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (i % 2 != 0) {
      sum += array[i];
    }
  }
  return sum;
}

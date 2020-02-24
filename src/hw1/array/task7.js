//Посчитать колличество нечетных элементов
"use strict";
function getColOddElem(array) {
  let col = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      col++;
    }
  }
  return col;
}

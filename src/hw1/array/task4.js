//Найти индекс мексимального элемента массива
"use strict";
function getIndexMaxElem(array) {
  let max = array[0];
  let index = 0;
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
      index = i;
    }
  }
  return index;
}

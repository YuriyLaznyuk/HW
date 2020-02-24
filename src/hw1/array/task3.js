// найти индекс минимального элемента массива
"use strict";
function getIndexMinElem(array) {
  let min = array[0];
  let index = 0;
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      index = i;
    }
  }
  return index;
}

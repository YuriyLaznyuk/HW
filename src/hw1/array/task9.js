"use strict";
function getSortBuble(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

////////////////////////////////////
function getSortSelect(array1) {
  for (let i = 0; i < array1.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array1.length; j++) {
      if (array1[j] < array1[min]) {
        min = j;
      }
    }
    let temp = array1[min];
    array1[min] = array1[i];
    array1[i] = temp;
  }
  return array1;
}

////////////////////////////////////////
function getSortInsert(array2) {
  for (var i = 1; i < array2.length; i++) {
    let newEl = array2[i];
    let location = i - 1;
    while (location >= 0 && array2[location] > newEl) {
      array2[location + 1] = array2[location];
      location = location - 1;
    }
    array2[location + 1] = newEl;
  }
  return array2;
}

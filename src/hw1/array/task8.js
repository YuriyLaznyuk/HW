//поменять местами первую и вторую половину массива 1234--3412
"use strict";

function getHalfRevers(array) {
  for (var i = 0; i < parseInt(array.length / 2); i++) {
    var temp = array[i];
    array[i] = array[parseInt(array.length / 2) + i];
    array[parseInt(array.length / 2) + i] = temp;
  }
  return array;
}

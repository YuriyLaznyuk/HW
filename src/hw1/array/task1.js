//Найти минимальный элемент массива
"use strict"
function getMinElem(array){

    let min = array[0];
    for (var i = 0; i < array.length ; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
       return min;
}

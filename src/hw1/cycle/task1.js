 //1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
 "use strict"
 function getSumEven(a){

     let i = 1, sum = 0, col = 0;
     while (i<=a) {
         if (i%2==0) {
             sum += i;
             col++
         }
         i++;
     }
     return [sum,col];
 }
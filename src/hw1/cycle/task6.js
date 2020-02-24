// Вывести число, которое является зеркальным отображением последовательности
//цифр заданного числа, например, задано число 123, вывести 321.
"use strict"
function getDigitRevers(a){

  let rez = 0;
  for (var i = a; i > 0; i = parseInt((i /= 10))) {
    rez = (rez + (i % 10)) * 10;
  }
  
  rez=rez/10;
  return rez;
}


//Получить строковое название дня недели по номеру дня
"use strict"
function getDay(a) {
  let number = a;
  let rez = null;

  switch (number) {
    case 1:
      rez = "Monday";
      break;
    case 2:
      rez = "Tuesday";
      break;
    case 3:
      d;
      rez = "Wednesday";
      break;
    case 4:
      rez = "Thursday";
      break;
    case 5:
      rez = "Friday";
      break;
    case 6:
      rez = "Satarday";
      break;
    case 7:
      rez = "Sunday";
      break;
    default:
      rez = "Incorrect input";
  }
  return rez;
}


// 5. Посчитать сумму цифр заданного числа
// "use strict";
// let a = 125;
// let a1 = a;
// let sum = 0,
//   temp;
// while (a) {
//   tmp = a % 10;
//   a = (a - tmp) / 10;
//   sum += tmp;
// }
// console.log(`digit ${a1} sum ${sum}`);
// method 2
////////////////////////////////////////////
function getDigitSum(b) {
  let rez = 0;
  for (let i = b; i > 0; i = parseInt((i /= 10))) {
    rez += i % 10;
  }
  return rez;
}

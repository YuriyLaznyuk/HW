"use strict";
let a = 200;
let nameVulue = "super string";

const b = 400;
// b=888; ошибка
console.log(`${a} ${nameVulue} ${b}`);

let myString = "stringa";
let char = myString[2];
console.log(`index 2= ${char}`);
// некорректные названия переменных
// 222lol
// @someVariable
// my%percent
//const rate; // ошибка, rate не инициализирована

// Присвоение значение null означает, что переменная имеет
// некоторое неопределенное значение
// (undefined означает, что переменная не имеет значения)
let isAlive;
console.log(isAlive); // undefined
isAlive = null;
console.log(isAlive); // null ????????
isAlive = undefined; // снова установим тип undefined
console.log(isAlive); // undefined

// typeof определяет тип переменной
let a1 = typeof function() {};
console.log(a1); //function

let name = "Tom";
console.log(typeof name); // string

let income = 45.8;
console.log(typeof income); // number

let isEnabled = true;
console.log(typeof isEnabled); // boolean

let undefVariable;
console.log(typeof undefVariable); // undefined

let a2 = typeof Array();
console.log(a2); // object
let number = 4000;
let newNumber = Number(3000.77777777);
console.log(newNumber.toFixed(2)); //==> “3000.78” метод для округления числа
console.log(number.toFixed(2)); // ==> “4000.00”
console.log(typeof null); /// object фигня баг

// Если математическая операция не может быть совершена, то
// возвращается специальное значение NaN
console.log(1 / 0); //Infinity
console.log(Infinity / Infinity); //NaN
console.log(Math.sqrt(-10)); //NaN

console.log(NaN === NaN); //false
console.log(-1 / 0); //-Infinity отрицательная бесконечность

console.log(typeof NaN); // number
console.log(typeof undefined); //undefined
// ++ префикс---постфикс ++
let count = 10;
console.log(++count); // 11
console.log(count); // 11
console.log(count++); // 11
console.log(count); // 12

// “+”, “-”, “*”, “/”, “% (остаток от деления)”
// по поводу знака деления
// можно добавить, что в Javascript
// как 10/3 вернёт
// вещественное число а не целое
console.log("20%2 = ", 20 % 2); // 0
console.log("122%10 =  ", 122 % 10); // 2
console.log("10/3 = ", 10 / 3); // 3.333333333333335

let x = 100;
let y = 50;
//сокращения
console.log("x+=100 = ", (x += 100)); // x=x+100
console.log("y-=5 = ", (y = -5)); // y=y-5
console.log("y/=5 = ", (y /= 5)); // y=y/5
console.log("y*=5 = ", (y *= 5)); // y=y*5

// Операторы отношения:
// Возвращают значение логического типа true или false:
console.log(5 < 10);
console.log(5 > 10);
console.log(10 >= 10);
console.log(8 <= 10);
// Сравнение на равенство или неравенство:
console.log(10 === 10);
console.log(10 !== 10);
console.log("10" == 10); // true
console.log("10" === 10); //false

// косые кавычки для ` ` для строк “${}”
console.log(`X = "${x}"`); // X="100";

// Абсолютно любое значение в Javascript может
// быть преобразовано в
// логическое, для этого преобразования
//  используется конструктор Boolean
// типа или унарный оператор “!!”.
let w = "Vova";
let f = !!w;
console.log(f); // true
// Унарный оператор логического отрицания: “!”, он возвращает инверсию
// текущего состояния переменной к которой применяется.
let s = 0;
let ss = !s;
console.log(ss); // true
s = 2222;
ss = !s;
console.log(ss); // false

// &&    ||
let numb = 5;
let q = numb == 10;
let q1 = numb && 5;
console.log(q);
console.log(q1);
let prevString = `myString`;
let newString = prevString || "ertr";
console.log(newString); // myString

// При таком подходе мы получим false только в случаях преобразования
// (Boolean(0), Boolean(-0), Boolean(“”), Boolean(null), Boolean(undefined),
// Boolean(NaN)), все остальные преобразования, даже [] или {} вернут true.
console.log(Boolean(0)); // false
let arr = [];
let xx = function() {};
console.log(Boolean(arr)); // true
console.log(Boolean(xx));

// Варианты получения undefined:
let temp;
console.log(temp);
let obj = {};
console.log(obj.property);
let ar = [1, 2, 3];
console.log(ar[3]);
const func = () => {
  return;
};
console.log(func());
// И если функция не возвращает никакого значения, то возвращаемым
// значением будет undefined.
console.log(`\\\\\\\\\\\\\\\\\\\\\\\\\\\\`);
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// Data types. Symbol
console.log(`Data types. Symbol ///////////`);

let symbol = Symbol();
console.log(symbol); // Symbol();
console.log(typeof symbol); // symbol
let symbol1 = Symbol("name");

let sym = Symbol("name");
console.log(sym);
console.log("sumbol1 ", symbol1); //Symbol(name)
console.log(sym === symbol1); // false

let sym1 = Symbol.for("age");
console.log(sym1); //
let sym2 = Symbol.for("age");
console.log(sym2); // Symbol(age)
console.log(sym2 === sym1); //true
const mm1 = Symbol(`kort`);
const mm2 = Symbol(`kort`);
const mm3 = Symbol(`kort`);
const mm4 = Symbol(`kort`);
const mm5 = Symbol(`kort`);
// for заносит символы в глобальный реестр
let myObjecy = {
  bot: "Valera",
  [mm1]: "a",
  [mm2]: "b",
  [mm3]: "w",
  [mm4]: "K",
  [mm5]: "g"
};
console.log(myObjecy); //
// {
//     bot: 'Valera',
//     [Symbol(kort)]: 'a',
//     [Symbol(kort)]: 'b',
//     [Symbol(kort)]: 'w',
//     [Symbol(kort)]: 'K',
//     [Symbol(kort)]: 'g'
//   }// вывод в консоль

console.log(myObjecy[mm1]); // a

// Рассмотрим метод “keyFor”
let symbol2 = Symbol.for("name222");
let name2 = Symbol.keyFor(symbol2); // вернет name222
console.log(name2); //name222;
// В ES6 был добавлен специальный метод для того чтобы посмотреть
// символы объекта: console.log(Object.getOwnPropertySymbols(user));
let password = Symbol("myPasv");
let user = { userName: "Yura", [password]: "snly" };

console.log(
  "Object.getOwnPropertySymbols(user) ",
  Object.getOwnPropertySymbols(user)
);
//[ Symbol(myPasv) ]

let use = { user: "Goga", [Symbol.for("karabas")]: "UTY" };
console.log(Object.getOwnPropertySymbols(use)); // [ Symbol(karabas) ]
console.log(use[Symbol.for("karabas")]); // UTV
console.log(Object.getOwnPropertyNames(use)); //[ 'user' ]

// Data types. Objects

let obj5 = {
  name: "Yura",
  age: 48,
  dy: function() {},
  bw: " "
};
console.log(obj5);

let rname = obj5.name;
console.log(rname);
let point = new Object();
point.a = 10;
point.b = 15;
point.c = function(v) {
  console.log(`"${v}" "${point.a}" "${point.b}"  `);
};
point.c("ROMA");
console.log(point.a); // 10
//Прототип без new
//create static method
let nyMy = Object.create({ x: 20, y: "Tolik" });
console.log(nyMy.hasOwnProperty("y")); // false
//  с помощью метода hasOwnProperty, то
// результатом будет false, поскольку это свойство
// принадлежит прототипу

console.log(nyMy.y); //Tolik
nyMy.y = "Tolik11";
console.log(nyMy.y); //Tolik11 родное свойство а не неследованное
console.log(nyMy.hasOwnProperty("y")); //true
delete nyMy.y; //true
console.log(nyMy.y); // Tolik prototip

console.log(nyMy.y); //Tolik;
console.log("z" in nyMy); //false
console.log("y" in nyMy); // true
nyMy.z = undefined;
console.log(nyMy.z);
console.log(nyMy.y); // undefined
console.log("z" in nyMy); //true
console.log(nyMy.hasOwnProperty("z")); //true
let ter = 10;
let ter1 = 20;
let terrez = ter < ter1 ? ter + ter1 : ter * ter1;
console.log(terrez);
let foobj = {
  name: "Nina",
  sname: "Mark",
  age: 44,
  tel: "02",
  ban: function() {}
};
for (const key in foobj) {
  const element = foobj[key];
  console.log(element);
}
let funcA = 10;
function Myfunction(a, b) {
  if (a > b) {
    return;
  }
  return a + b * funcA;
}
console.log(Myfunction(5, 10)); // 105
console.log(Myfunction(15, 10)); // undefined

let getRez = function(object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      console.log("getRez  ", element);
    }
  }
};
getRez(foobj);

let minF = x => (x * x) / 2; //12.5
console.log(minF(5));
let getH = () => console.log("Hello Yura !!!");
getH();

//Функция кол-бэк
let back1 = () => console.log("Доброе утро страна");
let back2 = () => console.log("Доброй ночи страна");
let colBack = function(a, b, c) {
  a > 5 && a < 10 ? b() : c();
};

colBack(6, back1, back2);
//new Function(params, code)
// params - параметры функции через запятую в виде строки.
// code - код функции в виде строки.
let vv = new Function("x,y", "return x*y");
console.log(vv(10, 10));

function myHi() {
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    console.log(element);
  }
}
myHi(1, "Har", [], {}, "tratata", 80.999); // вывод

// конструктор
function MyClass(d, f) {
  this.name = "Vasia";
  this.d = d;
  this.f = f;
  this.mes = () => console.log(`Hello  "${this.f}"   "${this.d}"`);
}

let miClass = new MyClass(55, "World");
miClass.mes();


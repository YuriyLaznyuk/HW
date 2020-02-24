"use strict"
function getNumString(numstr) {
            
    let arrnum = numstr.split(' ');
    let number = 0;
    for (var i = 0; i < arrnum.length; i++) {
        switch (arrnum[i])
            {
                case "девятсот":
                    number = 900;
                    break;
                case "восемсот":
                    number = 800;
                    break;
                case "семсот":
                    number = 700;
                    break;
                case "шестсот":
                    number = 600;
                    break;
                case "пятсот":
                    number = 500;
                    break;
                case "четыреста":
                    number = 400;
                    break;
                case "триста":
                    number = 300;
                    break;
                case "двести":
                    number = 200;
                    break;
                case "сто":
                    number = 100;
                    break;
                case "девяносто":
                    number = number + 90;
                    break;
                case "восемьдесят":
                    number = number + 80;
                    break;
                case "семьдесят":
                    number = number + 70;
                    break;
                case "шестьдесят":
                    number = number + 60;
                    break;
                case "пятьдесят":
                    number = number + 50;
                    break;
                case "сорок":
                    number = number + 40;
                    break;
                case "тридцать":
                    number = number + 30;
                    break;
                case "двадцать":
                    number = number + 20;
                    break;
                case "десять":
                    number = number + 10;
                    break;
                case "девятнадцать":
                    number = number + 19;
                    break;
                case "восемнадцать":
                    number = number + 18;
                    break;
                case "семнадцать":
                    number = number + 17;
                    break;
                case "шестнадцать":
                    number = number + 16;
                    break;
                case "пятнадцать":
                    number = number + 15;
                    break;
                case "четырнадцать":
                    number = number + 14;
                    break;
                case "тринадцать":
                    number = number + 13;
                    break;
                case "двенадцать":
                    number = number + 12;
                    break;
                case "одинадцать":
                    number = number + 11;
                    break;
                case "девять":
                    number = number + 9;
                    break;
                case "восемь":
                    number = number + 8;
                    break;
                case "семь":
                    number = number + 7;
                    break;
                case "шесть":
                    number = number + 6;
                    break;
                case "пять":
                    number = number + 5;
                    break;
                case "четыре":
                    number = number + 4;
                    break;
                case "три":
                    number = number + 3;
                    break;
                case "два":
                    number = number + 2;
                    break;
                case "один":
                    number = number + 1;
                    break;
            }
    }
    return number;

}
NumString("сто девяносто девять");
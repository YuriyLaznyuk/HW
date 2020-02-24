//        5. Написать программу определения оценки студента по его рейтингу, на основе
//следующих правил
"use strict"
function getReiting(a){

    let rez;
    if (a>=0&&a<=19) {
        rez = "F";
    }
    else if (a>=29&&a<=39) {
        rez = "E";
    }
    else if (a>=40&&a<=59) {
        rez = "D";
    }
    else if (a >= 66 && a <= 74) {
        rez = "C";
    }
    else if (a >= 75 && a <= 89) {
        rez = "B";
    }
    else if (a>=90&&a<=100) {
        rez = "A";
    }
    else {
        rez = "Incorrect input";
    }
    return rez;
}

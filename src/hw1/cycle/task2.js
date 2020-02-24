//        2. Проверить простое ли число? (число называется простым, если оно делится только
//само на себя и на 1)
"use strict"
function getSimpleDigit(a){

    
    let col = 0;
    for (let i = 2; i <=a; i++) {
        if (a%i==0) {
            col++;
        }
    }
    if (col == 1) {
        return "digit simple";
        
    }
    else {
        
        return "digit NOT simple";
    }
}
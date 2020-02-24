//2. Определить какой четверти принадлежит точка с координатами (х,у)
"use strict"
function getQuarter(x,y){

    
    let c;
    if (x > 0 && y > 0) {
        c = "I";
    }
    else if (x < 0 && y > 0) {
        c = "II";
    }
    else if (x < 0 && y < 0) {
        c = "III";
    }
    else if (x > 0 && y < 0) {
        c = "IV";
    }
    else {
        c = "incorrect input"
    }
    return c;
}

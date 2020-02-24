 //Посчитать выражение макс(а*б*с, а+б+с)+3
 "use strict"
 function getMaxRez(a,b,c){

     
     let rez;
    
     if (a*b*c>(a+b+c)) {
         rez = a * b * c + 3;
     }
     else if (a*b*c<(a+b+c)) {
         rez = a + b + c + 3;
     }
     else {
         rez = "a+b+c=a*b*c";
     }
     return rez;
 }
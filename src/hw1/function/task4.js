//4.	Найти расстояние между двумя точками в двумерном декартовом пространстве.
"use strict"
function getDistance(x1, y1, x2, y2) {
    let rez = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    // console.log(`${x1}  ${y1}  ${x2}  ${y2} --- ${rez}`);
    return rez;
}
// getDistance(0, 2, 2, 0);


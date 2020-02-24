"use strict"
function Fo(value){
    this.value=value;
    // console.log(this===window);
}


let myObject=new Fo(100);

console.log(myObject.value);
console.log("fffffff");

let MyObject1={
    myself:function(){
        return this;
    }
}
console.log(MyObject1.myself()===MyObject1);
let ar1=new Array(5,9,9,0,1,77,99,11);
console.log(ar1);
let ar2=new Array(5);
console.log(ar2);
console.log(ar2.length);

console.log(ar1.pop());
console.log(ar1);
ar1.push(55);
console.log(ar1);
ar1.unshift(477);
console.log(ar1);
console.log(ar1.shift());
console.log(ar1);

let myar=Array.of(7,8,9,7);
console.log(myar);

console.log(Array.isArray(myar));
console.log(Array.isArray("rrrrrrr"));
console.log(Array.isArray(1,4,5));
console.log(Array.isArray(678));
console.log(Array.from(myar, i=>i+10));

console.log(myar.find( i=>i>5));
console.log(myar.findIndex(i=>i==0));
console.log(myar.indexOf(7));
console.log(myar.lastIndexOf(7));
console.log(myar.includes(7));
let arrayF=[1,2,3,6,7,8,9,10];
arrayF.forEach(i=>console.log(i+5));
console.log(arrayF.filter(i=>i%2==0));
let arrayR=[1,2,3,6,7,8,9,10,[4,[6,7]]];
console.log(arrayR.flat());
console.log(arrayR.flat(2));
console.log(arrayF.reduce((a,b)=>a+b));

console.log(arrayF.sort((a,b)=>a-b));
console.log(arrayF.sort((a,b)=>b-a));


let Human=function(name){
    this. name=name;
    this.age=(a)=>console.log(a);
}
Human.prototype.myMethod=function(){
    console.log(this.name+" !!!!!!" );
}
let man=new Human("Fon");
man.myMethod();
man.age(33);

console.log(man.constructor);
console.log(Human.prototype.constructor);


let People=function(name1){
    this.name1=name1;
};

People.prototype.metodP=function(){
    console.log(this.name1+"  $$$$$$$$");
}
let man1=new People("Robert");
let Developer=function(name1, skils){
    People.apply(this,arguments);
    this.skils=skils||[];
};
Developer.prototype=Object.create(People.prototype);
Developer.prototype.constructor=Developer;
let developer=new Developer("Ivan",["Js","C#"]);
console.log(developer.name1);
console.log(developer.skils);
developer.metodP();
console.log(man.constructor);// Function: Human
console.log(People.prototype.constructor);//Function: People



"use strict";

function Alist(array) {
  this.defaultArray = array;
  this.arr = [];
  this.init();
  this.tempar = [];
  this.tempar1 = [];
}
Alist.prototype.init = function() {
  let index = 0;
  while (typeof this.defaultArray[index] == "number") {
    this.arr[index] = this.defaultArray[index];
    index++;
  }
};
Alist.prototype.getSize = function() {
  let index = 0;
  while (typeof this.arr[index] == "number") {
    index++;
  }
  return index;
};
Alist.prototype.addStart = function(digit) {
  for (let index = this.getSize(); index > 0; index--) {
    this.arr[index] = this.arr[index - 1];
  }
  this.arr[0] = digit;
  return this.arr;
};
Alist.prototype.addEnd = function(digit) {
  this.arr[this.getSize()] = digit;
  return this.arr;
};


Alist.prototype.delStart = function() {
  let delstar=this.arr[0];
  for (let i = 0; i < this.getSize() - 1; i++) {
    this.tempar[i] = this.arr[i + 1];
  }
  this.arr = this.tempar;
  this.tempar = [];
  //return this.arr;
  return delstar;
};

Alist.prototype.delEnd = function() {
let delend=this.arr[this.getSize()-1];
  for (let i = 0; i < this.getSize() - 1; i++) {
    this.tempar[i] = this.arr[i];
  }
  this.arr = this.tempar;
  this.tempar = [];
  return delend;
};


Alist.prototype.delPos = function(index) {
  let delpos=this.arr[index];
  if (index == 0) {
    return this.delStart();
  } else if (index == this.getSize() - 1) {
    return this.delEnd();
  } else if (index > this.getSize() - 1) {
    console.log("Thiss Index not array");
    return "Thiss Index not array";
  } else {
    for (let n = 0; n < index; n++) {
      this.tempar1[n] = this.arr[n];
    }
    for (let d = index; d < this.getSize() - 1; d++) {
      this.tempar1[d] = this.arr[d + 1];
    }
    this.arr = this.tempar1;
    this.tempar1 = [];
    return delpos;
  }
};

Alist.prototype.getIndex = function(index) {
  for (let i = 0; i < this.getSize(); i++) {
    if (i == index) {
      return this.arr[index];
    }
  }
  return undefined;
};

Alist.prototype.setIndex = function(index, value) {
  //let temp = [];
  if (index <= this.getSize() - 1) {
    
    
      for (let i= this.getSize(); i  > index; i--) {
        this.arr[i]=this.arr[i-1];
        
      }
      this.arr[index]=value;
    
  } else {
    // // если запись в большую длинну
    // for (let i = 0; i < index + 1; i++) {
    //   if (i < this.getSize()) {
    //     temp[i] = this.arr[i];
    //   } else temp[i] = 0;
    // }
    // temp[index] = value;
    // this.arr = temp;
    return 'error index ';


  }
  return this.arr;
};



Alist.prototype.myToString = function() {
  let mystring = this.arr[0] + "";
  for (let index = 1; index < this.getSize(); index++) {
    mystring += +"" + this.arr[index] + "";
  }
  return mystring;
};
// к заданию не относится
// Alist.prototype.getClear = function() {
//   let element = this.defaultArray[0] + " ";
//   for (let i = 1; typeof this.defaultArray[i]=='number'; i++) {
//     element += +" " + this.defaultArray[i] + " ";
//   }
//   return element;
// };

Alist.prototype.Clear=function(){
  this.arr=[];

  this.arr = this.defaultArray;
  return this.arr;
}


Alist.prototype.getMin = function() {
  let min = this.arr[0];
  for (let i = 1; i < this.getSize(); i++) {
    if (this.arr[i] < min) {
      min = this.arr[i];
    }
  }
  return min;
};

Alist.prototype.getMax = function() {
  let max = this.arr[0];
  for (let i = 1; i < this.getSize(); i++) {
    if (this.arr[i] > max) {
      max = this.arr[i];
    }
  }
  return max;
};


Alist.prototype.sort = function() {
  for (let i = 0; i < this.getSize() - 1; i++) {
    for (let j = i + 1; j < this.getSize(); j++) {
      if (this.arr[i] > this.arr[j]) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
      }
    }
  }
  return this.arr;
};


Alist.prototype.getMinIndex = function() {
  let min = this.arr[0];
  let index = 0;
  for (let i = 1; i < this.getSize(); i++) {
    if (this.arr[i] < min) {
      min = this.arr[i];
      index = i;
    }
  }
  return index;
};

Alist.prototype.getMaxIndex = function() {
  let max = this.arr[0];
  let index = 0;
  for (let i = 1; i < this.getSize(); i++) {
    if (this.arr[i] > max) {
      max = this.arr[i];
      index = i;
    }
  }
  return index;
};

Alist.prototype.getRevers = function() {
  for (let index = 0; index < parseInt(this.getSize() / 2); index++) {
    let temp = this.arr[index];
    this.arr[index] = this.arr[this.getSize() - index - 1];
    this.arr[this.getSize() - index - 1] = temp;
  }
  return this.arr;
};


Alist.prototype.getHalfRevers = function() {
  for (let i = 0; i < parseInt(this.getSize() / 4); i++) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[parseInt(this.getSize() / 2 - i - 1)];
    this.arr[parseInt(this.getSize() / 2 - i - 1)] = temp;
  }
  let count = 0;
  for (
    let i1 = parseInt(this.getSize() / 2);
    i1 < parseInt(this.getSize() / 2) + parseInt(this.getSize() / 4);
    i1++
  ) {
    if (this.getSize() % 2 == 0) {
      const element = this.arr[i1];
      this.arr[i1] = this.arr[this.getSize() - count - 1];
      this.arr[this.getSize() - count - 1] = element;
      count++;
    } else {
      const element = this.arr[i1 + 1];
      this.arr[i1 + 1] = this.arr[this.getSize() - count - 1];
      this.arr[this.getSize() - count - 1] = element;
      count++;
    }
  }
  return this.arr;
};




module.exports.Alist = Alist;


"use strict";

// const List = require("../hwList/list").List;

const {Node}=require('../js/node');
const {List}=require('../js/list');
module.exports.Llist=Llist;


function Llist(array) {
  // List.apply(this);

  this.root = null;
  this.defaultArray = array;
  this.init(array);
  this.arr = [];
}

Llist.prototype = Object.create(Llist.prototype);
Llist.prototype.constructor = Llist;
// инициализация
Llist.prototype.init = function(array) {
  for (let i = 0; i < array.length; i++) {
    let node = new Node(array[i]);
    let currentNode = this.root;
    //список пустой
    if (!currentNode) {
      this.root = node;

      continue;
    }
    //список не пустой
    while (currentNode.next) {
      // указывает следующий узел списка
      // пока последний не будет указывать на null
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
};
Llist.prototype.getSize = function() {
  let counters = 1;
  let curent = this.root;
  while (curent.next) {
    curent = curent.next;
    counters++;
  }
  return counters;
};

Llist.prototype.toArray = function() {
  let show = [];
  let currentNode7 = this.root;
  let muv = 1;
  show[0] = this.root.data;
  while (currentNode7.next) {
    currentNode7 = currentNode7.next;
    show[muv] = currentNode7.data;
    muv++;
  }
  return show;
};

// добавление в начало
Llist.prototype.addStart = function(value) {
  let node2 = new Node(value);
  let tmp = this.root;
  this.root = node2;
  this.root.next = tmp;

  return node2.data;
};
//добавление в конец
Llist.prototype.addEnd = function(value) {
  let node3 = new Node(value);
  let currentNode3 = this.root;
  while (currentNode3.next) {
    currentNode3 = currentNode3.next;
  }
  currentNode3.next = node3;

  return node3.data;
};

// tostring
Llist.prototype.myToString = function() {
  let curent = this.root;
  let str = "" + this.root.data;
  while (curent.next) {
    curent = curent.next;
    str += +"" + curent.data + "";
  }
  return str;
};

// поиск по позиции
Llist.prototype.getIndex = function(position) {
  let currentNode = this.root;
  let count = this.getSize();
  let i = 1;

  if (count === 0 || position < 1 || position > this.getSize()) {
    return "Error position";
  }
  while (i < position) {
    currentNode = currentNode.next;
    i++;
  }
  return currentNode;
};
//удаление первого
Llist.prototype.delStar = function() {
  this.delPos(1);
};
//удаление последнего
Llist.prototype.delEnd = function() {
  let del = this.getIndex(this.getSize()).data;

  this.getIndex(this.getSize() - 1).next = null;
  return del;
};
// удаление по позиции
Llist.prototype.delPos = function(position) {
  let currentNode = this.root;
  let count = this.getSize();

  let deletedNode = null;

  if (position < 0 || position > count) {
    return "Error position";
  }

  //первый узел удаление
  if (position === 1) {
    this.root = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;

    return deletedNode.data;
  }
  if (position === this.getSize()) {
    return this.delEnd();
  }

  let delpos = this.getIndex(position).data;
  this.getIndex(position - 1).next = this.getIndex(position + 1);

  return delpos;
};

//сортировка
Llist.prototype.sort = function() {
  let currentNode = this.root;
  let nextCurrentNode = currentNode.next;
  if (this.getSize == 0 || this.getSize == 1) {
    return;
  }
  while (currentNode.next) {
    while (nextCurrentNode) {
      if (currentNode.data > nextCurrentNode.data) {
        let tmp = currentNode.data;
        currentNode.data = nextCurrentNode.data;
        nextCurrentNode.data = tmp;
      }
      nextCurrentNode = nextCurrentNode.next;
    }
    currentNode = currentNode.next;
    nextCurrentNode = currentNode.next;
  }
};
//реверс
Llist.prototype.getRevers = function() {
  let currentNode = this.root;
  let revers = [];

  revers[0] = this.root.data;
  let counters = 1;
  while (currentNode.next) {
    currentNode = currentNode.next;
    revers[counters] = currentNode.data;
    counters++;
  }

  if (this.getSize() == 0 || this.getSize() == 1) {
    return;
  }
  for (let i = 0; i < parseInt(this.getSize() / 2); i++) {
    let temp = revers[i];
    revers[i] = revers[this.getSize() - i - 1];
    revers[this.getSize() - i - 1] = temp;
  }

  this.clear();
  this.init(revers);
  return revers;
};

//HalfRevers
Llist.prototype.getHalfRevers = function() {
  let currentNode = this.root;
  let halfrevers = [];
  halfrevers[0] = this.root.data;
  let numb = 1;
  while (currentNode.next) {
    currentNode = currentNode.next;
    halfrevers[numb] = currentNode.data;
    numb++;
  }
  if (this.getSize() == 0 || this.getSize() == 1) {
    return;
  }
  for (let i = 0; i < parseInt(this.getSize() / 4); i++) {
    const element = halfrevers[i];
    halfrevers[i] = halfrevers[parseInt(this.getSize() / 2) - i - 1];
    halfrevers[parseInt(this.getSize() / 2) - i - 1] = element;
  }
  let counter = 0;
  for (
    let i1 = parseInt(this.getSize() / 2);
    i1 < parseInt(this.getSize() / 2) + parseInt(this.getSize() / 4);
    i1++
  ) {
    if (this.getSize() % 2 === 0) {
      const element1 = halfrevers[i1];
      halfrevers[i1] = halfrevers[parseInt(this.getSize()) - counter - 1];
      halfrevers[parseInt(this.getSize()) - counter - 1] = element1;
      counter++;
    } else {
      const element2 = halfrevers[i1 + 1];
      halfrevers[i1 + 1] = halfrevers[parseInt(this.getSize()) - counter - 1];
      halfrevers[parseInt(this.getSize()) - counter - 1] = element2;
      counter++;
    }
  }
  this.clear();
  this.init(halfrevers);
  return halfrevers;
};

Llist.prototype.clearInit = function() {
  this.clear();
  return this.init(this.defaultArray);
};

Llist.prototype.clear = function() {
  let num = this.getSize();
  for (let i = 0; i < num; i++) {
    this.delPos(1);
  }
};

// добавление по индексу
Llist.prototype.setIndex = function(index, value) {
  let node5 = new Node(value);

  if (index === 0 || index > this.getSize()) {
    return "Index error";
  } else if (index === 1) {
    this.addStart(value);
  } else if (index === this.getSize()) {
    this.addEnd(value);
  } else {
    node5.next = this.getIndex(index);
    this.getIndex(index - 1).next = node5;
  }
};

// минимальный элемент
Llist.prototype.getMin = function() {
  let curent = this.root;
  let min = this.root;
  while (curent) {
    if (curent.data < min.data) {
      min = curent;
    }
    curent = curent.next;
  }
  return min.data;
};
// максимальный элемент
Llist.prototype.getMax = function() {
  let curent = this.root;
  let max = this.root;
  while (curent) {
    if (curent.data > max.data) {
      max = curent;
    }
    curent = curent.next;
  }
  return max.data;
};

// индекс максимального элемента

Llist.prototype.getMaxIndex = function() {
  let max = this.getIndex(1);
  let index = 1;
  for (let i = 1; i <= this.getSize(); i++) {
    if (max.data < this.getIndex(i).data) {
      max = this.getIndex(i);
      index = i;
    }
  }
  return index;
};

// индекс минимального элемента
Llist.prototype.getMinIndex = function() {
  let min = this.getIndex(1);
  let index = 1;
  for (let i = 1; i <= this.getSize(); i++) {
    if (min.data > this.getIndex(i).data) {
      min = this.getIndex(i);
      index = i;
    }
  }

  return index;
};

let llist = new Llist([3, 6, 4, 5, 2]);

// llist.clearInit();
// llist.setIndex(1, 10);
// llist.setIndex(5, 30);
// llist.setIndex(3, 20);
console.log(llist.getIndex(2).data);
llist.getRevers();
console.log(llist.toArray());
llist.getHalfRevers();

console.log(llist.toArray());
llist.sort();
console.log(llist.toArray());

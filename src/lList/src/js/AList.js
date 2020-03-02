function AList(array) {
    this.defArr = array;
    this.arr = [];
    this.help = ()=>{
        console.group('Functions list:');
        for(key in AList.prototype) console.log(key);
    }
    this.init();
}
AList.prototype.init = function(){
    let index = 0;
    while(this.defArr[index]){
        this.arr[index] = this.defArr[index];
        index++;
    }
    return 'Array initializated!';
}
AList.prototype.addStart = function(elem) {
    let arrWithFirst = [];
    for (let i = 0; i < this.size(); i++) {
        arrWithFirst[i+1] = this.arr[i];
    }
    arrWithFirst[0] = elem;
    return this.arr = arrWithFirst;
}
AList.prototype.addEnd = function(elem) {
    this.arr[this.size()] = elem;
    return this.arr;
}
AList.prototype.delFirst = function() {
    let arrWithoutFirst = [];
    let deletedFirst = this.arr[0];
    for (let i = 0; i < this.size()-1; i++) {
        arrWithoutFirst[i] = this.arr[i + 1];
    }
    this.arr = arrWithoutFirst;
    return deletedFirst;
}
AList.prototype.delEnd = function() {
    let arrWithoutEnd = [];
    let deletedLast = this.arr[this.size() - 1];
    for (let i = 0; i < this.size()-1; i++) {
        arrWithoutEnd[i] = this.arr[i];
    }
    this.arr = arrWithoutEnd;
    return deletedLast;
}
AList.prototype.delPos = function(position) {
    let arrWithoutPosElem = [];
    let deletedPosElem = this.arr[position];
    for (let i = 0; i < this.size()-1; i++) {
        if(i >= position) arrWithoutPosElem[i] = this.arr[i+1];
        else arrWithoutPosElem[i] = this.arr[i];
    }
    this.arr = arrWithoutPosElem;
    return deletedPosElem;
}
AList.prototype.get = function(index) {
    for (let i = 0; i < this.size(); i++) {
        if(i == index) return this.arr[i];
    }
    return undefined;
}
AList.prototype.set = function(index, value) {
    for (let i = 0; i < this.size(); i++) {
        if(i == index){
            this.arr[i] = value;
            return this.arr;
        }
    }
    return 'Index not defined';
}
AList.prototype.toString = function() {
    let string = '';
    for (let i = 0; i < this.size(); i++) {
        string += this.arr[i];
    }
    return string;
}
AList.prototype.max = function() {
    for (let i = 0; i < this.size(); i++) {
        let count = i;
        for (let j = i+1; j < this.size(); j++){
            if(this.arr[i] > this.arr[j]) count++;
        }
        if(count == this.size()-1) return this.arr[i];
    }
}
AList.prototype.min = function() {
    for (let i = 0; i < this.size(); i++) {
        let count = i;
        for (let j = i+1; j < this.size(); j++){
            if(this.arr[i] < this.arr[j]) count++;
        }
        if(count == this.size()-1) return this.arr[i];
    }
}
AList.prototype.sort = function() {
    let x = 0;
    for(let i = 0; i < this.size(); i++){
        for(let j = i+1; j < this.size(); j++){
            if(this.arr[i] > this.arr[j]){
                x = this.arr[j];
                this.arr[j] = this.arr[i];
                this.arr[i] = x;
            }
        };
    };
    return this.arr;
}
AList.prototype.maxIndex = function() {
    for (let i = 0; i < this.size(); i++) {
        let count = i;
        for (let j = i+1; j < this.size(); j++){
            if(this.arr[i] > this.arr[j]) count++;
        }
        if(count == this.size()-1) return i;
    }
}
AList.prototype.minIndex = function() {
    for (let i = 0; i < this.size(); i++) {
        let count = i;
        for (let j = i+1; j < this.size(); j++){
            if(this.arr[i] < this.arr[j]) count++;
        }
        if(count == this.size()-1) return i;
    }
}
AList.prototype.reverse = function() {
    let helpArr = [];
    let temp = 0;
    for(let i = 0, j = this.size()-1; i < this.size() && j >= 0; i++, j--){
        temp = this.arr[i];
        helpArr[i] = this.arr[j];
    };
    return helpArr;
}
AList.prototype.halfReverse = function() {
    let arrLn = this.size();
    const halfLn = parseInt(arrLn/2);
    let helpArr = [];
    if(this.size() % 2 == 0){
        for(let i = 0, j = halfLn; i < halfLn && j < arrLn; i++, j++){
            helpArr[i] = this.arr[j];
            this.arr[j] = this.arr[i];
            this.arr[i] = helpArr[i];
        };
    }else{
        for(let i = 0, j = halfLn+1; i < halfLn+1 && j < arrLn; i++, j++){
            helpArr[i] = this.arr[j];
            this.arr[j] = this.arr[i];
            this.arr[i] = helpArr[i];
        };
    }
    return this.arr;
}
AList.prototype.size = function() {
    let summ = 0;
    while(this.arr[summ]){
        summ++;
    }
    return summ;
}
AList.prototype.reset = function() {
    this.arr = [];
    let index = 0;
    while(this.defArr[index]){
        this.arr[index] = this.defArr[index];
        index++;
    }
    return 'Reset';
}

module.exports.AList = AList;


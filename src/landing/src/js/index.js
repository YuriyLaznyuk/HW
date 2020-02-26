"use strict";
let textId = document.getElementById("id");
let textFName = document.getElementById("fname");
let textLName = document.getElementById("lname");
let textAge = document.getElementById("age");
let mId;
let mFName;
let mLName;
let mAge;
let persons = [];
let personsList = []; // массив персон для localStorage
function Person(mId, mFName, mLName, mAge) {
  this.mId = mId;
  this.mFName = mFName;
  this.mLName = mLName;
  this.mAge = mAge;
}

textId.addEventListener("change", function(e) {
  ShowId(e.target.value);
});

textFName.addEventListener("change", function(e) {
  ShowFname(e.target.value);
});
textLName.addEventListener("change", function(e) {
  ShowLname(e.target.value);
});
textAge.addEventListener("change", function(e) {
  ShowAge(e.target.value);
});

let buttonCreate = document.getElementById("create");
buttonCreate.addEventListener("click", function(e) {
  createTable(e.target.value);
});

let buttonUpdate = document.getElementById("update");
buttonUpdate.addEventListener("click", function(e) {
  updateElement(e.target.value);
});

let buttonDelete = document.getElementById("delete");
buttonDelete.addEventListener("click", function(e) {
  deliteElementId(e.target.value);
});

let buttonRead = document.getElementById("read");
buttonRead.addEventListener("click", function(e) {
  readTable(e.target.value);
});

let root = document.getElementById("root");

function createTable() {
  if (persons.includes(mId) == true) {
    alert("This Id is not create");
    return;
  }
  let localPerson = new Person(mId, mFName, mLName, mAge);
  let divA = document.createElement("div");
  divA.id = mId;

  let divN1 = document.createElement("div");
  divN1.className = "info1";
  divN1.innerHTML = mId;
  divA.append(divN1);
  textId.value = "";

  let divN2 = document.createElement("div");
  divN2.className = "info2";
  divN2.innerHTML = mFName;
  divA.append(divN2);
  textFName.value = "";

  let divN3 = document.createElement("div");
  divN3.className = "info3";
  divN3.innerHTML = mLName;
  divA.append(divN3);
  textLName.value = "";

  let divN4 = document.createElement("div");
  divN4.className = "info4";
  divN4.innerHTML = mAge;
  divA.append(divN4);
  textAge.value = "";

  let pipl = mId;

  persons.push(pipl);
  // добавление
  personsList.push(localPerson);
  localStorage.setItem("persons", JSON.stringify(personsList));

  root.append(divA);
}
function updateElement() {
  if (persons.includes(mId) == false) {
    alert("Not update method this Id");
    textId.value = "";
    textFName.value = "";
    textLName.value = "";
    textAge.value = "";
    return;
  } else {
    let updateA = document.getElementById(mId);
    let childF = updateA.children;
    childF[0].innerHTML = mId;
    childF[1].innerHTML = mFName;
    childF[2].innerHTML = mLName;
    childF[3].innerHTML = mAge;
    // перезапись
    for (let i = 0; i < personsList.length; i++) {
      if (personsList[i].mId == mId) {
        personsList[i].mFName = mFName;
        personsList[i].mLName = mLName;
        personsList[i].mAge = mAge;
      }
    }
    localStorage.setItem("persons", JSON.stringify(personsList));

    textId.value = "";
    textFName.value = "";
    textLName.value = "";
    textAge.value = "";
  }
}

function deliteElementId() {
  if (persons.includes(mId) == false) {
    alert("Not delite method this Id");
    textId.value = "";
    textFName.value = "";
    textLName.value = "";
    textAge.value = "";
    return;
  } else {
    let deliteA = document.getElementById(mId);
    let p1 = mId;
    let ind = persons.indexOf(p1);
    deliteA.remove();
    delete persons[ind];
    // удаление
    for (let i = 0; i < personsList.length; i++) {
      if (personsList[i].mId == p1) {
        delete personsList[i];
      }
    }
    localStorage.setItem("persons", JSON.stringify(personsList));
    textId.value = "";
    textFName.value = "";
    textLName.value = "";
    textAge.value = "";
  }
}
/////////////////////////////
function readTable() {
  if (persons.length != 0) {
    return;
  }
  let date = JSON.parse(localStorage.getItem("persons"));
  for (let i = 0; i < date.length; i++) {
    let divA = document.createElement("div");
    divA.id = date[i].mId;

    let divN1 = document.createElement("div");
    divN1.className = "info1";
    divN1.innerHTML = date[i].mId;
    divA.append(divN1);
    textId.value = "";

    let divN2 = document.createElement("div");
    divN2.className = "info2";
    divN2.innerHTML = date[i].mFName;
    divA.append(divN2);
    textFName.value = "";

    let divN3 = document.createElement("div");
    divN3.className = "info3";
    divN3.innerHTML = date[i].mLName;
    divA.append(divN3);
    textLName.value = "";

    let divN4 = document.createElement("div");
    divN4.className = "info4";
    divN4.innerHTML = date[i].mAge;
    divA.append(divN4);
    textAge.value = "";

    let pipl = date[i].mId;

    persons.push(pipl);
    // добавление
    // personsList.push(localPerson);
    // localStorage.setItem('persons',JSON.stringify(personsList));

    root.append(divA);
  }
}

///////////////////////////////

function ShowId(dif) {
  mId = dif;
}
function ShowFname(dif) {
  mFName = dif;
}
function ShowLname(dif) {
  mLName = dif;
}
function ShowAge(dif) {
  mAge = dif;
}
// localStorage.clear();

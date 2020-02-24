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

let root = document.getElementById("root");

function createTable() {
  if (persons.includes(mId) == true) {
    alert("This Id is not create");
    return;
  }
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

  //let pipl={iD:mId, Fn:mFName, Ln:mLName, Age:mAge}
  let pipl = mId;

  persons.push(pipl);
  // persons.push(mId);

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
    textId.value = "";
    textFName.value = "";
    textLName.value = "";
    textAge.value = "";
  }
}

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

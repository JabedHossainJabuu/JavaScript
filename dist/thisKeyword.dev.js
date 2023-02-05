"use strict";

/*implicit binding 
explicit binding 
new binding 
window binding*/
//implicit binding
var printName = function printName(name) {
  console.log(name);
};

printName('Jabed');
var jabed = {
  name: 'Sabbir',
  age: 22,
  printPlayerName: function printPlayerName() {
    console.log(this.name);
  }
};
jabed.printPlayerName();

var printPlayerNameFunction = function printPlayerNameFunction(obj) {
  obj.playerName = function () {
    console.log(this.name);
    console.log(this.age);
  };
};

var shakib = {
  name: 'Shakib',
  age: 30
};
var tamim = {
  name: 'Tamim',
  age: 35
};
printPlayerNameFunction(shakib);
printPlayerNameFunction(tamim);
shakib.playerName();
tamim.playerName();

var person = function person(name, age) {
  return {
    name: name,
    age: age,
    personName: function personName() {
      console.log(this.name);
      console.log(this.age);
    },
    father: {
      name: 'MR. x',
      personName: function personName() {
        console.log(this.name);
      }
    }
  };
};

var rakib = person('Rakib', 40);
rakib.personName();
rakib.father.personName(); //explicit binding

var returnName = function returnName(v1, v2, v3) {
  console.log(this.name + ' is ' + v1 + ', ' + v2 + ' & ' + v3);
};

var mushfiq = {
  name: "Mushfiq",
  age: 35
};
var v1 = "Handsome";
var v2 = "Tall";
var v3 = "Wicket keeper";
var v = [v1, v2, v3]; //returnName.call(mushfiq,v1,v2,v3) *without array 

/*var newFunc = returnName.bind(mushfiq,v1,v2,v3);
newFunc();*/

returnName.apply(mushfiq, v); //new binding

function character(name, age) {
  //constructor function
  this.name = name;
  this.age = age;
  console.log(this.name + ' is ' + this.age + ' years old');
}

;
var miraj = new character('Miraj', '30'); //window binding

"use strict";

var value = function value() {
  console.log(window === this);
  console.log(this.name);
};

var shuvo = {
  name: 'Shuvo'
};
value();
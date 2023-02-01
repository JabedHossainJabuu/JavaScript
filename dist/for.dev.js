"use strict";

var i;
var s = parseInt(prompt("Enter starting number: "));
var e = parseInt(prompt("Enter ending number: "));
var sum = 0;

for (i = s; i <= e; i++) {
  sum = sum + i;
}

document.write("sum = " + sum + "<br>");
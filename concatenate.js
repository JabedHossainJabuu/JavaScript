firstName = 'Jabed';
lastName = ' Hossain';

fullName = firstName + lastName;

document.write('My name is ' + fullName + '<br>');
var len = fullName.length;
document.write('Length of my name is = ' + len + '<br>');

var num1 = 20;
var num2 = 30;
document.write('Number1 = ' + num1 + ' Number2 = ' + num2 + '<br>');

var text = prompt('Enter anything: ');
var len2 = text.length;
document.write('Length of the characters: ' + len2 + '<br>');
document.write(text.charAt(2) + '<br>');
upper = text.toUpperCase();
document.write(upper + '<br>');
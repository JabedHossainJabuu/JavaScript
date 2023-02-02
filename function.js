(function display(message){
    alert(message);
})("Hello"); //invokable function

//function expression
var display2 = function displayMessage(msg){
    console.log(msg);
};
display2("Message 2");
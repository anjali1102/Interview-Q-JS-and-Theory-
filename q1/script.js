//references to element in html
var number1=document.querySelector('#num1')
var number2=document.querySelector('#num2')

var addBtn=document.querySelector('#add')
var addSub=document.querySelector('#subtract')
var addMul=document.querySelector('#multiply')
var addDiv=document.querySelector('#division')

var output=document.querySelector('#result')

function addHandler(){
    var value1=Number(number1.value)
    var value2=Number(number2.value)
    let add=value1+value2
    output.innerHTML=add
}

function subHandler(){
    var value1=Number(number1.value)
    var value2=Number(number2.value)
    let subtract=value1-value2
    output.innerHTML=subtract
}

function mulHandler(){
    var value1=Number(number1.value)
    var value2=Number(number2.value)
    let multiply=value1*value2
    output.innerHTML=multiply
}

function divHandler(){
    var value1=Number(number1.value)
    var value2=Number(number2.value)
    let division=value1/value2
    output.innerHTML=division
}
addBtn.addEventListener("click", addHandler);
addSub.addEventListener("click", subHandler);
addMul.addEventListener("click", mulHandler);
addDiv.addEventListener("click", divHandler);

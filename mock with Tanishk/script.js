var input=document.querySelector('#input_box')
var showLength=document.querySelector('#output')
var button=document.querySelector("#btn")


function TellLengthHandler(){
    showLength.innerText=input.value.length
}

input.addEventListener("input",TellLengthHandler)
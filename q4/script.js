var input=document.querySelector('#input')
var redBtn=document.querySelector('#red')
var greenBtn=document.querySelector('#green')
var blueBtn=document.querySelector('#blue')
var output=document.querySelector('#output')

function redConvert(){
   var userEntered=input.value
   output.innerHTML=userEntered
   output.style.color="red"
}
function greenConvert(){
   var userEntered=input.value
   output.innerHTML=userEntered
   output.style.color="green"
}
function blueConvert(){
   var userEntered=input.value
   output.innerHTML=userEntered
   output.style.color="blue"
}
redBtn.addEventListener("click", redConvert)
greenBtn.addEventListener("click",greenConvert)
blueBtn.addEventListener("click",blueConvert)


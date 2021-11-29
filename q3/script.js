var input=document.querySelector('#input')
var h1btn=document.querySelector('#h1')
var h2btn=document.querySelector('#h2')
var h3btn=document.querySelector('#h3')
var result=document.querySelector('#output')

function h1Handler(){
    result.innerHTML=`<h1>${input.value}</h1>` 
    console.log("H1 is pressed"+result.innerText)   
}
function h2Handler(){
    result.innerHTML=`<h1>${input.value}</h1>`
    console.log("H2 button is pressed"+result.innerText)
}
function h3Handler(){
    result.innerHTML=`<h1>${input.innerHTML}</h1>`
    console.log("H3 button is pressed"+result.innerText)
}
h1btn.addEventListener("click",h1Handler)
h2btn.addEventListener("click",h2Handler)
h3btn.addEventListener("click",h3Handler)

var button=document.querySelector('#btn')
var input=document.querySelector('#input')
var output=document.querySelector('#output')

function passwordHandler(){
    let length=input.value.length
    if(length>10){
        output.innerHTML="ERROR"
        button.disabled=true
    }
    else{
        output.innerHTML="SUCCESS"
    }
}
button.addEventListener("click", passwordHandler)
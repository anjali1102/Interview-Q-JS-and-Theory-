var userPassword=document.querySelector('#input')
var statusPassword=document.querySelector('#output')
var buttonCheck=document.querySelector('#btn')
buttonCheck.disabled=true

function checkHandler(e){
    let inputComing=e.target.value;
    if(inputComing.length>0 && inputComing.length<10){
        message="SUCCESS"
        statusPassword.innerHTML=message;    
    }
    else if(inputComing.length===0){
        message="ENTER INPUT"
        statusPassword.innerHTML=message
    }
    else if(inputComing.length>10){
        message="ERROR"
        statusPassword.innerHTML=message;
    }
}

function BtnActivityHandler(e){
    let inputComing=e.target.value;
    if(inputComing.length>10){
        buttonCheck.disabled=false
    }
}


userPassword.addEventListener('input', checkHandler)
userPassword.addEventListener('input',BtnActivityHandler)

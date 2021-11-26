var userPassword=document.querySelector('#input')
var statusPassword=document.querySelector('#output')
var buttonCheck=document.querySelector('#btn')

function checkHandler(e){
    let inputComing=e.target.value;
    if(inputComing.length>0 && inputComing.length<10){
        message="SUCCESS"
        statusPassword.innerHTML=message;
        buttonCheck.disabled=true;

    }
    else if(inputComing.length===0){
        message="ENTER INPUT"
        statusPassword.innerHTML=message
        buttonCheck.disabled=true;
    }
    else if(inputComing.length>10){
        message="ERROR"
        statusPassword.innerHTML=message;
        buttonCheck.disabled=false;
    }


}

userPassword.addEventListener('input', checkHandler)
var inputBox=document.getElementById('input_box')
var logButton=document.getElementById('log_btn')
var warnButton=document.getElementById('warn_btn')
var errorButton=document.getElementById('error_btn')
var showOutput=document.getElementById('output')

function logEventHandler(){
    showOutput.innerHTML=inputBox.value
    console.log(showOutput)

    showOutput.style.color = "gray"
}

function warnEventHandler(){
    showOutput.innerText=inputBox.value
    console.log(showOutput.innerHTML)
    showOutput.style.color="yellow"
}

function errorEventHandler(){
    showOutput.innerHTML=inputBox.value
    showOutput.style.color="red"
}

logButton.addEventListener('click', logEventHandler)
warnButton.addEventListener('click', warnEventHandler)
errorButton.addEventListener('click', errorEventHandler)

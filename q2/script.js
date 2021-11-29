var input=document.querySelector('#input')
var increaseCounter=document.querySelector('#increase')
var decreaseCounter=document.querySelector('#decrease')
var output=document.querySelector('#output')

var defaultSize=100

function increaseHandler(){
    defaultSize+=2;
    console.log(defaultSize)
    input.style.fontSize=`${defaultSize}%`
}

function decreaseHandler(){
    defaultSize-=2;
    console.log(defaultSize)
    input.style.fontSize=`${defaultSize}%`
}

increaseCounter.addEventListener("click", increaseHandler)
decreaseCounter.addEventListener("click", decreaseHandler)

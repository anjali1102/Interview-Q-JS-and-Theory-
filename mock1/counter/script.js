var increaseBtn=document.querySelector('#increase_btn')
var decreaseBtn=document.querySelector('#decrease_btn')
var showOutput=document.querySelector('#output')


function increaseHandler(){
    let countCurrValue=parseInt(showOutput.innerText)
    countCurrValue+=1;
    console.log(typeof(countCurrValue))
    showOutput.innerText=countCurrValue;    
}

function decreaseHandler(){
    let countCurrValue=parseInt(showOutput.innerText)
    countCurrValue-=1;
    console.log(typeof(countCurrValue))
    showOutput.innerText=countCurrValue
}

increaseBtn.addEventListener("click", increaseHandler)

decreaseBtn.addEventListener("click", decreaseHandler)
var btn=document.querySelector('#button')
var output=document.querySelector('#output')

function EventHandler(){
    output.style.display="none"
}

btn.addEventListener("click", EventHandler)
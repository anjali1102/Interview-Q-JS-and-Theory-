var output=document.querySelector('#output')
var button=document.querySelector('#btn')
var input=document.querySelector('#input')
var url= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="

function eventHandler(text){
    fetch(url+text)
    .then(response => response.json())
    .then(data => {
        output.innerHTML=`${(data.contents.text).toUpperCase()}`
})
}

button.addEventListener("click", function(){
    eventHandler(input.value)
})
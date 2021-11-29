var button=document.querySelector('#btn')
var output=document.querySelector('#output')
var url="https://jsonplaceholder.typicode.com/dummyUsers"

function errorHandler(){
    fetch(url)
    // .then(response => response.json())
    .then(error => {
        if(error.status===404){
            output.innerHTML=`${error.status} you are not logged in`
        }
        else if(error.status===404){
            output.innerHTML=`${error.status} page not found`
        }
    })
}

button.addEventListener("click", errorHandler)
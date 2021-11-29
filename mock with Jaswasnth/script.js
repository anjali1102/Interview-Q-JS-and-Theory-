var button=document.querySelector('#btn')
var output=document.querySelector('.app')
var URL="https://randomuser.me/api/?results=10"
function fetchHandler(){
    fetch(URL)
     .then(response => response.json())
     .then(data => 
     data.results.forEach(element => {
        // console.log(element.name.first)
        // output.innerText=element.name.first+
        var newEle=document.createElement("div")
        newEle.append(div)
     })
    )
}

button.addEventListener("click", fetchHandler)
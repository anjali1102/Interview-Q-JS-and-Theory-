// Create input and button, and also create an array that has any 3 colors of your choice. If the color entered in input is the same as that in the array, show the message "color-matched", else show the message "color is not in our database"

var userEnter=document.querySelector('#input-user')

var button=document.querySelector('#btn')

var showOutput=document.querySelector('.output')
var arrayofColor=["red", "orange", "green"]



function clickHandler(){
    // console.log(userEnter.value)
    const found = arrayofColor.find(element => element===userEnter.value);
    // console.log(found)
    if(found===userEnter.value){
        showOutput.innerHTML="color-matched"
    }
    else{
        showOutput.innerHTML="color is not in our database"

    }
}
button.addEventListener("click", clickHandler)

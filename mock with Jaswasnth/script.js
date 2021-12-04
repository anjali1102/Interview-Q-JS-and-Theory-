var button = document.querySelector("#btn");
var output = document.querySelector(".output");

var URL = "https://randomuser.me/api/?results=10";


function fetchHandler(){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        var resultsArr = data.results;
        // console.log(data);

        resultsArr.map(each => {
            var divContainer = document.createElement("div");
            var pName = document.createElement("p");
            var pAge = document.createElement("p");

            pName.innerText = each.name.first;
            pAge.innerText = each.dob.age;

            if(each.dob.age >= 45){
                pName.style.color = "orange";
            }


            divContainer.append(pName);
            divContainer.append(pAge);

            output.append(divContainer);
            console.log(each.name.first, each.dob.age);
        })


    })
}


button.addEventListener("click", fetchHandler);

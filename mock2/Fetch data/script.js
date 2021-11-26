var output_box=document.querySelector('#output')

const url="https://quick-access-api.desaihetav.repl.co/"

function getDataFromAPI(){
    fetch(url)
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(data => {
            // console.log(data)
            output_box.innerText=data.success
            
        })
        
}

getDataFromAPI()
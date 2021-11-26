// https://jsonplaceholder.typicode.com/todos
var todosOutput=document.querySelector('#app');
var URL="https://jsonplaceholder.typicode.com/todos";

function gettodos(){
    fetch(URL)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let result="";
            app.innerHTML=json
            .map(json => {
                    if(!json.completed){
                        result+=`<p class="not-completed">Title:${json.title}</p>`
                    }
                    else{
                        result+=`<p>${json.title}</p>`
                    }
                    result+=`<p>Completed : ${json.completed}</p><br/>`
                    return result;
                })
                .join("")
        })
        
}

gettodos();
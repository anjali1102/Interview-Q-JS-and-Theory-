var inputArea=document.querySelector('#input-field')
const button=document.querySelector('#btn')


function updatevalueHandler(e){
    let tweet=e.target.value;
    // console.log(tweet.length)
    if(tweet.length>0 && tweet.length<10){
        button.disabled=false;
    }
    if(tweet.length===10){
        button.disabled=true;
    }
}
inputArea.addEventListener('input', updatevalueHandler)
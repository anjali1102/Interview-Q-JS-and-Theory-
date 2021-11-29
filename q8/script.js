var output= document.querySelector('#output')
var url ="https://unitube-server.herokuapp.com/playlists"
fetch(url)
.then(response => response.json())
.then(data => 
    output.innerHTML=data.message)
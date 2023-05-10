var button = document.querySelector('#button');
var paragraph = document.querySelector("#compteur")

function addone() {
    let value = paragraph.innerHTML
    paragraph.innerHTML = parseInt(value)+1
}

button.addEventListener('click',addone);

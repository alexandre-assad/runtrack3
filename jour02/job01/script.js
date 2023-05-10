var button = document.querySelector('#button');


function citation() {
    var article = document.querySelector("#citation")
    console.log(article.innerHTML)
}

button.addEventListener('click',citation);

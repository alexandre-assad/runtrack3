var button = document.querySelector('#button');


function showhide() {
    if (document.querySelector("article") == null) {
        var article = document.createElement("article");
        var texte = document.createTextNode("Un article");
        article.appendChild(texte)
        document.body.appendChild(article)
    } else {
        var old_article = document.querySelector("article")
        old_article.remove()
    }
    
}

button.addEventListener('click',showhide);

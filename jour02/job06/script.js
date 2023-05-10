
const konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyQ","Enter"]

var enter_code = []
document.addEventListener('keydown',test);

function test(e) {
    if (enter_code.length <1) {
        enter_code.push(e.code);
    } else {
        
        test_bon = true
        for (let i = 0;i<enter_code.length;i++) {
            if (enter_code[i] != konami[i]) {
                test_bon = false
                enter_code = []
            }
        }
        if (test_bon = true) {
            enter_code.push(e.code)
        }
        console.log(konami)
        console.log(enter_code)
        if (enter_code.length === konami.length) {
            if (enter_code[enter_code.length] == konami[konami.length]) {
                enter_code = []
                plateforme()
            }
        }
    }

}

function plateforme () {
    var body = document.querySelector("body")
    body.style.backgroundColor = "blue"
    var article = document.createElement("article");
    var texte = document.createTextNode("La plateforme c'est trop bien");
    article.appendChild(texte)
    document.body.appendChild(article)
}
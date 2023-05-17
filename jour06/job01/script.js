document.addEventListener("DOMContentLoaded", () => {
var citation = [" Le commerce est notre seul but chez Tyrell. Plus humain que l'humain est notre devise."," T'endors pas, c'est l'heure de mourir.","Quelle expérience de vivre dans la peur ! Voilà ce que c'est que d'être un esclave.","Dommage qu'elle doive mourir, mais c'est notre lot à tous."]
    var papi_button = document.getElementById("papillon_button") 
var red_button = document.getElementById("red_button") 
papi_button.addEventListener("click",function(){alert("Le Papillon a été acheté !")})
red_button.addEventListener("click",function(){
    document.getElementById("blade").innerHTML = citation[Math.floor(Math.random() * citation.length)]
})

})

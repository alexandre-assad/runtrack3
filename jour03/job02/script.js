
liste_image = ["images/arc1.png","images/arc2.png","images/arc3.png","images/arc4.png","images/arc5.png","images/arc6.png"]
ordre_images = ["images/arc1.png","images/arc2.png","images/arc3.png","images/arc4.png","images/arc5.png","images/arc6.png"]
positions = ["#pos1","#pos2","#pos3","#pos4","#pos5","#pos6"]
$(document).ready(function() {
    var pos = 0
    var compteur = 0
    $('#melange').click(function(){
        $(positions[pos]).attr("style","border:0px")
        liste_image.sort(() => Math.random()-0.5)
        $("#resultat").text("")
        $("#pos1").attr("src",liste_image[0])
        $("#pos2").attr("src",liste_image[1])
        $("#pos3").attr("src",liste_image[2])
        $("#pos4").attr("src",liste_image[3])
        $("#pos5").attr("src",liste_image[4])
        $("#pos6").attr("src",liste_image[5])
        pos = 0 
        compteur = 0
        $(positions[pos]).attr("style","border:5px solid black")
        
    })
   
    $("#droite").click(function() {
        if (pos <5) {
            $(positions[pos]).attr("style","border:0px")
            pos ++ 
            $(positions[pos]).attr("style","border:5px solid black")
        }
    })
    $("#gauche").click(function() {
        if (pos >0) {
            $(positions[pos]).attr("style","border:0px")
            pos --
            $(positions[pos]).attr("style","border:5px solid black")
        }
    })

    $("#selection").click(function(){
        $("#resultat").append($('<img>',{src:liste_image[pos]}))
        $(positions[pos]).attr("style","border:0px")
        pos = 0
        $(positions[pos]).attr("style","border:5px solid black")
        compteur ++
        if (compteur == 6) {
            verifier()
        }
    })

    function verifier() {
        if ($("#resultat").html() === "<img src=\"images/arc1.png\"><img src=\"images/arc2.png\"><img src=\"images/arc3.png\"><img src=\"images/arc4.png\"><img src=\"images/arc5.png\"><img src=\"images/arc6.png\">") {
            alert("Vous avez gagné")
        } else {
            alert("Vous avez perdu")
        }
    }
    
})
var positions = [["pos00","pos01","pos02"],["pos10","pos11","pos12"],["pos20","pos21","pos22"]]
var liste_image = ["images/logo1.png","images/logo2.png","images/logo3.png","images/logo4.png","images/logo5.png","images/logo6.png","images/logo7.png","images/logo8.png"]

$(document).ready(function() {

    $('#melange').click(function(){
        liste_image.sort(() => Math.random()-0.5)
        $("#resultat").text("")
        $("#pos00").attr("src",liste_image[0])
        $("#pos01").attr("src",liste_image[1])
        $("#pos02").attr("src",liste_image[2])
        $("#pos10").attr("src",liste_image[3])
        $("#pos11").attr("src",liste_image[4])
        $("#pos12").attr("src",liste_image[5])
        $("#pos20").attr("src",liste_image[6])
        $("#pos21").attr("src",liste_image[7])
        $("#pos22").attr("src","images/logo9.png")
        pos = [0,0] 
    })

    $("#pos00").click(function(){
        if ($("#pos01").attr("src") === "images/logo9.png") {
            $("#pos01").attr("src",$("#pos00").attr("src"))
            $("#pos00").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos10").attr("src") === "images/logo9.png") {
            $("#pos10").attr("src",$("#pos00").attr("src"))
            $("#pos00").attr("src","images/logo9.png")
            verif()
        }
            
    })

    $("#pos01").click(function(){
        if ($("#pos00").attr("src") === "images/logo9.png") {
            $("#pos00").attr("src",$("#pos01").attr("src"))
            $("#pos01").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos11").attr("src") === "images/logo9.png") {
            $("#pos11").attr("src",$("#pos01").attr("src"))
            $("#pos01").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos02").attr("src") === "images/logo9.png") {
            $("#pos02").attr("src",$("#pos01").attr("src"))
            $("#pos01").attr("src","images/logo9.png")
            verif()
        }
    })

    $("#pos02").click(function(){
        if ($("#pos01").attr("src") === "images/logo9.png") {
            $("#pos01").attr("src",$("#pos02").attr("src"))
            $("#pos02").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos12").attr("src") === "images/logo9.png") {
            $("#pos12").attr("src",$("#pos02").attr("src"))
            $("#pos02").attr("src","images/logo9.png")
            verif()
        }
            
    })

    $("#pos10").click(function(){
        if ($("#pos00").attr("src") === "images/logo9.png") {
            $("#pos00").attr("src",$("#pos10").attr("src"))
            $("#pos10").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos11").attr("src") === "images/logo9.png") {
            $("#pos11").attr("src",$("#pos10").attr("src"))
            $("#pos10").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos20").attr("src") === "images/logo9.png") {
            $("#pos20").attr("src",$("#pos10").attr("src"))
            $("#pos10").attr("src","images/logo9.png")
            verif()
        }
            
    })

    $("#pos11").click(function(){
        if ($("#pos10").attr("src") === "images/logo9.png") {
            $("#pos10").attr("src",$("#pos11").attr("src"))
            $("#pos11").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos12").attr("src") === "images/logo9.png") {
            $("#pos12").attr("src",$("#pos11").attr("src"))
            $("#pos11").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos01").attr("src") === "images/logo9.png") {
            $("#pos01").attr("src",$("#pos11").attr("src"))
            $("#pos11").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos21").attr("src") === "images/logo9.png") {
            $("#pos21").attr("src",$("#pos11").attr("src"))
            $("#pos11").attr("src","images/logo9.png")
            verif()
        }
            
    })

    $("#pos12").click(function(){
        if ($("#pos02").attr("src") === "images/logo9.png") {
            $("#pos02").attr("src",$("#pos12").attr("src"))
            $("#pos12").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos11").attr("src") === "images/logo9.png") {
            $("#pos11").attr("src",$("#pos12").attr("src"))
            $("#pos12").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos22").attr("src") === "images/logo9.png") {
            $("#pos22").attr("src",$("#pos12").attr("src"))
            $("#pos12").attr("src","images/logo9.png")
            verif()
        }
            
    })

    $("#pos20").click(function(){
        if ($("#pos10").attr("src") === "images/logo9.png") {
            $("#pos10").attr("src",$("#pos20").attr("src"))
            $("#pos20").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos21").attr("src") === "images/logo9.png") {
            $("#pos21").attr("src",$("#pos20").attr("src"))
            $("#pos20").attr("src","images/logo9.png")
            verif()
        }  
    })

    $("#pos21").click(function(){
        if ($("#pos22").attr("src") === "images/logo9.png") {
            $("#pos22").attr("src",$("#pos21").attr("src"))
            $("#pos21").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos20").attr("src") === "images/logo9.png") {
            $("#pos20").attr("src",$("#pos21").attr("src"))
            $("#pos21").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos11").attr("src") === "images/logo9.png") {
            $("#pos11").attr("src",$("#pos21").attr("src"))
            $("#pos21").attr("src","images/logo9.png")
            verif()
        }
    })

    $("#pos22").click(function(){
        if ($("#pos21").attr("src") === "images/logo9.png") {
            $("#pos21").attr("src",$("#pos22").attr("src"))
            $("#pos22").attr("src","images/logo9.png")
            verif()
        } else if ($("#pos12").attr("src") === "images/logo9.png") {
            $("#pos12").attr("src",$("#pos22").attr("src"))
            $("#pos22").attr("src","images/logo9.png")
            verif()
        }  
    })

    function verif () {
        if ($("#pos00").attr("src") === "images/logo1.png" && $("#pos01").attr("src") === "images/logo4.png" && $("#pos02").attr("src") === "images/logo7.png" && $("#pos10").attr("src") === "images/logo2.png" && $("#pos11").attr("src") === "images/logo5.png" && $("#pos12").attr("src") === "images/logo8.png" && $("#pos20").attr("src") === "images/logo3.png" && $("#pos21").attr("src") === "images/logo6.png" && $("#pos22").attr("src") === "images/logo9.png") {
            alert("victoire")
        }
    }
    
})
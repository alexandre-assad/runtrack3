document.addEventListener("scroll", gradient);

function gradient() {
    var footer = document.getElementById("footer");
    if (window.scrollY < 2048) {
        footer.style.backgroundColor = "rgb(" + Math.round((window.scrollY/(4096/2))*255) + ", 255,0)"

    } else {
        distance_second = 4096-scrollY
        footer.style.backgroundColor = "rgb( 255, " + Math.round((distance_second/(4096/2))*255) + " ,0)"
    }
}
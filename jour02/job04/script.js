var textarea = document.getElementById("keylogger")

document.addEventListener('keydown',write);

function write(e) {
    var code = e.code;
    textarea.value += e.key

}

textarea.addEventListener('keydown',write);
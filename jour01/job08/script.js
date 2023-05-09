function premier(x) {
    for (let i=2;i<=Math.sqrt(x);i++) {
        if (x%i==0) {
            return false;
        }
    }
    return true;
}


function sommenombrespremiers(x,y) {
    if (premier(x)==true && premier(y)==true) {
        console.log(x+y);
    } else {
        console.log(false);
    }
}

sommenombrespremiers(2,1)
sommenombrespremiers(2,6)
sommenombrespremiers(7,23)
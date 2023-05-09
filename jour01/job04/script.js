function bisextile(annee) {
    if (annee % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(2000))
console.log(bisextile(1999))
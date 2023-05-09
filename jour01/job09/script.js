
function croissante(liste) {
    let new_liste = []
    while( liste.length >0) {
        var min = Math.min(...liste)
        new_liste.push(min)
        for (let i = 0; i<liste.length;i++) {
            if (liste[i] === min) {
                liste.splice(i,1);
                break;
            }
        }
    }
    return new_liste
}

function decroissante(liste) {
    let new_liste = []
    while( liste.length >0) {
        var max = Math.max(...liste)
        new_liste.push(max)
        for (let i = 0; i<liste.length;i++) {
            if (liste[i] === max) {
                liste.splice(i,1);
                break;
            }
        }
    }
    return new_liste
}

function tri(numbers,order) {
    if (order == "asc") {
        return croissante(numbers)
    } else if (order == "desc") {
        return decroissante(numbers)
    }
}

console.log(tri([4,6,3,7,1,2],"asc"))
console.log(tri([4,6,3,7,1,2],"desc"))
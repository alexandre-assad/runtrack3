const feries = new Map();
feries.set(0,[1]);
feries.set(1,undefined);
feries.set(2,undefined);
feries.set(3,[13]);
feries.set(4,[1,8,21]);
feries.set(5,[1]);
feries.set(6,[14]);
feries.set(7,[15]);
feries.set(8,undefined);
feries.set(9,undefined);
feries.set(10,[1,11]);
feries.set(11,[25]);


function jourtravaille(jour) {
    let date_result = jour.getDate() + " " + jour.getMonth() + " " + jour.getFullYear();
    if (feries.get(jour.getMonth()).includes(jour.getDate())) {
        console.log("Le "+date_result + " est un Jour Ferie");
    } else if (jour.getDay() == 5 || jour.getDay() == 6 ){
        console.log("Non, "+ date_result + " est un Weekend");
    } else {
        console.log("Oui, "+date_result + " est Jour travaille");
    }
}

const date1 = new Date(2020,0,20,12,30);
const date2 = new Date(2020,4,8,12,30);
const date3 = new Date(2023,4,6,12,30);

jourtravaille(date1)
jourtravaille(date2)
jourtravaille(date3)

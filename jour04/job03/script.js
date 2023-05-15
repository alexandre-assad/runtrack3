
document.addEventListener("DOMContentLoaded", () => {

   function jsonValueKey(json,cle) {
    var new_json = new Map(Object.entries(JSON.parse(json)))
    console.log(new_json)
    return new_json.get(cle)
   }

   console.log(jsonValueKey("{\"name\": \"La Plateforme_\",\"address\": \"8 rue d'hozier\",\"city\": \"Marseille\",\"nb_staff\": \"11\",\"creation\":\"2019\"}","city"))
});




document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("button").addEventListener("click",function(){
        fetch('expression.txt')
        .then(rep =>
            {
                if (rep.ok === true) {
                    const citation = rep.text()
                    
                    return citation
                }
            else return Promise.reject("erreur")
            }
            )
            .then(data=> {
                console.log(data)
                let cita = document.getElementById("cita")
                cita.innerHTML = data
            }
                )
            .catch(err=>console.log(err))
        

       
        
    })
});



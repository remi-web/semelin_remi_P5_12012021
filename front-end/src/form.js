var error = document.getElementById("erreur")
var email = document.getElementById("email")
var email2 =document.getElementById("email2")

let objCommand = []

let user = {
    pseudo: document.inscription.pseudo.value,
    email: document.inscription.email.value,
    mdp: document.inscription.mdp.value
}

let command = JSON.parse(localStorage.getItem("produit"))
//------------verification des adresses email----------//
email2.addEventListener("input", function(){
    if (this.value != email.value){
        error.textContent = "adresses email différentes"
    }else{
        error.textContent = ""
    }
})
//------------verifivation des inputs--------------//
document.forms["inscription"].addEventListener("submit", function(e){

    var inputs = this.getElementsByTagName("input")

    for (var i = 0; i < inputs.length; i++){
        if(!inputs[i].value){
            e.preventDefault
            error.textContent = "veuillez renseigner le formulaire"
            return false
        }
 
    else{}
    }
    //------envois au serveur------------//
    if (inputs.value = true){
        objCommand.push(command,user)
        localStorage.setItem("commande", JSON.stringify(objCommand))
        commandSend
        alert("Commande envoyé!")

    }
})
function commandSend (request){
    return request = new XMLHttpRequest(),
        request.open("GET", "http://localhost:3000/api/users"),
        request.setRequestHeader("Content-Type", "application/json"),
        request.send(JSON.stringify(objCommand))
}


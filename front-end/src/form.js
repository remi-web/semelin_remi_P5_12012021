var error = document.getElementById("error-text")
var email = document.getElementById("email")
var email2 =document.getElementById("email2")
var inputs = document.commandForm.getElementsByTagName("input")

//----------récupération des ID----------------------//
let command = getItemProducts()
let orderId = []
let products = []

for (var i = 0; i < command.length; i++ ){
    let commandId = command[i].id
    products.push(commandId)
    }

//------------verifivation des inputs------------------//
document.commandForm.addEventListener("submit", function(e){

    if(!inputsChecking()){
        e.preventDefault()
        return
    }

    //------envois au serveur et local storage------------//
    else{
        contact = {
            firstName: document.commandForm.firstName.value,
            lastName: document.commandForm.lastName.value,
            address: document.commandForm.adress.value,
            city: document.commandForm.city.value,
            email: document.commandForm.email.value,
        }
    
    const objCommand = {contact,products}
    localStorage.setItem("command", JSON.stringify(objCommand))
    postCommand(objCommand)
    e.preventDefault()
    }
})


function inputsChecking(){
    
    for ( var i = 0; i < inputs.length; i++){

        if(inputs[i].value == ""){
            error.textContent = errorText.form
            return false
        }
        if(!(inputs[i].value).match(model[i])){
            error.textContent = messageInputChecking[i]
            return false
            }
    }
    if (email2.value != email.value){
        error.textContent = errorText.email
        return false
    }
    else{
        return true
    }
}

function postCommand(objCommand,e){

    fetch( "http://localhost:3000/api/cameras/order",{
        method: "POST",
        headers:{
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify(objCommand)
    })
         
    .then ((response) => {
        response.json()

        .then(result => 
            localStorage.setItem("orderId", JSON.stringify (result.orderId))
        )
            if (response.ok){
                console.log(orderId)
                if (window.confirm(` Commande envoyée avec succès !`)) {
                    window.location.href = " ../html/command-order.html";
                }
            }
    })
    .catch ((err) => {
        console.log(err);
         window.alert(err)
        }
    )
}

let model = [
    /[a-z]/,
    /[a-z]/,
    /^([0-9a-zA-Z_ ]){6,20}$/,
    /[a-zA-Zàâäéèêëïîôöùûüç']/,
    /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/,
    /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/
]
let messageInputChecking = [
    "Prenom invalide",
    "Nom invalide",
    "Adresse invalide",
    "Nom de ville invalide"
]
let errorText = {
    email: "Adresses Email différentes",
    form: "Veuillez remplir le formulaire"
}
let orderIdMessage = "Numéro de commande:  " + orderId[0]


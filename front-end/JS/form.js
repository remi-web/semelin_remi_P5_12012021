let error = document.getElementById("error-text")
let inputs = document.commandForm.getElementsByTagName("input")

//----------récupération des ID-------//
let products = []
getProductsId()

//---------envois de commande---------//
listenForCommand()


let errorText = {
    email: "Adresses Email différentes",
    form: "Veuillez remplir le formulaire"
}

let messageInputChecking = [
    "Prenom invalide",
    "Nom invalide",
    "Adresse invalide",
    "Nom de ville invalide"
]

let model =//Regex//
[
    /^([a-zA-Zàâäéèêëïîôöùûüç]){2,20}$/, //firstName
    /^([a-zA-Zàâäéèêëïîôöùûüç]){2,20}$/, //lastName
    /^([0-9a-zA-Z ]){6,20}$/, // address
    /^([a-zA-Zàâäéèêëïîôöùûüç]){6,20}$/, // city
    /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/, // email
    /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/
]

function checkInputs(){
    
    for ( var i = 0; i < inputs.length; i++){
        //-----test si formulaire complété---//
        if(inputs[i].value == ""){
            error.textContent = errorText.form
            return false
        }
        //-----test avec les Regex----------//
        if(!(inputs[i].value).match(model[i])){
            error.textContent = messageInputChecking[i]
            return false
        }
    }
    //--------test de confirmation d'email---//
    if (document.getElementById("email").value != document.getElementById("email2").value){
        error.textContent = errorText.email
        return false
    }
    else{
        return true
    }
}

function command(e){
    
    contact = {
        firstName: document.commandForm.firstName.value,
        lastName: document.commandForm.lastName.value,
        address: document.commandForm.adress.value,
        city: document.commandForm.city.value,
        email: document.commandForm.email.value,
    }
    const objCommand = {contact,products}
    sendCommand(objCommand)
    e.preventDefault()
}

function getProductsId(){

    if (getItemProducts()){
        for (var i = 0; i < (getItemProducts()).length; i++ ){
            products.push(getItemProducts()[i].id)
        }
    }
}

function listenForCommand(){

    document.commandForm.addEventListener("submit", function(e){
        //----verification des inputs------//
        if(!checkInputs()){
            e.preventDefault()
            return
        }
        //------envois au serveur------------//
        else{
            command(e)
        }
    })
}

function sendCommand(objCommand){

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

var error = document.getElementById("error-text")
var email = document.getElementById("email")
var email2 =document.getElementById("email2")


//----------récupération des ID----------------------//
let command = getItemProducts()
let orderId = []
let products = []

for (var i = 0; i < command.length; i++ ){
    let commandId = command[i].id
    products.push(commandId)
    }
//------------verification des adresses email----------//
emailChecking()

//------------verifivation des inputs------------------//
document.commandForm.addEventListener("submit", function(e){

    var inputs = this.getElementsByTagName("input")
    e.preventDefault()
    inputChecking(inputs)
    imputValidation(e)

    //------envois au serveur et local storage------------//
    if (inputs.value = true && email.value === email2.value){

        contact = {
            firstName: document.commandForm.firstName.value,
            lastName: document.commandForm.lastName.value,
            address: document.commandForm.adress.value,
            city: document.commandForm.city.value,
            email: document.commandForm.email.value,
            }
    
        const objCommand = {contact,products}
        
        localStorage.setItem("command", JSON.stringify(objCommand))
        postCommand(objCommand, orderId)
    }
})


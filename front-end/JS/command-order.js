//--------------Récupération et affichage de l'order Id---------------------//
let orderId = JSON.parse(localStorage.getItem("orderId"))
let commandOrder = document.getElementById("command-order")

commandOrder.textContent =  orderId + " pour un montant de: " + displayTotalPrice()

resetCaddyAfterCommand()

function resetCaddyAfterCommand(){
    let homeLink = document.getElementById("home-link")
    homeLink.addEventListener("click",function(){
        emptyCaddy()
    })
}
//--------------Récupération et affichage de l'order Id---------------------//
let orderId = JSON.parse(localStorage.getItem("orderId"))
document.getElementById("command-order").textContent =  orderId

resetCaddyAfterCommand()
//emptyCaddy()

function resetCaddyAfterCommand(){
    let homeLink = document.getElementById("home-link")
    homeLink.addEventListener("click",function(){
        emptyCaddy()
    })
}
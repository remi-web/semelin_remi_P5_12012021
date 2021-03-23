//--------------Récupération et affichage de l'order Id---------------------//
let orderId = JSON.parse(localStorage.getItem("orderId"))

document.getElementById("command-order").textContent =  orderId
let commandOrder = document.getElementById("command-order")

let orderId = JSON.parse(localStorage.getItem("orderId"))

commandOrder.textContent =  orderId
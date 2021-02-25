//------------affichage du panier ds page PANIER------------//
let panierNumberStorage = document.getElementById("panier-number-storage")
let panierNameStorage = document.getElementById("panier-name-storage")
let panierPriceStorage = document.getElementById("panier-price-storage")

panierNumberStorage.innerHTML = "Quantité: " 
panierNameStorage.innerHTML = "Article: " 
panierPriceStorage.innerHTML = "Prix: " 

let cartGetQantity = localStorage.getItem("quantity")
let cartGetName = localStorage.getItem("name")
let cartGetPrice = localStorage.getItem("price")
console.log(cartGetQantity)

panierNumberStorage.innerHTML = "Quantité: " + cartGetQantity
panierNameStorage.innerHTML =   cartGetName 
panierPriceStorage.innerHTML =   cartGetPrice
//localStorage.clear()
console.log(localStorage)

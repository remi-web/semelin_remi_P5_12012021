//---------affichage produit page PRODUIT via local storage depuis clic sur lien produit ----------//
let nameP = document.getElementById("name")
let descriptionP = document.getElementById("description")
let priceP = document.getElementById("price")
let imageP = document.getElementById("image")

nameP.textContent = localStorage.getItem("name")
descriptionP.textContent = localStorage.getItem("des")
priceP.textContent = localStorage.getItem("price")
var url = localStorage.getItem ("image")
imageP.src = url
imageP.style.height = "50px"
imageP.style.width = "50px"

//localStorage.clear()
console.log(localStorage)
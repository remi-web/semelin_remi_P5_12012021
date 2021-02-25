//---------affichage produit page PRODUIT via local storage depuis clic sur lien produit ----------//

let nameP = document.getElementById("name")
let descriptionP = document.getElementById("description")
let priceP = document.getElementById("price")
let imageP = document.getElementById("image")
let lense1P = document.getElementById("optic1")
let lense2P = document.getElementById("optic2")

objBackup = JSON.parse(localStorage["panierBackup"])

nameP.textContent = objBackup.name
descriptionP.textContent = objBackup.description
priceP.textContent = objBackup.price
imageP.src = objBackup.photo
lense1P.textContent = objBackup.lense1
lense2P.textContent = objBackup.lense2

let panierBackup = objBackup
let addPanier =  document.getElementById("button")
addPanier.addEventListener("click", function(){
    localStorage.setItem("panierBackup",JSON.stringify(panierBackup))
    console.log(localStorage)
})


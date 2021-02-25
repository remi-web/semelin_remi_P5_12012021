panierBackup = JSON.parse(localStorage["panierBackup"])

let panierItemName = document.getElementById("name")
let panierItemDescription = document.getElementById("description")
let panierItemPrice = document.getElementById("price")


panierItemName.textContent = panierBackup.name
panierItemDescription.textContent = panierBackup.description
panierItemPrice.textContent = panierBackup.price
console.log(panierBackup.name)
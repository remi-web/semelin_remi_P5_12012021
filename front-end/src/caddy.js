//--------------affichage du nombre d'articles----------//
let backupCaddy = JSON.parse(localStorage.getItem("produit"))

var caddy = document.querySelector("a#caddy")

var articleNumber = document.createElement("p");articleNumber.className = "article-number"
articleNumber.textContent = backupCaddy.length
console.log(articleNumber)
caddy.appendChild(articleNumber)

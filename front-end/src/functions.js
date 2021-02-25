//----------------PANIER------------------//


let cartTotal = 1

console.log(cartTotal)
let panierNumber = document.getElementById("panier-number")
let panierName = document.getElementById("panier-name")
let panierPrice = document.getElementById("panier-price")
let panierButton = document.querySelector("button")
panierNumber.innerHTML = cartTotal

request.onload = function() {
    var reponse = request.response
    var camera = JSON.parse(reponse)
    //console.log(camera)
    
    panierNumber.innerHTML = "Quantité: " 
    panierName.innerHTML = "Article: " 
    panierPrice.innerHTML = "Prix: " 

    
var cartTotalStorage = cartTotal  - 1

//-----------------objet panier-------------------//
var panier = {
    quantity : "",
    name : "",
    price : ""
}
//au clic de "ajouter  au panier"---------//
//-------------affichage panier ds page PRODUIT--------------------//

panierButton.addEventListener("click", function(){
    panierNumber.innerHTML = "Quantité: " + cartTotal++
    panierName.innerHTML = "Article: " + localStorage.getItem("name")
    panierPrice.innerHTML = "Prix: " + localStorage.getItem("price")

//----------remplissage de l'objet panier-------//
    /*
    panier.quantity = cartTotal - 1
    panier.name = panierName.innerHTML
    panierPrice = panierPrice.innerHTML
    */
    localStorage.setItem("quantity", cartTotal - 1)
    localStorage.setItem("name", panierName.innerHTML)
    localStorage.setItem ("price", panierPrice.innerHTML)
    console.log(localStorage)
  // --------------------je remplis l'objet panier---------//  
    //localStorage.setItem("panierBackup",JSON.stringify(panier))
    //console.log(localStorage)
    
    })

}
//--------------je récupère les informations du panier----------//
/*
var ls = false
if (localStorage["panierBackup"]){
    ls = JSON.parse(localStorage["panierBackup"])
    console.log(ls)
}
*/
//localStorage.clear()


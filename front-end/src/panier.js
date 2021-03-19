//---------récupération de l'objet envoyé ds le localstorage----------------//
let cartProduct = getItemProducts()
//-------création et affichage des nouveaux éléments dans le DOM------------//
for (var i = 0; i < cartProduct.length ; i++){
    let itemPanier = document.querySelector('main')
    let itemClass = document.createElement('section'); itemClass.className = "item-link"
    itemClass.innerHTML = renderCartProducts(cartProduct)
    console.log(cartProduct[i])
    itemPanier.prepend(itemClass)
}

deleteProduct()
totalPrice()
caddyDisplay()





let panierTitle = document.getElementById("panier-title")
let backupCaddy = getItemProducts()
if (backupCaddy.length === 0){
    panierTitle.textContent = "Votre panier est vide"
}

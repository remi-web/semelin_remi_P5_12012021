//---------récupération de l'objet envoyé ds le localstorage----------------//
let cartProduct = getItemProducts()
//-------création et affichage des nouveaux éléments dans le DOM------------//
for (var i = 0; i < cartProduct.length ; i++){
    let itemPanier = document.querySelector('main')
    let itemClass = document.createElement('section'); itemClass.className = "item-link"
    itemClass.innerHTML = renderCartProducts(cartProduct)
    itemPanier.prepend(itemClass)
}

deleteProduct()
totalPrice()
caddyDisplay()

let panierTitle = document.getElementById("panier-title")
if ((getItemProducts()).length === 0){
    panierTitle.textContent = "Votre panier est vide"
}

function renderCartProducts(cartProduct){
    if (window.matchMedia("(max-width: 768px)").matches) {
        return`
            <img class="image" src=${cartProduct[i].image}>
            <p class="name">${cartProduct[i].name}</p>
            <p class="price">${money(cartProduct[i].price)}</p>
            <button class="button-delete">Retirer </button>
        `
    }
    else{
        return`
            <img class="image" src=${cartProduct[i].image}>
            <p class="name">${cartProduct[i].name}</p>
            <p class="description">${cartProduct[i].description}</p>
            <p class="price">${money(cartProduct[i].price)}</p>
            <button class="button-delete">Retirer </button>
        `
    }
}
function deleteProduct (cartProduct){

    cartProduct = getItemProducts()
    cartProductReverse = cartProduct.reverse()
    let buttonDeleteItem = document.getElementsByClassName("button-delete")
    
    for (var i = 0; i < cartProduct.length; i++){
        let objId = {
            id: cartProductReverse[i].id
        }
       
        let idDelete = []

        buttonDeleteItem[i].addEventListener('click', function(){
            let conf = window.confirm("Etes vous sur de vouloir supprimer cet article ?")
                if(conf){
                    idDelete.push(objId.id)
                    cartProductFilter = cartProduct.filter((tabF) => tabF.id != idDelete )
                    setItemProducts(cartProductFilter)
                    document.location.reload()
                }
        })  
    }    
}
function totalPrice (){
    cartProduct = getItemProducts()

    let arrayPrices = []
    console.log(arrayPrices)
    //------------aller chercher prix dans le panier-------//
    for (var i = 0; i < cartProduct.length; i++){
        let productPrice = cartProduct[i].price
    //---- push des valeur pour les avoir dans un tableau pour pouvoir fair l'opération-----//
        arrayPrices.push(productPrice)
    }
    //--------------addition du total--------------//
    const reducer = (accumalator, currentValue) => accumalator + currentValue
    const resultTotalPrice = arrayPrices.reduce(reducer,0)

    //--------arrondit le résultat à 2 chiffres aorès la virgule------//
    let totalPrice = resultTotalPrice.toFixed(2)
    //----------affichage du résultat dans le DOM---------//
    document.getElementById("total-price-number").textContent = money(totalPrice)

}
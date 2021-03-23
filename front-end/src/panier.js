let cartProduct = getItemProducts()

panierDisplay()
deleteProduct()
totalPrice()
caddyDisplay()
caddyIsNull()


function renderCartProducts(cartProduct,i){
    if (window.matchMedia("(max-width: 768px)").matches) {
        return`
        <section class="item-link">
            <img class="image" src=${cartProduct[i].image}>
            <p class="name">${cartProduct[i].name}</p>
            <p class="price">${money(cartProduct[i].price)}</p>
            <button class="button-delete">Retirer </button>
        </section>
        `
    }
    else{
        return`
        <section class="item-link">
            <img class="image" src=${cartProduct[i].image}>
            <p class="name">${cartProduct[i].name}</p>
            <p class="description">${cartProduct[i].description}</p>
            <p class="price">${money(cartProduct[i].price)}</p>
            <button class="button-delete">Retirer </button>
        </section>
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

    //-------tableau des prix depuis le localstorage--//
    let arrayPrices = []
    for (var i = 0; i < cartProduct.length; i++){
        let productPrice = cartProduct[i].price
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
function caddyIsNull (){
    if ((getItemProducts()).length === 0){
        document.getElementById("panier-title").textContent = "Votre panier est vide"
    }
}
function panierDisplay (){
    for (var i = 0; i < cartProduct.length ; i++){
        document.querySelector('main').insertAdjacentHTML("afterbegin",renderCartProducts(cartProduct,i))
    }
}
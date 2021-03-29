let cartProducts = getItemProducts()

if(cartProducts){
    displayProductsInCart()
    listenForDeleteProduct()
    calculateTotalPrice(cartProducts)
    displayProductsQantity()
}

listenForEmptyCaddy()
displayForEmptyCaddy()


function calculateTotalPrice (cartProducts){
    
        //-------tableau des prix depuis le localstorage--//
        let arrayPrices = []
        for (var i = 0; i < cartProducts.length; i++){
            let productPrice = cartProducts[i].price
            arrayPrices.push(productPrice)
        }
        //--------------addition du total--------------//
        const reducer = (accumalator, currentValue) => accumalator + currentValue
        const resultTotalPrice = arrayPrices.reduce(reducer,0)

        //--------arrondit le résultat à 2 chiffres après la virgule------//
        let totalPrice = (resultTotalPrice.toFixed(2))
        //-------affiche le total------------------------//
        displayTotalPrice(totalPrice)
}
function deleteProduct(objId){

    let idDelete = []
    idDelete.push(objId.id)
    cartProductsFilter = cartProducts.filter((product) => product.id != idDelete )
    setItemProducts(cartProductsFilter)
    document.location.reload()
}
function displayForEmptyCaddy (){

    if ((! getItemProducts()) || (getItemProducts()).length === 0){
        document.getElementById("panier-title").textContent = "Votre panier est vide"
        document.getElementById("total").style.display = "none"
        document.getElementById("form-command").style.display = "none"
        document.getElementById("empty-button").style.display = "none"
    }
}
function displayProductsInCart (){

    cartProducts.forEach(cartProduct => {
        document.querySelector('main').insertAdjacentHTML("afterbegin",renderCartProducts(cartProduct))
    })
}
function displayTotalPrice(totalPrice){
    document.getElementById("total-price-number").textContent = convertMoney(totalPrice)
}
function listenForDeleteProduct (){

    cartProductsReverse = cartProducts.reverse()
    let buttonDeleteItem = document.getElementsByClassName("button-delete")
    
    for (var i = 0; i < getItemProducts().length; i++){
        
        let objId = {
            id: cartProductsReverse[i].id
        }
    
        buttonDeleteItem[i].addEventListener('click', function(){
            let conf = window.confirm("Etes vous sur de vouloir supprimer cet article ?")
            if(conf){
                deleteProduct(objId)
            }
        })  
    }
}
function listenForEmptyCaddy(){

    let buttonEmptyCaddy = document.getElementById("empty-button")

    buttonEmptyCaddy.addEventListener('click', function(){
        if(window.confirm (`Etes vous sur de vouloir vider le PANIER ?`)){
            emptyCaddy()
        }
    })
}
function renderCartProducts(cartProduct){

    if (window.matchMedia("(max-width: 768px)").matches) {
        return`
        <section class="item-link">
            <img class="image" src=${cartProduct.image}>
            <p class="name">${cartProduct.name}</p>
            <p class="price-cart-product">${convertMoney(cartProduct.price)}</p>
            <button class="button-delete">Retirer </button>
        </section>
        `
    }
    else{
        return`
        <section class="item-link">
            <img class="image" src=${cartProduct.image}>
            <p class="name">${cartProduct.name}</p>
            <p class="description">${cartProduct.description}</p>
            <p class="price-cart-product">${convertMoney(cartProduct.price)}</p>
            <button class="button-delete">Retirer </button>
        </section>
        `
    }
}



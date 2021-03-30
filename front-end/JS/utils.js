function getItemProducts(){
    return JSON.parse(localStorage.getItem("products"))
}

function calculateTotalPrice (){
    
    //-------tableau des prix depuis le localstorage--//
    let arrayPrices = []
    for (var i = 0; i < getItemProducts().length; i++){
        let productPrice = getItemProducts()[i].price
        arrayPrices.push(productPrice)
    }
    //--------------addition du total--------------//
    const reducer = (accumalator, currentValue) => accumalator + currentValue
    const resultTotalPrice = arrayPrices.reduce(reducer,0)

    //--------arrondit le résultat à 2 chiffres après la virgule------//
    return  (resultTotalPrice.toFixed(2))
    //-------affiche le total------------------------//
    
}

function convertMoney(price){
    return price / 1000 + "0"+ "€"
}

function displayProductsQantity(){
    
    let articleNumber = document.getElementById("article-number")

    if (getItemProducts() && (getItemProducts()).length > 0){
       articleNumber.textContent = (getItemProducts()).length
    }
    else{
        articleNumber.textContent = ""
    }
}

function displayTotalPrice(){
    return convertMoney(calculateTotalPrice(getItemProducts()))
}

function setItemProducts(productsStorage){
    localStorage.setItem("products",JSON.stringify(productsStorage))
}

function emptyCaddy(){
    localStorage.clear()
    document.location.reload()
}
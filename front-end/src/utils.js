//-----------INDEX FUNCTIONS ----------------//
function setProduitId(products){
    for (var i = 0; i < products.length; i++){
    
        let itemLink = document.getElementsByClassName('item-link')

        let objId = {
            id: products[i]._id,
        }

        let id = []
        itemLink[i].addEventListener('click', function(){
            id.push(objId.id)
            localStorage.setItem("idProduitSelect", JSON.stringify(id))
        })
    }   
} 
function renderProducts(products){
    
    for (var i = 0; i < products.length; i++){
        let camerasItems = document.querySelector("main")
        let newP = document.createElement('div'); newP.className = "camera-link"
        newP.innerHTML = `
        <div class="camera">
            <a class="item-link" href="produit/produit.html">
                <img class="image"src=${products[i].imageUrl}>
                <div class="camera-name-description">
                    <p class="name">${products[i].name}</p>
                    <p class="description">${products[i].description}</p>
                </div>
                <p class="price">${money(products[i].price)}</p>
            </a>
        </div>`
        camerasItems.appendChild(newP)
    }

}

//-----------PRODUIT FUNCTIONS---------------//
function renderProduct(product){
    return `
    <div id="camera">
    <form>
        <label for="optic-choice"></label>
            <select id="optic-choose" name="optic-choose">
                <option value= "number" id="optic1">${product.lenses[0]}</option>
                <option vale= "number" id="optic2">${product.lenses[1]}</option>
            </select>
    </form>
    <a class="item-link" href="produit.html">
        <img id="image" src=${product.imageUrl}>
        <div class="camera-name-description">
            <p id="name">${product.name}</p>
            <p id="description">${product.description}</p>
            <p id="price">${money(product.price)}</p>
        </div>
    </a>
    <button id="button">Ajouter au panier</button>
</div>`
}
function displayProduct(product){
    document.querySelector('main').innerHTML = renderProduct(product)
}
function getProductId(){
    if(!localStorage.getItem("idProduitSelect")){
        alert ("vous n'avez sélectionné aucun produit")
    }
    return JSON.parse(localStorage.getItem("idProduitSelect"))
}
function addProductIncart(product){
    //----------objet a ajouter -----------------//    
    let itemAddCart = {
        name: product.name, 
        description: product.description,
        price: product.price,
        image: product.imageUrl,
        id: product._id
    }
    //--------------evenement à écouter------------//
    document.getElementById("button").addEventListener('click', function(){

        let productsStorage = JSON.parse(localStorage.getItem("products"))

    //--------------condition si  panier déjà existant et si produit dejà dans panier--------------//
        if(productsStorage){
            let itemSelectId = getProductId()
            productsInCartsFilter = (productsStorage.filter((tabF) => tabF.id == itemSelectId).length > 0 )

            if(productsInCartsFilter){
                alert("Désolé ce produit est déjà dans votre panier")
                return;
            }
            else{
                productsStorage.push(itemAddCart)
                setItemProducts(productsStorage)
                popupConfirmation(product)
            } 
        }
        else{
            let productsStorage = []
            productsStorage.push(itemAddCart)
            setItemProducts(productsStorage)
            popupConfirmation(product)
        }
    })
}
function popupConfirmation(product){
    
    if (window.confirm(`${product.name} a bien été ajouté au panier
            Aller au panier OK ou revenir à l'acceuil ANNULER`)) {
                window.location.href = " ../panier/panier.html";
    } else 
    {
        window.location.href = "../index.html";
    }
}
function setItemProducts(productsStorage){
    localStorage.setItem("products",JSON.stringify(productsStorage))
}

//-------------PANIER FUNCTIONS---------------//
function renderCartProducts(cartProduct){
    return`
    <img class="image" src=${cartProduct[i].image}>
    <p class="name">${cartProduct[i].name}</p>
    <p class="description">${cartProduct[i].description}</p>
    <p class="price">${money(cartProduct[i].price)}</p>
    <button class="button-delete">Retirer </button>
`
}
function deleteProduct (cartProduct){

    cartProduct = getItemProducts()
    cartProductReverse = cartProduct.reverse()
    var buttonDeleteItem = document.getElementsByClassName("button-delete")
    
    for (var i = 0; i < cartProduct.length; i++){
        let objId = {
            id: cartProductReverse[i].id
        }
       
        let idDelete = []

        buttonDeleteItem[i].addEventListener('click', function(){
            var conf = window.confirm("Etes vous sur de vouloir supprimer cet article ?")
                if(conf){
                    idDelete.push(objId.id)
                    cartProductFilter = cartProduct.filter((tabF) => tabF.id != idDelete )
                    setItemProducts(cartProductFilter)
                    document.location.reload()
                }
                else {}
        
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
//--------------STANDARDS FUNCTIONS ---------//
function getItemProducts(){
    return JSON.parse(localStorage.getItem("products"))
}
function caddyDisplay(){
    
    let backupCaddy = getItemProducts()
    var caddy = document.querySelector("a#caddy")
    var articleNumber = document.createElement("p");articleNumber.className = "article-number"

    if (backupCaddy){
        articleNumber.textContent = backupCaddy.length
        caddy.appendChild(articleNumber)
    }
    else{}
}
function money(price){
    return price / 1000 + "0"+ "€"
}

//---------------COMMAND FUNCTION------------------//

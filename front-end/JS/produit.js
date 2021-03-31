
//--------requete et affichage de l'article cliqué par son ID--------//

fetch( "http://localhost:3000/api/cameras/" + getProductId())
    .then ((response) => {
        return response.json()
            
    })
    .then ((product) => {
        document.querySelector('main').innerHTML = renderProduct(product)
        addProductIncart(product)
     })
            
    .catch ((err) => {
        console.log(err);
        }
    )

displayProductsQantity()

function addProductIncart(product){

    document.getElementById("button").addEventListener('click', function(){
        
        let productsStorage = []

    //------conditions si  panier déjà existant et si produit dejà dans panier------//
        if(getItemProducts()){
            productsStorage = getItemProducts()

            if (! hasProductInCart(productsStorage)) {
                pushProductInCart(productsStorage, product)
            }
        }
        else{
            pushProductInCart(productsStorage, product)
        }
    })
}

function displayPopupConfirmation(product){
    
    if (window.confirm(`${product.name} a bien été ajouté au PANIER
            Cliquez sur OK pour aller au Panier ou ANNULER pour revenir à l'Acceuil`)) {
                window.location.href = " ../html/panier.html";
    } 
    else{
        window.location.href = "../index.html";
    }
}

function getProductId(){

    if(!localStorage.getItem("idProduitSelect")){
        alert ("vous n'avez sélectionné aucun produit")
        window.location.href = "../index.html"
    }
    return JSON.parse(localStorage.getItem("idProduitSelect"))
}

function hasProductInCart(productsStorage){
    
    productsInCartsFilter = (productsStorage.filter((tabF) => tabF.id == getProductId()).length > 0 )

    if(productsInCartsFilter){
        alert("Désolé ce produit est déjà dans votre panier")
        return true
    }
    else{
        return false
    }
}

function pushProductInCart(productsStorage,product){

    productsStorage.push({
        name: product.name, 
        description: product.description,
        price: product.price,
        image: product.imageUrl,
        id: product._id
    })

    setItemProducts(productsStorage)
    displayPopupConfirmation(product)
}

function renderProduct(product){

    return `
    <div id="camera">
        <div id="item-link" href="produit.html">
            <img id="item-image" src=${product.imageUrl}>
            <div class="camera-name-description">
                <form>
                    <label for="optic-choice"></label>
                    <select id="optic-choose" name="optic-choose">
                        <option value= "number" id="optic1">${product.lenses[0]}</option>
                        <option value= "number" id="optic2">${product.lenses[1]}</option>
                    </select>
                </form>
                <p id="name">${product.name}</p>
                <p id="description">${product.description}</p>
                <p id="price">${convertMoney(product.price)}</p>
            </div>
        </div>
        <button id="button">Ajouter au panier</button>
    </div>`
}


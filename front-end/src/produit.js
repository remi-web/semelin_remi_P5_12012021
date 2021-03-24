
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

caddyDisplay()

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
function getProductId(){
    if(!localStorage.getItem("idProduitSelect")){
        alert ("vous n'avez sélectionné aucun produit")
    }
    return JSON.parse(localStorage.getItem("idProduitSelect"))
}
function popupConfirmation(product){
    
    if (window.confirm(`${product.name} a bien été ajouté au panier
            Aller au panier OK ou revenir à l'acceuil ANNULER`)) {
                window.location.href = " ../html/panier.html";
    } 
    else{
        window.location.href = "../index.html";
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
    popupConfirmation(product)
}
//-------requete et affichage des items via api localhost----//
fetch( "http://localhost:3000/api/cameras/")
        .then ((response) => {
            return response.json()
            
        })
        .then ((products) => {
            products.forEach(product => {
                document.querySelector("main").innerHTML += renderProducts(product)
            })
            setProductId(products)

        })
        .catch ((err) => {
            console.log(err);
            }
        )
       
displayProductsQantity()
 
function renderProducts(product){

        return `
        <div class="camera-link">
            <div class="camera">
                <a class="item-link" href="html/produit.html">
                    <img class="image"src=${product.imageUrl}>
                    <div class="camera-name-description">
                        <p class="name">${product.name}</p>
                        <p class="description">${product.description}</p>
                    </div>
                    <p class="price">${money(product.price)}</p>
                </a>
            </div>
        </div>
        `
}
function setProductId(products){

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

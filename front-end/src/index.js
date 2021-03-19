//-------requete et affichage des items via api localhost----//
fetch( "http://localhost:3000/api/cameras/")
        .then ((response) => {
            return response.json()
            
        })
        .then ((products) => {
            renderProducts(products)
            setProduitId(products)
        })
            
        .catch ((err) => {
            console.log(err);
            }
        )
         
caddyDisplay()

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
            <a class="item-link" href="html/produit.html">
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

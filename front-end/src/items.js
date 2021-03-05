
//-------requete des items via api localhost----//
var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/cameras");
request.responseType = 'text';
request.send();
request.onload = function() {
    var reponse = request.response
    var cameras = JSON.parse(reponse)
        console.log(cameras)

//-------affichage des items page acceuil------------//
    for (var i = 0; i < cameras.length; i++){
        let camerasItems = document.querySelector("main")
        let newP = document.createElement('div'); newP.className = "camera-link"
        newP.innerHTML =
            `<div class="camera">
                <a class="item-link" href="produit/produit.html">
                    <img class="image"src=${cameras[i].imageUrl}>
                    <div class="camera-name-description">
                        <p class="name">${cameras[i].name}</p>
                        <p class="description">${cameras[i].description}</p>
                    </div>
                    <p class="price">${cameras[i].price / 1000 + "0" + "€"}</p>
                </a>
                </div>`
        camerasItems.appendChild(newP)

//-----------selection de l'id en fonction de l'article cliqué-----//
        let itemLink = document.getElementsByClassName('item-link')
        let produitBackup =[]
        console.log(produitBackup)

        let objId = {
                id: cameras[i]._id,
            }

        let id = []
            if (id.length > 1) {
                id.length = 1;
            }
        
        itemLink[i].addEventListener('click', function(){
            id.splice(0, 1)
            id.push(objId.id)
            localStorage.setItem("idProduitSelect", JSON.stringify(id))
            console.log(localStorage)
        })        
    }
}

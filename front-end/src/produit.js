
let idP = 0
//--------requete pour récupérer l'article cliqué par son ID--------//
let idBackup = JSON.parse(localStorage.getItem("idProduitSelect"))

const promise = fetch( "http://localhost:3000/api/cameras/" + idBackup)
        .then ((response) => {
            console.log(response)
            const produitSelect = response.json()
            produitSelect.then((pS) =>{
                let insertHtml = document.querySelector('main')
                let itemSelect = document.createElement('div')  
                itemSelect.innerHTML = 
                    `<div id="camera">
                        <form>
                            <label for="optic-choice"></label>
                                <select id="optic-choose" name="optic-choose">
                                    <option value= "number" id="optic1">${pS.lenses[0]}</option>
                                    <option vale= "number" id="optic2">${pS.lenses[1]}</option>
                                </select>
                        </form>
                        <a class="item-link" href="produit.html">
                            <img id="image" src=${pS.imageUrl}>
                            <div class="camera-name-description">
                                <p id="name">${pS.name}</p>
                                <p id="description">${pS.description}</p>
                                <p id="price">${pS.price / 1000 + "0" + "€"}</p>
                            </div>
                        </a>
                        <button id="button">Ajouter au panier</button>
                    </div>`
                insertHtml.appendChild(itemSelect)
     

//-----------ajout au panier-------------------//
                let addPanier =  document.getElementById("button")
                    addPanier.addEventListener('click', function(){
                        let panier = {
                        name: pS.name, 
                        description: pS.description,
                        price: pS.price,
                        image: pS.imageUrl,
                        id: pS._id
                    }

                    let idPanierStorage = panier.id

                    let produitLocalStorage = JSON.parse(localStorage.getItem("produit"))
                    console.log(produitLocalStorage)

                    //--------fonction popup----------//
                    const popupConfirmation = () => {
                        if(window.confirm(`${ name.textContent} a bien été ajouté au panier
                            Aller au panier OK ou revenir à l'acceuil ANNULER`)){
                            window.location.href = " ../panier/panier.html"
                        }else{
                            window.location.href = "../index.html"
                        }
                    }
                
                    if(produitLocalStorage){
                        console.log(Boolean(produitLocalStorage))
                        produitLocalStorage.push(panier);
                        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                        popupConfirmation()
                    }
                    else{
                        produitLocalStorage=[];
                        produitLocalStorage.push(panier)
                        localStorage.setItem("produit", JSON.stringify(produitLocalStorage))
                        popupConfirmation()

                    }  
                })
            })
         })
        .catch ((err) => {
        console.log(err);
    }
) 


console.log(localStorage)

//---------variable page produit------------------//
let nameP = document.getElementById("name")
let descriptionP = document.getElementById("description")
let priceP = document.getElementById("price")
let imageP = document.getElementById("image")
let lense1P = document.getElementById("optic1")
let lense2P = document.getElementById("optic2")
let pricePNum = 0
let idP = 0
//--------requete pour récupérer l'article cliqué par son ID--------//
let idBackup = JSON.parse(localStorage.getItem("idProduitSelect"))

const promise = fetch( "http://localhost:3000/api/cameras/" + idBackup)
    promise
        .then ((response) => {
            console.log(response)
            const produitSelect = response.json()
            produitSelect.then((pS) =>{
                console.log(pS)
                nameP.textContent = pS.name
                lense1P.textContent = pS.lenses[0]
                lense2P.textContent = pS.lenses[1]
                descriptionP.textContent= pS.description
                pricePNum = pS.price / 1000
                priceP.textContent = pricePNum + "0" + " €"
                var url = pS.imageUrl
                imageP.src = url
                idP = pS._id
            })

        })
        .catch ((err) => {
            console.log(err);
        })   

//var option = document.getElementById("optic-choose")
//const opticChoice = option.text
//var text = list.options[list.selectedIndex]
//console.log(opticChoice)
let addPanier =  document.getElementById("button")

//-----------ajout au panier-------------------//
addPanier.addEventListener('click', function(){
event.preventDefault()

    let panier = {
        nom: nameP.textContent, 
        description: descriptionP.textContent,
        price: pricePNum,
        image: imageP.src,
        id: idP
        //lense: text
         
    };
    let idPanierStorage = panier.id
    console.log(idPanierStorage)

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
        console.log(produitLocalStorage);
        popupConfirmation()
    }
    else{
        produitLocalStorage=[];
        produitLocalStorage.push(panier)
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage))
        console.log(produitLocalStorage)
        popupConfirmation()

    }
    
})
console.log(localStorage)

//---------récupération de l'objet envoyé ds le localstorage au clic du boutton------//localStorage.clear()
let backup = JSON.parse(localStorage.getItem("produit"))
console.log(backup)


//-------création des nouveaux éléments dans le DOM------------//
let panierItem = []

for (var i = 0; i < backup.length ; i++){
    //----création de section dans main--------//
    let m = document.querySelector('main');
    let s = document.createElement('section'); s.className = "item-link";
    m.appendChild(s);

    //-------------création des paragraphes-----//
    let newProduitName = document.createElement("p"); newProduitName.className = "name";
    let newProduitDescription = document.createElement("p"); newProduitDescription.className = "description"
    let newProduitPrice = document.createElement("p"); newProduitPrice.className = "price"
    let newProduitImage = document.createElement("img"); newProduitImage.className = "image"
    let newProduitLense = document.createElement("p"); newProduitLense.className = "lense"
    let buttonDelete = document.createElement("button"); buttonDelete.className = "button-delete"

    panierItem.push(backup[i])
    //-------------modification des textes------//

    newProduitName.textContent = panierItem[i].nom
    newProduitDescription.textContent = panierItem[i].description
    newProduitPrice.textContent = panierItem[i].price + "0" + " €"
    newProduitImage.src = panierItem[i].image
    newProduitLense.textContent = panierItem.lense
    buttonDelete.textContent = "Retirer "
    //---------insertion des paragraphes dans section----//
    s.appendChild(newProduitImage)  
    s.appendChild(newProduitName)
    s.appendChild(newProduitDescription)
    s.appendChild(newProduitPrice)
    s.appendChild(buttonDelete)
}
//---------------SUPPRESSION d'article-------------------//
//--------envoi de l'id dans un objet puis dans le localStorage au clic via addEventListener et filter -----------//

var buttonDeleteItem = document.getElementsByClassName("button-delete")

for (var i = 0; i < backup.length; i++){
    let objId = {
        id: backup[i].id
    }
        
    let idDelete = []

    buttonDeleteItem[i].addEventListener('click', function(){
        var conf = window.confirm("etes vous sur de voulir supprimer cet article ?")
        
        if(conf = true){
            idDelete.push(objId.id)
            backupFilter = backup.filter((tabF) => tabF.id != idDelete )
            localStorage.setItem("produit", JSON.stringify(backupFilter))
            document.location.reload()
        }
        else {}
        
    })        
}



//------------------ADDITION du total---------------------//

//-----------déclarer la variable-------//
let totalPrice = []
 //------------aller chercher prix dans le panier-------//
 for (var i = 0; i < backup.length; i++){
    let panierPrice = backup[i].price
//---- push des valeur pour les avoir dans un tableau pour pouvoir fair l'opération-----//
    totalPrice.push(panierPrice)
 }
 //--------------addition du total--------------//
const reducer = (accumalator, currentValue) => accumalator + currentValue
const resultTotalPrice = totalPrice.reduce(reducer,0)
 console.log(resultTotalPrice)
 //--------arrondit le résultat à 2 chiffres aorès la virgule------//
 let res = resultTotalPrice.toFixed(2);
 console.log(res)
//----------affichage du résultat dans le DOM---------//
var totalNumber = document.getElementById("total-price-number")
console.log(totalNumber)

totalNumber.textContent = res  + " €"

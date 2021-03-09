//---------récupération de l'objet envoyé ds le localstorage au clic du boutton------//localStorage.clear()
let backup = JSON.parse(localStorage.getItem("produit"))
console.log(backup)

//-------création des nouveaux éléments dans le DOM------------//
let panierItem = []
for (var i = 0; i < backup.length ; i++){
    //----création de section dans main--------//
    let itemPanier = document.querySelector('main');
    let itemClass = document.createElement('section'); itemClass.className = "item-link" 
    itemClass.innerHTML =
        `<img class="image" src=${backup[i].image}>
        <p class="name">${backup[i].name}</p>
        <p class="description">${backup[i].description}</p>
        <p class="price">${backup[i].price / 1000 + "0" + "€"}</p>
        <button class="button-delete">Retirer </button>
    </section>`
    itemPanier.prepend(itemClass)
}
//---------------SUPPRESSION d'article-------------------//
//--------envoi de l'id dans un objet puis dans le localStorage au clic via addEventListener et filter -----------//
backupR = backup.reverse()

var buttonDeleteItem = document.getElementsByClassName("button-delete")

for (var i = 0; i < backup.length; i++){
    let objId = {
        id: backupR[i].id
    }
       
    let idDelete = []

    buttonDeleteItem[i].addEventListener('click', function(){
        var conf = window.confirm("Etes vous sur de vouloir supprimer cet article ?")
        
        if(conf){
            idDelete.push(objId.id)
            backupFilter = backup.filter((tabF) => tabF.id != idDelete )
            console.log(backupFilter)
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
let res = resultTotalPrice.toFixed(2)

//----------affichage du résultat dans le DOM---------//
var totalNumber = document.getElementById("total-price-number")
totalNumber.textContent = res /1000 + "0" + " €"

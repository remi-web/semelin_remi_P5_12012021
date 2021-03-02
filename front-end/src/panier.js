//---------récupération de l'objet envoyé ds le localstorage au clic du boutton------//localStorage.clear()
let backup = JSON.parse(localStorage.getItem("produit"))
console.log(backup)
console.log(backup[0].nom)

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

    panierItem.push(backup[i])
    //-------------modification des textes------//

    newProduitName.textContent = panierItem[i].nom
    newProduitDescription.textContent = panierItem[i].description
    newProduitPrice.textContent = panierItem[i].price 
    newProduitImage.src = panierItem[i].image
    newProduitLense.textContent = panierItem.lense
    //---------insertion des paragraphes dans section----//
    s.appendChild(newProduitImage)  
    s.appendChild(newProduitName)
    s.appendChild(newProduitDescription)
    s.appendChild(newProduitPrice)

}
//------------------addition du total---------------------//


//-----------déclarer la variable-------//
let totalPrice = []
 //------------aller chercher prix dans le panier-------//
 for (var i = 0; i < backup.length; i++){
    let panierPrice = backup[i].price
     //----on push les valeur por les avoir dans un tableau pour pouvoir fair l'opération-----//
    totalPrice.push(panierPrice)
 }
 //--------------addition---------------//
console.log(totalPrice)
const reducer = (accumalator, currentValue) => accumalator + currentValue
console.log(reducer)
const resultTotalPrice = totalPrice.reduce(reducer,0)
 console.log(resultTotalPrice)
var t = parseFloat(parseFloat(totalPrice.reduce(reducer,0)))
console.log(t)


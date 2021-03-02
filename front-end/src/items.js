let name = document.getElementsByClassName("name")
let description = document.getElementsByClassName("description")
let price = document.getElementsByClassName("price")
let image = document.getElementsByClassName("image")
let opticChoose = document.getElementsByClassName("optic")

//-------requete des items via api localhost----//
var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/cameras");
request.responseType = 'text';
request.send();
request.onload = function() {
    var reponse = request.response
    var camera = JSON.parse(reponse)
        console.log(camera)

//-------affichage des items page acceuil------------//
for (var i=0; i<5; i++){
    name[i].textContent = camera[i].name
    description[i].textContent =  camera[i].description
    price[i].textContent = camera[i].price ///1000 + "0" + " euros"
    var url = camera[i].imageUrl
    image[i].src = url
    }

//-----------selection de l'id en fonction de l'article cliqué-----//
let itemLink = document.getElementsByClassName('item-link')
let produitBackup =[]
console.log(produitBackup)

for (var i = 0; i < 5; i++){
    let objId = {
        id: camera[i]._id,
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
//localStorage.clear()
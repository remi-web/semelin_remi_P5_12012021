let name = document.getElementsByClassName("name")
let description = document.getElementsByClassName("description")
let price = document.getElementsByClassName("price")
let image = document.getElementsByClassName("image")
let opticChoose = document.getElementsByClassName("optic")
/*
var request = new XMLHttpRequest();

request.open("GET", "http://localhost:3000/api/cameras");

request.responseType = 'text';
request.send();
*/

request.onload = function() {
    var reponse = request.response
    var camera = JSON.parse(reponse)
    
    console.log(camera)
//-------affichage des items page acceuil------------//
    for (var i=0; i<5; i++){
       
        name[i].textContent = camera[i].name
        description[i].textContent =  camera[i].description
        price[i].textContent = camera[i].price
        var url = camera[i].imageUrl
        image[i].src = url
    }
//--------------remplissage de l'objet au clic sur l' item-------//
    let itemLink = document.getElementsByClassName('item-link')
    console.log(itemLink)
    let nameP = document.getElementById("name")

    for (var i = 0; i < 5; i++){
        let obj = {
            name: camera[i].name,
            description: camera[i].description,
            price: camera[i].price,
            photo: camera[i].imageUrl,
            lense1: camera[i].lenses[0],
            lense2: camera[i].lenses[1]
        }
        itemLink[i].addEventListener('click', function(){
            //event.preventDefault()
            localStorage.setItem("panierBackup",JSON.stringify(obj))
            console.log(localStorage)
        })
    }

} 
      

      
      
      
      
      
      /*
  
    
    maDiv[1].addEventListener('click', function(){
        //event.preventDefault()
        localStorage.setItem ("des", camera[1].description)
        localStorage.setItem ("name", camera[1].name)    
        localStorage.setItem ("price", camera[1].price)
        localStorage.setItem ("image", camera[1].imageUrl)
        console.log(localStorage)
        }) 
        */  
    

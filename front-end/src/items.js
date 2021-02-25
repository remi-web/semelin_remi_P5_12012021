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

    for (var i=0; i<5; i++){
       
        name[i].textContent = camera[i].name
        description[i].textContent =  camera[i].description
        price[i].textContent = camera[i].price
        var url = camera[i].imageUrl
        image[i].src = url
        //image[i].style.height = "50px"
        //image[i].style.width = "50px"
    }
    
    let maDiv = document.getElementsByClassName('item-link')
    console.log(maDiv)

    maDiv[0].addEventListener('click', function(){
        //event.preventDefault()
        localStorage.setItem ("des", camera[0].description)
        localStorage.setItem ("name", camera[0].name)    
        localStorage.setItem ("price", camera[0].price)
        localStorage.setItem ("image", camera[0].imageUrl)
    })
    maDiv[1].addEventListener('click', function(){
        //event.preventDefault()
        localStorage.setItem ("des", camera[1].description)
        localStorage.setItem ("name", camera[1].name)    
        localStorage.setItem ("price", camera[1].price)
        localStorage.setItem ("image", camera[1].imageUrl)
        console.log(localStorage)
        })   
    }
//localStorage.clear()
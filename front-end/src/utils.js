function getItemProducts(){
    return JSON.parse(localStorage.getItem("products"))
}
function caddyDisplay(){
    let articleNumber = document.getElementById("article-number")

    if ((getItemProducts()).length > 0){
       articleNumber.textContent = (getItemProducts()).length
    }
    else{
        articleNumber.textContent = ""
    }
}
function money(price){
    return price / 1000 + "0"+ "€"
}
function setItemProducts(productsStorage){
    localStorage.setItem("products",JSON.stringify(productsStorage))
}

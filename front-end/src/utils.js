function getItemProducts(){
    return JSON.parse(localStorage.getItem("products"))
}
function displayProductsQantity(){
    
    let articleNumber = document.getElementById("article-number")

    if (getItemProducts() && (getItemProducts()).length > 0){
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
function emptyCaddy(){
    localStorage.clear()
    document.location.reload()
}

//--------requete et affichage de l'article cliqué par son ID--------//

var r = fetch( "http://localhost:3000/api/cameras/" + getProductId())
        .then ((response) => {
            return response.json()
            
        })
        .then ((product) => {
            displayProduct(product)
            addProductIncart(product)

        })
            
        .catch ((err) => {
            console.log(err);
            }
        )
caddyDisplay()


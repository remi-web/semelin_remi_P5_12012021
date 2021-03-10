//-------requete et affichage des items via api localhost----//
fetch( "http://localhost:3000/api/cameras/")
        .then ((response) => {
            return response.json()
            
        })
        .then ((products) => {
            renderProducts(products)
            setProduitId(products)
        })
            
        .catch ((err) => {
            console.log(err);
            }
        )
         
caddyDisplay()

 
 let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`

   
    fetch(url)
        // Le da formato a la informacion de la API
        .then(res => res.json())
        // Procesar los datos
        .then( dat=>
        {

            console.log(dat)
            let html = ``
            for (const datos of dat.drinks){
                console.log(datos)
                html +=
                     ` <div class="col-4 border" "card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${datos.strDrinkThumb}" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"> 
                                            ${datos.strCategory}                                           
                                        </h5>
                                        <p class="card-text">
                                            ${datos.strInstructions}                                                                                        
                                        </p>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                              ${datos.strIngredient1}                                             
                                            </small>
                                        </p>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                              ${datos.strIngredient2}                                             
                                            </small>
                                            <p class="card-text">
                                            <small class="text-body-secondary">
                                              ${datos.strIngredient3}                                             
                                            </small>
                                        </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>`
                       

                 document.getElementById("charContent").innerHTML = html
            }
        })






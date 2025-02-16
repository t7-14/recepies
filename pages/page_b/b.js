let id = new URLSearchParams(window.location.search).get("id");
let productContainer = document.querySelector("#opskrift_sektion");

// fetch henter data fra databasen (api'et)
fetch(`https://dummyjson.com/recipes/${id}`)
  // konventerer til en gyldig json fil - så filen kan arbejdes med
  .then((response) => response.json())
  //   arbejder med dataerne,
  .then((data) => {
    // generér ingredienser-listen dynamisk
    let ingredientsList = data.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");

    // generér instruktioner-listen dynamisk
    let instructionsList = data.instructions.map((instruction) => `<li>${instruction}</li>`).join("");

    // generér tags-listen dynamisk
    let tagsList = data.tags.map((tags) => `<li>${tags}</li>`).join("");

    // ` bruges, i stedet for gåseøjne, til at beskrive hvad der skal indsættes
    productContainer.innerHTML = `
     <h1>${data.name}</h1>
        <div class="grid_opskrift">
          <article class="opdel">
            <div class="info_1">
              <div>
                <p>Prep time:</p>
                <p>${data.prepTimeMinutes}m</p>
              </div>
              <div>
                <p>Cook time:</p>
                <p>${data.cookTimeMinutes}m</p>
              </div>
              <div>
                <p>Servings:</p>
                <p>${data.servings}</p>
              </div>
              <div>
                <p>Calories:</p>
                <p>${data.caloriesPerServing}</p>
            </div>
          </div>
            <div class="info_2">
              <h3>Ingredients:</h3>
              <ol>
              ${ingredientsList}
              </ol>
            </div>
            <div class="instructions">
              <h3>Instructions:</h3>
            <ul>
            ${instructionsList} 
            </ul>
            </div>
          </article>
          <article class="opdel img_info">
<img src="https://cdn.dummyjson.com/recipe-images/${data.id}.webp" alt="Food" class="info_img">
<div class="red_line2"></div>
            <div class="info_3">
              <div>
                <p>Ratings:</p>
                <p>${data.rating} ★</p>
              </div>
              <div>
                <p>Reviews:</p>
                <p>${data.reviewCount}</p>
              </div>
              <div>
                <p>Servings:</p>
                <p>${data.servings}</p>
              </div>
              <div>
                <p>Tags:</p>
                <ul>
                ${tagsList}
                </ul>
              </div>
            </div>
          </article>
        </div>
    `;
  });

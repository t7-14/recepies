let listContainer = document.querySelector(".grid_1-1-1-1");
const recipe_list = new URLSearchParams(window.location.search).get("recipes");

fetch("https://dummyjson.com/recipes?limit=50")
  .then((res) => res.json())
  .then((data) => showList(data.recipes));

function showList(data) {
  const markup = data
    .map(
      (recipe) =>
        `  <article>
            <a href="/pages/page_b/b.html?id=${recipe.id}">
              <img src="${recipe.image}" alt="" />
              <h4>${recipe.name}</h4>
              <div class="stats">
                <h5 class="mealtype"><em>Mealtype:</em> <strong>${recipe.mealType}</strong></h5>
                <h5 class="${recipe.difficulty}"><strong>${recipe.difficulty}</strong></h5>
              </div>
            </a>
          </article>`
    )
    .join("");
  console.log("markup");
  listContainer.innerHTML = markup;
}

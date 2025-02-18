let listContainer = document.querySelector(".grid_1-1-1-1");
const urlParams = new URLSearchParams(window.location.search);
const selectedDifficulty = urlParams.get("difficulty") || "easy";


fetchRecipes(selectedDifficulty);


const difficultySelector = document.getElementById("difficulty-selector");

difficultySelector.addEventListener("change", (event) => {
  let selectedDifficulty = event.target.value;
  // Update URL without reloading the page
  const url = new URL(window.location.href);
  url.searchParams.set("difficulty", selectedDifficulty);
  window.history.pushState({}, "", url); // Update URL without reloading
  fetchRecipes(selectedDifficulty);
});


function fetchRecipes(difficulty) {
  fetch(`https://dummyjson.com/recipes?limit=50&difficulty=${difficulty}`)
    .then((res) => res.json())
    .then((data) => showList(data.recipes));
}


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
  
  listContainer.innerHTML = markup;
}

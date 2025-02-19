let listContainer = document.querySelector(".grid_1-1-1-1");
const search_type = new URLSearchParams(window.location.search).get("search");

fetch(`https://dummyjson.com/recipes/search?q=${search_type}`)
  .then((res) => res.json())
  .then((data) => showList(data.recipes));

function showList(data) {
  const markup = data
    .map(
      (recipe) =>
        `  <article>
            <a href="../page_b/b.html?id=${recipe.id}">
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

const selectCuisine = document.querySelector("#cuisine");
const selectMealType = document.querySelector("#mealType");
selectCuisine.addEventListener("change", filterCuisine);
selectMealType.addEventListener("change", filterMealType);
const url = `https://dummyjson.com/recipes/search?q=${search_type}`;

let allRecipes,
  filteredData,
  cuisine = "All",
  mealType = "All";

function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allRecipes = data.recipes;
      filteredData = allRecipes;
      buildSelects();
      showList(allRecipes);
    });
}

hentData();

function buildSelects() {
  // Først dannes et nyt array med en liste over cuisine (kun en gang hver)
  const uniqueCuisines = Array.from(new Set(allRecipes.map((recipe) => recipe.cuisine)));
  // Herefter dannes en select-liste med de cuisines der findes i det hentede data
  const markup = uniqueCuisines.map((cuisine) => ` <option value="${cuisine}">${cuisine}</option>`).join("");
  selectCuisine.innerHTML += markup;

  // Her dannes en anden select-liste med de mealTypes der findes i det hentede data på samme måde
  const uniqueMTypes = Array.from(new Set(allRecipes.map((recipe) => recipe.mealType[0])));
  const markup2 = uniqueMTypes.map((element) => ` <option value="${element}">${element}</option>`).join("");
  selectMealType.innerHTML += markup2;
}

function filterCuisine(event) {
  // Hvilken cuisine er valgt på select-listen?
  cuisine = event.target.value;
  if (cuisine == "All") {
    filteredData = allRecipes;
  } else {
    // hvis der valgt andet end "All" filtreres data med den valgte cuisine
    filteredData = allRecipes.filter((recipe) => recipe.cuisine == cuisine);
  }
  // Det filtrerede data vises
  showList(filteredData);

  // overskriften rettes så den viser, hvad der er valgt
  h2.textContent = cuisine + " (" + filteredData.length + ")";

  // Når opskrifterne er filtreret dannes en ny liste med kun de mealTypes der findes i det filtrerede data:
  const uniqueMTypes = Array.from(new Set(filteredData.map((recipe) => recipe.mealType[0])));
  const markup = uniqueMTypes.map((element) => `<option value="${element}">${element}</option>`).join("");
  selectMealType.innerHTML = '<option value="All">All</option>' + markup;
}

function filterMealType(event) {
  // Hvilken mealType er valgt på select-listen?
  mealType = event.target.value;
  if (mealType == "All") {
    showList(filteredData);
  } else {
    // Her filtreres det allerede filtrerede data efter den valgte mealType
    const filteredMealtypeData = filteredData.filter((recipe) => recipe.mealType.includes(mealType));
    // Det filtrerede data vises
    showList(filteredMealtypeData);

    // overskriften rettes så den viser, hvad der er valgt. Med .length vises antallet af opskrifter på den aktuelle liste
    h2.textContent = cuisine + " / " + mealType + "  (" + filteredMealtypeData.length + ")";
  }
}

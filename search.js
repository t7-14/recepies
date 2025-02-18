// Eventlistener lytter på klik af searchLink
document.getElementById("searchLink").addEventListener("click", function (event) {
  // Finder input-elementet med id="searchInput"
  // Henter .value, som er teksten fra brugeren og sletter mellemrum før og efter med trim
  var searchValue = document.getElementById("searchInput").value.trim();

  if (searchValue) {
    // Find den aktuelle href (uden domæne)
    var baseHref = new URL(this.getAttribute("href"), window.location.origin).pathname;

    // Opdater href dynamisk med søgeparameteren
    this.href = baseHref + "?search=" + encodeURIComponent(searchValue);
  } else {
    event.preventDefault(); // Stop navigation hvis input er tomt
  }
});

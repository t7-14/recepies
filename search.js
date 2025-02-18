document.getElementById("searchLink").addEventListener("click", function (event) {
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

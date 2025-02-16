// javascript for knap til at tilføje display: none på .kommentar og display: block på .tak
document.getElementById("send").addEventListener("click", function () {
  document.querySelector(".kommentar").style.display = "none";
  document.querySelector(".tak").style.display = "block";
});

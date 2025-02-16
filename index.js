// scroll effekt på header
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let logo = document.querySelector(".logo img");

  // da der ikke skal være scroll effekt på mobilversion, er der tilføjet en window.matchMedia, ligsom vi kender media screen i css
  if (window.matchMedia("(min-width: 700px)").matches) {
    // når man scroller over 3px ned så ændre værdierne sig i headers højde og logoets bredde
    if (window.scrollY > 3) {
      header.style.height = "100px";
      logo.style.width = "250px";
      // hvis der ikke er scrollet over 3px så er værdierne således:
    } else {
      header.style.height = "175px";
      logo.style.width = "400px";
    }
  }
});

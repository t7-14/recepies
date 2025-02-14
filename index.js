window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let logo = document.querySelector(".logo img");

  if (window.matchMedia("(min-width: 700px)").matches) {
    if (window.scrollY > 3) {
      header.style.height = "100px";
      logo.style.width = "250px";
    } else {
      header.style.height = "175px";
      logo.style.width = "400px";
    }
  }
});

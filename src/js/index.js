/*? no js js needed from me */

// Tombol Menu  Pada Index (u/ Menampilkan Fitur Lain)
const btnMenu = document.getElementById("btnMenu");
const nav = document.querySelector(".navigator");
btnMenu.addEventListener("click", () => {
  nav.classList.toggle("showUp");
  console.info("oke");
});

// Filter Villa
const filterVilla = document.querySelectorAll(".filter-villa ul li");
const listVilla = document.querySelectorAll("main .card-rooms");

// destructure filter ville
const [all, premium, medium, large] = filterVilla;

console.info(filterVilla, listVilla);

listVilla.forEach((element) => {
  all.addEventListener("click", () => {
    element.style.display = element.classList.contains("all") ? "grid" : "none";
    all.style.background = "black";
    all.style.color = "white";
    premium.style.background = "transparent";
    premium.style.color = "black";
    medium.style.background = "transparent";
    medium.style.color = "black";
    large.style.background = "transparent";
    large.style.color = "black";
    console.info("all");
  });
  premium.addEventListener("click", () => {
    element.style.display = element.classList.contains("premium")
      ? "grid"
      : "none";
    all.style.background = "transparent";
    all.style.color = "black";
    premium.style.background = "black";
    premium.style.color = "white";
    medium.style.background = "transparent";
    medium.style.color = "black";
    large.style.background = "transparent";
    large.style.color = "black";
    console.info("premium");
  });
  medium.addEventListener("click", () => {
    element.style.display = element.classList.contains("medium")
      ? "grid"
      : "none";
    all.style.background = "transparent";
    all.style.color = "black";
    premium.style.background = "transparent";
    premium.style.color = "black";
    medium.style.background = "black";
    medium.style.color = "white";
    large.style.background = "transparent";
    large.style.color = "black";
    console.info("medium");
  });
  large.addEventListener("click", () => {
    element.style.display = element.classList.contains("large")
      ? "grid"
      : "none";
    all.style.background = "transparent";
    all.style.color = "black";
    premium.style.background = "transparent";
    premium.style.color = "black";
    medium.style.background = "transparent";
    medium.style.color = "black";
    large.style.background = "black";
    large.style.color = "white";
    console.info("large");
  });
});

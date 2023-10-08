/*? no js js needed from me */

// Timbol Menu  Pada Index (u/ Menampilkan Fitur Lain)
const btnMenu = document.getElementById("btnMenu");
const nav = document.querySelector(".navigator");
console.info(nav);
btnMenu.addEventListener("click", () => {
  nav.classList.toggle("showUp");
  console.info("oke");
});


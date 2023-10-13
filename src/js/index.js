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

function filter() {
  for (let i = 0; i < filterVilla.length; i++) {
    filterVilla[i].classList.toggle("active");
  }
}

filterVilla[0].addEventListener("click", () => {
  filter();
});

// slider detail villa
const imgPreview = document.querySelector(".img-preview");
const slider = document.querySelector(".slider");
const sliderPhoto = document.querySelectorAll(".slider .slider-photo");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const closeBtn = document.getElementById("close");
imgPreview.addEventListener("click", () => {
  slider.classList.add("popUp");
  setTimeout(() => {
    sliderPhoto.forEach((element) => {
      element.style.transform = "scale(1)";
    });
  }, 500);
});
closeBtn.addEventListener("click", () => {
  slider.classList.remove("popUp");
});

let count = 0;
console.info(count);
const size = sliderPhoto[0].clientWidth;

function caraousel() {
  sliderPhoto.forEach((element) => {
    element.style.transform = "translateX(" + -size * count + "px)";
  });
}

nextBtn.addEventListener("click", () => {
  count++;
  console.info(count);
  caraousel();
  if (count == 1) {
    prevBtn.disabled = false;
    prevBtn.style.color = "#fff";
  } else if (count == sliderPhoto.length - 1) {
    nextBtn.disabled = true;
    nextBtn.style.color = "#898989";
  }
});

prevBtn.addEventListener("click", () => {
  count--;
  console.info(count);
  caraousel();
  if (count == 0) {
    prevBtn.disabled = true;
    prevBtn.style.color = "#898989";
  } else if (sliderPhoto.length - 1) {
    nextBtn.disabled = false;
    nextBtn.style.color = "#fff";
  }
});

// Villa Erni
{
   const villaErniPriceWd = document.querySelector("#erni .price-wd");
   const villaErniPriceWe = document.querySelector("#erni .price-we");
   const villaErni = new hargaModal();
   villaErni.basicPrice = 1000000;
   villaErni.percentWd = 1.66;
   villaErni.percentWe = 2.9;
   let priceShowWd = villaErni.priceWd();
   let priceShowWe = villaErni.priceWe();
 
   // Tampilan di halaman beranda
   villaErniPriceWd.innerHTML = priceShowWd.toLocaleString("id-ID");
   villaErniPriceWe.innerHTML = priceShowWe.toLocaleString("id-ID");
   let minDp = priceShowWd / 2;
   console.info(priceShowWd, priceShowWe);
   // dp.value = minDp.toLocaleString("id-ID");
 }
 
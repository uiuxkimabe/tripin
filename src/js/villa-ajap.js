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


// Villa Ajap
{
  const villaAjapPriceWd = document.querySelector("#ajap .price-wd");
  const villaAjapPriceWe = document.querySelector("#ajap .price-we");
  const villaAjap = new hargaModal();
  villaAjap.basicPrice = 1500000;
  villaAjap.percentWd = 1.66;
  villaAjap.percentWe = 2;
  let priceShowWd = villaAjap.priceWd();
  let priceShowWe = villaAjap.priceWe();

  // Tampilan di halaman beranda
  villaAjapPriceWd.innerHTML = priceShowWd.toLocaleString("id-ID");
  villaAjapPriceWe.innerHTML = priceShowWe.toLocaleString("id-ID");
  let minDp = priceShowWd / 2;
  console.info(priceShowWd, priceShowWe);
  // dp.value = minDp.toLocaleString("id-ID");
}

 
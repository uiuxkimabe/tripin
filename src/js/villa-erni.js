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

// pick booking
const date = document.querySelectorAll(".date");
const nights = document.querySelector(".downpayment #night .days");
const total = document.querySelector(".totalPayment #total");
function pickBook() {
  let ci = new Date(date[0].value).getDate();
  let co = new Date(date[1].value).getDate();
  let dayCi = new Date(date[0].value).getDay();
  let dayCo = new Date(date[1].value).getDay();
  console.info(dayCi, dayCo);
  let result = co - ci;
  let totalPayment;
  if (dayCi == 5 || dayCi == 6 || dayCi == 0) {
    totalPayment = priceShowWe * result;
  } else {
    totalPayment = priceShowWd * result;
  }
  total.innerHTML = totalPayment.toLocaleString("id-ID");
  nights.value = result;
  return result;
}

// Villa Erni

{
  date.forEach((element) => {
    element.addEventListener("change", () => {
      pickBook();
      console.info(pickBook());
    });
  });

  const villaErniPriceWd = document.querySelector("#Erni .price-wd");
  const villaErniPriceWe = document.querySelector("#Erni .price-we");
  const villaErni = new hargaModal();
  villaErni.basicPrice = 1500000;
  villaErni.percentWd = 1.66;
  villaErni.percentWe = 2;
  priceShowWd = villaErni.priceWd();
  priceShowWe = villaErni.priceWe();

  // Tampilan di halaman beranda
  villaErniPriceWd.innerHTML = priceShowWd.toLocaleString("id-ID");
  villaErniPriceWe.innerHTML = priceShowWe.toLocaleString("id-ID");
  console.info(priceShowWd, priceShowWe);
}

// Get bulan dan tanggal
const pickMonth = new Date().getMonth(); // [0-11] (Januari - Desember)
const pickDate = new Date().getDate();
const pickDay = new Date().getDay(); // [0-6] (Minggu - Sabtu)

// Array untuk menyesuaikan index dengan hari dan bulan
let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]; // [0-6]
let months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
]; // [0-11]

// Harga Modal
class hargaModal {
  prPrice; // Harga Modal Premium
  mdPrice; // Harga Modal Medium
  lgPrice; // Harga Modal Large
  percent; // Percentase Margin
  feeGuide = 150000; // fee untuk guider
  //   Method Premium Villa
  premiumWd() {
    let total = this.prPrice * this.percent + this.feeGuide;
    return total;
  }
}

// Villa Ajap
{
  const villaAjapPrice = document.querySelector(".ajap .price");
  const villaAjap = new hargaModal();
  villaAjap.prPrice = 1500000;
  villaAjap.percent = 1.66;
  let priceShow = villaAjap.premiumWd();
  villaAjapPrice.innerHTML = priceShow.toLocaleString("id-ID");
  console.info(villaAjap.premiumWd());
}

// Santoria Villa
{
  const santoriaVillaPrice = document.querySelector(".santoria .price");
  const santoriaVilla = new hargaModal();
  santoriaVilla.prPrice = 1500000;
  santoriaVilla.percent = 1.66;
  let priceShow = santoriaVilla.premiumWd();
  santoriaVillaPrice.innerHTML = priceShow.toLocaleString("id-ID");
  console.info(santoriaVilla.premiumWd());
}

// Konoha Villa
{
  const konohaVillaPrice = document.querySelector(".konoha .price");
  const konohaVilla = new hargaModal();
  konohaVilla.prPrice = 2000000;
  konohaVilla.percent = 1.66;
  let priceShow = konohaVilla.premiumWd();
  konohaVillaPrice.innerHTML = priceShow.toLocaleString("id-ID");
  console.info(konohaVilla.premiumWd());
}

// Bukit Indah Villa
{
  const bukitIndahPrice = document.querySelector(".bukitIndah .price");
  const bukitIndah = new hargaModal();
  bukitIndah.prPrice = 6000000;
  bukitIndah.percent = 1;
  let priceShow = bukitIndah.premiumWd();
  bukitIndahPrice.innerHTML = priceShow.toLocaleString("id-ID");
  console.info(bukitIndah.premiumWd());
}

// Kiki Villa
{
  const kikiPrice = document.querySelector(".kiki .price");
  const kiki = new hargaModal();
  kiki.prPrice = 3000000;
  kiki.percent = 1;
  let priceShow = kiki.premiumWd();
  kikiPrice.innerHTML = priceShow.toLocaleString("id-ID");
  console.info(kiki.premiumWd());
}

// Cindy Villa
{
  const cindyPrice = document.querySelector(".cindy .price");
  const cindy = new hargaModal();
  cindy.prPrice = 3000000;
  cindy.percent = 1;
  let priceShow = cindy.premiumWd();
  cindyPrice.innerHTML = priceShow.toLocaleString("id-ID");
  console.info(cindy.premiumWd());
}

// Arif Villa
{
  const arifPrice = document.querySelector(".arif .price");
  const arif = new hargaModal();
  arif.prPrice = 3000000;
  arif.percent = 1;
  let priceShow = arif.premiumWd();
  arifPrice.innerHTML = priceShow.toLocaleString("id-ID");
  console.info(arif.premiumWd());
}

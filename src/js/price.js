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

// const btn wa
const bookNow = document.querySelector(".bookNow");
const nama = document.getElementById("nama");
const pax = document.getElementById("pax");
const cekin = document.getElementById("cekin");
const cekout = document.getElementById("cekout");
const phone = document.getElementById("phone");
const bukti = document.getElementById("bukti");
const add = document.getElementById("add");

function msg() {
  const url =
    "https://wa.me/081385532791?text=Selamat%20Datang%20di%20Trippin%20!!%0AKami%20Akan%20Mengkonfirmasi%20Pesanan%20Villa%20Anda%20Sebagai%20Berikut%20%3A%0ANama%20%3A%20*" +
    nama.textContent +
    "*%0AJumlah%20Pax%20%3A%20*" +
    pax.textContent +
    "*%0ACheck%20In%20%3A%20*" +
    cekin.textContent +
    "*%0ACheck%20Out%20%3A%20*" +
    cekout.textContent +
    "*%0APhone%20%3A%20*" +
    phone.textContent +
    "*%0ABukti%20Tf%20%3A%20*tf*%0APesan%20Tambahan%20%3A%20*" +
    add.textContent +
    "%20msg*";

  window.open(url);
}

bookNow.addEventListener("click", () => {
  msg();
});

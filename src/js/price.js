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
  basicPrice; // Harga Modal
  percentWd; // Percentase Margin u/ Weekday
  percentWe; // Percentase Margin u/ Weekend
  feeGuide = 150000; // fee untuk guider
  //   Method Premium Villa
  priceWd() {
    let total = this.basicPrice * this.percentWd + this.feeGuide;
    return total;
  }
  priceWe() {
    let total = this.basicPrice * this.percentWe + this.feeGuide;
    return total;
  }
}

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
  console.info(priceShowWd, priceShowWe);
}

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
  console.info(priceShowWd, priceShowWe);
}

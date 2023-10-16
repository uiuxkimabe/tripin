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
  deposite() {
    let minDeposite = this.prPrice / 2;
    return minDeposite;
  }
}

const dp = document.querySelector(".downpayment .deposite");

// Villa Ajap
{
  const villaAjapPrice = document.querySelector(".ajap .price");
  const villaAjap = new hargaModal();
  villaAjap.prPrice = 1500000;
  villaAjap.percent = 1.66;
  let priceShow = villaAjap.premiumWd();
  villaAjapPrice.innerHTML = priceShow.toLocaleString("id-ID");
  let minDp = priceShow / 2;
  dp.value = minDp.toLocaleString("id-ID");
  console.info(priceShow, minDp);
}

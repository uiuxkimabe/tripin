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
  deposite() {
    let minDeposite = this.basicPrice / 2;
    return minDeposite;
  }
}

const dp = document.querySelector(".downpayment .deposite");

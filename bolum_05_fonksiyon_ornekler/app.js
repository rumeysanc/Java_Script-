// ornek 1
const bilgiVer = (ad, soyad, dogum) => {
  const bilgi = `Adim: ${ad}, Soyadim: ${soyad} ve yasim ${2021 - dogum}`;
  return bilgi;
};
console.log(bilgiVer("hafsa", "Sultan", 2016));

// 2. yol
const bilgiVer2 = (ad, soyAd, dogum) => {
  console.log(`Adiniz ${ad} soyAd ${soyAd}  dogum ${2021 - dogum}`);
};
console.log(bilgiVer2("Ali", "Can", 1990));

// ==============================
// * ornek : silindirin hacmini hesaplayan bir fonk yaziniz
const r = prompt("yaricapi giriniz");
const h = prompt("yukseklik girinz");
const hacimHesapla = (r, h) => Math.PI * r * r * h;
console.log("Silindirin hacmi: " + hacimHesapla(r, h));

// * en yakin sayiya yuvarlar
console.log("Silindirin hacmi: " + Math.round(hacimHesapla(r, h)));

// *virgulden sonra 2 basamak alir
console.log("Silindirin hacmi: " + hacimHesapla(r, h).toFixed(2));

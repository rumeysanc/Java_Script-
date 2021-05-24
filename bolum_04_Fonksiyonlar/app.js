// * ============================================================================
// *                   FONKSIYONLAR
// * ===========================================================================

// ? 1. YONTEM: FUNCTION DECLARATION
// Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.

function yazdir() {
  console.log("Ahmet");
}
yazdir(); // fonks. cagirma kolu

// parametreli fonksiyon
function yazdirad(ad, yas) {
  console.log(`Adiniz ${ad} yasiniz ${yas}`);
}
yazdirad("Mustafa", 23); //call | invoke
yazdir("john", 29); //call | invoke

// parametreli donus degerli fonks

function yasHesapla(dogmTarihi) {
  return 2021 - dogmTarihi;
}
console.log(`yasiniz: ${yasHesapla(1991)}`);

const yas = yasHesapla(2016);
console.log(`yasiniz: ${yas}`);

alert(`yasiniz: ${yasHesapla(1992)}`);

// =====================================
// klavyeden girilen sayini tek mi cift mi oldugunu yazdiralim
function tekMiCiftMi(sayi) {
  return sayi % 2 == 0 ? "cift" : "tek";
}
const sayi = prompt("bir sayi giriniz");
console.log(`${sayi} ${tekMiCiftMi(sayi)} sayidir.`);

// ikinci yol
const sayi1 = prompt("bir sayi giriniz");
function tekMiCiftMi2(sayi1) {
  const sonuc = sayi1 % 2 == 0 ? `${sayi1} Cifttir` : `${sayi1} Tektir`;
  return sonuc;
}
console.log(tekMiCiftMi2(sayi1));
// =========================================================

// ? 2. Yontem FUNCTION EXPRESSION

// ? Function expression yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olacak sekilde//serbest degildir. Bu yontemde  Mutlaka cagrilmasi sonraya birakilmalidir.

//  ORNEK 1
const tekCift = function (sayi1) {
  return sayi1 % 2 == 0 ? "Cift" : "Tek";
};
console.log(tekCift(5));

// ORNEK 2
// VERILEN IKI AYIDAN BUYUGUNU BULMA

const buyukBul = function (sayi1, sayi2, sayi3) {
  let max;
  if (sayi1 > sayi2 && sayi1 > sayi3) {
    max = sayi1;
  } else if (sayi2 > sayi1 && sayi2 > sayi3) {
    max = sayi2;
  } else {
    max = z;
  }
  return max;
};

console.log("buyuk sayi1: " + buyukBul(8, 3, 5));

// ======================
const buyukBul2 = function (x, y, z) {
  return Math.max(x, y, z);
};
console.log("buyuk sayi2: " + buyukBul2(5, 18, 1));
//  ================================
const big = function (s1, s2, s3) {
  let sonuc = s1 > s2 ? (s1 > s3 ? s1 : s3) : s2 > s3 ? s2 : s3;
  return sonuc;
};
console.log("buyuk sayi3: " + big(6, 25, 54));
// ===============================================
// ?        3. YONTEM :   ARROW (OK) FONKSIYONLARI

const topla = (a, b) => a + b;
console.log("toplami: " + topla(5, 8)); //invoke
console.log("toplami: " + topla(56, 4));

const ciftMi = (sayi5) => (sayi5 % 2 == 0 ? "çift" : "tek");
console.log(ciftMi(5));
console.log(ciftMi(2));
// ==============================================
// ornek ust alma
const taban = prompt("taban giriniz: ");
const us = prompt("us giriniz: ");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));
// ==========================
// ornek : menu
// ok fonksiyonunda  birden fazla ifadevar ise fonksiyonda susulu parantez kullanmaliyiz
const menu = () => {
  console.log("==============================================");
  console.log("                  JavaScript Dersi            ");
  console.log("===============================================");
};
menu();

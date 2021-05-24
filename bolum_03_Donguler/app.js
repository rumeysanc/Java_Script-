// for dongusu
// java daki ie aynidir
//burada i nin degiskeni let olmali

for (let i = 1; i <= 10; i++) {
  console.log(` ${i} -> mehmet`);
}
// =============

const sayi = prompt("Dongu miktarini giriniz");
for (let i = 1; i <= sayi; i++) {
  console.log(` ${i} -> hafsa`);
}
// =====================
// bir sayinin asalligini nasil bulabiliriz
const number = Number(prompt("sayiyi giriniz: "));
let asal = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }
}
const sonuc = asal ? "Asal" : "Asal Degil";
console.log(sonuc);

// =====================================
// do while ornegi
let not;
do {
  not = prompt("0-100 arasında bir not giriniz:");
} while (not < 0 || not > 100);
console.log("Giridiğiniz not 0-100 arasındadır");

// while ornegi

let not1;
not1 = prompt("0-100 arasinda birnot giriniz: ");

while (not1 < 0 || not1 > 100) {
  console.error("girdiginiz not 0-100 arasinda olmalidir.");
  not1 = prompt("0-100 arasinda bir not giriniz: ");
}
console.log("girdiginiz not 0-100 arasindadir");

// =============================================================
// ornek klavyeden q karakteri girilene kadar not girisi yapan bir programi dongu kullanarak yaziniz
let not2;
i = 1;
while (true) {
  not2 = prompt(i + ". kisinin notunu giriniz: ");
  not2 = not2.toLowerCase();

  if (not2 == "q") {
    break;
  }
  console.log(i + ". kisinin" + " notu: " + Number(not2));
  i++;
}

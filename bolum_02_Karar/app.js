const s1 = Number(prompt("Birinci sayi: "));
const islem = prompt("islem giriniz");
const s2 = +prompt("ikinci sayi: ");
let sonuc = 0;

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
} else {
  alert("yanlis islem yaptiniz.");
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
// ==============================================

// ternary if

const age = prompt("yasinizi giriniz: ");
const healt = prompt("saglikli misiniz y/n");

const result = age > 18 && healt == "y" ? "Askere Gidebilir" : "Askere Gidemez";
console.log(result);
alert(result);

// =====================================
// ternar ornek
/*zam orani 
0-5 %10 
6-10 %20
11- %50
*/
const maas = prompt("Maasinizi giriniz: ");
const calismaSuresi = prompt("Calisma surenizi giriniz: ");

const zamlımaas =
  calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
console.log(zamlımaas);

// ======================
// ornek 3
const borc = 0;
const maas = 3000;
console.log(
  !borç && maaş > 2825.9 ? "Kredi Alabilir :🤑:" : "Kredi Alamaz :😖:"
);

// Swtich - case
const gunNo = Number(prompt("Gun numarasini giriniz: "));
switch (gunNo) {
  case 1:
    gunAdi = "Pazartesi";
    break;
  case 2:
    gunAdi = "Salı";
    break;
  case 3:
    gunAdi = "Çarşamba";
    break;
  case 4:
    gunAdi = "Perşembe";
    break;
  case 5:
    gunAdi = "Cuma";
    break;
  case 6:
    gunAdi = "Cumartesi";
    break;
  case 7:
    gunAdi = "Pazar";
    break;
  default:
    alert("Gün 1-7 arasında olmalıdır");
    break;
}
console.log(gunAdi);

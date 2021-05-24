// ** Konsolda mesaj vermek için console.log() fonksiyonu kullanılır.
console.log("Hello javascript");
console.log("Javascript javadan kolay bir dildir..");

// ** console.error() fonksiyonu ile konsola hata olduğunu bildiririz
console.error("Bu bir hatadır.");

// ** console.warn() fonksiyonu ile konsola bir uyarı durumu
// **oluştuğunu yazdırdık.
console.warn("Bu bir uyarıdır");

alert("Dikkat"); // ? Ekrana pop-up mesaj çıkarır.

// ** ======================= DEĞİŞKEN TANIMLAMA ======================

//**  -----  VAR -----
// ? var keyword ile değişken tanımlanabilir.
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

var pi = 3.14;
console.log(pi);
console.log(typeof pi); // ? Number

pi = "3";
console.log(pi);
console.log(typeof pi); // ? String

pi = true;
console.log(pi);
console.log(typeof pi); // ? Boolean

// ** değişken tanımlama keyword'u kullanılmasa da değişken tanımlanmış oluyor.
isim = "Ahmet";
console.log(isim);
console.log(typeof isim); // ? String

isim = 4;
console.log(isim);
console.log(typeof isim); // ? Number

//**  -----  CONST -----
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).

const piSayisi = 3.14;

console.log(piSayisi);

piSayisi = 3; // ! Hata const değişkene sonradan değer atılamaz.
console.log(piSayisi); // ! Hata const değişkene sonradan değer atılamaz.

//************************ LET ****************************
// ? Eğerki değişkenimİzin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

// String tanımlamak için 3 farklı karakter kullanılabilir.
let isim1 = "Mustafa"; // Çift tırnak
let isim2 = "Ahmet"; // Tek tırnak
let isim3 = `Alican`; // Backtick

console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

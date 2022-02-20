"use strict";

/* Darsga topshiriq:
1) Darsga muvofiq topshiriqning birinchi qismini takrorlang
2) Privat xususiyatlarini tekshiradigan showMyDB funktsiyasini yarating. Agar pozitsiya false turgan
bo'lsa dasturning asosiy ob'ektini konsolga ko'rsatadi
3) writeYourGenres funktsiyasini yarating, unda foydalanuvchi savolga 3 marta javob beradi
"Sizning sevimli janringiz - ${ketma-ket raqam}". Har bir javob ma'lumotlar genres qatoriga yoziladi
P.S. Funksiyalarni chaqirish shart emas */

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
    b = prompt("Unga qancha baho bergan bo'lar edingiz?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalNewsDB.news[a] = b;
    console.log("Tayyor");
  } else {
    console.log("Error");
    i--;
  }
}

console.log(personalNewsDB);

if (personalNewsDB.count < 10) {
  console.log("Juda oz sonli yangiliklar o'qilibdi");
} else if (9 < personalNewsDB.count && personalNewsDB.count < 30) {
  console.log("Siz klassik tomoshabinsiz");
} else if (29 < personalNewsDB.count && personalNewsDB.count <= 40) {
  console.log("Siz yangiliklar ishqibozisiz");
} else {
  console.log("Xato yuz berdi");
}

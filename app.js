'use strict';

/* Darsga topshiriq:
1) Darsga muvofiq topshiriqning birinchi qismini takrorlang
2) Privat xususiyatlarini tekshiradigan showMyDB funktsiyasini yarating. Agar pozitsiya false turgan
bo'lsa dasturning asosiy ob'ektini konsolga ko'rsatadi
3) writeYourGenres funktsiyasini yarating, unda foydalanuvchi savolga 3 marta javob beradi
"Sizning sevimli janringiz - ${ketma-ket raqam}". Har bir javob ma'lumotlar genres qatoriga yoziladi
P.S. Funksiyalarni chaqirish shart emas */

let numberOfNews;

function startProject() {
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

    while (numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
        numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
    }
}
startProject();

const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberNews() {
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
}
rememberNews();

function showPersonalLevel() {
    if (personalNewsDB.count < 10) {
        console.log("Juda oz sonli yangiliklar o'qilibdi");
    } else if (9 < personalNewsDB.count && personalNewsDB.count < 30) {
        console.log("Siz klassik tomoshabinsiz");
    } else if (29 < personalNewsDB.count && personalNewsDB.count <= 40) {
        console.log("Siz yangiliklar ishqibozisiz");
    } else {
        console.log("Xato yuz berdi");
    }
}
showPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalNewsDB);
    }
}
showMyDB(personalNewsDB.privat);

// sikl ichida [i - 1] yozilishiga sabab sikl 1 dan(i = 1) boshlanayapti, natija chiqqanda massivning 0 index bo'sh bo'lib qoladi va 1,2,3 index deb chiqadi
// shuni oldini olish uchun ham [i - 1] deb yozilgan va massiv o indexdan boshlab ishlagan va bo'sh qolmagan
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalNewsDB.genres[i -1] = prompt(`Sizning sevimli janringiz nomeri ${i}`);
    }
}
writeYourGenres();
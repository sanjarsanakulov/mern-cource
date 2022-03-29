"use strict";

/* Darsga topshiriq:
1) Bizda allaqachon alohida funktsiyalardan iborat ishlaydigan dastur mavjud. Buni tasavvur qiling
sizning vazifangiz uni qayta yozishdir, shunda barcha funktsiyalar personalNewsDB ob'ektining uslubi(metodi)ga aylanadi
Bu texnologiyalarni o'zgartirganda yoki dastur arxitekturasiga yondashishda haqiqiy mahsulotlarda sodir bo'ladi.

2) toggleVisibleMyDB usuli(metodi)ni yarating, u chaqirilganda privat mulkini tekshiradi. Agar u yolg'on bo'lsa, u
uni "true" ga o'zgartiradi, "true" bo'lsa - "false" ga o'zgartiradi. ShowMyDB bilan sinab ko'ring.

3) writeGenres usuli(metodi)da foydalanuvchini "bekor qilish" tugmachasini bosishiga yoki bo'sh satr qoldirishiga 
yo'l qo'ymang.
Agar u buni qilgan bo'lsa, uni xuddi shu savolga qaytaring. Barcha janrlar kiritilgandan so'ng -
ForEach usuli yordamida xabarlarni konsolga quyidagi shaklda chop eting:
"Sevimli janr # (tartib tartibida, 1 dan boshlab) bu ​​(massivdan nom)" */

const personalNewsDB = {
    count: 0,
    news: {},
    actors: {},
    genres: [],
    privat: false,
    startProject: () => {
        personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");

        while (personalNewsDB.count == "" || personalNewsDB.count == null || isNaN(personalNewsDB.count)) {
            personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");
        }
    },
    rememberNews: () => {
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
    },
    showPersonalLevel: () => {
        if (personalNewsDB.count < 10) {
            console.log("Juda oz sonli yangiliklar o'qilibdi");
        } else if (9 < personalNewsDB.count && personalNewsDB.count < 30) {
            console.log("Siz klassik tomoshabinsiz");
        } else if (29 < personalNewsDB.count && personalNewsDB.count <= 40) {
            console.log("Siz yangiliklar ishqibozisiz");
        } else {
            console.log("Xato yuz berdi");
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalNewsDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalNewsDB.privat) {
            personalNewsDB.privat = false;
        } else {
            personalNewsDB.privat = true;
        }
    },
    writeYourGenres: () => {
        // 1-usul:
        // for (let i = 1; i < 2; i++) {
        //     let genre = prompt(`Sizning sevimli janringiz: nomer ${i}`);
        //     if (genre === "" || genre === null) {
        //         console.log("Siz noto'g'ri ma'lumot kiritdingiz");
        //         i--;
        //     } else {
        //         personalNewsDB.genres[i - 1] = genre;
        //     }
        // }

        // 2-usul:
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Sizning sevimli janringiz, vergul yordamida yozing`).toLowerCase();

            if (genre === "" || genre === null) {
                console.log("Siz noto'g'ri ma'lumot kiritdingiz");
                i--;
            } else {
                personalNewsDB.genres = genre.split(", ");
                personalNewsDB.genres.sort();
            }
        }

        personalNewsDB.genres.forEach((value, index) => {
            console.log(`Sizning sevimli janringiz: nomer ${index + 1} bu ${value}`);
        });
    },
};

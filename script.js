"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        let i = 0;
        while (i < 2) {
            const a = prompt('Один из последних просмотренных фильмов?'),
            b = +prompt('На сколько оцените его?');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && !isNaN(b)) {
                personalMovieDB.movies[a] = b;
            } else {
                confirm('Введите текст');
                i--;
            }
            i++;
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            confirm('Посмотрено довольно мало фильмом');
            console.log('Посмотрено довольно мало фильмом');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            confirm('Вы классический зритель');
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            confirm('Вы киноман'); 
            console.log('Вы киноман');
        } else {
            confirm('Error');
            console.log('Error');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i < 4; i++)
        // {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if(genre != null && genre != '') {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        //     else {
        //         confirm("Введите корректный жанр");
        //         i--;
        //     }
        // }
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres != null && genres != '') {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } else {
                confirm("Введите корректный жанр");
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
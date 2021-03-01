"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++)
    {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
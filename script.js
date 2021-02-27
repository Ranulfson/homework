const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        confirm('Введите текст');
        i--;
    }
    i++;
}

if (personalMovieDB.count < 10) {
    confirm('Посмотрено довольно мало фильмом');
    console.log('Посмотрено довольно мало фильмом');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    confirm('Вы классический зритель');
    console.log('Вы классический зритель');
} else if (personalMovieDB >= 30) {
    confirm('Вы киноман');
    console.log('Вы киноман');
} else {
    confirm('Error');
    console.log('Error');
}

console.log(personalMovieDB);
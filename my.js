'use strict';
let numberMovieDB = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberMovieDB,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

let movieOne = prompt('Один из последних просмотренных фильмов?', ''),
    ratingMovieOne = prompt('На сколько оцените его?', ''),
    movieTwo = prompt('Один из последних просмотренных фильмов?', ''),
    ratingMovieTwo = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[movieOne] = ratingMovieOne;
    personalMovieDB.movies[movieTwo] = ratingMovieTwo;

console.log(personalMovieDB.movies);




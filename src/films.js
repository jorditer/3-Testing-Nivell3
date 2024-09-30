const films = require('./data.js');
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(film => film.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, directorName) {
  let result =  array.filter(movie => movie.director === directorName);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
 let scores = array.filter(movie => movie.director === director)
 let result = parseFloat((scores.reduce((acc, score) => acc + score.score, 0) / (scores.length)).toFixed(2));
 return (result);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(movie => movie.title).sort().slice(0, 20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // let result = array.map(movie => movie.year).sort((a, b) => a - b)
  let result = array.slice().sort((a, b) => {
    if (a.year != b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  })
  return result;
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let moviesByGenre = array.filter(movie => movie.genre.some(genre => genre === category));
  if (moviesByGenre === 0) {
    return 0;
  }
  let result = moviesByGenre.reduce((acc, movie) => acc + movie.score, 0)/moviesByGenre.length;
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const regex = /(\d+)h( (?:\d{1,2})min)*/;
  const result = array.map((movie) => 
  {
    let newMovie = {...movie};
    if (typeof movie.duration == "number"){
      return movie;
    }
    let match = movie.duration.match(regex);
    if (typeof movie.duration === "string" && match){
      if (match[1]) {
        newMovie.duration = parseInt(match[1]) * 60;
      }
      if (match[2]) {
        newMovie.duration += parseInt(match[2]);
      }
    } 
    return newMovie;
  })
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesByYear = array.filter(movie => movie.year === year);
  const result = moviesByYear.reduce((best, movie) => best.score > movie.score ? best: movie, moviesByYear[0]);
  return [result];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

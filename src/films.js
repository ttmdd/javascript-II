const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  const director = array.map(movie => movie.director);

  return director;

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const directorMovies = array.filter(movie => movie.director === director);

  return directorMovies;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  // let score = 0;

  const filteredArray = array.filter(movie => movie.director === director);

  const average = filteredArray.reduce((accScore, movie) => accScore + movie.score, 0) / filteredArray.length;

  // OR
  // filteredArray.map(movie => score += movie.score);
  // const final = score / filteredArray.length

  // Have to use Number() OR + because toFixed() converrts a number into a string
  return Number(average.toFixed(2));
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const sortedTitles = array.map(movie => movie.title);
  sortedTitles.sort().splice(20);

  return sortedTitles;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  //******************* Por que dice que typeof(array) es un objeto?

  let sortedArray = [];

  array.sort((a, b) =>  {
    return a.title === b.title ? 0 : a.title > b.title ? 1 : -1 ;
   })

  array.sort((a, b) => a.year - b.year)

  for (let i = 0; i < array.length; i++) {
    sortedArray.push(array[i])
  }

  return sortedArray;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let score = 0;
  let moviesPerGenre = 0;
  let average = 0;

  array.filter(movie => {
    movie.genre.filter(movieGenre => {
      if (movieGenre === genre) {
        if (movie.score !== "") {
          score += movie.score; 
          moviesPerGenre += 1;
        } else {
          moviesPerGenre += 0;
        }
        average = score / moviesPerGenre;
      } 
    })
  })
  return Number(average.toFixed(2));
}

// ******************* Como hacer lo mismo utilizando la funcion del ejercicio 3?

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  const newArray = array.map(movie => ({ ...movie }));

  const final = newArray.map(movie => {

    const hour = (movie.duration[0]) * 60;

    const minIndex = movie.duration.toString().indexOf("min");

    const min = movie.duration.toString().substring(3, minIndex)

    const duration = Number(hour) + Number(min) || Number(hour);

    return {movie, duration: duration}
  })

  return final;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  const winner = []

  array.map(movie => {
    if (movie.year === year) {
      array.sort((a, b) => a.score - b.score)
    }
  })

  winner.push(array[array.length - 1])

  return winner;
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

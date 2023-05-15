const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let director = [];

  array.map(movie => director.push(movie.director));

  return director;

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let directorMovies = [];

  array.filter(movie => {
    if (movie.director === director) {
      directorMovies.push(movie)
    }
  })

  return directorMovies;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  let average = 0;
  let score = 0;
  let numberOfMovies = 0;


  array.filter(movie => {
    if (movie.director === director) {
      numberOfMovies += 1;
      score += movie.score;
      average = score / numberOfMovies;
    }
  })

  // console.log(typeof(average))
  // ******************* Por que dice que el un string? 
  // ******************* Como hacer lo mismo con reduce()?
  return Number(average.toFixed(2));
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let sortedTitles = [];

  array.map(movie => sortedTitles.push(movie.title));
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

  let hour = 0;
  let minIndex = 0;
  let min = 0;
  let newArray = [];

  array.map(movie => newArray.push(movie))

  // console.log("array", array)
  // console.log("newArray", newArray)

  for (let i = 0; i < newArray.length; i++) {

    hour = (newArray[i].duration[0]) * 60;
    // console.log(hour)

    minIndex = newArray[i].duration.toString().indexOf("min")
    //******************* Por que no funciona sin toString() cuando el array[i].duration ya es una string? 
    // console.log(minIndex)

    min = newArray[i].duration.toString().substring(3, minIndex)

    newArray[i].duration = Number(hour) + Number(min) || Number(hour);

  }
  // console.log("array", array)
  // ******************* Por que ha cambiado el array? 

  // console.log("newArray", newArray)

  return newArray;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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

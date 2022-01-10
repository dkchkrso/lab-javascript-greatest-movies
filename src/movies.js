// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// import data file "data.js" using require
const movies = require("./data.js");

// const movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     score: 9.2
//   }];

//Option One:
// const allDirectors = movies.map(function (whatever) {
//     return whatever.director;
//   });
 
// console.log(allDirectors);

//Option Two:

 function getAllDirectors(movies) {
  const allDirectors = movies.map(function (whatever) {
    return whatever.director;
  });
  return allDirectors;
 };

//Option Three:
//  function getAllDirectors(movies) {
//   return movies.map(function (whatever) {
//     return whatever.director;
//   });
//  };

 //Option Four:
 // getAllDirectors = movies => movies.map(function (whatever) {return whatever.director;});;

//  function getAllDirectors(movies) {
//   return movies.map(function (whatever) {
//     return whatever.director;
//   });
//  };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// and `filter` :eyes: the array so we can have only the **drama** movies where **Steven Spielberg** is the director.
function howManyMovies(array) {
  const filteredByDirector = array.filter((item) => {
      return item.director === "Steven Spielberg" && item.genre.includes('Drama') 
  })
  return filteredByDirector.length
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0){
    return 0
  }
  
  const reducedScore = array.reduce((previousValue, currentValue) => {
    return (currentValue.score + previousValue)
  }, 0 )
  let returnValue = reducedScore / array.length;
  
  const resultTwoDecimals = returnValue.toFixed(2);   
  let beNumber = Number(resultTwoDecimals);
  
  return beNumber
};

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  
  //Check if any Drama
  const checkYear = array.some((drama) => drama.year === 1994); //Works for Year
  //console.log(checkYear)

  const checkAnyDrama = array.some((movies) => movies.genre === "Drama"); //!Not working
  //console.log(checkAnyDrama)

  const filteredByDrama = array.filter((item) => {
    return item.genre.includes('Drama')
  })
  
  const reduceDramaMovies = filteredByDrama.reduce((previousValue, currentValue) => {
    return (currentValue.score + previousValue)
  }, 0)
    let result = reduceDramaMovies/filteredByDrama.length 
  return Number(result.toFixed(2))
}
//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
   const sortedByYear = array.sort((a, b) => a.year - b.year) 
   
   return sortedByYear
}

//console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles (filter method using index (0 - 19))
function orderAlphabetically(array) {
  // const sortedAlphabeticOrder = array.sort((a, b) => a.title - b.title)
  // return sortedAlphabeticOrder
  function compare(a ,b) {
    return a.title - b.title
  }
  const sortedArray = array.sort(compare)
  
  return sortedArray
}
//console.log(orderAlphabetically(movies))

console.log(movies.title)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

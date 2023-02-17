// Wraps movieList in IIFE
let movieRepository = (function() {
  let movieList = [
    {title:'Scream', year: '1996',  type: ['slasher','American']},
    {title:'Friday the 13th', year: '1980', type: ['slasher', 'American']},
    {title: 'Nightmare on Elm Street', year: '1984', type: ['slasher', 'American']},
    {title: 'Train to Busan', year: '2016', type: ['zombie', 'South Korean']},
    {title: 'The Call', year: '2020', type: ['time-travel', 'South Korean']},
    {title: 'As the Gods Will', year: '2014', type:['supernatural','Japanese']}
];

function add(movie) {
  movieList.push (movie);
}

function getAll() {
  return movieList;
}

return {
  add: add,
  getAll: getAll
};

})();

//Prints movie array
console.log(movieRepository.getAll());
movieRepository.add({name: 'The Blob'});
console.log(movieRepository.getAll());



getAll.forEach(function movie {
  console.log(movie.title + ' is a ' + movie.type[0] + ' type of movie ');
  document.write(movie.title + ' is a ' + movie.type[0] + ' type of movie ');
})
};
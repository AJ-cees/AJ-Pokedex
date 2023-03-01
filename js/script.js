// Wraps pokemonList in IIFE
let pokemonRepository = (function() {
  let pokemonList = [
    {name:'Bulbasaur', height: '0.7',  type: ['grass','poison']},
    {name:'Delcatty', height: '1.1', type: ['normal']},
    {name: 'Eevee', height: '0.3', type: ['normal']},
    {name: 'Pikachu', height: '0.4', type: ['electric']},
    {name: 'Charizard', height: '1.7', type: ['fire','flying']},
    {name: 'Squirtle', height: '0.5', type:['water']}
];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "height" in pokemon &&
    "types" in pokemon
  ) {
    repository.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}
function getAll() {
  return repository;
}

function addListItem (pokemon) {
  let pokemonList= document.querySelector('pokemon-list');
  let listPokemon= document.createElement('li');
  let button= document.createElement('button');
  button.innerText= pokemon.name;
  button.classList.add('button-class');
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);

  //add event listener to button
  button.addEventListener('click', function(event) {
      showDetails(pokemon);
  });
 
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};

})();

//Prints pokemon array
console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Jigglypuff', height: '0.5', type: ['normal', 'fairy']
});
console.log(pokemonRepository.getAll());
let pokeList= document.querySelector("pokemon-list")

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  console.log(pokemon.name + ' is a ' + pokemon.type[0] + ' type ' + '<br>');

});
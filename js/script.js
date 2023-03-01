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
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

function addItemList (herb) {
  let pokemonList= document.querySelector(".pokemon");
  let listPokemon= document.createElement("li");
  let button= document.createElement("button");
  button.innerText= pokemon.name 
  button.classList.add("button-class");

  //add event listener to button
  button.addEventListener("click", function(event) {
      showDetails(pokemon);
  });
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
}

return {
  add: add,
  getAll: getAll
};

})();

//Prints pokemon array
console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Jigglypuff'});
console.log(pokemonRepository.getAll());
let pokeList= document.querySelector("pokemon-list")

pokemonRepository.getAll().forEach(function(pokemon) {
  console.log(pokemon.name + ' is a ' + pokemon.type[0] + ' type ' + '<br>');
  document.write(pokemon.name + ' is a ' + pokemon.type[0] + ' type ' + '<br>');
});
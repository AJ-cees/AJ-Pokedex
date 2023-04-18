// Wraps pokemonList in IIFE
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let searchInput = document.querySelector("#search-input");


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

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json){
    json.results.forEach(function (item){
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);

  })
}


{
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response){
      return response.json();
    }).then(function (details) {

      item.imageUrl = de
    }
  }
}
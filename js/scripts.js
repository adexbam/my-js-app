var pokemonRepository = (function () {
    var repository = [
        {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
        {name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
        {name: 'CharMetapod', height: 0.7, types: ['bug',] },
        {name: 'Pidgey', height: 0.3, types: ['flying', 'normal'] }
    ];

    repository.forEach(function(pokemonList){
        if (pokemonList.height >= 0.7) {
            document.write(pokemonList.name + ' , height: '  + pokemonList.height  + ' - Wow, that’s big! ' + '<br>');
    
        } else {
            document.write(pokemonList.name + ' , height: ' + pokemonList.height  + '<br>');
        }
      });

    function add(pokemon) {
        repository.push(pokemon);
      }
    
      function getAll() {
        return repository;
      }
    
      return {
        add: add,
        getAll: getAll
      };
})();



/* comment out old code for new IIFE code

var repository = [ 
    {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
    {name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
    {name: 'CharMetapod', height: 0.7, types: ['bug',] },
    {name: 'Pidgey', height: 0.3, types: ['flying', 'normal'] }
];

repository.forEach(function(pokemonList){
    if (pokemonList.height >= 0.7) {
        document.write(pokemonList.name + ' , height: '  + pokemonList.height  + ' - Wow, that’s big! ' + '<br>');

    } else {
        document.write(pokemonList.name + ' , height: ' + pokemonList.height  + '<br>');
    }
  });

*/
  
/*
var repository2 = [ 
    {name: 'Ivysaur', height: 1.0, types: ['grass', 'poison'] },
    {name: 'Squirtle', height: 0.5, types: ['water',] },
    {name: 'Butterfree', height: 1.1, types: ['bug', 'flying'] },
    {name: 'Pidgeotto', height: 1.1, types: ['flying', 'normal'] }
];

function printArrayDetails(pokemonList){
    document.write('<h2>Pokemon List</h2>');
 for (var i=0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 0.7) {
        document.write(pokemonList[i].name + ' , height: '  + pokemonList[i].height  + ' - Wow, that’s big! ' + '<br>');

    } else {
        document.write(pokemonList[i].name + ' , height: ' + pokemonList[i].height  + '<br>');
    }
}
    
}

printArrayDetails(repository);
printArrayDetails(repository2);

*/

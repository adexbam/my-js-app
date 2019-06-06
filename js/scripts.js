var pokemonRepository = (function () {     //IIFE starts here

  var $repository = [];  // empty array
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // URL for the API
     /* {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
      {name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
      {name: 'CharMetapod', height: 0.7, types: ['bug',] },
      {name: 'Pidgey', height: 0.3, types: ['flying', 'normal'] }
      */

    function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);   });
  }

    function addListItem(pokemon) {
      //build the appropriate DOM nodes with document.createElement
      var $boxlist = document.querySelector('.pokobox');
      var $newElement = document.createElement('li');
      var $newElementButton = document.createElement('button');
      var $newContent = document.createTextNode('');
      var $newContentTwo = document.createTextNode(pokemon.name);

      //add the necessary classes
      $newElementButton.classList.add('poko_item');

      //append button to the list item
      $newElement.appendChild($newContent);
      $newElementButton.appendChild($newContentTwo);
      $boxlist.appendChild($newElement);
      $newElement.appendChild($newElementButton);

      //show-details event listner function
      $newContentTwo.addEventListener('click', function(event) {       
        showDetails(pokoObject);
        });
    };


  function add(pokemon) {
    $repository.push(pokemon);
    }
  
    function getAll() {
      return $repository;
    }

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      var url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      }).catch(function (e) {
        console.error(e);
      });
    }
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
      };

})();  //IIFE Ends here

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

/* 
pokemonRepository.getAll().forEach(poke => addListItem(poke))

pokemonRepository.getAll().forEach(function(pokoObject) {
  pokemonRepository.addListItem(pokoObject);
}); 
*/
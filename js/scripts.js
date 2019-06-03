var pokemonRepository = (function () {     //IIFE starts here

  var $repository = [
      {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
      {name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
      {name: 'CharMetapod', height: 0.7, types: ['bug',] },
      {name: 'Pidgey', height: 0.3, types: ['flying', 'normal'] }
  ];

  function showDetails() {
    console.log(pokoObject.name); 
  }

  function addListItem(pokoObject) {
    //build the appropriate DOM nodes with document.createElement
    var $boxlist = document.querySelector('.pokobox');
    var $newElement = document.createElement('li');
    var $newElementButton = document.createElement('button');
    var $newContent = document.createTextNode('');
    var $newContentTwo = document.createTextNode(pokoObject.name);

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
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
      };

})();  //IIFE Ends here

// pokemonRepository.getAll().forEach(poke => addListItem(poke))

pokemonRepository.getAll().forEach(function(pokoObject) {
  pokemonRepository.addListItem(pokoObject);
});
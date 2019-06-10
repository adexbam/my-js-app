var pokemonRepository = (function () {     //IIFE starts here

  var $repository = [];  // empty array
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // URL for the API
     /* {name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
      {name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
      {name: 'CharMetapod', height: 0.7, types: ['bug',] },
      {name: 'Pidgey', height: 0.3, types: ['flying', 'normal'] }
      */

    async function showDetails(item) {
      await pokemonRepository.loadDetails(item).then(function () {
      console.log(item); });
      showModal(item);
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
      $newElementButton.addEventListener('click', function(event){
        showDetails(pokemon);
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

    function showModal(item) {
      var $modalContainer = document.querySelector('#modal-container');

      //Clear all existing modal content
      $modalContainer.innerHTML = '';
      //Creat a DOM element
      var modal = document.createElement('div');
      //Add a modal class in DOM element
      modal.classList.add('modal');
      //Add class to show the modal
      $modalContainer.classList.add('is-visible');
      //Add the new modal content

      var closeButtonElement = document.createElement('button'); //creating closing button in modal content
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      
      closeButtonElement.addEventListener('click', hideModal); //adds event listener to close modal when clicked on button
    
      var nameElement = document.createElement('h1');  //creat element for name in modal content
      nameElement.innerText = item.name;

      var imageElement = document.createElement('img'); // creating img in modal content
      imageElement.classList.add('modal-img');
      imageElement.setAttribute("src", item.imageUrl);

      var heightElement = document.createElement('p');  //creating element for height in modal content
      heightElement.innerText = 'height : ' + item.height;

     
      var typesElement = document.createElement('p');   //creating element for type in modal content
      typesElement.innerText = 'types : ' + item.types;

      modal.appendChild(closeButtonElement);      //appending modal content to webpage
      modal.appendChild(nameElement);
      modal.appendChild(imageElement);
      modal.appendChild(heightElement);
      modal.appendChild(typesElement);
      $modalContainer.appendChild(modal);

    }
  
    // hide modal function and is-visible class removal
    function hideModal() {
      var $modalContainer = document.querySelector('#modal-container');
      $modalContainer.classList.remove('is-visible');
    }
    
    //hides modal, clicked on ESC or keyboard
    window.addEventListener('keydown', (e) => {
      var $modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });

    //event listner for clicking out of the modal
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      var target = e.target;
      if (target === $modalContainer) {
        hideModal();
      }
    });

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showModal: showModal,
      hideModal: hideModal
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
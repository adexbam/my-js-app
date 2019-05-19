var repository = [ 
    {name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
    {name: 'Charizard', height: 17, types: ['fire', 'flying'] },
    {name: 'CharMetapod', height: 7, types: ['bug',] },
    {name: 'Pidgey', height: 3, types: ['flying', 'normal'] }
];

 for (var i=0; i < repository.length; i++) {
    if (repository[i].height >= 7) {
        document.write(repository[i].name + ' , height: '  + repository[i].height  + ' - Wow, that’s big! ' + '<br>');

    } else {
        document.write(repository[i].name + ' , height: ' + repository[i].height  + '<br>');
    }
}

document.write(repository.name[1]);
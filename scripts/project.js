/* Project */

/* Declare and initialize global variables */
const disneyElement = document.querySelector('#characters');
let characterList = [];

/* async displayCharacters Function */
const displayCharacters = (characterList) => {
    characterList.data.forEach((character)=>{
    const articleElement = document.createElement('article');
    const h4Element = document.createElement('h4');
    h4Element.textContent = character.name;
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', character.imageUrl);
    imgElement.setAttribute('alt', `Picture of ${character.name}`);
    articleElement.appendChild(h4Element);
    articleElement.appendChild(imgElement);
    disneyElement.appendChild(articleElement);
    });
    }


/* async getCharacters Function using fetch()*/
let getCharacters = async () => {
    try {
        const response = await fetch('https://api.disneyapi.dev/character');
        if (!response.ok) {           
            throw new Error('Failed to fetch characters: ' + response.status);
        }       
        const data = await response.json();      
        characterList = characterList || [];        
        characterList = data;
        displayCharacters(characterList);
    } catch (error) {
        console.error('Error fetching characters:', error.message);
    }
};

/* reset Function */
function reset() {
    disneyElement.innerHTML = '';
};

/* filterCharacters Function */
function filterCharacters(character) {
    reset()
    const filter = document.getElementById('filtered').value;
    switch(filter) {
        case 'all':
            displayCharacters(character);
            break;
        case 'tvShow':
            displayCharacters(character.filter(char => char.data.includes('tvShows')));
            break;
        case 'videoGame':
            displayCharacters(character.filter(char => char.data.includes('videoGames')));
            break;
        case 'film':
            displayCharacters(character.filter(char => char.data.includes('films')));
            break;
        case 'shortFilm':
            displayCharacters(character.filter(char => char.data.includes('shortFilms')));
            break;
        case 'parkAttraction':
            displayCharacters(character.filter(char => char.data.includes('parkAttractions')));
            break;
}};

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => { filterCharacters(characterList)});


getCharacters();
/* Project */

/* Declare and initialize global variables */
const disneyElement = document.querySelector('#characters');
let characterList = [];

/* async displayCharacters Function */
const displayCharacters = (characterList) => {
    characterList.forEach((character)=>{
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
        displayCharacters(characterList.data);
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
            displayCharacters(character.data);
            break;
        case 'tvShow':
            displayCharacters(character.data.filter((char) => char.tvShows.length !=0));
            break;
        case 'videoGame':
            displayCharacters(character.data.filter(char => char.videoGames.length !=0));
            break;
        case 'film':
            displayCharacters(character.data.filter(char => char.films.length !=0));
            break;
        case 'parkAttraction':
            displayCharacters(character.data.filter(char => char.parkAttractions.length !=0));
            break;
}};

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => { filterCharacters(characterList)});


getCharacters();
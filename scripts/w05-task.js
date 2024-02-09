/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach(function(temple) {
    const articleElement = document.createElement('article');
    const h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', temple.imageUrl);
    imgElement.setAttribute('alt', temple.location);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
})};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    if (response.ok) {
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
    }
};

/* reset Function */
function reset() {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
function filterTemples(temples) {
    reset()
    const filter = document.getElementById('filtered').value;
    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temp => temp.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temp => !temp.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
}};

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templeList)});


getTemples();
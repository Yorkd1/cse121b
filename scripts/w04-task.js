/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "David York",
    photo: "images/IMG_1022.jpg",
    favoriteFoods: ['Pizza', 'Pasta', 'Apple'],
    hobbies: ['Games', 'Hiking', 'Baseball'],
    placesLived: []
};




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    { 
        place: 'Washington',
        length: '7 years'
    }
);
myProfile.placesLived.push(
    { 
        place: 'Tennessee',
        length: '8 years'
    }
);
myProfile.placesLived.push(
    { 
        place: 'Florida',
        length: '6 years'
    }
);
myProfile.placesLived.push(
    { 
        place: 'Idaho',
        length: '6 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let list_food = document.createElement('li');
    list_food.textContent = food;  
    document.getElementById('favorite-foods').appendChild(list_food);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let list_hobby = document.createElement('li');
    list_hobby.textContent = hobby;  
    document.getElementById('hobbies').appendChild(list_hobby);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let list_place = document.createElement('dt');
    list_place.textContent = place.place;
    let list_length = document.createElement('dd');
    list_length.textContent = place.length;

    let dl = document.createElement('dl');
    dl.appendChild(list_place);
    dl.appendChild(list_length);
    document.getElementById('places-lived').appendChild(dl);
});
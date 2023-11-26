/* LESSON 3 - Programming Tasks */

/* Profile Object  */
//Declare a new object literal variable named myProfile
let myProfile = {
    name: "Camelle Castro",
    photo: "images/self-portrait.jpg",
    favoriteFoods: [
        'Rice',
        'Ramen',
        'Baked Sushi',
        'Takoyaki',
        'Adobo'
    ],
    hobbies: [
        'Crochet',
        'Gaming - Xbox',
        'Cooking',
        'Reading',
        'Watching'
    ],
    placesLived: [

    ]
};

/* Populate Profile Object with placesLive objects */
// Add items to the placesLived array
myProfile.placesLived.push(
    {
        place: 'La Union, Philippines',
        length: '23 years'
    },
    {
        place: 'Alberta, Canada',
        length: '3 months'
    }
);

/* DOM Manipulation - Output */

/* Name */
// Assign the value of the name property to the HTML element with an ID of name
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo
document.querySelector('#photo').src = myProfile.photo;
// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
// Create list items for each favorite food and append them to the HTML <ul> element with an ID of favorite-foods
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
  
/* Hobbies List */
// Create list items for each hobby and append them to the HTML <ul> element with an ID of hobbies
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});
  

/* Places Lived DataList */
// Create HTML <dt> and <dd> elements for each place lived and append them to the HTML <dl> element with an ID of places-lived
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

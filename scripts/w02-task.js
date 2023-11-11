/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Camelle Castro";
const currentYear = new Date().getFullYear();
const profilePicture = "images/self-portrait.jpg";

/* Step 3 - Element Variables */

//Using getElementById() for the element with id "name" and store it in a const variable named "nameElement"
const nameElement = document.getElementById('name');

//Using getElementById() for the element with id "name" and store it in a const variable named "foodElement"
const foodElement = document.getElementById('food');

// Using querySelector for the element with id "year" and store it in a variable named "yearElement"
const yearElement = document.querySelector('#year');

// Using any viable method to get the profile image element
const imageElement = document.querySelector('picture img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

//1. Declare an array variable to hold fave foods
const faveFoods = ['Lomi', 'Adobo', 'Lechon', 'Kare-Kare', 'Sinigang', 'Dinakdakan'];

//2. Modify HTML element with id of "food" to display fave foods. Note: foodElement variable is already set
foodElement.innerHTML = faveFoods;

//3. Declare and instantiate a variable to hold single fave food
const newFaveFood = 'Balut';

//4. Add value stored in new variable 'newFaveFood' to faveFoods array using push() method
faveFoods.push(newFaveFood);

//5. Append the new array value onto the displayed content of the HTML element with the id of 'food' using += operator and a  <br> to provide line break
foodElement.innerHTML += `<br>${faveFoods}`;

//6. Remove first element in the favorite food array
faveFoods.shift();

//7. Append the array output showing the modified arrat (like step 5)
foodElement.innerHTML += `<br>${faveFoods}`;

//8. Remove the last element in the favorite food array
faveFoods.pop();

//Append the array output with final modified favorite foods (Step 5)
foodElement.innerHTML += `<br>${faveFoods}`;








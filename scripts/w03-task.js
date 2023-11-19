/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
  
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
  
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
   
/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let applyDiscount = document.querySelector('#member').checked;

    let total;

    if (applyDiscount) {
        total = subtotal * 0.85; //if membership discount is 20% change 0.85 to 0.80
    } else {
        total = subtotal;
    }

    document.querySelector('#total').innerText = `Total: $${total.toFixed(2)}`;
});

// other method
/* 
document.querySelector('#getTotal').addEventListener('click', () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let applyDiscount = document.querySelector('#member').checked;
    let total = applyDiscount ? subtotal * 0.85 : subtotal;
    document.querySelector('#total').innerText = `Total: $${total.toFixed(2)}`;
});
*/

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Assign the value of the array variable to the HTML element with an ID of array */
document.querySelector('#array').innerText = numbersArray;

/* Output Odds Only Array */
/* Use the filter() array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of odds */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
/* Use the filter() array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of evens */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
/* Use the reduce() array method to sum the array variable elements and assign the result to the HTML element with an ID of sumOfArray */
document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
/* Use the map() array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of multiplied */
document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
/* Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied. */
document.querySelector('#sumOfMultiplied').innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);









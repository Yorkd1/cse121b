/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function() {
    const subtotalValue = parseFloat(document.getElementById('subtotal').value);
    const applyMembershipDiscount = document.getElementById('member').checked;
    const total = applyMembershipDiscount ? subtotalValue * 0.8 : subtotalValue;
    document.getElementById('total').innerText = total.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerText = array;

/* Output Odds Only Array */
let oddsArray = array.filter((number) => number % 2 !==0);
document.querySelector('#odds').innerText = oddsArray;

/* Output Evens Only Array */
let evensArray = array.filter((number) => number % 2 ===0);
document.querySelector('#evens').innerText = evensArray;

/* Output Sum of Org. Array */
let sumOfOrgArray = array.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerText = sumOfOrgArray;

/* Output Multiplied by 2 Array */
let multipliedArray = array.map(number => number * 2);
document.querySelector('#multiplied').innerText = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedArray = multipliedArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerText = sumOfMultipliedArray;
var ans = document.getElementsByClassName('answer')[0];
var operators = document.querySelectorAll('.operators');
var numbers = document.querySelectorAll('.numbers');
var input = document.querySelector('.input');

//For storing of inputs
var firstNumbers = [];
var secondNumbers = [];

// To determine if its second number
var isSecond = false;

// For storing the value of operator
var operator;

// Adding click event for each of the number buttons
numbers.forEach(numbers => {
    numbers.addEventListener('click', () => {
        // Getting the text within the button
        var num = numbers.textContent;

        if (!isSecond) {                                    // Checking if its the first number
            ans.textContent += num;                         // Adding the numbers in the display
            validate(num);

            // Setting the value of cancel button into blank
            if (num == "C") {
                num = '';
            }

            firstNumbers.push(num);                         // Storing the numbers into array
        } else {
            ans.textContent += num;
            validate(num);
            secondNumbers.push(num);
        }
    })
})

// Adding click event for each of the operator buttons
operators.forEach(operators => {
    operators.addEventListener('click', () => {
        // Setting to true to make it the second number
        isSecond = true;    

        // Setting the operator value
        var op = operators.textContent;

        // Setting the value of divide and multiple button into proper value
        if (op == "÷") {
            op = '/';
        } else if (op == "x") {
            op = '*';
        }
        operator = op;

        // Setting blank value
        ans.textContent = '';
    })
})

function validate(num) {

    //  Clearing the values of arrays and also in the screen
    if (num == 'C') {
        ans.textContent = '';
        firstNumbers = [];
        secondNumbers = [];
    }

    // Computing the numbers
    if (num == '=') {
        isSecond = false;                                   // Setting it back to make it first again

        num = '';                                           // Setting = value into blank in order to not add it in the array
        ans.textContent = '';

        var result;

        // Combining all numbers inside the arrays
        var num1 = firstNumbers.join('');
        var num2 = secondNumbers.join('');

        // Then clearing it all after storing it in a variable for future computations
        firstNumbers = [];
        secondNumbers = [];

        // Computation
        result = eval(num1 + operator + num2);

        // Display the answer
        ans.textContent = result;
    }
}
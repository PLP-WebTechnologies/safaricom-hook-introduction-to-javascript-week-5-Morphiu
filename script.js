//1. Variables and Data types
let name = "Mike Mghenyi";
let age = 125;
let IsStudent = true;

console.log('Name:', name, '(Type:', typeof (name), ')')
console.log('Age: ', age, '(Type:', typeof (age), ')')
console.log('Is student:', IsStudent, '(Type:', typeof (IsStudent), ')')

//2. Operators

//2.1 setting up the function's details
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let operator = prompt("What would you like to do?: (+,-,*,/)");

    //2.2 Validating the input
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter a valid number.");
        calculator()
        return;
    }

    let result

    //2.3 Iterating over the various possible operations done by the function
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            if (num2 == 0) {
                alert("Sorry, Division by zero is not allowed.")
                return;
            }
            result = num1 / num2;
            break;

        default:
            alert("Invalid operator detected, please use +, - , * or /.")
            calculator()
            return;
    }

    //2.4 Displaying the final results
    alert(`${num1} ${operator} ${num2} = ${result}`)
}

calculator()

//3. Functions
// The implementation of :
// 1. The greetUser function and if statements starts from line 14 to 29 in assignment.html.
// 2. The loop is implemented from line 36 to 41 in assignment.html.
// 3. Selecting and modifying elements is implemented from starts from line 51 to 55 in assignment.html.


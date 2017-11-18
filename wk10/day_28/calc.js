var oper = process.argv[3];
var num1 = Number.parseFloat(process.argv[2]);
var num2 = Number.parseFloat(process.argv[4]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Enter a valid number!");
} else {
    if (oper === '+') {
        console.log(num1 + num2);
    } else if (oper === '-') {
        console.log(num1 - num2);
    } else if (oper === '*') {
        console.log(num1 * num2);
    } else if (oper === '/') {
        console.log(num1 / num2);
    } else if (oper === '%') {
        console.log(num1 % num2);
    } else if (oper === '^') {
        console.log(Math.pow(num1, num2));
    } else {
        console.log(oper + " is not a valid method! Use + for addition, - for subtraction, * for multiplication, / for division, % for modulation, and ^ for exponentiation!")
    }
}
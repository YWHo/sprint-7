// Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else if (num1 < num2) {
        return num1;
    } else {
        return num1;
    }
}

console.log("\n---- test function min() -----");
console.log(min(0, 10)); // expect: 0
console.log(min(0, -10)); // expect: -10


/*
Here’s another way to define whether a positive whole number is even or odd:
- Zero is even.
- One is odd.
-  For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
*/

function isEven(num) {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else if (num < 0) {
        return isEven(-num);  // flip negative number to positive
    } else {
        return isEven(num - 2);
    }
}

console.log("\n---- test function isEven() -----");
console.log(isEven(50)); // expect: true
console.log(isEven(75)); // expect: false
console.log(isEven(-1)); // expect: false


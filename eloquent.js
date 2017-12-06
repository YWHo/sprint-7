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

console.log(min(0, 10));    // should return 0
console.log(min(0, -10));   // should return -10


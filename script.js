let n = parseInt(prompt("Enter the value of n"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

document.write("Sum of first "+ n +" natural numbers = " + sum);
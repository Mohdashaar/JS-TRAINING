let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++){
    factorial *= i;
}
console.log(`the factorial of ${number} is ${factorial}`);

// task 2
let n = 6;

let a = 0, b = 1;
let count = 0;

while (count < n) {
    console.log(a); 

    let next = a + b;
    a = b;
    b = next;
    count++;
}


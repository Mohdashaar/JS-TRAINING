const numbers = [8, 11, 16, 15, 17];
let numbers2 = numbers.map((n) => (n % 2 == 0 ? n * 2 : n + 1));
console.log(numbers2);
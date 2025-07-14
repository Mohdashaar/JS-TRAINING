let subjects = ["company-accounts", "economic", "marketing"];

let numbers = [200, 300, 150, 250];       
let names = ["ashaar", "waseem", "husnain"]; 
let mixed = [42, "Hello", true];       

let colors = ["Red", "Green", "Blue"];
console.log(colors[1]);

let sub = [1, 2, 3];
sub.push(4);    
sub.pop();     

let queue = ["A", "B"];
queue.unshift("Start"); 
queue.shift();        

let items = ["banana", "apple"];
console.log(items.indexOf("apple")); 
console.log(items.includes("kiwi"));


let arr = [10, 20, 30, 40];
let part = arr.slice(1, 3);

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); 


let names2 = ["ashaar", "asif"];
for (let i = 0; i < names2.length; i++) {
  console.log(names2[i]);
}

for (let name of names) {
  console.log(name);
}

names.forEach((n) => console.log(n));

function printArray(arr) {
  arr.forEach((item) => console.log(item));
}
printArray(["company-accounts", "economic", "marketing"]);
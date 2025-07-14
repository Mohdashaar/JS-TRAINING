let names = ["arkam", "raif", "anas", "husnain", "fouzan"];

let len = names.length;

for (let i = 0; i < len / 2; i++) {
  let first = names[i];
  let last = names[len - 1 - i];

  names[i] = last;
  names[len - 1 - i] = first;
}

console.log(names);
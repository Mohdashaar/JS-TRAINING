let percrnt = 80;
let grade = "";

if (percent >= 90) {
  grade = "A";
} else if (percent >= 75) {
  grade = "B";
} else if (percent >= 60) {
  grade = "C";
} else if (percent >= 40) {
  grade = "D";
} else {
  grade = "E";
}
let result = "";
switch (grade) {
    case "A":
        result = "you scored distinction";
    break;
    case "B":
        result = "you scored first class"
    break;
    case "C":
        result = "you scored second class"
    break;
    case "D":
        result = "you scored third  class"
    break;
    case "E":
        result = "you failed"
    break;
     default:
    result = "Grade is invalid";
    break;
}
console.log("`grade obtained - ${grade}`")
console.log("`result - ${result}`")
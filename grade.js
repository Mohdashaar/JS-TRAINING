let percrnt = 75.95;
let grade = "";

if (percrnt >= 90){
    grade = "A"
}
else if (percrnt >= 75){
    grade = "B" 
}
else if (percrnt >= 55){
    grade = "C"
    
}
else if (percrnt >= 40){
    grade = "D"
} else  {
    grade = "E"
}
console.log(`Grade Obtained - ${grade}`);
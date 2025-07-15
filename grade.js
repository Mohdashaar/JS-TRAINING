let percrnt = 50;
let grade ="";

if(percrnt >= 90 ){
    grade ="A"
}

else if (percrnt >= 75){
    grade = "B"
}

else if ( percrnt >= 65){
    grade ="C"
}

else if (percrnt >= 45){
    grade = "d"
} else{
    grade = "E"
}
console.log(`grade obtained - ${grade}`)
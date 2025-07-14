function calculateArea(length, width) {
    return length * width;
}
let area = calculateArea(5, 8);
console.log(`masjid area is : ${area}\n`);

// function to check even/odd //
function checkEvenOdd(no) {
  let msg = no % 2 === 0 ? `No. ${no} is Even` : `No. ${no} is Odd\n`;
  console.log(msg);
}
checkEvenOdd(6);
checkEvenOdd(9);
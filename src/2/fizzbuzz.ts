for (let i = 1; i <= 100; i++) {
   if (i % 15 === 0) console.log("FizzBuzz");
   else if (i % 5 === 0) console.log("Buzz");
   else if (i % 3 === 0) console.log("Fizz");
   else console.log(i);
}

let numString = '';
for (let i = 1; i <= 100; i++) {
  if (i !== 1) numString += ' ';
  if (i % 15 === 0) numString += "FizzBuzz";
  else if (i % 5 === 0) numString += "Buzz";
  else if (i % 3 === 0) numString += "Fizz";
  else numString += String(i);
}
console.log(numString);

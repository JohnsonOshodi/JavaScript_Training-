
// add multiple numbers

// function addNumbers(a, b) {
//   const result = a + b;
//   console.log(`${a} + ${b} = ${result}`);
// }

// addNumbers(2, 2);
// addNumbers(3, 3);
// addNumbers(12, 12);


// add multiple numbers in pair

function addMultiplepairs(pairs) {
  pairs.forEach(([a, b]) => {
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
  });
}


const pairs = [
  [2, 2],
  [3, 3],
  [4, 5],
  [15, 25]
];
 

addMultiplepairs(pairs);

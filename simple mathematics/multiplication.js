// multiply

function multiply() {
  return 10 * 6;
}


console.log(multiply());

//multiple multiplication

function multiply(...args) {
  return args.reduce((acc, val) => acc * val, 1);

}

console.log(multiply(2 * 1));
console.log(multiply(2 * 2));
comsole.log(multiply(2 * 3));
console.log(multiply(2 * 4));
console.log(multiply(2 * 5));
console.log(multiply( 2 * 6));
console.log(multiply(2 * 7));
console.log(multiply(2 * 8));
console.log(multiply(2 * 9));
console.log(multiply(2 * 10));
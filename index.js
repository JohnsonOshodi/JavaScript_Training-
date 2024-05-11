// calculate the are of triangle
// 1/2 bh
// b and h are parameters
// const calculateArea = (b, h) => {
// 	const area = 0.5 * b * h;
// 	console.log(`The area is ${area} sqm`);
// };

// // 2, 3 are arguments
// calculateArea(2, 3);

//functions
/* function printName() {
	return "my name is Leao";
} */

// argument and parameters
//template string represent by ``
//checkAge function checks age the customer
function checkAge(name, age) {
	if (!age) return "Please input your age";
	if (age >= 18) {
		return `Hi ${name}, welcome to the club`;
	} else
		return `Sorry please come back in  ${18 - age} ${
			age == 17 ? "year" : "years"
		}`;
}

console.log(checkAge("Tobi", 17));
console.log(checkAge("Terfar"));
console.log(checkAge("Musa", 18));
console.log(checkAge("Emeka", 16));

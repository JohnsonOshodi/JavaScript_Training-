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


// function checkAge(name, age) {
// 	if (!age) return "Please input your age";
// 	if (age >= 18) {
// 		return `Hi ${name}, welcome to the club`;
// 	} else
// 		return `Sorry please come back in  ${18 - age} ${
// 			age == 17 ? "year" : "years"
// 		}`;
// }

// console.log(checkAge("Tobi", 17));
// console.log(checkAge("Terfar"));
// console.log(checkAge("Musa", 18));
// console.log(checkAge("Emeka", 16));


// Array 
//Write a JavaScript function to check whether an 'input' is an array or not.



  // Function to check if the input is an array
//var is_array = function(input) {
// 	// Using toString method to get the class of the input and checking if it is "[object Array]"
 //	if (toString.call(input) === "[object Array]")
// 	  // Return true if the input is an array
// 	  return true;
// Return false if the input is not an array
//return false;   
//};

//   // Testing the function with a string
 //console.log(is_array('w3resource'));

// // Testing the function with an array
// console.log(is_array([1, 2, 4, 0]));

//New codes
1. //Write a JavaScript function to check whether an `input` is an array or not.

//Answer

function isArray(input) {
   return Array.isArray(input);
}

// Usage:
console.log(isArray([1, 2, ])); // Answer should be true
console.log(isArray('Hello'));  // Answer should be false
console.log(isArray({a: 1}));  // Answer should be false
console.log(isArray(42));  // Answer should be false
console.log(isArray(undefined)); // Answer should be false

2. //Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"];
//Expected Output :
//"Red,Green,White,Black"
//"Red,Green,White,Black"
//"Red+Green+White+Black"

//Answer

const myColor = ["Brown", "Green", "Black", "White" ];

//Join elements  with default separator (comma)
const joinedWithComma = myColor.join();
console.log(joinedWithComma); // Brown,Green,Black,White"

//Join elements with comma as separator explicitly
const joinedWithCommaExplicit = myColor.join(',');
console.log(joinedWithCommaExplicit); // "Brown,Green,Black,White"


//Join elements with plus sign as separator
const joinedWithPlus = myColor.join('+');
console.log(joinedWithPlus); // "Brown+Green+Black+White"

3. //Write a JavaScript program to find duplicate values in a JavaScript array.

//Answer:
function findDuplicates(arr) {
    let duplicates = [];
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            seen.add(arr[i]);
        }
    }

    return duplicates;
}

 Usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 9, 10];
const duplicates = findDuplicates(array);
console.log(duplicates); // Output: [1, 2, 3]


4. //Write a JavaScript function to sort the following array of objects by title value.
//Sample object :

//var library = [ 
//   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//   ];
//Expected result :

//[[object Object] {
//  author: "Suzanne Collins",
//  libraryID: 3245,
//  title:"Mockingjay:The Final Book of The Hunger Games"
//}, [object Object] {
//  author: "Bill Gates",
//  libraryID: 1254,
//  title: "The Road Ahead"
//}, [object Object] {
//  author: "Steve Jobs",
//  libraryID: 4264,
//  title: "Walter Isaacson"
//}]

//Answer:
const library = [
      {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
      {author: 'Steve Jobs', title: 'Walter Isascson', libraryID: 4264},
      {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The hunger Games', libraryID: 3245}
];
 
function sortByTitle(library) {
    return library.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title >  b.title) {
            return 1;
        }
        return 0;

    });
}


const sortedLibrary = sortByTitle(library);
console.log(sortedLibrary);


5. // We have the following arrays :
//color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//o = ["th","st","nd","rd"]
//Write a JavaScript program to display the colors in the following way :
//"1st choice is Blue ."
//"2nd choice is Green."
//"3rd choice is Red."
//- - - - - - - - - - - - -
//Note : Use ordinal numbers to tell their position.

//Answer:

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinals =  ["th", "st", "nd", "rd"];

function getOrdinal(n) {
    if (n === 11 || n === 12 || n === 13) {
        return n + ordinals[0]; // 11th, 12th, 13th
    }
    switch (n % 10) {
        case 1:
            return n + ordinals[1]; // 1st
        case 2:
            return n + ordinals[2]; // 2nd
        case 3:
            return n + ordinals[3]; // 3rd
        default:
            return + ordinals[0]; // 4th, 5th, 6th, ...      
    }
}

for (let i = 0; i <  colors.length; i++) {
    console.log(`${getOrdinal(i + 1)} choice is ${colors[i]}.`);
}


6. //Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
//If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
//If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
//If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

//Answer:

function getGrade(totalMarks, inFinalExam) {
  if (inFinalExam) {
      if (totalMarks >= 90) {
          return 'A';
      } else if (totalMarks >= 80) {
          return 'B';
      } else if (totalMarks >= 70) {
          return 'C';
      } else if (totalMarks >= 60) {
          return 'D';
      } else {
          return 'F';
      }
  } else {
      if (totalMarks >= 89) {
          return 'A';
      } else if (totalMarks >= 79) {
          return 'B';
      } else if (totalMarks >= 69) {
          return 'C';
      } else if (totalMarks >= 59) {
          return 'D';
      } else {
          return 'F';
      }
  }
}

// Usage:
const totalMarks1 = 95;
const inFinalExam1 = true;
console.log(getGrade(totalMarks1, inFinalExam1)); // Output: A

const totalMarks2 = 88;
const inFinalExam2 = false;
console.log(getGrade(totalMarks2, inFinalExam2)); //Output:  B

const totalMarks3 = 89;
const inFinalExam3 = false;
console.log(getGrade(totalMarks3, inFinalExam3)); // Output: A

const totalMarks4 = 75;
const inFinalExam4 = true;
console.log(getGrade(totalMarks4, inFinalExam4)); //Output:  C

const totalMarks5 = 65;
const inFinalExam5 = false;
console.log(getGrade(totalMarks5, inFinalExam5)); //Output:  D
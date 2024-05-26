// Write a JavaScript program to get the current date.  

// get current date
const currentDate = new Date();

// get different parts of the date
const year = currentDate.getFullYear();

const month = String(currentDate.getMonth() + 1).padStart(2, '0');

const day = String(currentDate.getDate()).padStart(2, '0');


// format the date as a string
const formattedDate = `${year}-${month}-${day}`;

console.log(`current Date: ${formattedDate}`);
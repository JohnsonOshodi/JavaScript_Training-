// Write a JavaScript program to get the current date.  

// get current date
const currentDate = new Date();

// get different parts of the date
const year = currentDate.getFullYear();

const month = currentDate.getMonth() + 1; 

const day = currentDate.getDate();


// format the date as a string

const formattedDate = `${year}-${month}-${day}`;

console.log(`current Date: ${formattedDate}`);
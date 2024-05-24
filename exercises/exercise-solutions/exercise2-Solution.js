//Write a JavaScript program to display the current day and time in the following format.

//  current date and time
function displayCurrentDayAndTime() {
  const today = new Date();

  // weekday names
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  

  // current day of the week
  const dayName = daysOfWeek[today.getDay()];

  // current time components
  let hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  // AM or PM
  const amOrPm = hour >= 12 ? 'PM' : 'AM';
  
  // convert hours from 24-hour format to 12-hour format

  hour = hour % 12;
  hour = hour ? hour : 12;

  // minutes and seconds to always have two digits

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  // output

  console.log(`Today is : ${dayName}.`);
  console.log(`current time is : ${hour} ${amOrPm} : ${formattedMinutes} : ${formattedSeconds}`);

}


displayCurrentDayAndTime();
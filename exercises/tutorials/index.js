// 1. check if the student is a catholic
//if catholic,then you register
//allow only males
//exercise refactor the code to allow on male students who are 12 years old and above
//log to the console

const stPeterSeminaryStudents = [];

// Function to register a student
function registerStudent(name, age, gender, className) {
  const student = {
    name: name,
    age: age,
    gender: gender,
    class: className
  };

  stPeterSeminaryStudents.push(student);
  return `Student ${name} has been registered successfully.`;
}

// Function to check denomination and register a student if applicable
const registerCatholicStudents = (
  denomination,
  name,
  age,
  gender,
  className
) => {
  if (!denomination) return "What is your denomination?";
  if (denomination !== "catholic")  return "This is a specialized school for catholic students"; /*you dont have to check if they are catholic, check for the opposite.*/ 
  if (gender !== "Male" || age < 12) {
    return "Only male students who are 12 years old and above can be registered";
  }
  return registerStudent(name, age, gender, className);

};

// Example usage
console.log(
  registerCatholicStudents("catholic", "Michael", 16, "Male", "English") // is complete use case
);
console.log(
  registerCatholicStudents("protestant", "Sarah", 15, "Female", "Math") // is non catholic
);
console.log(
  registerCatholicStudents("catholic", "John", 14, "Male", "History")
); // denomitionation is undefined

console.log(
  registerCatholicStudents("catholic", "Faith", 10, "Female", "Geography")
); // only male  students who are 12 years old and above can be registered


console.log(stPeterSeminaryStudents);

//try and solve this too 
/*  Create a system to register books in a library. The system should allow adding books, but only if they meet certain criteria.
Requirements
1. Check if the book is a fiction or non-fiction.
2. Only register non-fiction books.
3. Only register books with more than 100 pages.
4. Log the registration details to the console.
*/

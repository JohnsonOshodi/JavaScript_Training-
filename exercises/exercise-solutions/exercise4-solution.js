//Array to store student information

const students = [];

//function to register a student
function registerStudent(name, age, gender, className, faith, church, parish) {
    //create a student object
    const student = {
        name: name,
        age: age,
        gender: gender,
        class: className,
        faith: faith,
        church: church,
        parish: parish,
       
    };

    //add the student object to the students array
    students.push(student);

    console.log(`Student ${name} has been registered succesfully.`);

}

registerStudent("Michael", 16, "Male", "English");
registerStudent("Matthew", 10, "Male", "Math");
registerStudent("Mary", 7, "Female", "Science" );
registerStudent("Samson", 30, "Male", "Religion", "christian", "catholic", "stPetersSeminary")


//Print the students array to check the registered students
console.log(students);

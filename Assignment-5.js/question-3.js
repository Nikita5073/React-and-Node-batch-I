//3.Create an object named student with at least 5 keys (e.g., studentId, studentName, grade, subjects, hobbies). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

const student = {
    studentId: 101,
    studentName: "Nikita",
    grade: "A",
    subjects: ["English","Maths","Science"],
    hobbies: ["Reading","Photography","Travelling"],
};

function printstudent({studentId,studentName,grade,subjects,hobbies})
{
    console.log("studentsInformation:");
    console.log(`StudentId:${studentId}`);
    console.log(`StudentName:${studentName}`);
    console.log(`Grade:${grade}`);
    console.log(`Subjects:${subjects}`);
    console.log(`Hobbies:${hobbies}`);

    printsubjects(subjects);

    printKeys(student);
}

function printsubjects(subjects){
    subjects.forEach(subject => console.log(subject));
}

function printKeys({studentId,studentName,grade,subjects,hobbies})
{
    console.log("StudentId:",studentId);
    console.log("StudentName:",studentName);
    console.log("Grade:",grade);
    console.log("Subjects:",subjects);
    console.log("Hobbies:",hobbies);
}

printstudent(student);
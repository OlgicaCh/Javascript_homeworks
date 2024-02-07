console.log("Works");
/*Using only async/await syntax fetch the students from this endpoing "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

After you have the data display the following informations in the HTML

ONLY USE HIGHER ORDER FUNCTIONS
USE AYSNC/AWAIT
DO NOT MUTATE OR CHANGE OR SORT THE ORIGINAL DATA
Show the average age and average grade of all students combined
Show the number of students that are over 60 and the number of students that are under 30 years old
Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
Find the student named Arthur Cadore and display all of his information
Find the oldest and youngest student and display their information on the screen
Show a list of the full names of students that have a last name longer than 8 characters
Show a list of the top 10 best students by average grade
Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)*/

const fetchStudentData = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(" Something is wrong");
  }
};

const studentInfo = async () => {
  try {
    const students = await fetchStudentData();
    const HTML = document.querySelector(".studentcontainer");

    const calculateAverage = (arr, key) =>
      arr.reduce((acc, obj) => acc + obj[key], 0) / arr.length; // GOOGLE IS THE KEY OF EVERY PROBLEM, NO SAKAM DA SE OBJASNI I NA KOLEGITE SE RAZBIRA IAKO UCEVME ZA KEY
    const averageAge = calculateAverage(students, "age");
    const averageGrade = calculateAverage(students, "averageGrade");

    console.log(averageAge);
    console.log(averageGrade);

    const studentsOver60 = students.filter(
      (students) => students.age > 60
    ).length;
    const studentsUnder30 = students.filter(
      (students) => students.age < 30
    ).length;
    console.log(studentsOver60);
    console.log(studentsUnder30);

    const filterStudentsOver30 = students
      .filter((students) => students.age > 30 && students.averageGrade >= 4)
      .map(
        (students) =>
          ` ${students.firstName} ${students.lastName} City: ${students.city}`
      );
    console.log(filterStudentsOver30);

    const arthurCadore = students
      .filter(
        (students) =>
          students.firstName === "Arthur" && students.lastName === "Cadore"
      )
      .map(
        (students) =>
          ` First Name: ${students.firstName}, Last Name: ${students.lastName}, Gender: ${students.gender}, Age: ${students.age}, email: ${students.email}, City: ${students.city}, Average grade: ${students.averageGrade}`
      )
      .join("");

    console.log(arthurCadore);

    const studentsCopy = students.map((students) => students);
    studentsCopy.sort((a, b) => b.age - a.age);
    console.log(studentsCopy);

    const oldestStudent = studentsCopy[0];
    console.log(oldestStudent);
    const youngestStudent = studentsCopy[studentsCopy.length - 1];
    console.log(youngestStudent);

    const longLastNameStudents = students
      .filter((students) => students.lastName.length > 8)
      .map((students) => `${students.firstName} ${students.lastName}`);
    console.log(longLastNameStudents);

    const topTenStudents = [...students]
      .sort((a, b) => b.averageGrade - a.averageGrade)
      .slice(0, 10)
      .map((student) => `${student.firstName} ${student.lastName}`);

    console.log(topTenStudents);

    const hasGradeOne = students.some((student) => student.averageGrade === 1);
    console.log(hasGradeOne);
    const allAdults = students.every((student) => student.age > 18);
    console.log(allAdults);

    HTML.innerHTML = ` <h3>Average age and average grade of all students combined </h3>
    <p>Average Age of students is: ${averageAge}</p>
    <p>Average Grade of students is: ${averageGrade}</p>
    <h3>Number of students that are over 60 and the number of students that are under 30 years old</h3>
    <p>Number of students over 60 is: ${studentsOver60}</p>
    <p>Number of students over 30 is: ${studentsUnder30}</p>
    <h3>The students that are over 30 and have an average grade of 4 and above:</h3>
      ${filterStudentsOver30.join("<li></li>")} 
         <h3> Student named Arthur Cadore and  all of his information </h3>
         <p>Information about student Arthur Cadore: ${arthurCadore}</p>
         <p> The oldest student is: ${oldestStudent.firstName} ${
      oldestStudent.lastName
    } - ${oldestStudent.age} years old with average Grade ${
      oldestStudent.averageGrade
    }</p>
         <p> The youngest student is ${youngestStudent.firstName} ${
      youngestStudent.lastName
    } - ${youngestStudent.age} years old with average Grade ${
      youngestStudent.averageGrade
    }</p>
         <h3> List of students with last name longer than 8 characters:</h3> 
          ${longLastNameStudents.join("<li></li>")}
         <h3>Top 10 Students by Average Grade:</h3>
          ${topTenStudents.join("<li></li>")}
          <p>Some students have a grade of 1: ${
            hasGradeOne ? "Yes" : "No"
          }</p> //ova e od Google i pojma nemam kako znae dali e yes ili no :)))(prepoznava po true i false). STO ZNACI ? I : (OVA E SO OBJECT POVRZANO)
          <p>All students are adults: ${allAdults ? "Yes" : "No"}</p>


    `;
  } catch (error) {
    throw new Error(" wrong");
  }
};
studentInfo();

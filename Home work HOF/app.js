console.log("Working");
/*There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json*/

const studentURL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
const fetchStudent = (studentURL) => {
  fetch(studentURL)
    .then((res) => res.json())
    .then((data) => {
      const filteredStudentsAverageGradeHigherThan3 = data.filter(
        (student) => student.averageGrade > 3
      );
      console.log("Students with an average grade higher than 3:");
      console.log(filteredStudentsAverageGradeHigherThan3);

      const femaleStudentsAverageGradeOf5 = data.filter(
        (student) => student.gender === "Female" && student.averageGrade === 5
      );
      console.log("Female student names with an average grade of 5:");
      console.log(femaleStudentsAverageGradeOf5);

      const maleStudentsLiveInSkopjeOver18 = data
        .filter((student) => student.city === "Skopje" && student.age > 18)
        .map((student) => `${student.firstName} ${student.lastName}`);
      console.log(
        "Male student full names who live in Skopje and are over 18 years old:"
      );
      console.log(maleStudentsLiveInSkopjeOver18);

      const femaleStudentsGradesOverTheAgeOf24 = data
        .filter((student) => student.age > 24 && student.gender === "Female")
        .map(
          (student) =>
            `${student.averageGrade} ${student.firstName} ${student.lastName}`
        );
      console.log(
        "The average grades of all female students over the age of 24:"
      );
      console.log(femaleStudentsGradesOverTheAgeOf24);

      const maleStudentsWithNameBAndAvgGradeOver2 = data.filter(
        (student) =>
          student.firstName[0] === "B" &&
          student.averageGrade > 2 &&
          student.gender === "Male"
      );
      console.log(
        "Male students with a name starting with B and average grade over 2:"
      );
      console.log(maleStudentsWithNameBAndAvgGradeOver2);
    });
};

fetchStudent(studentURL);

//- dali moze da se pocne direktno so fetch?

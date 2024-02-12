console.log("Work");

class Academy {
  constructor(name, startDate, endDate) {
    this.name = name;
    this.subjects = [];
    this.students = [];
    this.startDate = startDate;
    this.endDate = endDate;
    this.numberOfClasses = this.subjects.length * 10;
  }

  printStudents() {
    console.log("Students:");
    this.students.forEach((student) => {
      console.log(`${student.firstName} ${student.lastName}`);
    });
  }

  printSubjects() {
    console.log("Subjects:");
    this.subjects.forEach((subject) => {
      console.log(`${subject.title} - Elective: ${subject.isElective}`);
    });
  }
}

class Subject {
  constructor(title, isElective, academy) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = [];
    this.numberOfClasses = 10;
  }

  overrideClasses(number) {
    if (number >= 3) {
      this.numberOfClasses = number;
    } else {
      console.log("Number of classes cannot be smaller than 3.");
    }
  }
}

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  startAcademy(academy) {
    this.academy = academy;
    academy.students.push(this);
  }

  startSubject(subject) {
    if (!this.academy) {
      console.log("The student hasn't started an academy");
      return;
    }

    if (
      this.academy.subjects.filter((sub) => sub.title === subject.title)
        .length == 0
    ) {
      console.log("The subject is not part of the student's academy");
      return;
    }
    this.currentSubject = subject;
  }
}

const mathAcademy = new Academy(
  "Math Academy",
  new Date(2023, 5, 10),
  new Date(2024, 15, 10)
);
const subjectOne = new Subject("Geometry", true, mathAcademy);
const subjectTwoo = new Subject("Algebra", true, mathAcademy);
const subjectThree = new Subject("Trygonometry", true, mathAcademy);

const studentOne = new Student("Petar", "Zafirovski", 25);
const studentTwoo = new Student("Marija", "Ivanovska", 28);
const studentThree = new Student("Sanja", "Trajkovska", 30);

mathAcademy.subjects.push(subjectOne, subjectTwoo, subjectThree);

/*console.log("Academy students:");
console.log(mathAcademy.students);
console.log("Academy subjects:");
console.log(mathAcademy.subjects);*/

studentOne.startAcademy(mathAcademy);
studentTwoo.startAcademy(mathAcademy);
studentThree.startAcademy(mathAcademy);

studentOne.startSubject(subjectOne, subjectTwoo, subjectThree);
studentTwoo.startSubject(subjectOne, subjectTwoo, subjectThree);
studentThree.startSubject(subjectOne, subjectTwoo, subjectThree);

mathAcademy.printStudents();
mathAcademy.printSubjects();
console.log(studentOne, studentTwoo, studentThree);

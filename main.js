class Student {
  constructor(name, surname, age, faculty, degree) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.faculty = faculty;
    this.degree = degree;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} ${this.surname}. I study in ${this.faculty} and I am pursuing a ${this.degree}.`
    );
  }

  changeAge(newAge) {
    this.age = newAge;
    console.log(`${this.name}'s age has been updated to ${this.age}.`);
  }

  changeFaculty(newFaculty) {
    this.faculty = newFaculty;
    console.log(`${this.name} has transferred to the ${this.faculty} faculty.`);
  }
}

class Lecturer extends Student {
  constructor(name, surname, age, faculty, degree, department, title) {
    super(name, surname, age, faculty, degree);
    this.department = department;
    this.title = title;
  }

  introduce() {
    super.introduce();
    console.log(
      `I am also a ${this.title} in the ${this.department} department.`
    );
  }

  promote(newTitle) {
    this.title = newTitle;
    console.log(`${this.name} has been promoted to ${this.title}.`);
  }

  changeDepartment(newDepartment) {
    this.department = newDepartment;
    console.log(`${this.name} now works in the ${this.department} department.`);
  }
}

// Example usage:
const student = new Student("John", "Doe", 20, "Engineering", "Bachelor's");
student.introduce();
student.changeAge(21);

const lecturer = new Lecturer(
  "Jane",
  "Smith",
  34,
  "Business",
  "PhD",
  "Business Management",
  "Professor"
);
lecturer.introduce();
lecturer.promote("Senior Professor");
lecturer.changeDepartment("Advanced Business Studies");

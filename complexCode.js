/*
Filename: complexCode.js
Description: This code demonstrates a complex and sophisticated JavaScript program that implements a student management system for a university.
*/

// Student Class
class Student {
  constructor(id, name, age, courses) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.courses = courses;
  }

  displayStudentInfo() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
  }

  enrollCourse(course) {
    this.courses.push(course);
  }

  dropCourse(course) {
    this.courses = this.courses.filter((c) => c !== course);
  }
}

// Course Class
class Course {
  constructor(code, title, credits, professor) {
    this.code = code;
    this.title = title;
    this.credits = credits;
    this.professor = professor;
  }

  displayCourseInfo() {
    console.log(
      `Code: ${this.code}, Title: ${this.title}, Credits: ${this.credits}, Professor: ${this.professor}`
    );
  }
}

// University Class
class University {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.courses = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(student) {
    this.students = this.students.filter((s) => s.id !== student.id);
  }

  addCourse(course) {
    this.courses.push(course);
  }

  removeCourse(course) {
    this.courses = this.courses.filter((c) => c.code !== course.code);
  }
}

// Create instances of courses
const course1 = new Course("CS101", "Introduction to Computer Science", 3, "Dr. Smith");
const course2 = new Course("MATH201", "Calculus II", 4, "Prof. Johnson");
const course3 = new Course("PHYS202", "Physics II", 4, "Dr. Brown");

// Create instances of students
const student1 = new Student(101, "John Doe", 20, [course1]);
const student2 = new Student(102, "Jane Smith", 19, [course2]);
const student3 = new Student(103, "Alex Johnson", 21, [course1, course3]);

// Create an instance of the university
const university = new University("XYZ University");

// Add courses to the university
university.addCourse(course1);
university.addCourse(course2);
university.addCourse(course3);

// Add students to the university
university.addStudent(student1);
university.addStudent(student2);
university.addStudent(student3);

// Display student information
student1.displayStudentInfo();
student2.displayStudentInfo();
student3.displayStudentInfo();

// Display course information
course1.displayCourseInfo();
course2.displayCourseInfo();
course3.displayCourseInfo();

// Enroll students in additional courses
student1.enrollCourse(course2);
student2.enrollCourse(course3);
student3.enrollCourse(course2);

// Display updated student information
student1.displayStudentInfo();
student2.displayStudentInfo();
student3.displayStudentInfo();

// Drop courses for students
student1.dropCourse(course1);
student2.dropCourse(course2);
student3.dropCourse(course2);

// Remove student from the university
university.removeStudent(student1);

// Remove course from the university
university.removeCourse(course3);
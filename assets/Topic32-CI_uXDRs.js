import{r as s,j as e}from"./index-CZ43a81g.js";import{E as t}from"./EditableCodeBlock-DwL4Jb9v.js";import"./index-PEvkwhGW.js";import"./braces-DH3VCkS4.js";import"./file-code-eIIiaVan.js";import"./layout-list-mxYsvMl1.js";import"./play-BST6TIVX.js";import"./type-BbvUXNU_.js";import"./refresh-cw-DzOvX6Wp.js";import"./wand-sparkles-CzbUcbhB.js";import"./copy-BjNRK02q.js";import"./download-CNCNpCMb.js";import"./eye-off-CBqOqMtt.js";import"./eye-CrP0Jl2h.js";class f extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 32 – super() keyword and method overriding"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using super() in constructor
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log("Hi, I am " + this.name);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name); // calls Person constructor
    this.course = course;
  }

  introduce() {
    console.log(
      "Hi, I am " + this.name + ", learning " + this.course
    );
  }
}

const s1 = new Student("Ritaja", "Python");
s1.introduce();`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Calling parent method using super
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  introduce() {
    super.introduce(); // call Person's introduce
    console.log("I teach " + this.subject);
  }
}

const t1 = new Teacher("Sukanta Hui", "JavaScript");
t1.introduce();`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Overriding method with extra behaviour
class Course {
  constructor(title) {
    this.title = title;
  }

  getInfo() {
    console.log("Course:", this.title);
  }
}

class PaidCourse extends Course {
  constructor(title, fees) {
    super(title);
    this.fees = fees;
  }

  getInfo() {
    super.getInfo();
    console.log("Fees:", this.fees);
  }
}

const c = new PaidCourse("Tally with GST", 8000);
c.getInfo();`})]})}}export{f as default};

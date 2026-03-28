import{r as s,j as e}from"./index-D-07m6Qb.js";import{E as t}from"./EditableCodeBlock-D-qnnTgn.js";import"./index-BLtpQgbQ.js";import"./braces-C_CY9Jv1.js";import"./file-code-n9BmD-WT.js";import"./layout-list-xlk1srMZ.js";import"./play-4rBxpZha.js";import"./type-BEuENsNe.js";import"./refresh-cw-DVel-Kgx.js";import"./wand-sparkles-DlwyMtB_.js";import"./copy-BeFV_rGJ.js";import"./download-B_C6cj02.js";import"./eye-off-Ddhut9lm.js";import"./eye-DnmUWsTr.js";class f extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 32 – super() keyword and method overriding"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Using super() in constructor
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

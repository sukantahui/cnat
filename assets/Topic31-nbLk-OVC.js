import{r as t,j as e}from"./index-CAtQrb46.js";import{E as s}from"./EditableCodeBlock-Endlh4BJ.js";import"./index-BTn8_2IB.js";import"./braces-CIXPcrkS.js";import"./file-code-B6K736nA.js";import"./layout-list-BrfTy_vy.js";import"./play-BfF9cX7d.js";import"./type-FP9ki28_.js";import"./refresh-cw-C8MlfI49.js";import"./wand-sparkles-B49g6OCS.js";import"./copy-Br1dq4Gp.js";import"./download-lFgP8-S1.js";import"./eye-off-x5FKiRiK.js";import"./eye-ffdEEBtZ.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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
    super(name); // call Person constructor
    this.course = course;
  }

  showCourse() {
    console.log(this.name + " is learning " + this.course);
  }
}

const s1 = new Student("Kaustav", "JavaScript");
s1.introduce();
s1.showCourse();`}),e.jsx(s,{language:"javascript",initialCode:`// Example 2: Teacher extending Person
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log(
      this.name + " is teaching " + this.subject
    );
  }
}

const t1 = new Teacher("Sukanta Hui", "Full Stack Development");
t1.introduce();
t1.teach();`}),e.jsx(s,{language:"javascript",initialCode:`// Example 3: Multi-level conceptual chain
class Admin extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
}

const a1 = new Admin("Tanusree Hui", "Academic Coordinator");
a1.introduce();
console.log(a1.role);`})]})}}export{v as default};

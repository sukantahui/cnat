import{r as t,j as e}from"./index-Czk7a0H9.js";import{E as s}from"./EditableCodeBlock-DLr33n0W.js";import"./index-CJqZRYro.js";import"./braces-emhnIJoT.js";import"./file-code-BODUuMKp.js";import"./layout-list-CnB_ewbf.js";import"./play-BsM0fxjP.js";import"./refresh-cw-ByFo7dKk.js";import"./wand-sparkles-B7hPkNvM.js";import"./copy-BF03oyX4.js";import"./download-HY43MXCi.js";class x extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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
console.log(a1.role);`})]})}}export{x as default};

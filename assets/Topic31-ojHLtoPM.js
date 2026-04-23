import{r as t,j as e}from"./index-29x6CIxg.js";import{E as s}from"./EditableCodeBlock-BwSJC4Iq.js";import"./index-C9bfmqVU.js";import"./braces-vDm8NKs9.js";import"./file-code-CA9Wnnsl.js";import"./layout-list-CW4VLJGk.js";import"./play-CXfWgowW.js";import"./type-CUvrbdtJ.js";import"./refresh-cw-DkCi0I10.js";import"./wand-sparkles-C_FtQZFz.js";import"./copy-slB2T7Ka.js";import"./download-BQPfbLQ1.js";import"./eye-off-xoXN48Nq.js";import"./eye-IbEK5vHC.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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

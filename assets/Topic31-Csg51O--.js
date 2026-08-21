import{r as t,j as e}from"./index-DCfh6IuU.js";import{E as s}from"./EditableCodeBlock-DKgsNvCS.js";import"./index-BdMIyi3U.js";import"./braces-CJluQm80.js";import"./createLucideIcon-JrHpk1sJ.js";import"./file-code-CnNuUJDx.js";import"./layout-list-CRL7bmJ6.js";import"./play-DUoF7fvh.js";import"./type-CWtCwXrW.js";import"./refresh-cw-DbpJU27z.js";import"./minimize-2-Dt9IO6SX.js";import"./wand-sparkles-DH0hT6aL.js";import"./copy-vxMnYODG.js";import"./download-CmPUNbCV.js";import"./eye-off-C4c4AayT.js";import"./eye-LnBEFR8Z.js";class E extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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
console.log(a1.role);`})]})}}export{E as default};

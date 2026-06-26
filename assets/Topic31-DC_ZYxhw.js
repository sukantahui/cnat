import{r as t,j as e}from"./index-C0mc_94R.js";import{E as s}from"./EditableCodeBlock-CO_xpaJa.js";import"./index-BaB5qTdC.js";import"./braces-Bw_E-mIF.js";import"./file-code-CJeM1EF0.js";import"./layout-list-CMZ-_utf.js";import"./play-BLZBdi5J.js";import"./type-BEWqtl1P.js";import"./refresh-cw-CNrstThT.js";import"./wand-sparkles-BqUKSHiN.js";import"./copy-CnQzJ4pm.js";import"./download-BpjOkBnV.js";import"./eye-off-2ljZTxvF.js";import"./eye-BmfNfNBT.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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

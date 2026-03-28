import{r as t,j as e}from"./index-wvAt8vmb.js";import{E as s}from"./EditableCodeBlock-6r1vjwD0.js";import"./index-l2GzpozC.js";import"./braces-B708gsEn.js";import"./file-code-DFKBVAqD.js";import"./layout-list-XJn3Fo4r.js";import"./play-DdYW9kso.js";import"./type-CpCJUiFu.js";import"./refresh-cw-XWoXFms7.js";import"./wand-sparkles-CSy20oXK.js";import"./copy-D0HGvqkI.js";import"./download-Cryk3QyC.js";import"./eye-off-BDmx55jF.js";import"./eye-DldtRLdS.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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

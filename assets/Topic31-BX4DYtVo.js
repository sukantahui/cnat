import{r as t,j as e}from"./index-Ofv5BQah.js";import{E as s}from"./EditableCodeBlock-BooQLP_-.js";import"./index-D36xJsVZ.js";import"./braces-By7M1Gf_.js";import"./file-code-8pJVigLi.js";import"./layout-list-CPzIh9-w.js";import"./play-CTTz1uQm.js";import"./type-BS4-Nv9e.js";import"./refresh-cw-Dc_FYhXA.js";import"./wand-sparkles-Clz0lJ4T.js";import"./copy-CvjPxglF.js";import"./download-BK3b5Z3K.js";import"./eye-off-DAXY-jPY.js";import"./eye-D1L16zRR.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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

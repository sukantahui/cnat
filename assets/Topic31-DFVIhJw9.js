import{r as t,j as e}from"./index-CK4WUhpx.js";import{E as s}from"./EditableCodeBlock-eQkDJKZF.js";import"./index-s7j91j2a.js";import"./createLucideIcon--yS5sPo-.js";import"./braces-6524uQsV.js";import"./file-code-CDbVQmeK.js";import"./layout-list-Cl8lmIC1.js";import"./play-CGI8rN0h.js";import"./type-DD2SMkRe.js";import"./refresh-cw-BeQoxRgF.js";import"./wand-sparkles-CzGmHgG3.js";import"./copy-dX76-Zhw.js";import"./download-CvyilHOI.js";import"./eye-off-wSbFtSgN.js";import"./eye-BOx9f4_I.js";class C extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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
console.log(a1.role);`})]})}}export{C as default};

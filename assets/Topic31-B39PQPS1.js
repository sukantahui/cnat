import{r as t,j as e}from"./index-CEi3MejZ.js";import{E as s}from"./EditableCodeBlock-B9CEyPk-.js";import"./index-DGMSD45Y.js";import"./braces-BsqYHHds.js";import"./file-code-IbumbsCL.js";import"./layout-list-CmqX5CH8.js";import"./play-CmCCpFJ2.js";import"./type-CHzqVR_S.js";import"./refresh-cw-DZh_673z.js";import"./wand-sparkles-FsbK9ZnO.js";import"./copy-CUN0BOtx.js";import"./download-CECieF2h.js";import"./eye-off-BWck3tUN.js";import"./eye-r6DttwNd.js";class v extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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

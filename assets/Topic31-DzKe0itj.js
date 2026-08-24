import{r as t,j as e}from"./index-DQGlkDD-.js";import{E as s}from"./EditableCodeBlock-Dul0rTuD.js";import"./index-B5Ou1maK.js";import"./braces-DgkICGBe.js";import"./createLucideIcon-DkPaqQ-z.js";import"./file-code-BwO1T2yj.js";import"./layout-list-BRQeVJ0A.js";import"./play-C4es742M.js";import"./type-CTZVU0g7.js";import"./refresh-cw-wfEx28Pg.js";import"./minimize-2-tRCtfalc.js";import"./wand-sparkles-CHXCoPE3.js";import"./copy-Ccnlqc-p.js";import"./download-CLfZxcrH.js";import"./eye-off-CtfkpLSn.js";import"./eye-DYTRtkpQ.js";class E extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 31 – Class inheritance using extends"}),e.jsx(s,{language:"javascript",initialCode:`// Example 1: Base class + derived class
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

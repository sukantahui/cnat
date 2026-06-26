import{r as i,j as e}from"./index-UqT5O8p1.js";import{E as t}from"./EditableCodeBlock-D1QxZRLF.js";import"./index-CRrCmYP9.js";import"./braces-D0k6ct2r.js";import"./file-code-z_zr8Z5q.js";import"./layout-list-Cr_A3clc.js";import"./play-DU1uhUCi.js";import"./type-DOuT4SB5.js";import"./refresh-cw-Doiqk7xS.js";import"./wand-sparkles-BREyXTJS.js";import"./copy-BzqaPhIG.js";import"./download-zj_8ehaG.js";import"./eye-off-D47L_t_g.js";import"./eye-FKL9EooF.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
const student = {
  name: "Ritaja",
  course: "JavaScript",
  introduce: function () {
    console.log("Hello, I am " + this.name + ", learning " + this.course);
  },
};

student.introduce();`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: this inside another object
const teacher = {
  name: "Sukanta Hui",
  subject: "Full Stack Development",
  greet() {
    console.log("Hi, I am " + this.name + ", I teach " + this.subject + ".");
  },
};

teacher.greet();`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Losing this when we copy method reference
const institute = {
  name: "Coder & AccoTax",
  sayName() {
    console.log("Institute:", this.name);
  },
};

institute.sayName(); // works

const fn = institute.sayName;
fn(); // this is now undefined or window (in non-strict mode)`})]})}}export{f as default};

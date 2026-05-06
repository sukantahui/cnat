import{r as i,j as e}from"./index-CA8TNF9q.js";import{E as t}from"./EditableCodeBlock-D19ZyosX.js";import"./index-C4QWIY9d.js";import"./braces-DLulIgEJ.js";import"./file-code-D-G6C0cs.js";import"./layout-list-Bkf0ewxw.js";import"./play-Q15FUXyc.js";import"./type-Cv5vcz8o.js";import"./refresh-cw-DG8SgGrE.js";import"./wand-sparkles--Ul1pC_O.js";import"./copy-BjPaPwc6.js";import"./download-DfUNGLMk.js";import"./eye-off-bTjZ_r81.js";import"./eye-DHELtmKC.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

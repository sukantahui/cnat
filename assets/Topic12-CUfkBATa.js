import{r as i,j as e}from"./index-DdIeXD-l.js";import{E as t}from"./EditableCodeBlock-BAy3Nt_i.js";import"./index-BdoLMGZR.js";import"./braces-nhaegIUG.js";import"./file-code--W0N4Eit.js";import"./layout-list-Ckv48IVv.js";import"./play-D8Z08dyf.js";import"./type-DKKgNEdL.js";import"./refresh-cw-CG3J9k9V.js";import"./wand-sparkles-1ucm4P_f.js";import"./copy-CsH9Jtu6.js";import"./download-NywCF-VW.js";import"./eye-off-VC3tTGtH.js";import"./eye-DKQdLRA-.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

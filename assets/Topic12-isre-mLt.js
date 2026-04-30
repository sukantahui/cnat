import{r as i,j as e}from"./index-sRNy85CP.js";import{E as t}from"./EditableCodeBlock-DkTjT620.js";import"./index-7n4CaZPm.js";import"./braces-BS8kdTzg.js";import"./file-code-DMLUJpKI.js";import"./layout-list-DUaVKPXn.js";import"./play-BJtPkSLX.js";import"./type-D4P2k3xa.js";import"./refresh-cw-DnRLB-ho.js";import"./wand-sparkles-CnWoS0P-.js";import"./copy-DVtYfKkO.js";import"./download-K3JAF1JL.js";import"./eye-off-qPvddMEU.js";import"./eye-C3vdhIj7.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

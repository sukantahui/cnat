import{r as i,j as e}from"./index-CAtQrb46.js";import{E as t}from"./EditableCodeBlock-Endlh4BJ.js";import"./index-BTn8_2IB.js";import"./braces-CIXPcrkS.js";import"./file-code-B6K736nA.js";import"./layout-list-BrfTy_vy.js";import"./play-BfF9cX7d.js";import"./type-FP9ki28_.js";import"./refresh-cw-C8MlfI49.js";import"./wand-sparkles-B49g6OCS.js";import"./copy-Br1dq4Gp.js";import"./download-lFgP8-S1.js";import"./eye-off-x5FKiRiK.js";import"./eye-ffdEEBtZ.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

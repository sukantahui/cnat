import{r as i,j as e}from"./index-BUy46d85.js";import{E as t}from"./EditableCodeBlock-BU_9eRKt.js";import"./index-Wffsjc5d.js";import"./braces-Dh0in3Jg.js";import"./file-code-nrMSEUaW.js";import"./layout-list-COxRGkdF.js";import"./play-BZ6-0TUg.js";import"./type-DOScrZC9.js";import"./refresh-cw-D03e4WEg.js";import"./wand-sparkles-yHNiji4L.js";import"./copy-BHqStXkB.js";import"./download-pP2P7k24.js";import"./eye-off-DuajroIQ.js";import"./eye-DYvhylzj.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

import{r as i,j as e}from"./index-DaJZPAzN.js";import{E as t}from"./EditableCodeBlock-DPY6mffP.js";import"./index-BNRMmMjw.js";import"./braces-BlnKo9xV.js";import"./file-code-DVrGLACy.js";import"./layout-list-DEPOVFNL.js";import"./play-_VBtPl4R.js";import"./type-B8EDvMMZ.js";import"./refresh-cw-CqFIfL8c.js";import"./wand-sparkles-AgK1WDy3.js";import"./copy-Q2INuC-O.js";import"./download-CQzh5qwM.js";import"./eye-off-C4T7emjA.js";import"./eye-BWQFOqkh.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

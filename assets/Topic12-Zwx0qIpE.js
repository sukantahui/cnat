import{r as i,j as e}from"./index-BqAFCp1G.js";import{E as t}from"./EditableCodeBlock-BTRQ-U14.js";import"./index-DlA8mtx2.js";import"./braces-iTYwY2KK.js";import"./file-code-CAr2FrfU.js";import"./layout-list-DtPLdNuI.js";import"./play-CJzmY6wB.js";import"./type-CPbU9-ly.js";import"./refresh-cw-Du2h8_Si.js";import"./wand-sparkles-BGmg0nCA.js";import"./copy-BGUeFV3f.js";import"./download-BZTnZbA3.js";import"./eye-off-D5-mJsNT.js";import"./eye-CMjhfnF0.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

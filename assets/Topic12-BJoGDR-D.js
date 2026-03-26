import{r as i,j as e}from"./index-C5Nbbk6-.js";import{E as t}from"./EditableCodeBlock-Bte-O7k4.js";import"./index-ClHeBgp3.js";import"./braces-CxhkSqhy.js";import"./file-code-DKQbcCKH.js";import"./layout-list-F0chhMfF.js";import"./play--xjmOV9C.js";import"./type-DhDX8m8R.js";import"./refresh-cw-BNltxj78.js";import"./wand-sparkles-DqlY1Ycm.js";import"./copy-DRodcmmM.js";import"./download-6yOraGoh.js";import"./eye-off-kqkFbjqx.js";import"./eye-mkgdQ3p8.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

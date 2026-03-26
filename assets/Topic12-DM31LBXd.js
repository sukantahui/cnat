import{r as i,j as e}from"./index-nd0Xa-ab.js";import{E as t}from"./EditableCodeBlock-CallMWXv.js";import"./index-CGY8MZgm.js";import"./braces-CmuvDsVd.js";import"./file-code-Ce3qRK9I.js";import"./layout-list-pRcTrgEK.js";import"./play-DB3kfkYa.js";import"./type-CKt7De8f.js";import"./refresh-cw-DR3WFbdt.js";import"./wand-sparkles-C8RXRKnG.js";import"./copy-DxjiEBv9.js";import"./download-DtkPSF8Q.js";import"./eye-off-GoiJ7jr5.js";import"./eye-lb2KaMq3.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

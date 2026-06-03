import{r as i,j as e}from"./index-DjvKv1PW.js";import{E as t}from"./EditableCodeBlock-BlZlbjKz.js";import"./index-mK8ZHsz4.js";import"./braces-BlLLiYmy.js";import"./file-code-DSSEGoLv.js";import"./layout-list-CYZIKdtw.js";import"./play-BnSU7xNV.js";import"./type-BIKbBNNa.js";import"./refresh-cw-ivyghxCZ.js";import"./wand-sparkles-TALHM6O8.js";import"./copy-CLZJQYx-.js";import"./download-Do58wzLY.js";import"./eye-off-DACqBnbL.js";import"./eye-DhOQz1FO.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

import{r as i,j as e}from"./index-zoleORG0.js";import{E as t}from"./EditableCodeBlock-DnUTwdHm.js";import"./index-DaCgRqBW.js";import"./braces-DNVNm8By.js";import"./file-code-CYf5TbHj.js";import"./layout-list-Bh183qU5.js";import"./play-DnJZKzJ4.js";import"./type-01gFDPU2.js";import"./refresh-cw-H932oURx.js";import"./wand-sparkles-Cq6xiFFM.js";import"./copy-DnHNBSbf.js";import"./download-DXpbFnt0.js";import"./eye-off-D_7vqU7y.js";import"./eye-C2NjizJX.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

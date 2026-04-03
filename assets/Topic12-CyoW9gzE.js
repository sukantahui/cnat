import{r as i,j as e}from"./index-BjcB6RzK.js";import{E as t}from"./EditableCodeBlock-BnZJq8KW.js";import"./index-DMsSvuEi.js";import"./braces-rmDTwsn1.js";import"./file-code-F5fHsy3u.js";import"./layout-list-DXswQ4wB.js";import"./play-DX16GKke.js";import"./type-KuLbSU6d.js";import"./refresh-cw-BiBGBwpy.js";import"./wand-sparkles-_OjV9jqi.js";import"./copy-DI4a0ux7.js";import"./download-D9OBzpJs.js";import"./eye-off-BvUSmI0w.js";import"./eye-CPtAr_i7.js";class f extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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

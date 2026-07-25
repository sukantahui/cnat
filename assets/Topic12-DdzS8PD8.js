import{r as i,j as e}from"./index-D8vKF2mq.js";import{E as t}from"./EditableCodeBlock-DiAh0cAP.js";import"./index-_VvknCR5.js";import"./createLucideIcon-DTJ5VPt2.js";import"./braces-BXpH0v-S.js";import"./file-code-C52313Dl.js";import"./layout-list-BkZm_8W0.js";import"./play-ZVoUkbUG.js";import"./type-PC3P0vgv.js";import"./refresh-cw-DcvlgmPw.js";import"./wand-sparkles-C0teRuqT.js";import"./copy-bDAEzVP3.js";import"./download-BaqyJosE.js";import"./eye-off-BL0ZDN6q.js";import"./eye-Dvwj4G7q.js";class b extends i.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 12 – The this keyword inside objects (beginner-friendly)"}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: this refers to the current object
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
fn(); // this is now undefined or window (in non-strict mode)`})]})}}export{b as default};

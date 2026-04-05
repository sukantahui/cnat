import{r as o,j as t}from"./index-CiucDjKk.js";import{E as e}from"./EditableCodeBlock-BYSSzxKJ.js";import"./index-CpCb3E_X.js";import"./braces-BQZVHMtl.js";import"./file-code-BnWMtMm-.js";import"./layout-list-DysuKicz.js";import"./play-B4TXEWqb.js";import"./type-COTgqaDv.js";import"./refresh-cw-V8JttSZQ.js";import"./wand-sparkles-NnSw4MJA.js";import"./copy-CGs2rQAh.js";import"./download-D8pjhHSm.js";import"./eye-off-Ln5aLgun.js";import"./eye-z1nKQA9f.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
const student = {
  name: "Susmita",
  course: "Python",
  batch: "Evening",
};

for (let key in student) {
  console.log(key, ":", student[key]);
}`}),t.jsx(e,{language:"javascript",initialCode:`// Example 2: Filtering only own properties
const proto = { center: "Coder & AccoTax" };
const student = Object.create(proto);
student.name = "Kaustav";
student.course = "React";

for (let key in student) {
  if (student.hasOwnProperty(key)) {
    console.log("Own:", key, "-", student[key]);
  } else {
    console.log("From prototype:", key, "-", student[key]);
  }
}`}),t.jsx(e,{language:"javascript",initialCode:`// Example 3: Counting properties
const result = {
  correct: 28,
  wrong: 2,
  skipped: 5,
};

let count = 0;
for (let key in result) {
  count++;
}
console.log("Total properties:", count);`})]})}}export{k as default};

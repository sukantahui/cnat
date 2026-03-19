import{r as o,j as t}from"./index-BQdS2coH.js";import{E as e}from"./EditableCodeBlock-DRSjOVcP.js";import"./index-D2yM79AS.js";import"./createLucideIcon-Cbd0m0Yd.js";import"./braces-K52Ky_HV.js";import"./file-code-BM1RMzw0.js";import"./layout-list-DeS6Frv6.js";import"./play-LnkqUnKT.js";import"./type-C3qLbx7F.js";import"./refresh-cw-bMDcp0Zn.js";import"./wand-sparkles-BDhxjDBx.js";import"./copy-CjyOS0_w.js";import"./download-DUx_cB4q.js";import"./eye-off-CQ9veCYt.js";import"./eye-BDBktcqH.js";class f extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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
console.log("Total properties:", count);`})]})}}export{f as default};

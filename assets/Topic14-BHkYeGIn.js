import{r as o,j as t}from"./index-UqT5O8p1.js";import{E as e}from"./EditableCodeBlock-D1QxZRLF.js";import"./index-CRrCmYP9.js";import"./braces-D0k6ct2r.js";import"./file-code-z_zr8Z5q.js";import"./layout-list-Cr_A3clc.js";import"./play-DU1uhUCi.js";import"./type-DOuT4SB5.js";import"./refresh-cw-Doiqk7xS.js";import"./wand-sparkles-BREyXTJS.js";import"./copy-BzqaPhIG.js";import"./download-zj_8ehaG.js";import"./eye-off-D47L_t_g.js";import"./eye-FKL9EooF.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

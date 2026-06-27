import{r as o,j as t}from"./index-CNNP-EED.js";import{E as e}from"./EditableCodeBlock-BIX_SGmv.js";import"./index-B_hKKDE8.js";import"./braces-QBjObA3O.js";import"./file-code-D8YGDSR0.js";import"./layout-list-CeTmCPSq.js";import"./play-DAKE_zJf.js";import"./type-BjJFPXAY.js";import"./refresh-cw-DrD0jpdY.js";import"./wand-sparkles-BlZq3NP9.js";import"./copy-BQOvbT5P.js";import"./download-COgPc9qQ.js";import"./eye-off-BSiLqLab.js";import"./eye-Q1EsGrCZ.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

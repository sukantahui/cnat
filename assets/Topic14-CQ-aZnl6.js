import{r as o,j as t}from"./index-YH4u--c0.js";import{E as e}from"./EditableCodeBlock-Q8IwGjXb.js";import"./index-C88JtG2I.js";import"./createLucideIcon-D7phWlUA.js";import"./braces-DEe5lwLV.js";import"./file-code-CdZAdXD5.js";import"./layout-list-H4xfDoOD.js";import"./play-BWUk_zaa.js";import"./type-BAYKHREU.js";import"./refresh-cw-B0Wn9xOb.js";import"./wand-sparkles-CbGYnnZt.js";import"./copy-D-9DuOQr.js";import"./download-Bn-I9ybH.js";import"./eye-off-BiNxchX8.js";import"./eye-7zfXSrAZ.js";class f extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

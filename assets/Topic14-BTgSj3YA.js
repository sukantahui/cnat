import{r as o,j as t}from"./index-BqAFCp1G.js";import{E as e}from"./EditableCodeBlock-BTRQ-U14.js";import"./index-DlA8mtx2.js";import"./braces-iTYwY2KK.js";import"./file-code-CAr2FrfU.js";import"./layout-list-DtPLdNuI.js";import"./play-CJzmY6wB.js";import"./type-CPbU9-ly.js";import"./refresh-cw-Du2h8_Si.js";import"./wand-sparkles-BGmg0nCA.js";import"./copy-BGUeFV3f.js";import"./download-BZTnZbA3.js";import"./eye-off-D5-mJsNT.js";import"./eye-CMjhfnF0.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

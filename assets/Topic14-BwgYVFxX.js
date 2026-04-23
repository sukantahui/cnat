import{r as o,j as t}from"./index-Ci-Q4Ner.js";import{E as e}from"./EditableCodeBlock-dZSFwXIZ.js";import"./index-BovWnrwo.js";import"./braces-D0GgDFCR.js";import"./file-code-cjFDZoet.js";import"./layout-list-CNeoJZsF.js";import"./play-CUvMdlUb.js";import"./type-BkofYUDL.js";import"./refresh-cw-DVq0w9yy.js";import"./wand-sparkles-BImX2qU-.js";import"./copy-CVYVE7uU.js";import"./download-D2yIxL3J.js";import"./eye-off-CfVEqTtg.js";import"./eye-DWv5isVy.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

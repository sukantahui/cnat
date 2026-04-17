import{r as o,j as t}from"./index-BRgF9Sn_.js";import{E as e}from"./EditableCodeBlock-BSYSE1eB.js";import"./index-DvYWLWqh.js";import"./braces-C2O22zC6.js";import"./file-code-o1Hy4L4z.js";import"./layout-list-zt_zlr8a.js";import"./play-Bb7zVNPi.js";import"./type-BRYqmicC.js";import"./refresh-cw-CaoC4Shd.js";import"./wand-sparkles-CfmzZUiR.js";import"./copy-CDhUMioL.js";import"./download-DMi3i45B.js";import"./eye-off-BUnbpOm_.js";import"./eye-C7r0Hfxm.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

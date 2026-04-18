import{r as o,j as t}from"./index-CTaFCVvl.js";import{E as e}from"./EditableCodeBlock-KOhOfWQC.js";import"./index-RG1_EAcX.js";import"./braces-DR1B3IWk.js";import"./file-code-DdaZ0WP2.js";import"./layout-list-BRs4SSFE.js";import"./play-rkdgOENq.js";import"./type-Wnld5au3.js";import"./refresh-cw-ClGJKkyE.js";import"./wand-sparkles-Dq-Tbn4Z.js";import"./copy-DY-fjKN5.js";import"./download-CVsa0i-2.js";import"./eye-off-DQCWcKuS.js";import"./eye-RMvPMGzV.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

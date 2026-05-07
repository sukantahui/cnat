import{r as o,j as t}from"./index-Ofv5BQah.js";import{E as e}from"./EditableCodeBlock-BooQLP_-.js";import"./index-D36xJsVZ.js";import"./braces-By7M1Gf_.js";import"./file-code-8pJVigLi.js";import"./layout-list-CPzIh9-w.js";import"./play-CTTz1uQm.js";import"./type-BS4-Nv9e.js";import"./refresh-cw-Dc_FYhXA.js";import"./wand-sparkles-Clz0lJ4T.js";import"./copy-CvjPxglF.js";import"./download-BK3b5Z3K.js";import"./eye-off-DAXY-jPY.js";import"./eye-D1L16zRR.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

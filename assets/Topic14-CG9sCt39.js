import{r as o,j as t}from"./index-C5Nbbk6-.js";import{E as e}from"./EditableCodeBlock-Bte-O7k4.js";import"./index-ClHeBgp3.js";import"./braces-CxhkSqhy.js";import"./file-code-DKQbcCKH.js";import"./layout-list-F0chhMfF.js";import"./play--xjmOV9C.js";import"./type-DhDX8m8R.js";import"./refresh-cw-BNltxj78.js";import"./wand-sparkles-DqlY1Ycm.js";import"./copy-DRodcmmM.js";import"./download-6yOraGoh.js";import"./eye-off-kqkFbjqx.js";import"./eye-mkgdQ3p8.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

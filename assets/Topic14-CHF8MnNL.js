import{r as o,j as t}from"./index-COd1BgDP.js";import{E as e}from"./EditableCodeBlock-DDnNgAGW.js";import"./index-C6PolHK9.js";import"./braces-CBYgV3Zs.js";import"./file-code-CL2zX7Xy.js";import"./layout-list-CuGgqLN_.js";import"./play-jI2NV5Sw.js";import"./type-DzEAaeRI.js";import"./refresh-cw-CkNx_mLp.js";import"./wand-sparkles-7p46q3hG.js";import"./copy-CkJm4ude.js";import"./download-XOywrey6.js";import"./eye-off-sWV9Qimf.js";import"./eye-D4RF8Ay-.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

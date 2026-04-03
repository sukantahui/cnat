import{r as o,j as t}from"./index-2tOzkblz.js";import{E as e}from"./EditableCodeBlock-CU1q7wlK.js";import"./index-BNO_0XMv.js";import"./braces-BF58I9kY.js";import"./file-code-DBePoNRe.js";import"./layout-list-CquVXYkx.js";import"./play-PNWXmE5L.js";import"./type-Cfr7geYK.js";import"./refresh-cw-uClETiBf.js";import"./wand-sparkles-BJlyx_Dq.js";import"./copy-CbL44MIv.js";import"./download-BfzMDmZO.js";import"./eye-off-BqsY3cZ6.js";import"./eye-BTz061w4.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

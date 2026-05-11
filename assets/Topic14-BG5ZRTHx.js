import{r as o,j as t}from"./index-D2oyZ1_5.js";import{E as e}from"./EditableCodeBlock-C7as2P9H.js";import"./index-D5TCWeEA.js";import"./braces-WZIYXDaQ.js";import"./file-code-1o3nobi9.js";import"./layout-list-B67Unsx-.js";import"./play-abl2IrEY.js";import"./type-H7d3bXn1.js";import"./refresh-cw-WPTBV80K.js";import"./wand-sparkles-jLNc7dpD.js";import"./copy-BCvCdePc.js";import"./download-DK6fs-E5.js";import"./eye-off-VLWNiJzP.js";import"./eye-DsKiv6FO.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

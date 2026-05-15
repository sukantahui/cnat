import{r as o,j as t}from"./index-CRQVh4re.js";import{E as e}from"./EditableCodeBlock-By7tVRU-.js";import"./index-C9ustuPO.js";import"./braces-koYBCYVL.js";import"./file-code-CDWWe15K.js";import"./layout-list-B8Q7FCNK.js";import"./play-I4WOjbVK.js";import"./type-DPaMVfx8.js";import"./refresh-cw-DGCj3_No.js";import"./wand-sparkles-CStrf0ZC.js";import"./copy-Bmu3Bn8U.js";import"./download-DfwRCjzX.js";import"./eye-off-Dht_vehv.js";import"./eye-DF2o32X7.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

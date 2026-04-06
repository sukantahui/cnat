import{r as o,j as t}from"./index-zoleORG0.js";import{E as e}from"./EditableCodeBlock-DnUTwdHm.js";import"./index-DaCgRqBW.js";import"./braces-DNVNm8By.js";import"./file-code-CYf5TbHj.js";import"./layout-list-Bh183qU5.js";import"./play-DnJZKzJ4.js";import"./type-01gFDPU2.js";import"./refresh-cw-H932oURx.js";import"./wand-sparkles-Cq6xiFFM.js";import"./copy-DnHNBSbf.js";import"./download-DXpbFnt0.js";import"./eye-off-D_7vqU7y.js";import"./eye-C2NjizJX.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

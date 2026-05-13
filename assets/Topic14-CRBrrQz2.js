import{r as o,j as t}from"./index-D_KlGz35.js";import{E as e}from"./EditableCodeBlock-mdOsWep6.js";import"./index-MbyvR6yE.js";import"./braces-DnfJOtXk.js";import"./file-code-lN5fgqEG.js";import"./layout-list-BIyAErvJ.js";import"./play-BVZg1uWR.js";import"./type-ytyKR7yC.js";import"./refresh-cw-DDdaBWS7.js";import"./wand-sparkles-6fXvIon5.js";import"./copy-BdC4UZjE.js";import"./download-Bc-rEhNs.js";import"./eye-off-DCZGEJpk.js";import"./eye-DkV-DCco.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

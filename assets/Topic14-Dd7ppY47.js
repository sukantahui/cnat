import{r as o,j as t}from"./index-BpX9yBGC.js";import{E as e}from"./EditableCodeBlock-BqgxeSUp.js";import"./index-DZzRudEq.js";import"./braces-BbI-6Ty8.js";import"./file-code-DekqbYpd.js";import"./layout-list-B_IFuJft.js";import"./play-DH_OxpbG.js";import"./type-Dp2t6Gfg.js";import"./refresh-cw-BzjppSKX.js";import"./wand-sparkles-C6YIgSRk.js";import"./copy-DyUhmCDX.js";import"./download-Cy_wnQFp.js";import"./eye-off-DCaPhBkD.js";import"./eye-DZru3oP4.js";class k extends o.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 14 – Iterating objects: for...in loop"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Basic for...in over object
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

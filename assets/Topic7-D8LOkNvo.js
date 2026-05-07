import{r as o,j as e}from"./index-BV1ec7QU.js";import{E as t}from"./EditableCodeBlock-DKzWiRl8.js";import"./index-FAc0gMmj.js";import"./braces-hctkfZFQ.js";import"./file-code-De99tvSp.js";import"./layout-list-B9EBcVRh.js";import"./play-dfkZtFjp.js";import"./type-Doxm7eCO.js";import"./refresh-cw-DES3yxy7.js";import"./wand-sparkles-CAvweH_1.js";import"./copy-0c2DUKQV.js";import"./download-r_U-JfHh.js";import"./eye-off-CIjwHbUc.js";import"./eye-DgGc0zhY.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 7 – Accessing properties: dot vs bracket notation"}),e.jsxs("p",{children:["You can access object properties using ",e.jsx("b",{children:"dot notation"})," or"," ",e.jsx("b",{children:"bracket notation"}),". Bracket notation is useful when the property name is dynamic or not a valid identifier."]}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Dot vs bracket notation
const student = {
  name: "Swadeep",
  "favorite-subject": "Python",
  batch: "Weekend",
};

console.log(student.name);               // dot
console.log(student["favorite-subject"]); // bracket
console.log(student["batch"]);`}),e.jsx(t,{language:"javascript",initialCode:`// Example 2: Dynamic property access using bracket notation
const scores = {
  Ritaja: 95,
  Mounita: 90,
  Kaustav: 88,
};

const selectedName = "Kaustav";

console.log(scores.selectedName);     // undefined (literal key)
console.log(scores[selectedName]);    // 88 (dynamic key)`}),e.jsx(t,{language:"javascript",initialCode:`// Example 3: Accessing properties with spaces or special characters
const institute = {
  name: "Coder & AccoTax",
  "iso-certified": true,
  "full address": "Barrackpore",
};

console.log(institute.name);
console.log(institute["iso-certified"]);
console.log(institute["full address"]);`})]})}}export{f as default};

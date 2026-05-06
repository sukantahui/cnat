import{r as o,j as e}from"./index-CA8TNF9q.js";import{E as t}from"./EditableCodeBlock-D19ZyosX.js";import"./index-C4QWIY9d.js";import"./braces-DLulIgEJ.js";import"./file-code-D-G6C0cs.js";import"./layout-list-Bkf0ewxw.js";import"./play-Q15FUXyc.js";import"./type-Cv5vcz8o.js";import"./refresh-cw-DG8SgGrE.js";import"./wand-sparkles--Ul1pC_O.js";import"./copy-BjPaPwc6.js";import"./download-DfUNGLMk.js";import"./eye-off-bTjZ_r81.js";import"./eye-DHELtmKC.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 7 – Accessing properties: dot vs bracket notation"}),e.jsxs("p",{children:["You can access object properties using ",e.jsx("b",{children:"dot notation"})," or"," ",e.jsx("b",{children:"bracket notation"}),". Bracket notation is useful when the property name is dynamic or not a valid identifier."]}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Dot vs bracket notation
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

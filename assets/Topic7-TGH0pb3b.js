import{r as o,j as e}from"./index-BvEfGfTn.js";import{E as t}from"./EditableCodeBlock-CQi9RD2e.js";import"./index-Dp9HJN--.js";import"./braces-BTxk0DSh.js";import"./file-code-Dnm5Tlhr.js";import"./layout-list-JY6mx8-n.js";import"./play-DaOM0VkT.js";import"./type-CL8j6UEM.js";import"./refresh-cw-CqrLzdfO.js";import"./wand-sparkles-Cb-aYX2-.js";import"./copy-CTzV1kNf.js";import"./download-BS5IJyWv.js";import"./eye-off-CVFxbe8A.js";import"./eye-DLT6b8MZ.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 7 – Accessing properties: dot vs bracket notation"}),e.jsxs("p",{children:["You can access object properties using ",e.jsx("b",{children:"dot notation"})," or"," ",e.jsx("b",{children:"bracket notation"}),". Bracket notation is useful when the property name is dynamic or not a valid identifier."]}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Dot vs bracket notation
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

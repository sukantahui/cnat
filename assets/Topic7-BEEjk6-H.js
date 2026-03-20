import{r as o,j as e}from"./index-CUXXvONC.js";import{E as t}from"./EditableCodeBlock-DbjIohnu.js";import"./index-CBpdwEID.js";import"./createLucideIcon-O_Er4fpW.js";import"./braces-B4AyVXmG.js";import"./file-code-BNZ84HOO.js";import"./layout-list-GoT0ASd9.js";import"./play-DNNbdgtV.js";import"./type-Bunlk4m9.js";import"./refresh-cw-BO9f_BLL.js";import"./wand-sparkles-C_tYuFMb.js";import"./copy-rP0aAxF9.js";import"./download-C-zK-a1m.js";import"./eye-off-DR1p6kU7.js";import"./eye-CH8Le7yy.js";class h extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 7 – Accessing properties: dot vs bracket notation"}),e.jsxs("p",{children:["You can access object properties using ",e.jsx("b",{children:"dot notation"})," or"," ",e.jsx("b",{children:"bracket notation"}),". Bracket notation is useful when the property name is dynamic or not a valid identifier."]}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Dot vs bracket notation
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
console.log(institute["full address"]);`})]})}}export{h as default};

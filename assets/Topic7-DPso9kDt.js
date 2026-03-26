import{r as o,j as e}from"./index-C8tfbTD8.js";import{E as t}from"./EditableCodeBlock-B43zle_x.js";import"./index-HicrMSGH.js";import"./braces-DqXkZByl.js";import"./file-code--LqktZ78.js";import"./layout-list-Bm6kXqTz.js";import"./play-DM4owxXV.js";import"./type-Bi9GEJ3m.js";import"./refresh-cw-CMU7apYp.js";import"./wand-sparkles-D7x0So5e.js";import"./copy-CxoiTVpg.js";import"./download-DO3hLbeb.js";import"./eye-off-BovPNYrm.js";import"./eye-BE6j1kUv.js";class f extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 7 – Accessing properties: dot vs bracket notation"}),e.jsxs("p",{children:["You can access object properties using ",e.jsx("b",{children:"dot notation"})," or"," ",e.jsx("b",{children:"bracket notation"}),". Bracket notation is useful when the property name is dynamic or not a valid identifier."]}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Dot vs bracket notation
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

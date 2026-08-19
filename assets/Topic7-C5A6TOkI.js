import{r as o,j as e}from"./index-DWohEkZn.js";import{E as t}from"./EditableCodeBlock-CrzCPJcr.js";import"./index-CEQXCTxS.js";import"./braces-JdF8JkjR.js";import"./createLucideIcon-C1O5LkBh.js";import"./file-code-Fl3OCYw3.js";import"./layout-list-CHnqrCXG.js";import"./play-B1-I8GqR.js";import"./type-BLbZSUQo.js";import"./refresh-cw-DKLgNQ1l.js";import"./minimize-2-RAOAenst.js";import"./wand-sparkles-DdP14k2W.js";import"./copy-CYTKJbf3.js";import"./download-DrWkJMSz.js";import"./eye-off-CeH8fnu0.js";import"./eye-MtmNCO_Y.js";class k extends o.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Topic 7 – Accessing properties: dot vs bracket notation"}),e.jsxs("p",{children:["You can access object properties using ",e.jsx("b",{children:"dot notation"})," or"," ",e.jsx("b",{children:"bracket notation"}),". Bracket notation is useful when the property name is dynamic or not a valid identifier."]}),e.jsx(t,{language:"javascript",initialCode:`// Example 1: Dot vs bracket notation
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
console.log(institute["full address"]);`})]})}}export{k as default};

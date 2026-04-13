import{r as a,j as t}from"./index-BqAFCp1G.js";import{E as e}from"./EditableCodeBlock-BTRQ-U14.js";import"./index-DlA8mtx2.js";import"./braces-iTYwY2KK.js";import"./file-code-CAr2FrfU.js";import"./layout-list-DtPLdNuI.js";import"./play-CJzmY6wB.js";import"./type-CPbU9-ly.js";import"./refresh-cw-Du2h8_Si.js";import"./wand-sparkles-BGmg0nCA.js";import"./copy-BGUeFV3f.js";import"./download-BZTnZbA3.js";import"./eye-off-D5-mJsNT.js";import"./eye-CMjhfnF0.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
const student = {
  name: "Ritaja",
  course: "JavaScript",
  batch: "Morning",
};

const keys = Object.keys(student);
console.log(keys);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 2: Object.values()
const marks = {
  Ritaja: 95,
  Mounita: 90,
  Kaustav: 88,
};

const values = Object.values(marks);
console.log(values);`}),t.jsx(e,{language:"javascript",initialCode:`// Example 3: Object.entries() with forEach
const feesStatus = {
  Ritaja: "Paid",
  Pranjali: "Pending",
  Susmita: "Paid",
};

Object.entries(feesStatus).forEach(function (entry) {
  const name = entry[0];
  const status = entry[1];
  console.log(name + " -> " + status);
});`})]})}}export{v as default};

import{r as a,j as t}from"./index-D-07m6Qb.js";import{E as e}from"./EditableCodeBlock-D-qnnTgn.js";import"./index-BLtpQgbQ.js";import"./braces-C_CY9Jv1.js";import"./file-code-n9BmD-WT.js";import"./layout-list-xlk1srMZ.js";import"./play-4rBxpZha.js";import"./type-BEuENsNe.js";import"./refresh-cw-DVel-Kgx.js";import"./wand-sparkles-DlwyMtB_.js";import"./copy-BeFV_rGJ.js";import"./download-B_C6cj02.js";import"./eye-off-Ddhut9lm.js";import"./eye-DnmUWsTr.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

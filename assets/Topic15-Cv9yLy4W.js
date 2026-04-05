import{r as a,j as t}from"./index-CiucDjKk.js";import{E as e}from"./EditableCodeBlock-BYSSzxKJ.js";import"./index-CpCb3E_X.js";import"./braces-BQZVHMtl.js";import"./file-code-BnWMtMm-.js";import"./layout-list-DysuKicz.js";import"./play-B4TXEWqb.js";import"./type-COTgqaDv.js";import"./refresh-cw-V8JttSZQ.js";import"./wand-sparkles-NnSw4MJA.js";import"./copy-CGs2rQAh.js";import"./download-D8pjhHSm.js";import"./eye-off-Ln5aLgun.js";import"./eye-z1nKQA9f.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

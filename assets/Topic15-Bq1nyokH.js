import{r as a,j as t}from"./index-Cpy87EQq.js";import{E as e}from"./EditableCodeBlock-C5rC4SNS.js";import"./index-D8kJeRrI.js";import"./braces-BmbdYtb_.js";import"./file-code-KkIlh4rF.js";import"./layout-list-eu0aVVzr.js";import"./play-B26sBouI.js";import"./type-5cEw9QHs.js";import"./refresh-cw-a7qXvd5K.js";import"./wand-sparkles-D9jxkP0g.js";import"./copy-BMdvVEBi.js";import"./download-CeN5HY3g.js";import"./eye-off-CPCxdOmB.js";import"./eye-CKEPaE0B.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

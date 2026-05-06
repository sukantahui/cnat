import{r as a,j as t}from"./index-CA8TNF9q.js";import{E as e}from"./EditableCodeBlock-D19ZyosX.js";import"./index-C4QWIY9d.js";import"./braces-DLulIgEJ.js";import"./file-code-D-G6C0cs.js";import"./layout-list-Bkf0ewxw.js";import"./play-Q15FUXyc.js";import"./type-Cv5vcz8o.js";import"./refresh-cw-DG8SgGrE.js";import"./wand-sparkles--Ul1pC_O.js";import"./copy-BjPaPwc6.js";import"./download-DfUNGLMk.js";import"./eye-off-bTjZ_r81.js";import"./eye-DHELtmKC.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

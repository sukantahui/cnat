import{r as a,j as t}from"./index-Ci-Q4Ner.js";import{E as e}from"./EditableCodeBlock-dZSFwXIZ.js";import"./index-BovWnrwo.js";import"./braces-D0GgDFCR.js";import"./file-code-cjFDZoet.js";import"./layout-list-CNeoJZsF.js";import"./play-CUvMdlUb.js";import"./type-BkofYUDL.js";import"./refresh-cw-DVq0w9yy.js";import"./wand-sparkles-BImX2qU-.js";import"./copy-CVYVE7uU.js";import"./download-D2yIxL3J.js";import"./eye-off-CfVEqTtg.js";import"./eye-DWv5isVy.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

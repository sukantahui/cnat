import{r as a,j as t}from"./index-BZ1-3x1c.js";import{E as e}from"./EditableCodeBlock-CKZO-IaZ.js";import"./index-DAcJ947v.js";import"./braces-ZDFjoAI2.js";import"./file-code-D4gRmL_O.js";import"./layout-list-Dn_aCmq2.js";import"./play-CsDulOQL.js";import"./type-kdgV3pfK.js";import"./refresh-cw-CkAsW6bT.js";import"./wand-sparkles-DS7jgEjp.js";import"./copy-DRd4XZHU.js";import"./download-B2rqWgWV.js";import"./eye-off-BQZr5nas.js";import"./eye-hnPwCMtS.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

import{r as a,j as t}from"./index-C0mc_94R.js";import{E as e}from"./EditableCodeBlock-CO_xpaJa.js";import"./index-BaB5qTdC.js";import"./braces-Bw_E-mIF.js";import"./file-code-CJeM1EF0.js";import"./layout-list-CMZ-_utf.js";import"./play-BLZBdi5J.js";import"./type-BEWqtl1P.js";import"./refresh-cw-CNrstThT.js";import"./wand-sparkles-BqUKSHiN.js";import"./copy-CnQzJ4pm.js";import"./download-BpjOkBnV.js";import"./eye-off-2ljZTxvF.js";import"./eye-BmfNfNBT.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

import{r as a,j as t}from"./index-BnfAr6UH.js";import{E as e}from"./EditableCodeBlock-CJAD9-yV.js";import"./index-BOJ7CUHh.js";import"./braces-CNDkIFm0.js";import"./file-code-2-2TDWSW.js";import"./layout-list-BzviaWtA.js";import"./play-Ckwl6zud.js";import"./type-Df_QG4NN.js";import"./refresh-cw-DP2gjNNw.js";import"./wand-sparkles-BegAdJAm.js";import"./copy-Cqsw3qgy.js";import"./download-DLZRmf4V.js";import"./eye-off-CnAXOkhW.js";import"./eye-DwZEsWI3.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

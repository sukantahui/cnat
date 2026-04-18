import{r as a,j as t}from"./index-CTaFCVvl.js";import{E as e}from"./EditableCodeBlock-KOhOfWQC.js";import"./index-RG1_EAcX.js";import"./braces-DR1B3IWk.js";import"./file-code-DdaZ0WP2.js";import"./layout-list-BRs4SSFE.js";import"./play-rkdgOENq.js";import"./type-Wnld5au3.js";import"./refresh-cw-ClGJKkyE.js";import"./wand-sparkles-Dq-Tbn4Z.js";import"./copy-DY-fjKN5.js";import"./download-CVsa0i-2.js";import"./eye-off-DQCWcKuS.js";import"./eye-RMvPMGzV.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

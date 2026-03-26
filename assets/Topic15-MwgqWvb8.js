import{r as a,j as t}from"./index-nd0Xa-ab.js";import{E as e}from"./EditableCodeBlock-CallMWXv.js";import"./index-CGY8MZgm.js";import"./braces-CmuvDsVd.js";import"./file-code-Ce3qRK9I.js";import"./layout-list-pRcTrgEK.js";import"./play-DB3kfkYa.js";import"./type-CKt7De8f.js";import"./refresh-cw-DR3WFbdt.js";import"./wand-sparkles-C8RXRKnG.js";import"./copy-DxjiEBv9.js";import"./download-DtkPSF8Q.js";import"./eye-off-GoiJ7jr5.js";import"./eye-lb2KaMq3.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

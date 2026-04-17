import{r as a,j as t}from"./index-CAWfB0WX.js";import{E as e}from"./EditableCodeBlock-CcMNS1KL.js";import"./index-uncorcit.js";import"./braces-CUM-PBNo.js";import"./file-code-BoxdIech.js";import"./layout-list-C0N63pq9.js";import"./play-Ps4HZc_E.js";import"./type-Cqxh80Ov.js";import"./refresh-cw-BsQtlftS.js";import"./wand-sparkles-jvHbFS0u.js";import"./copy-CfpCMbyO.js";import"./download-Cl4ot-Qj.js";import"./eye-off-BUSTRKze.js";import"./eye-Co30Kfdg.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

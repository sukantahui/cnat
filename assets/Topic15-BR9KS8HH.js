import{r as a,j as t}from"./index-BHC-ARLC.js";import{E as e}from"./EditableCodeBlock-CIvCYvLg.js";import"./index-ME8AnmeB.js";import"./braces-BQvFuFD9.js";import"./file-code-55V_qcat.js";import"./layout-list--tQkMoA1.js";import"./play-S6YlOQBD.js";import"./type-Nkw_JIR4.js";import"./refresh-cw-B3VDvcQ8.js";import"./wand-sparkles-By4oPjZ3.js";import"./copy-DNi4hkEF.js";import"./download-BuOPxyOv.js";import"./eye-off-xALAcrMX.js";import"./eye-DBhLFmsq.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

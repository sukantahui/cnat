import{r as a,j as t}from"./index-Bam6aBa9.js";import{E as e}from"./EditableCodeBlock-Z0TRU7YW.js";import"./index-CkD78rUh.js";import"./braces-BBA5yUJs.js";import"./file-code-BOjY1fpJ.js";import"./layout-list-CX19cbZv.js";import"./play-CW1Odb1G.js";import"./type-Bv-_5O1g.js";import"./refresh-cw-CQmMaSby.js";import"./wand-sparkles-oSaGqoIe.js";import"./copy-Cc2_iWoD.js";import"./download-DTOP_uE1.js";import"./eye-off-BuW8pOk4.js";import"./eye-3E5slxIz.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

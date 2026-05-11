import{r as a,j as t}from"./index-D2oyZ1_5.js";import{E as e}from"./EditableCodeBlock-C7as2P9H.js";import"./index-D5TCWeEA.js";import"./braces-WZIYXDaQ.js";import"./file-code-1o3nobi9.js";import"./layout-list-B67Unsx-.js";import"./play-abl2IrEY.js";import"./type-H7d3bXn1.js";import"./refresh-cw-WPTBV80K.js";import"./wand-sparkles-jLNc7dpD.js";import"./copy-BCvCdePc.js";import"./download-DK6fs-E5.js";import"./eye-off-VLWNiJzP.js";import"./eye-DsKiv6FO.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

import{r as a,j as t}from"./index-COd1BgDP.js";import{E as e}from"./EditableCodeBlock-DDnNgAGW.js";import"./index-C6PolHK9.js";import"./braces-CBYgV3Zs.js";import"./file-code-CL2zX7Xy.js";import"./layout-list-CuGgqLN_.js";import"./play-jI2NV5Sw.js";import"./type-DzEAaeRI.js";import"./refresh-cw-CkNx_mLp.js";import"./wand-sparkles-7p46q3hG.js";import"./copy-CkJm4ude.js";import"./download-XOywrey6.js";import"./eye-off-sWV9Qimf.js";import"./eye-D4RF8Ay-.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

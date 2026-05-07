import{r as a,j as t}from"./index-BV1ec7QU.js";import{E as e}from"./EditableCodeBlock-DKzWiRl8.js";import"./index-FAc0gMmj.js";import"./braces-hctkfZFQ.js";import"./file-code-De99tvSp.js";import"./layout-list-B9EBcVRh.js";import"./play-dfkZtFjp.js";import"./type-Doxm7eCO.js";import"./refresh-cw-DES3yxy7.js";import"./wand-sparkles-CAvweH_1.js";import"./copy-0c2DUKQV.js";import"./download-r_U-JfHh.js";import"./eye-off-CIjwHbUc.js";import"./eye-DgGc0zhY.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

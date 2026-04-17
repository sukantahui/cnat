import{r as a,j as t}from"./index-BRgF9Sn_.js";import{E as e}from"./EditableCodeBlock-BSYSE1eB.js";import"./index-DvYWLWqh.js";import"./braces-C2O22zC6.js";import"./file-code-o1Hy4L4z.js";import"./layout-list-zt_zlr8a.js";import"./play-Bb7zVNPi.js";import"./type-BRYqmicC.js";import"./refresh-cw-CaoC4Shd.js";import"./wand-sparkles-CfmzZUiR.js";import"./copy-CDhUMioL.js";import"./download-DMi3i45B.js";import"./eye-off-BUnbpOm_.js";import"./eye-C7r0Hfxm.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

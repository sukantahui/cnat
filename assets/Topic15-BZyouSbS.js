import{r as a,j as t}from"./index-CFVtO9P_.js";import{E as e}from"./EditableCodeBlock-BQeSEugZ.js";import"./index-CxojLvve.js";import"./braces-Cmt44vyQ.js";import"./file-code-DtjmNRvm.js";import"./layout-list-i88iVR5k.js";import"./play-DbSjoswc.js";import"./refresh-cw-_Vy81NJU.js";import"./wand-sparkles-DPeSIm8D.js";import"./copy-9vzNuqdA.js";import"./download-BZw8gqT7.js";class x extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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
});`})]})}}export{x as default};

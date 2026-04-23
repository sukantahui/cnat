import{r as a,j as t}from"./index-CmAIoOXN.js";import{E as e}from"./EditableCodeBlock-BlMKhSHY.js";import"./index-Ctno6LPZ.js";import"./braces-DM1jAfMm.js";import"./file-code-Dknl8_wy.js";import"./layout-list-C0IShk2V.js";import"./play-BOo6cwEF.js";import"./type-BX72wN3g.js";import"./refresh-cw-BbngG8iQ.js";import"./wand-sparkles-BhMA9XzZ.js";import"./copy-DM6uKa4-.js";import"./download-Dist3jgj.js";import"./eye-off-CcBA_c8J.js";import"./eye-BJpbV_yU.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

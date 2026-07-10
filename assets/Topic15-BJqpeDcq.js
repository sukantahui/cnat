import{r as a,j as t}from"./index-DKhGj2r9.js";import{E as e}from"./EditableCodeBlock-Bw_3eVxT.js";import"./index-Db0j1cdf.js";import"./createLucideIcon-DZ4EMxs8.js";import"./braces-CEKIThwN.js";import"./file-code-BLnEmaT3.js";import"./layout-list-BuOBAyKA.js";import"./play-B4tVruhT.js";import"./type-CPkc_PUl.js";import"./refresh-cw-CKv6YgUv.js";import"./wand-sparkles-CsthY_-w.js";import"./copy-Bb5mh8KX.js";import"./download-6Kfgauek.js";import"./eye-off-C6upiu6S.js";import"./eye-CHNAHx-m.js";class f extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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
});`})]})}}export{f as default};

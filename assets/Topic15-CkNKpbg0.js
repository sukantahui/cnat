import{r as a,j as t}from"./index-BRkQtvvo.js";import{E as e}from"./EditableCodeBlock-XDZ6X8-U.js";import"./index-CBE1MaW4.js";import"./braces-Ck6N4IEp.js";import"./file-code-I44cNVwq.js";import"./layout-list-VVBYbJwJ.js";import"./play-BwqyFVDc.js";import"./type-DUSqinmE.js";import"./refresh-cw-BY2gUPY9.js";import"./wand-sparkles-C1XRSA5G.js";import"./copy-CuK_a22S.js";import"./download-CAEyvDBJ.js";import"./eye-off-C-cOQUZS.js";import"./eye-Bo8Z4-Jj.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

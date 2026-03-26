import{r as a,j as t}from"./index-DvCu507i.js";import{E as e}from"./EditableCodeBlock-irbxfOgu.js";import"./index-DJ7WIp_a.js";import"./braces-CpOUzPCd.js";import"./file-code-DYqCfTmb.js";import"./layout-list-BLGZKrRf.js";import"./play-Lz8WYqwT.js";import"./type-kKrhLZrm.js";import"./refresh-cw-Dpjf4dGO.js";import"./wand-sparkles-B3goWZLn.js";import"./copy-D0mr27ws.js";import"./download-DYJkcKhx.js";import"./eye-off-s53eWv69.js";import"./eye-4UAC578b.js";class v extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

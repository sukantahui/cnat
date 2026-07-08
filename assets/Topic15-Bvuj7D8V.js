import{r as a,j as t}from"./index-gsr__VoO.js";import{E as e}from"./EditableCodeBlock-Wuc9XhDe.js";import"./index-BWD-23kO.js";import"./braces-CoES6LeI.js";import"./file-code-BIP47i_q.js";import"./layout-list-BJ8vQIye.js";import"./play-DRLvq0m8.js";import"./refresh-cw-CbGJFCpt.js";import"./wand-sparkles-BWFL7YwY.js";import"./copy-_YtngGN_.js";import"./download-BR7jb7LT.js";class x extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

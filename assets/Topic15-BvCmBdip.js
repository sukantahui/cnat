import{r as a,j as t}from"./index-NACEEa8w.js";import{E as e}from"./EditableCodeBlock-DhbzGAxA.js";import"./index-OTxvoXyo.js";import"./createLucideIcon-DogKn5wF.js";import"./braces-DZ5e4LUG.js";import"./file-code-CJcKJH9Y.js";import"./layout-list-CM3wcDMC.js";import"./play-BGixpdkC.js";import"./type-BkuZTd3u.js";import"./refresh-cw-BRGNrlHt.js";import"./wand-sparkles-BrK6n-20.js";import"./copy-B-noeKSe.js";import"./download-DnQYd8bi.js";import"./eye-off-HKTYvvuy.js";import"./eye-D6FrJ2rq.js";class f extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

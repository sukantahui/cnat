import{r as a,j as t}from"./index-D8vKF2mq.js";import{E as e}from"./EditableCodeBlock-DiAh0cAP.js";import"./index-_VvknCR5.js";import"./createLucideIcon-DTJ5VPt2.js";import"./braces-BXpH0v-S.js";import"./file-code-C52313Dl.js";import"./layout-list-BkZm_8W0.js";import"./play-ZVoUkbUG.js";import"./type-PC3P0vgv.js";import"./refresh-cw-DcvlgmPw.js";import"./wand-sparkles-C0teRuqT.js";import"./copy-bDAEzVP3.js";import"./download-BaqyJosE.js";import"./eye-off-BL0ZDN6q.js";import"./eye-Dvwj4G7q.js";class f extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

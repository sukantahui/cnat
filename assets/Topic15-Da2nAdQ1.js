import{r as a,j as t}from"./index-CK4WUhpx.js";import{E as e}from"./EditableCodeBlock-eQkDJKZF.js";import"./index-s7j91j2a.js";import"./createLucideIcon--yS5sPo-.js";import"./braces-6524uQsV.js";import"./file-code-CDbVQmeK.js";import"./layout-list-Cl8lmIC1.js";import"./play-CGI8rN0h.js";import"./type-DD2SMkRe.js";import"./refresh-cw-BeQoxRgF.js";import"./wand-sparkles-CzGmHgG3.js";import"./copy-dX76-Zhw.js";import"./download-CvyilHOI.js";import"./eye-off-wSbFtSgN.js";import"./eye-BOx9f4_I.js";class f extends a.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 15 – Object.keys(), Object.values(), Object.entries()"}),t.jsx(e,{language:"javascript",initialCode:`// Example 1: Object.keys()
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

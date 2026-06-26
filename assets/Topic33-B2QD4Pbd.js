import{r as s,j as t}from"./index-UqT5O8p1.js";import{E as o}from"./EditableCodeBlock-D1QxZRLF.js";import"./index-CRrCmYP9.js";import"./braces-D0k6ct2r.js";import"./file-code-z_zr8Z5q.js";import"./layout-list-Cr_A3clc.js";import"./play-DU1uhUCi.js";import"./type-DOuT4SB5.js";import"./refresh-cw-Doiqk7xS.js";import"./wand-sparkles-BREyXTJS.js";import"./copy-BzqaPhIG.js";import"./download-zj_8ehaG.js";import"./eye-off-D47L_t_g.js";import"./eye-FKL9EooF.js";class N extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 33 – JSON.parse() and JSON.stringify()"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Converting object to JSON string
const student = {
  name: "Pranjali",
  course: "Tally with GST",
  batch: "Evening",
};

const json = JSON.stringify(student);
console.log(json);`}),t.jsx(o,{language:"javascript",initialCode:`// Example 2: Converting JSON string to object
const jsonData = '{"name":"Susmita","course":"Python","batch":"Morning"}';

const obj = JSON.parse(jsonData);

console.log(obj.name);
console.log(obj.course);`}),t.jsx(o,{language:"javascript",initialCode:`// Example 3: Nested structures in JSON
const data = {
  center: "Coder & AccoTax",
  students: [
    { name: "Ritaja", course: "Python" },
    { name: "Kaustav", course: "JavaScript" },
  ],
};

const jsonStr = JSON.stringify(data);
console.log("JSON:", jsonStr);

const parsed = JSON.parse(jsonStr);
console.log("Parsed:", parsed.students[0].name);`}),t.jsx(o,{language:"javascript",initialCode:`// Example 4: Pretty printing JSON
const settings = {
  theme: "dark",
  showHints: true,
  language: "en",
};

const pretty = JSON.stringify(settings, null, 2);
console.log(pretty);`})]})}}export{N as default};

import{r as s,j as t}from"./index-CgrI_Laf.js";import{E as o}from"./EditableCodeBlock-CZfDw-7l.js";import"./index-BvTPtaj8.js";import"./braces-B4ve3dc_.js";import"./file-code-2RxvfW50.js";import"./layout-list-Im6t9RX6.js";import"./play-Cqi40Ula.js";import"./type-DqKvpRLb.js";import"./refresh-cw-B-aRxUAQ.js";import"./wand-sparkles-C5eTc7YX.js";import"./copy-BuYwAn1F.js";import"./download-CL3XA5zm.js";import"./eye-off-r18KGoiE.js";import"./eye-CKJzELnV.js";class N extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 33 – JSON.parse() and JSON.stringify()"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Converting object to JSON string
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

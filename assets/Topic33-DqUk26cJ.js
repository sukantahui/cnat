import{r as s,j as t}from"./index-BRgF9Sn_.js";import{E as o}from"./EditableCodeBlock-BSYSE1eB.js";import"./index-DvYWLWqh.js";import"./braces-C2O22zC6.js";import"./file-code-o1Hy4L4z.js";import"./layout-list-zt_zlr8a.js";import"./play-Bb7zVNPi.js";import"./type-BRYqmicC.js";import"./refresh-cw-CaoC4Shd.js";import"./wand-sparkles-CfmzZUiR.js";import"./copy-CDhUMioL.js";import"./download-DMi3i45B.js";import"./eye-off-BUnbpOm_.js";import"./eye-C7r0Hfxm.js";class N extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 33 – JSON.parse() and JSON.stringify()"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Converting object to JSON string
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

import{r as s,j as t}from"./index-zoleORG0.js";import{E as o}from"./EditableCodeBlock-DnUTwdHm.js";import"./index-DaCgRqBW.js";import"./braces-DNVNm8By.js";import"./file-code-CYf5TbHj.js";import"./layout-list-Bh183qU5.js";import"./play-DnJZKzJ4.js";import"./type-01gFDPU2.js";import"./refresh-cw-H932oURx.js";import"./wand-sparkles-Cq6xiFFM.js";import"./copy-DnHNBSbf.js";import"./download-DXpbFnt0.js";import"./eye-off-D_7vqU7y.js";import"./eye-C2NjizJX.js";class N extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 33 – JSON.parse() and JSON.stringify()"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Converting object to JSON string
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

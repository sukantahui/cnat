import{r as s,j as t}from"./index-DvCu507i.js";import{E as o}from"./EditableCodeBlock-irbxfOgu.js";import"./index-DJ7WIp_a.js";import"./braces-CpOUzPCd.js";import"./file-code-DYqCfTmb.js";import"./layout-list-BLGZKrRf.js";import"./play-Lz8WYqwT.js";import"./type-kKrhLZrm.js";import"./refresh-cw-Dpjf4dGO.js";import"./wand-sparkles-B3goWZLn.js";import"./copy-D0mr27ws.js";import"./download-DYJkcKhx.js";import"./eye-off-s53eWv69.js";import"./eye-4UAC578b.js";class N extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 33 – JSON.parse() and JSON.stringify()"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Converting object to JSON string
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

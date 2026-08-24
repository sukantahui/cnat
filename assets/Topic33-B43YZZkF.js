import{r as s,j as t}from"./index-DQGlkDD-.js";import{E as o}from"./EditableCodeBlock-Dul0rTuD.js";import"./index-B5Ou1maK.js";import"./braces-DgkICGBe.js";import"./createLucideIcon-DkPaqQ-z.js";import"./file-code-BwO1T2yj.js";import"./layout-list-BRQeVJ0A.js";import"./play-C4es742M.js";import"./type-CTZVU0g7.js";import"./refresh-cw-wfEx28Pg.js";import"./minimize-2-tRCtfalc.js";import"./wand-sparkles-CHXCoPE3.js";import"./copy-Ccnlqc-p.js";import"./download-CLfZxcrH.js";import"./eye-off-CtfkpLSn.js";import"./eye-DYTRtkpQ.js";class O extends s.Component{render(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold",children:"Topic 33 – JSON.parse() and JSON.stringify()"}),t.jsx(o,{language:"javascript",initialCode:`// Example 1: Converting object to JSON string
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
console.log(pretty);`})]})}}export{O as default};

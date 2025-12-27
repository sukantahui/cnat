import{r as s,j as e}from"./index-4R51NWjb.js";import{C as t}from"./CodeBlock-CLsWVwnE.js";import"./prism-CJ8Am-w2.js";import"./prism-json-D0UlpdKh.js";class n extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"ES6 Modules — import & export"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["ES6 Modules allow you to split JavaScript code into multiple files and reuse them using ",e.jsx("code",{children:"import"})," and ",e.jsx("code",{children:"export"}),". This is how modern JavaScript projects are structured, including real projects built at ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. What is a Module?"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A module is simply a JavaScript file that can export values (functions, variables, classes) and import values from other files."}),e.jsx(t,{language:"javascript",code:`// file: mathUtils.js
export function add(a, b) {
  return a + b;
}

// file: main.js
import { add } from "./mathUtils.js";

console.log(add(10, 20)); // 30`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Named Exports"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["You can export multiple things from one file using ",e.jsx("strong",{children:"named exports"}),"."]}),e.jsx(t,{language:"javascript",code:`// file: results.js

export const centreName = "Coder & AccoTax";
export const city = "Barrackpore";

export function getResult(name, marks) {
  return \`\${name} scored \${marks} marks.\`;
}`}),e.jsx(t,{language:"javascript",code:`// file: app.js

import { centreName, city, getResult } from "./results.js";

console.log(centreName);          // Coder & AccoTax
console.log(city);                // Barrackpore
console.log(getResult("Ritaja", 92));`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Default Export"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["A file can have ",e.jsx("strong",{children:"one default export"}),", which is imported without curly braces."]}),e.jsx(t,{language:"javascript",code:`// file: greet.js

export default function greet(name) {
  return \`Hello \${name}, welcome to Coder & AccoTax!\`;
}`}),e.jsx(t,{language:"javascript",code:`// file: main.js

import greet from "./greet.js";

console.log(greet("Mounita"));`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"You can choose any name when importing a default export."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"4. Mixing Default and Named Exports"}),e.jsx(t,{language:"javascript",code:`// file: studentService.js

export default function getStudentName() {
  return "Kaustav";
}

export function getBatch() {
  return "JS-2025";
}

export const centre = "Coder & AccoTax";`}),e.jsx(t,{language:"javascript",code:`// file: main.js

import getStudentName, { getBatch, centre } from "./studentService.js";

console.log(getStudentName()); // Kaustav
console.log(getBatch());       // JS-2025
console.log(centre);           // Coder & AccoTax`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"5. Renaming Imports (import ... as ...)"}),e.jsx(t,{language:"javascript",code:`// file: marks.js

export function total(m1, m2, m3) {
  return m1 + m2 + m3;
}

export function average(m1, m2, m3) {
  return total(m1, m2, m3) / 3;
}`}),e.jsx(t,{language:"javascript",code:`// file: analysis.js

import { total as getTotal, average as getAverage } from "./marks.js";

console.log(getTotal(80, 85, 90));   // 255
console.log(getAverage(80, 85, 90)); // 85`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"6. Import Everything as a Single Object"}),e.jsx(t,{language:"javascript",code:`// file: utils.js

export function greet(name) {
  return \`Hello \${name}\`;
}

export const institute = "Coder & AccoTax";

export function add(a, b) {
  return a + b;
}`}),e.jsx(t,{language:"javascript",code:`// file: main.js

import * as Utils from "./utils.js";

console.log(Utils.institute);          // Coder & AccoTax
console.log(Utils.greet("Susmita"));   // Hello Susmita
console.log(Utils.add(10, 20));        // 30`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"7. Re-exporting from an Index File (Barrel Pattern)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["For bigger projects, you often create an ",e.jsx("code",{children:"index.js"})," file to re-export everything from a folder."]}),e.jsx(t,{language:"javascript",code:`// file: services/student.js
export function getStudentList() {
  return ["Ritaja", "Mounita", "Kaustav"];
}

// file: services/teacher.js
export function getTeacherList() {
  return ["Sukanta Hui", "Tanusree Hui", "Chandan Das"];
}

// file: services/index.js  (barrel file)
export * from "./student.js";
export * from "./teacher.js";`}),e.jsx(t,{language:"javascript",code:`// file: app.js

import { getStudentList, getTeacherList } from "./services/index.js";

console.log(getStudentList());
console.log(getTeacherList());`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"8. Using ES Modules in the Browser (Quick Demo)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["In plain HTML, you must use ",e.jsx("code",{children:'type="module"'})," for ES6 imports to work."]}),e.jsx(t,{language:"html",code:`<script type="module">
  import { greet } from "./greetModule.js";
  console.log(greet("Devangshu"));
<\/script>`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"export"})," / ",e.jsx("code",{children:"import"})," lets you split code into modules"]}),e.jsxs("li",{children:["Named exports use ",e.jsx("code",{children:"{ }"}),", default exports do not"]}),e.jsxs("li",{children:["You can rename imports with ",e.jsx("code",{children:"as"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"import * as obj"})," collects all exports in one object"]}),e.jsx("li",{children:"Modules help organise large codebases (classes, services, utilities)"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"ES6 Modules are the foundation of modern JavaScript structure in React, Node.js, and almost every professional JS project."})]})]})}}export{n as default};

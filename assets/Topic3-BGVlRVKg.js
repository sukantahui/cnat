import{j as e}from"./index-xwnDrKlA.js";import{C as s}from"./CodeBlock-bYGEcDHC.js";import"./prism-javascript-BRfYdlHV.js";function l(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Searching in Arrays — indexOf, includes, find, findIndex"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"JavaScript provides multiple ways to search within arrays."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"indexOf()"}),e.jsx(s,{code:`const names = ["Sukanta", "Rahul", "Amit"];

console.log(names.indexOf("Rahul")); // 1`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"includes()"}),e.jsx(s,{code:'console.log(names.includes("Amit")); // true',language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"find()"}),e.jsx(s,{code:`const nums = [10, 20, 30, 40];

const found = nums.find(n => n > 25);
console.log(found); // 30`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"findIndex()"}),e.jsx(s,{code:`const index = nums.findIndex(n => n > 25);
console.log(index); // 2`,language:"javascript"})]})}export{l as default};

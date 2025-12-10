import{r as t,j as e,E as s}from"./index-DOD7J0wX.js";class n extends t.Component{render(){return e.jsxs("div",{className:"space-y-10",children:[e.jsx("h2",{className:"text-2xl font-semibold text-sky-300",children:"Searching in Arrays — indexOf(), includes(), find(), findIndex()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["JavaScript provides multiple search methods to locate values inside arrays. Some return positions, some return actual values, and some return ",e.jsx("i",{children:"boolean"}),". These are extremely useful when managing student lists, course lists, and batch records at ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),"."]}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"1. indexOf()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{className:"text-emerald-300",children:"indexOf()"})," searches for a value and returns the ",e.jsx("strong",{children:"first index"})," where it is found."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx("pre",{className:"whitespace-pre-wrap text-slate-300",children:`array.indexOf(searchValue, startIndex = 0)

// return type: number
// returns -1 if value not found`})]}),e.jsx(s,{initialCode:`const courses = ["JavaScript", "Python", "C", "JavaScript"];

console.log(courses.indexOf("Python"));   // 1
console.log(courses.indexOf("JavaScript")); // 0
console.log(courses.indexOf("React"));   // -1`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Use ",e.jsx("code",{children:"indexOf()"})," when you simply want the item’s position."]})]}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2. includes()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{className:"text-emerald-300",children:"includes()"})," checks whether a value is present in an array. It returns a ",e.jsx("strong",{children:"boolean"}),"."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx("pre",{className:"whitespace-pre-wrap",children:`array.includes(searchValue, startIndex = 0)

// return type: boolean`})]}),e.jsx(s,{initialCode:`const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.includes("CSS"));   // true
console.log(skills.includes("Python")); // false`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Use this for quick yes/no checks, like verifying whether a student has chosen a particular course."})]}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"3. find()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{className:"text-emerald-300",children:"find()"})," returns the",e.jsx("strong",{children:" first element "})," that matches a condition."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx("pre",{className:"whitespace-pre-wrap",children:`array.find(callback(element, index, array))

// return type: element | undefined`})]}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 88 },
  { name: "Mounita", marks: 92 },
  { name: "Swadeep", marks: 35 },
];

const topper = students.find(s => s.marks > 90);
console.log(topper);`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Perfect when you need the ",e.jsx("b",{children:"actual object/data"}),", not just its index."]})]}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"4. findIndex()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{className:"text-emerald-300",children:"findIndex()"})," works like",e.jsx("code",{children:" find()"}),", but returns the ",e.jsx("strong",{children:"index"})," instead."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx("pre",{className:"whitespace-pre-wrap",children:`array.findIndex(callback(element, index, array))

// return type: number
// returns -1 if no match`})]}),e.jsx(s,{initialCode:`const students = [
  { name: "Susmita", marks: 70 },
  { name: "Kaustav", marks: 55 },
  { name: "Pranjali", marks: 95 },
];

const index = students.findIndex(s => s.marks < 60);

console.log(index); // 1 (Kaustav)`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Great for modifying, deleting, or updating a found entry."})]}),e.jsx("hr",{className:"border-slate-700"}),e.jsxs("section",{className:"bg-slate-900/40 border border-slate-700 rounded-xl p-4 text-slate-300 text-sm space-y-2",children:[e.jsx("p",{className:"font-semibold text-sky-200",children:"Summary Table"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"indexOf()"})," → returns position (number)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"includes()"})," → returns true/false"]}),e.jsxs("li",{children:[e.jsx("code",{children:"find()"})," → returns first matched element"]}),e.jsxs("li",{children:[e.jsx("code",{children:"findIndex()"})," → returns index of first match"]})]})]})]})}}export{n as default};

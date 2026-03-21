import{j as e}from"./index-YH4u--c0.js";import{C as t}from"./CodeBlock-B_cidyQe.js";import"./prism-DA5yNLsR.js";import"./prism-json-D0UlpdKh.js";import"./file-code-CdZAdXD5.js";import"./createLucideIcon-D7phWlUA.js";import"./copy-D-9DuOQr.js";import"./download-Bn-I9ybH.js";import"./play-BWUk_zaa.js";function d(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Dot Notation vs Bracket Notation"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["JavaScript provides two ways to access object properties —",e.jsx("strong",{children:"dot notation"})," and ",e.jsx("strong",{children:"bracket notation"}),". Both are important depending on the situation."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Dot Notation (Most Common)"}),e.jsx(t,{code:`const student = {
  name: "Mounita",
  course: "JavaScript",
  batch: "Evening"
};

console.log(student.name);     // Mounita
console.log(student.course);   // JavaScript`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Bracket Notation (For dynamic or spaced keys)"}),e.jsx(t,{code:`const teacher = {
  "full name": "Tanusree Hui",
  subject: "JavaScript",
  experience: 12
};

console.log(teacher["full name"]);  // Tanusree Hui`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Example: Accessing Keys Dynamically"}),e.jsx(t,{code:`const studentMarks = {
  Ritaja: 95,
  Swadeep: 88,
  Kaustav: 90
};

const name = "Ritaja";  
console.log(studentMarks[name]);  // 95`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Mixed Example — Real Use Case at Coder & AccoTax"}),e.jsx(t,{code:`const report = {
  studentName: "Pranjali",
  "current module": "Objects & OOP",
  progress: "Excellent",
  teacher: "Chandan Das"
};

console.log(report.studentName);        // Dot notation
console.log(report["current module"]);  // Bracket notation`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Use dot notation when possible. Use bracket notation when the key has spaces, special characters, or is dynamic."})]})}export{d as default};

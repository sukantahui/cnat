import{j as t}from"./index-YkKVfVEM.js";import{C as e}from"./CodeBlock-DDnRAo3D.js";import"./prism-BIjtOw9A.js";import"./prism-json-D0UlpdKh.js";import"./file-code-DitFwktW.js";import"./createLucideIcon-Cim-rzMd.js";import"./check-BZgQDY_j.js";import"./copy-BbjsF4-T.js";import"./download-D7sIJXhG.js";import"./play-DEajiqWU.js";function p(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Dot Notation vs Bracket Notation"}),t.jsxs("p",{className:"text-slate-300 text-sm",children:["JavaScript provides two ways to access object properties —",t.jsx("strong",{children:"dot notation"})," and ",t.jsx("strong",{children:"bracket notation"}),". Both are important depending on the situation."]}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Dot Notation (Most Common)"}),t.jsx(e,{code:`const student = {
  name: "Mounita",
  course: "JavaScript",
  batch: "Evening"
};

console.log(student.name);     // Mounita
console.log(student.course);   // JavaScript`,language:"javascript"}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Bracket Notation (For dynamic or spaced keys)"}),t.jsx(e,{code:`const teacher = {
  "full name": "Tanusree Hui",
  subject: "JavaScript",
  experience: 12
};

console.log(teacher["full name"]);  // Tanusree Hui`,language:"javascript"}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Example: Accessing Keys Dynamically"}),t.jsx(e,{code:`const studentMarks = {
  Ritaja: 95,
  Swadeep: 88,
  Kaustav: 90
};

const name = "Ritaja";  
console.log(studentMarks[name]);  // 95`,language:"javascript"}),t.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Mixed Example — Real Use Case at Coder & AccoTax"}),t.jsx(e,{code:`const report = {
  studentName: "Pranjali",
  "current module": "Objects & OOP",
  progress: "Excellent",
  teacher: "Chandan Das"
};

console.log(report.studentName);        // Dot notation
console.log(report["current module"]);  // Bracket notation`,language:"javascript"}),t.jsx("p",{className:"text-slate-400 text-sm",children:"Use dot notation when possible. Use bracket notation when the key has spaces, special characters, or is dynamic."})]})}export{p as default};

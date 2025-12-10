import{r as t,j as e}from"./index-D0NGu4uK.js";import{C as s}from"./CodeBlock-Ogr-M0lt.js";import"./prism-json-DRTQplox.js";class l extends t.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Spread & Rest Operators (...) — ES6 Feature"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The ",e.jsx("strong",{children:"spread"})," and ",e.jsx("strong",{children:"rest"})," operators are among the most powerful ES6 features. They simplify array/object handling, function arguments, and data merging — extremely useful in real-world JavaScript taught at ",e.jsx("strong",{children:"Coder & AccoTax, Barrackpore"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"1. Spread Operator — Expanding Arrays"}),e.jsx(s,{language:"javascript",code:`const students1 = ["Ritaja", "Mounita"];
const students2 = ["Kaustav", "Swadeep"];

const allStudents = [...students1, ...students2];

console.log(allStudents);
// ["Ritaja", "Mounita", "Kaustav", "Swadeep"]`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Copy an Array (Shallow Copy) Using Spread"}),e.jsx(s,{language:"javascript",code:`const original = ["Devangshu", "Pranjali"];
const copy = [...original];

copy.push("Susmita");

console.log(original); // ["Devangshu", "Pranjali"]
console.log(copy);     // ["Devangshu", "Pranjali", "Susmita"]`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Spread prevents accidental mutation of the original array."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Spread in Objects"}),e.jsx(s,{language:"javascript",code:`const teacher = {
  name: "Sukanta Hui",
  centre: "Coder & AccoTax",
};

const details = {
  subject: "JavaScript",
  city: "Barrackpore"
};

const profile = { ...teacher, ...details };

console.log(profile);
/*
{
  name: "Sukanta Hui",
  centre: "Coder & AccoTax",
  subject: "JavaScript",
  city: "Barrackpore"
}
*/`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"4. Rest Operator — Collect Extra Function Arguments"}),e.jsx(s,{language:"javascript",code:`function addMarks(name, ...scores) {
  console.log(name, scores);
}

addMarks("Mounita", 88, 92, 95);
/*
"Mounita" [88, 92, 95]
*/`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"The function groups extra arguments into an array."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"5. Rest Operator in Array Destructuring"}),e.jsx(s,{language:"javascript",code:`const marks = [90, 85, 92, 88];

const [first, ...remaining] = marks;

console.log(first);      // 90
console.log(remaining);  // [85, 92, 88]`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"6. Rest Operator in Object Destructuring"}),e.jsx(s,{language:"javascript",code:`const student = {
  name: "Ritaja",
  age: 17,
  city: "Barrackpore",
  course: "ES6"
};

const { name, ...info } = student;

console.log(name); // "Ritaja"
console.log(info);
/*
{
  age: 17,
  city: "Barrackpore",
  course: "ES6"
}
*/`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"7. Spread vs Rest — The Difference"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["✔ ",e.jsx("strong",{children:"Spread"})," — EXPANDS values ✔ ",e.jsx("strong",{children:"Rest"})," — COLLECTS values"]}),e.jsx(s,{language:"javascript",code:`const arr = [1, 2, 3];

// SPREAD EXPANDS
console.log(...arr);  // 1 2 3

// REST COLLECTS
const [a, ...b] = arr;
console.log(b);      // [2, 3]`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"8. Practical Example — Student Ranking System"}),e.jsx(s,{language:"javascript",code:`const topScores = [98, 96, 94];
const newScores = [92, 91];

// merge score lists using SPREAD
const allScores = [...topScores, ...newScores];

console.log(allScores);
// [98, 96, 94, 92, 91]

// get topper + remaining using REST
const [topper, ...others] = allScores;

console.log(topper); // 98
console.log(others); // [96, 94, 92, 91]`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Spread expands arrays/objects"}),e.jsx("li",{children:"Rest collects leftover values"}),e.jsx("li",{children:"Spread is used for merging & copying data"}),e.jsx("li",{children:"Rest is used in functions and destructuring"}),e.jsx("li",{children:"Both are essential in modern ES6+ JavaScript"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"Mastering spread + rest makes JavaScript code far cleaner and more efficient."})]})]})}}export{l as default};

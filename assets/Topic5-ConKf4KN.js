import{j as e}from"./index-xwnDrKlA.js";import{C as a}from"./CodeBlock-bYGEcDHC.js";import{E as s}from"./EditableCodeBlock-Cl84DSZi.js";import"./prism-javascript-BRfYdlHV.js";function r(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"space-y-3",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-sky-300",children:["Higher-Order Array Methods — ",e.jsx("span",{className:"text-sky-100",children:"map(), filter(), reduce()"})]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["In modern JavaScript, arrays are not just lists — they are powerful data pipelines. Methods like ",e.jsx("code",{className:"text-emerald-300",children:"map()"}),","," ",e.jsx("code",{className:"text-emerald-300",children:"filter()"}),", and"," ",e.jsx("code",{className:"text-emerald-300",children:"reduce()"})," let you transform and analyze data in a clean, expressive way. These are heavily used in frameworks like React, and in professional codebases like those we use at Coder & AccoTax, Barrackpore."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-sky-200",children:"Why are they called “higher-order methods”?"}),e.jsxs("ul",{className:"list-disc ml-5 space-y-1",children:[e.jsx("li",{children:"They take a function as an argument (callback function)."}),e.jsx("li",{children:"They often return a new array or a single value."}),e.jsx("li",{children:"They make code shorter, clearer, and easier to reason about."})]})]})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"1. map() — Transform Every Element"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{className:"text-emerald-300",children:"map()"})," creates a ",e.jsx("b",{children:"new array"})," by applying a function to every element of the original array. The original array is not changed."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx(a,{code:`const newArray = oldArray.map((item, index, array) => {
  // return transformed value
});`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 1 — Double each number"}),e.jsx(s,{initialCode:`const nums = [1,2,3];
const doubled = nums.map(n => n*2);
console.log(doubled);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 2 — Using arrow function"}),e.jsx(s,{initialCode:`const nums = [5, 10, 15];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [10, 20, 30]`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 3 — Extracting a single property from objects (student names)"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 88 },
  { name: "Mounita", marks: 92 },
  { name: "Devangshu", marks: 81 }
];
const names = students.map(s => s.name);
console.log(names); // ["Ritaja", "Mounita", "Devangshu"]`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 4 — Creating a formatted label list"}),e.jsx(s,{initialCode:`const students = [
  { name: "Pranjali", course: "JavaScript" },
  { name: "Susmita", course: "Python" },
  { name: "Kaustav", course: "Full Stack" }
];
const labels = students.map(s => s.name + " — " + s.course);
console.log(labels);
// ["Pranjali — JavaScript", "Susmita — Python", "Kaustav — Full Stack"]`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 5 — Map to Boolean (pass / fail)"}),e.jsx(s,{initialCode:`const marks = [35, 78, 90, 24];
const passStatus = marks.map(m => m >= 40);
console.log(passStatus); // [false, true, true, false]`,language:"javascript"})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-200 space-y-2",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"Common mistakes with map()"}),e.jsxs("ul",{className:"list-disc ml-5 space-y-1",children:[e.jsxs("li",{children:["Forgetting to ",e.jsx("b",{children:"return"})," from the callback."]}),e.jsx("li",{children:"Using map() only for side-effects (use forEach instead)."}),e.jsx("li",{children:"Expecting map() to modify the original array (it does not)."})]})]})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2. filter() — Keep Only What Passes a Test"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{className:"text-emerald-300",children:"filter()"})," creates a ",e.jsx("b",{children:"new array"})," with elements that return true from the test function."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx(a,{code:`const filteredArray = oldArray.filter((item, index, array) => {
  return true; // keep item
});`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 1 — Keep only even numbers"}),e.jsx(s,{initialCode:`const nums = [1, 2, 3, 4, 5, 6];
const evenNums = nums.filter(n => n % 2 === 0);
console.log(evenNums); // [2, 4, 6]`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 2 — Filter students who passed (marks ≥ 40)"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 85 },
  { name: "Swadeep", marks: 38 },
  { name: "Susmita", marks: 74 },
  { name: "Kaustav", marks: 29 }
];
const passed = students.filter(s => s.marks >= 40);
console.log(passed);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 3 — Search based filtering"}),e.jsx(s,{initialCode:`const courses = [
  "JavaScript Basics",
  "JavaScript Advanced",
  "Python for Data Analysis",
  "Tally with GST",
  "Full Stack Web Development"
];
const search = "JavaScript";
const jsCourses = courses.filter(c =>
  c.toLowerCase().includes(search.toLowerCase())
);

console.log(jsCourses);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 4 — Remove invalid values"}),e.jsx(s,{initialCode:`const data = [10, null, 25, undefined, 0, NaN, 50];
const clean = data.filter(item => Number.isFinite(item));
console.log(clean);`,language:"javascript"})]})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"3. reduce() — Turn an Array into a Single Value"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{className:"text-emerald-300",children:"reduce()"})," accumulates all elements into one value."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx(a,{code:`const result = array.reduce((acc, curr) => {
  return acc;
}, initialValue);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 1 — Sum of numbers"}),e.jsx(s,{initialCode:`const marks = [78, 85, 90];
const total = marks.reduce((acc, m) => acc + m, 0);
console.log(total);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 2 — Average marks"}),e.jsx(s,{initialCode:`const marks = [78, 85, 90];
            const total = marks.reduce((acc, m) => acc + m, 0);
            const avg = total / marks.length;
            console.log(avg);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 3 — Count passed students"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 85 },
  { name: "Swadeep", marks: 38 },
  { name: "Susmita", marks: 74 },
  { name: "Kaustav", marks: 29 }
];

const passedCount = students.reduce((acc, s) => {
  return s.marks >= 40 ? acc + 1 : acc;
}, 0);

console.log(passedCount);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 4 — Group pass / fail"}),e.jsx(s,{initialCode:`const students = [
  { name: "Pranjali", marks: 91 },
  { name: "Devangshu", marks: 45 },
  { name: "Mounita", marks: 33 },
  { name: "Susmita", marks: 77 }
];

const grouped = students.reduce(
  (acc, s) => {
    const key = s.marks >= 40 ? "pass" : "fail";
    acc[key].push(s);
    return acc;
  },
  { pass: [], fail: [] }
);

console.log(grouped);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 5 — Frequency count"}),e.jsx(s,{initialCode:`const marks = [80, 75, 80, 90, 75, 75];

const frequency = marks.reduce((acc, m) => {
  acc[m] = (acc[m] || 0) + 1;
  return acc;
}, {});

console.log(frequency);`,language:"javascript"})]})]})]})}export{r as default};

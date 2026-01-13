import{r as a,j as e,E as s}from"./index-CZhUHB75.js";import{C as t}from"./CodeBlock-4-_p7iwr.js";import"./prism-BFApiKhE.js";import"./prism-json-D0UlpdKh.js";class d extends a.Component{render(){return e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{className:"space-y-3",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-sky-300",children:["Higher-Order Array Methods —",e.jsx("span",{className:"text-sky-100",children:" map(), filter(), reduce()"})]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["In modern JavaScript, arrays behave like small data pipelines. Methods like ",e.jsx("code",{className:"text-emerald-300",children:"map()"}),",",e.jsx("code",{className:"text-emerald-300",children:" filter()"}),", and",e.jsx("code",{className:"text-emerald-300",children:" reduce()"})," allow you to transform, clean, and analyze data in a clean, expressive, and readable way. These are widely used in React apps, dashboards, APIs, and real-world applications like those we create at Coder & AccoTax, Barrackpore."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-sky-200",children:"Why “higher-order” methods?"}),e.jsxs("ul",{className:"list-disc ml-5 space-y-1",children:[e.jsx("li",{children:"They accept a function as an argument (callback)."}),e.jsx("li",{children:"They often return a new transformed array or a single result."}),e.jsx("li",{children:"They make code shorter, modern, clean & easy to maintain."})]})]})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"1. map() — Transform Every Element"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-emerald-300",children:"map()"})," creates a",e.jsx("strong",{children:" new array "})," by applying a function to every element. The original array is unchanged."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx(t,{code:`const result = array.map((value, index, array) => {
  return /* transformed value */;
});`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 1 — Double numbers"}),e.jsx(s,{initialCode:`const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 2 — Extract only student names"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 88 },
  { name: "Mounita", marks: 92 },
  { name: "Devangshu", marks: 81 }
];
const names = students.map(s => s.name);
console.log(names);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 3 — Create formatted labels"}),e.jsx(s,{initialCode:`const students = [
  { name: "Pranjali", course: "JavaScript" },
  { name: "Susmita", course: "Python" },
  { name: "Kaustav", course: "Full Stack" }
];

const labels = students.map(s => \`\${s.name} — \${s.course}\`);
console.log(labels);`,language:"javascript"})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-100 space-y-2",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"Common mistakes"}),e.jsxs("ul",{className:"list-disc ml-5 space-y-1",children:[e.jsxs("li",{children:["Forgetting to ",e.jsx("strong",{children:"return"})," the value inside map()."]}),e.jsx("li",{children:"Expecting map() to modify the original array (it doesn’t)."}),e.jsx("li",{children:"Using map() only for side-effects → use forEach instead."})]})]})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"2. filter() — Keep Only Matching Items"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-emerald-300",children:"filter()"})," also returns a ",e.jsx("strong",{children:"new array"}),", but only keeps elements for which the callback returns ",e.jsx("code",{children:"true"}),"."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx(s,{initialCode:`const result = array.filter((value, index, array) => {
  return /* condition */; // keep item if true
});`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 1 — Keep even numbers"}),e.jsx(s,{initialCode:`const nums = [1,2,3,4,5,6];
const even = nums.filter(n => n % 2 === 0);
console.log(even);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 2 — Students who passed"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 85 },
  { name: "Swadeep", marks: 38 },
  { name: "Susmita", marks: 74 },
  { name: "Kaustav", marks: 29 }
];

const passed = students.filter(s => s.marks >= 40);
console.log(passed);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 3 — Search filter (JavaScript courses)"}),e.jsx(s,{initialCode:`const courses = [
  "JavaScript Basics",
  "JavaScript Advanced",
  "Python for Data Analysis",
  "Tally with GST",
  "Full Stack Web Development"
];

const query = "javascript";
const result = courses.filter(c =>
  c.toLowerCase().includes(query.toLowerCase())
);

console.log(result);`,language:"javascript"})]})]}),e.jsxs("section",{className:"space-y-5",children:[e.jsx("h3",{className:"text-xl font-semibold text-sky-300",children:"3. reduce() — Convert Array → One Final Value"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{className:"text-emerald-300",children:"reduce()"})," compresses an entire array into one single result — sum, average, object, or anything you want to produce."]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-200 mb-1",children:"Syntax"}),e.jsx(s,{initialCode:`const result = array.reduce((accumulator, value, index, array) => {
  return /* updated accumulator */;
}, initialValue);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 1 — Sum of numbers"}),e.jsx(s,{initialCode:`const marks = [78, 85, 90];
const total = marks.reduce((acc, m) => acc + m, 0);
console.log(total);`,language:"javascript"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-semibold text-slate-200 text-sm",children:"Example 2 — Count passed students"}),e.jsx(s,{initialCode:`const students = [
  { name: "Ritaja", marks: 85 },
  { name: "Swadeep", marks: 38 },
  { name: "Susmita", marks: 74 },
  { name: "Kaustav", marks: 29 }
];

const passedCount = students.reduce((acc, s) => {
  return s.marks >= 40 ? acc + 1 : acc;
}, 0);

console.log(passedCount);`,language:"javascript"})]})]})]})}}export{d as default};

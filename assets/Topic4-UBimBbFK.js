import{r as a,j as e,E as s}from"./index-BwpYMbum.js";class r extends a.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Iterating Arrays — for, for...of & forEach()"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Looping through arrays is one of the most important concepts in JavaScript. There are multiple ways to iterate over lists—each useful in different situations. Below we explore the three most common ways with full syntax, explanation, and examples."}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"1. Classic for Loop"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The ",e.jsx("code",{children:"for"})," loop is the oldest and most flexible loop. You manually control:"]}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-1",children:[e.jsx("li",{children:"starting point"}),e.jsx("li",{children:"ending condition"}),e.jsx("li",{children:"increment/decrement"})]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300 leading-relaxed",children:[e.jsx("strong",{children:"Syntax:"}),e.jsx("br",{}),e.jsxs("code",{children:["for (initialization; condition; update) ","{"," ",e.jsx("br",{}),"   // code ",e.jsx("br",{}),"}"]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," No return value. The loop simply runs the statements."]}),e.jsx(s,{language:"javascript",initialCode:`const nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}`}),e.jsx(s,{language:"javascript",initialCode:`// Example 2: Sum of elements
const marks = [80, 90, 95];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

console.log("Total:", total); // 265`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"2. for...of Loop"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{children:"for...of"})," is a modern loop that directly gives you **each value** from an iterable like an array. This makes it cleaner and easier to read than a classic ",e.jsx("code",{children:"for"})," loop."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300 leading-relaxed",children:[e.jsx("strong",{children:"Syntax:"}),e.jsx("br",{}),e.jsxs("code",{children:["for (let value of array) ","{"," ",e.jsx("br",{}),"   // code using value ",e.jsx("br",{}),"}"]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," No return value."]}),e.jsx(s,{language:"javascript",initialCode:`const nums = [10, 20, 30];

for (let value of nums) {
  console.log(value);
}`}),e.jsx(s,{language:"javascript",initialCode:`// Example 2: Names of students
const students = ["Ritaja", "Susmita", "Pranjali"];

for (let name of students) {
  console.log("Student:", name);
}`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"3. forEach()"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("code",{children:"forEach()"})," is a higher-order function that takes a callback. It executes the callback once for each element."]}),e.jsxs("div",{className:"bg-slate-800 border border-slate-700 p-3 rounded text-xs text-sky-300 leading-relaxed",children:[e.jsx("strong",{children:"Syntax:"}),e.jsx("br",{}),e.jsxs("code",{children:["array.forEach(function(value, index, array) ","{"," ",e.jsx("br",{}),"   // code ",e.jsx("br",{}),"}",");"]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Return Type:"})," ",e.jsx("code",{children:"undefined"})," (always). It does **not** return a new array."]}),e.jsx(s,{language:"javascript",initialCode:`const nums = [10, 20, 30];

nums.forEach(n => console.log(n));`}),e.jsx(s,{language:"javascript",initialCode:`// Example 2: Access index also
const courses = ["JavaScript", "Python", "C"];

courses.forEach((course, index) => {
  console.log(index, course);
});`}),e.jsx(s,{language:"javascript",initialCode:`// Example 3: Realistic use — Print marksheet
const report = [
  { name: "Devangshu", marks: 91 },
  { name: "Kaustav", marks: 88 },
  { name: "Mounita", marks: 95 },
];

report.forEach((item) => {
  console.log(\`\${item.name} scored \${item.marks}\`);
});`}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"When should you use each loop?"}),e.jsxs("ul",{className:"list-disc pl-6 text-slate-400 text-sm space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"for loop →"})," full control (start, end, increment)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for...of →"})," cleanest way to loop values"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"forEach →"})," best for array-only operations & callback style"]})]}),e.jsx("hr",{className:"border-slate-700"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Iterating arrays is the foundation for all data-processing tasks in JavaScript. Choosing the right loop makes your code readable, efficient, and professional."})]})}}export{r as default};

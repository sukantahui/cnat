import{r as t,j as e}from"./index-BYW9fbRW.js";import{C as s}from"./CodeBlock-DmXvk3dL.js";import"./prism-json-Dm8hcPBb.js";class i extends t.Component{render(){return e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 py-10 px-4",children:e.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-sky-300",children:"Basic Code Quality Practices: Naming, Comments & Small Functions"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Clean code is not optional—it's a necessity. At ",e.jsx("strong",{children:"Coder & AccoTax Barrackpore"}),", teachers like ",e.jsx("strong",{children:"Sukanta Hui"})," and",e.jsx("strong",{children:" Tanusree Hui"})," always encourage students (Ritaja, Devangshu, Mounita, Susmita, Kaustav etc.) to write code that is not just functional, but readable and maintainable."]}),e.jsxs("section",{className:"p-6 bg-slate-900/40 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"1. Meaningful Variable & Function Names"}),e.jsx("p",{className:"text-slate-300 text-sm mb-3",children:"Good names make code self-explanatory. Bad names create confusion. Follow these rules:"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"camelCase"})," for variables & functions"]}),e.jsxs("li",{children:["Use clear, descriptive words (not ",e.jsx("code",{children:"a1"}),", ",e.jsx("code",{children:"data"}),", ",e.jsx("code",{children:"x"}),")"]}),e.jsx("li",{children:"Function names must represent actions"})]}),e.jsx(s,{language:"javascript",code:`
// ❌ Bad
let n = 80;
function fn(a) { return a * 2; }

// ✅ Good
let studentMarks = 80;
function doubleValue(value) { return value * 2; }
`})]}),e.jsxs("section",{className:"p-6 bg-slate-900/40 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"2. Write Helpful Comments (But Not Too Many)"}),e.jsxs("p",{className:"text-slate-300 text-sm mb-3",children:["Comments should explain ",e.jsx("em",{children:"why"})," something is done, not just repeat what the code already shows."]}),e.jsx(s,{language:"javascript",code:`
// Good comment:
 // Calculate total marks for Ritaja
function getTotal(marks) {
  return marks.reduce((sum, m) => sum + m, 0);
}

// Bad comment:
 // loop runs
for(let i=0; i<5; i++) {}
`}),e.jsx("p",{className:"text-slate-400 text-xs",children:"Comments must add value, not noise."})]}),e.jsxs("section",{className:"p-6 bg-slate-900/40 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"3. Keep Functions Small & Focused"}),e.jsxs("p",{className:"text-slate-300 text-sm mb-3",children:["A function should do ",e.jsx("strong",{children:"one thing"})," and do it well. This makes your code:"]}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Easier to understand"}),e.jsx("li",{children:"Easier to debug"}),e.jsx("li",{children:"Easier to test"}),e.jsx("li",{children:"Easier to reuse"})]}),e.jsx(s,{language:"javascript",code:`
// ❌ Bad — too many responsibilities
function processStudent(student) {
  console.log("Saving to database...");
  console.log("Sending email...");
  console.log("Generating report...");
}

// ✅ Good — small, single-purpose functions
function saveStudent(student) {}
function sendEmail(to, subject) {}
function generateReport(student) {}
`})]}),e.jsxs("section",{className:"p-6 bg-slate-900/40 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"4. Consistent Spacing & Formatting"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Write code that looks clean. This helps both you and your teammates— especially when working in professional environments."}),e.jsx(s,{language:"javascript",code:`
// ❌ Messy
function add(a,b){return a+b;}

// ✅ Neat & readable
function add(a, b) {
  return a + b;
}
`})]}),e.jsxs("section",{className:"p-6 bg-slate-900/50 border border-slate-800 rounded-3xl",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Mini Clean Code Checklist"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1 mt-2",children:[e.jsx("li",{children:"Meaningful names"}),e.jsx("li",{children:"Short, focused functions"}),e.jsx("li",{children:"Helpful comments"}),e.jsx("li",{children:"Consistent formatting"}),e.jsx("li",{children:"Remove unused variables/code"}),e.jsx("li",{children:"Avoid deeply nested if/else"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-2",children:"Follow this checklist and your code will look professional—just like students trained at Coder & AccoTax."})]})]})})}}export{i as default};

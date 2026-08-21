import{j as e}from"./index-DCfh6IuU.js";import{C as t}from"./CodeBlock-CYuXhwtf.js";import"./prism-BlovlE_q.js";import"./prism-json-D0UlpdKh.js";import"./file-code-CnNuUJDx.js";import"./createLucideIcon-JrHpk1sJ.js";import"./check-Bg-4qk7J.js";import"./copy-vxMnYODG.js";import"./download-CmPUNbCV.js";import"./play-DUoF7fvh.js";function x(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Return Values & Early Returns"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["A function can return data using the ",e.jsx("code",{children:"return"})," statement."]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Basic Return"}),e.jsx(t,{code:`function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 15`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Early Return"}),e.jsx(t,{code:`function checkAge(age) {
  if (age < 18) return "Not allowed";
  return "Welcome!";
}

console.log(checkAge(16));`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Early return improves readability and reduces nested conditions."})]})}export{x as default};

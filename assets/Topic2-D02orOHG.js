import{j as e}from"./index-D-07m6Qb.js";import{C as t}from"./CodeBlock-BNkIv_4S.js";import"./prism-Dw--ewGm.js";import"./prism-json-D0UlpdKh.js";import"./file-code-n9BmD-WT.js";import"./copy-BeFV_rGJ.js";import"./download-B_C6cj02.js";import"./play-4rBxpZha.js";function d(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Return Values & Early Returns"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["A function can return data using the ",e.jsx("code",{children:"return"})," statement."]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Basic Return"}),e.jsx(t,{code:`function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 15`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Early Return"}),e.jsx(t,{code:`function checkAge(age) {
  if (age < 18) return "Not allowed";
  return "Welcome!";
}

console.log(checkAge(16));`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Early return improves readability and reduces nested conditions."})]})}export{d as default};

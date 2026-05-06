import{j as e}from"./index-BnfAr6UH.js";import{C as t}from"./CodeBlock-Q1dXla_L.js";import"./prism-BWdUCJxD.js";import"./prism-json-D0UlpdKh.js";import"./file-code-2-2TDWSW.js";import"./copy-Cqsw3qgy.js";import"./download-DLZRmf4V.js";import"./play-Ckwl6zud.js";function d(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Return Values & Early Returns"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["A function can return data using the ",e.jsx("code",{children:"return"})," statement."]}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Basic Return"}),e.jsx(t,{code:`function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // 15`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Early Return"}),e.jsx(t,{code:`function checkAge(age) {
  if (age < 18) return "Not allowed";
  return "Welcome!";
}

console.log(checkAge(16));`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Early return improves readability and reduces nested conditions."})]})}export{d as default};

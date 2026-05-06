import{j as e}from"./index-BnfAr6UH.js";import{C as t}from"./CodeBlock-Q1dXla_L.js";import"./prism-BWdUCJxD.js";import"./prism-json-D0UlpdKh.js";import"./file-code-2-2TDWSW.js";import"./copy-Cqsw3qgy.js";import"./download-DLZRmf4V.js";import"./play-Ckwl6zud.js";function m(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Arrow Functions"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Arrow functions offer a shorter syntax introduced in ES6."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Normal vs Arrow"}),e.jsx(t,{code:`// Normal
function add(a, b) {
  return a + b;
}

// Arrow
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 7));`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"With one parameter"}),e.jsx(t,{code:'const greet = name => `Hello ${name}!`;\n\nconsole.log(greet("Coder & AccoTax"));',language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Arrow functions do not have their own ",e.jsx("code",{children:"this"}),"."]})]})}export{m as default};

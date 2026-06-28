import{j as e}from"./index-DlQhRwac.js";import{C as t}from"./CodeBlock-DGp12BCC.js";import"./prism-DOs7RmKt.js";import"./prism-json-D0UlpdKh.js";import"./file-code-BQhvRATS.js";import"./copy-Dx2Xdz_j.js";import"./download-9mt5C_Kp.js";import"./play-CpwSfdJ1.js";function m(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Arrow Functions"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Arrow functions offer a shorter syntax introduced in ES6."}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Normal vs Arrow"}),e.jsx(t,{code:`// Normal
function add(a, b) {
  return a + b;
}

// Arrow
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 7));`,language:"javascript"}),e.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"With one parameter"}),e.jsx(t,{code:'const greet = name => `Hello ${name}!`;\n\nconsole.log(greet("Coder & AccoTax"));',language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Arrow functions do not have their own ",e.jsx("code",{children:"this"}),"."]})]})}export{m as default};

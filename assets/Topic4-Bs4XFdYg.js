import{j as t}from"./index-YH4u--c0.js";import{C as e}from"./CodeBlock-B_cidyQe.js";import"./prism-DA5yNLsR.js";import"./prism-json-D0UlpdKh.js";import"./file-code-CdZAdXD5.js";import"./createLucideIcon-D7phWlUA.js";import"./copy-D-9DuOQr.js";import"./download-Bn-I9ybH.js";import"./play-BWUk_zaa.js";function d(){return t.jsxs("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Arrow Functions"}),t.jsx("p",{className:"text-slate-300 text-sm",children:"Arrow functions offer a shorter syntax introduced in ES6."}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"Normal vs Arrow"}),t.jsx(e,{code:`// Normal
function add(a, b) {
  return a + b;
}

// Arrow
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 7));`,language:"javascript"}),t.jsx("h3",{className:"text-lg text-slate-200 font-semibold",children:"With one parameter"}),t.jsx(e,{code:'const greet = name => `Hello ${name}!`;\n\nconsole.log(greet("Coder & AccoTax"));',language:"javascript"}),t.jsxs("p",{className:"text-slate-400 text-sm",children:["Arrow functions do not have their own ",t.jsx("code",{children:"this"}),"."]})]})}export{d as default};

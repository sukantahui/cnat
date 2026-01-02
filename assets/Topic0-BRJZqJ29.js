import{r as s,j as e}from"./index-BulJBpSd.js";import{C as t}from"./CodeBlock-e7rvqyga.js";import"./prism-BPoWlcML.js";import"./prism-json-D0UlpdKh.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"What is the DOM? Nodes, Elements & Tree Structure"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The ",e.jsx("span",{className:"text-sky-300 font-semibold",children:"DOM (Document Object Model)"}),"is a programming interface that represents the structure of a webpage. JavaScript uses the DOM to read or change any part of the page — text, buttons, images, forms, etc."]}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Think of the DOM as a ",e.jsx("strong",{children:"tree of elements"})," where every tag in HTML becomes a node in JavaScript."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Example: Simple HTML Structure (Shown as DOM Tree)"}),e.jsx(t,{code:`<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome to Coder & AccoTax</h1>
    <p>Student: Ritaja</p>
    <button id="clickBtn">Click Me</button>
  </body>
</html>`,language:"html"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["The DOM converts this HTML into a ",e.jsx("strong",{children:"tree"})," that JavaScript can control."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"DOM Tree Representation"}),e.jsx(t,{code:`Document
 └── html
      └── body
           ├── h1
           ├── p
           └── button`,language:"text"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"JavaScript Accessing DOM Nodes"}),e.jsx(t,{code:`const heading = document.querySelector("h1");
console.log(heading.innerText);

const studentPara = document.querySelector("p");
console.log(studentPara.innerText);

const btn = document.getElementById("clickBtn");
console.log(btn.tagName);`,language:"javascript"}),e.jsx("p",{className:"text-slate-400 text-sm",children:"JavaScript can read and modify any part of this DOM tree."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200",children:"Realistic Classroom Example — Coder & AccoTax (Barrackpore)"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Suppose you have a list of students appearing in a JavaScript class:"}),e.jsx(t,{code:`<ul id="studentList">
  <li>Ritaja</li>
  <li>Mounita</li>
  <li>Swadeep</li>
</ul>`,language:"html"}),e.jsx(t,{code:`const list = document.getElementById("studentList");
console.log(list.children);  // Shows all 3 <li> elements`,language:"javascript"}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["The browser converts this list into DOM ",e.jsx("strong",{children:"node objects"})," that JavaScript can interact with."]}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"The DOM represents HTML as a tree structure."}),e.jsx("li",{children:"Every HTML tag becomes a JavaScript-accessible node."}),e.jsx("li",{children:"You can use JS to read, change, add, or remove parts of the DOM."}),e.jsx("li",{children:"DOM is the foundation of all interactivity in webpages."})]})]})]})}}export{c as default};

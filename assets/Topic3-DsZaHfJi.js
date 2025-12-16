import{r as s,j as e}from"./index-BMdPLlUD.js";import{C as t}from"./CodeBlock-C-fftQnp.js";import"./prism-json-C2TBqc87.js";class d extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Creating, Appending & Removing Elements in the DOM"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The DOM allows JavaScript to ",e.jsx("strong",{children:"create new HTML elements"}),",",e.jsx("strong",{children:"insert them"})," into the page, and ",e.jsx("strong",{children:"remove them"})," when needed."]}),e.jsx("p",{className:"text-slate-300 text-sm",children:"These operations are essential for building interactive interfaces like:"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm",children:[e.jsx("li",{children:"Dynamically generated lists"}),e.jsx("li",{children:"Interactive forms"}),e.jsx("li",{children:"Chat messages"}),e.jsx("li",{children:"Real-time dashboards"})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"1. Creating Elements with createElement()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"document.createElement()"})," creates a new element in memory — it is",e.jsx("strong",{children:"NOT visible"})," until appended to the document."]}),e.jsx(t,{language:"html",code:'<div id="container"></div>'}),e.jsx(t,{language:"javascript",code:`const box = document.createElement("p");
box.innerText = "Hello from Coder & AccoTax";`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"2. appendChild()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Used to insert a created element ",e.jsx("strong",{children:"at the end"})," of a parent."]}),e.jsx(t,{language:"javascript",code:`const container = document.getElementById("container");

// Create element
const line = document.createElement("p");
line.innerText = "Welcome Ritaja!";

// Add to container
container.appendChild(line);`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"3. prepend()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Inserts the element ",e.jsx("strong",{children:"at the top"})," of the parent."]}),e.jsx(t,{language:"javascript",code:`const title = document.createElement("h3");
title.innerText = "Today's Class by Sukanta Hui";

// Insert at the top
container.prepend(title);`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"4. remove()"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Removes an element from the DOM immediately."}),e.jsx(t,{language:"javascript",code:`const unwanted = document.getElementById("oldNotice");
unwanted.remove();`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"Realistic Classroom Example — Adding Students Dynamically"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"During a JavaScript session in Coder & AccoTax, Barrackpore, assume we maintain an online attendance list."}),e.jsx(t,{language:"html",code:`<ul id="students">
  <li>Kaustav</li>
  <li>Mounita</li>
</ul>

<button id="addBtn">Add New Student</button>`}),e.jsx(t,{language:"javascript",code:`const list = document.getElementById("students");
const btn = document.getElementById("addBtn");

btn.addEventListener("click", () => {
  const newStd = document.createElement("li");
  newStd.innerText = "Devangshu";
  list.appendChild(newStd);
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"Removing Elements – Example"}),e.jsx(t,{language:"javascript",code:`// Remove first student
const firstStudent = list.querySelector("li");
firstStudent.remove();`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"createElement()"})," → Create elements in memory"]}),e.jsxs("li",{children:[e.jsx("code",{children:"appendChild()"})," → Add element at the end"]}),e.jsxs("li",{children:[e.jsx("code",{children:"prepend()"})," → Add element at the beginning"]}),e.jsxs("li",{children:[e.jsx("code",{children:"remove()"})," → Delete element from the DOM"]}),e.jsx("li",{children:"Useful for lists, chat apps, dynamic tables, dashboards, etc."})]})]})]})}}export{d as default};

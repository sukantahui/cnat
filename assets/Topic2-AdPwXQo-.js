import{r as s,j as e}from"./index-CG3iA-Ea.js";import{C as t}from"./CodeBlock-Bjfl_AH8.js";import"./prism-DRxy4y8s.js";import"./prism-json-D0UlpdKh.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Changing Text, HTML & CSS Using JavaScript"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Once you select an element from the DOM, the next step is modifying what it displays. JavaScript allows you to change:"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"innerText"})," – text only"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"innerHTML"})," – HTML + formatting"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"style"})," – CSS dynamically"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"classList"})," – add/remove CSS classes"]})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"1. Changing Text using innerText"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"innerText"})," replaces the text content of an element."]}),e.jsx(t,{code:'<h2 id="greet">Welcome to Coder & AccoTax</h2>',language:"html"}),e.jsx(t,{code:`const title = document.getElementById("greet");
title.innerText = "Hello Students — Class by Sukanta Hui";`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"2. Changing HTML using innerHTML"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"innerHTML"})," allows inserting HTML tags inside the element."]}),e.jsx(t,{code:'<div id="box"></div>',language:"html"}),e.jsx(t,{code:`document.getElementById("box").innerHTML = \`
  <h3 style="color:skyblue">Today's Students</h3>
  <ul>
    <li>Ritaja</li>
    <li>Mounita</li>
    <li>Swadeep</li>
  </ul>
\`;`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"3. Changing CSS Style Dynamically"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["You can modify CSS properties using the ",e.jsx("code",{children:"style"})," object."]}),e.jsx(t,{code:'<p id="note">Important Notice</p>',language:"html"}),e.jsx(t,{code:`const note = document.getElementById("note");
note.style.color = "yellow";
note.style.backgroundColor = "black";
note.style.padding = "8px";
note.style.borderRadius = "6px";`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"4. Using classList (add, remove, toggle)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"classList"})," lets you add or remove CSS classes cleanly."]}),e.jsx(t,{code:'<p id="studentName" class="tag">Kaustav</p>',language:"html"}),e.jsx(t,{code:`const student = document.getElementById("studentName");

// Add highlight
student.classList.add("highlight");

// Remove a class
student.classList.remove("tag");

// Toggle dark mode
student.classList.toggle("dark-theme");`,language:"javascript"}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"Realistic Classroom Example — Coder & AccoTax (Barrackpore)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"In Sukanta Hui’s JavaScript class, we often update student lists dynamically."}),e.jsx(t,{code:`<ul id="attendance">
  <li>Pranjali</li>
  <li>Susmita</li>
</ul>

<button id="add">Add Devangshu</button>`,language:"html"}),e.jsx(t,{code:`const attendance = document.getElementById("attendance");
const btn = document.getElementById("add");

btn.addEventListener("click", () => {
  attendance.innerHTML += "<li>Devangshu</li>";
});`,language:"javascript"}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"innerText"})," → change plain text only"]}),e.jsxs("li",{children:[e.jsx("code",{children:"innerHTML"})," → insert formatted HTML"]}),e.jsxs("li",{children:[e.jsx("code",{children:"style"})," → change CSS properties"]}),e.jsxs("li",{children:[e.jsx("code",{children:"classList.add/remove/toggle"})," → best way to manage CSS classes"]}),e.jsx("li",{children:"DOM updates make pages interactive and dynamic"})]})]})]})}}export{c as default};

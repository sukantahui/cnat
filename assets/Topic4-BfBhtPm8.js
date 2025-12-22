import{r as s,j as e}from"./index-BwpYMbum.js";import{C as t}from"./CodeBlock-CcgrTu6d.js";import"./prism-Du6d9kWS.js";import"./prism-json-D0UlpdKh.js";class o extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Working with Attributes, Classes & data-* Attributes"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["HTML elements contain attributes like ",e.jsx("code",{children:"href"}),", ",e.jsx("code",{children:"src"}),",",e.jsx("code",{children:"title"}),", ",e.jsx("code",{children:"id"}),", ",e.jsx("code",{children:"value"}),", etc. JavaScript lets you ",e.jsx("strong",{children:"read"}),", ",e.jsx("strong",{children:"modify"})," and ",e.jsx("strong",{children:"remove"})," these attributes."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-4",children:"1. Reading Attributes using getAttribute()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"getAttribute()"})," reads any attribute from an HTML tag."]}),e.jsx(t,{language:"html",code:'<a id="profile" href="https://www.codernaccotax.co.in">Visit Site</a>'}),e.jsx(t,{language:"javascript",code:`const link = document.getElementById("profile");
console.log(link.getAttribute("href"));`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-4",children:"2. Setting Attributes using setAttribute()"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["You can update or add a new attribute using ",e.jsx("code",{children:"setAttribute()"}),"."]}),e.jsx(t,{language:"javascript",code:`link.setAttribute("href", "https://www.youtube.com/codernaccotax");
link.setAttribute("title", "Coder & AccoTax Official");`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-4",children:"3. Removing Attributes"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"removeAttribute()"})," deletes an attribute completely."]}),e.jsx(t,{language:"javascript",code:'link.removeAttribute("title");'}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"4. Using classList (add, remove, toggle, contains)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"classList"})," is the best way to manage CSS classes in JavaScript."]}),e.jsx(t,{language:"html",code:'<p id="stdName" class="label">Mounita</p>'}),e.jsx(t,{language:"javascript",code:`const std = document.getElementById("stdName");

// Add a class
std.classList.add("highlight");

// Remove a class
std.classList.remove("label");

// Check if a class exists
console.log(std.classList.contains("highlight"));

// Toggle a class
std.classList.toggle("dark-theme");`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"5. Using data-* Attributes (dataset)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:[e.jsx("code",{children:"data-*"})," attributes store custom information in an element. JavaScript accesses these through the ",e.jsx("code",{children:"dataset"})," object."]}),e.jsx(t,{language:"html",code:'<div id="student" data-name="Ritaja" data-score="92"></div>'}),e.jsx(t,{language:"javascript",code:`const s = document.getElementById("student");
console.log(s.dataset.name);   // "Ritaja"
console.log(s.dataset.score);  // "92"

// Modify dataset
s.dataset.score = 95;`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"Realistic Example — Marking Attendance in Coder & AccoTax"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Assume Sukanta Hui keeps student data using ",e.jsx("code",{children:"data-id"})," and ",e.jsx("code",{children:"data-course"}),"."]}),e.jsx(t,{language:"html",code:`<ul>
  <li class="std" data-id="101" data-course="JavaScript">Kaustav</li>
  <li class="std" data-id="102" data-course="JavaScript">Pranjali</li>
</ul>`}),e.jsx(t,{language:"javascript",code:`const all = document.querySelectorAll(".std");

all.forEach(st => {
  console.log(st.dataset.id);       // student roll
  console.log(st.dataset.course);   // subject
});`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"getAttribute(name)"})," → read value"]}),e.jsxs("li",{children:[e.jsx("code",{children:"setAttribute(name, value)"})," → update or add"]}),e.jsxs("li",{children:[e.jsx("code",{children:"removeAttribute(name)"})," → delete"]}),e.jsxs("li",{children:[e.jsx("code",{children:"classList.add/remove/toggle"})," → best for CSS classes"]}),e.jsxs("li",{children:[e.jsx("code",{children:"dataset"})," → read & write custom data"]})]})]})]})}}export{o as default};

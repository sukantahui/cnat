import{r as n,j as e}from"./index-DOD7J0wX.js";import{C as t}from"./CodeBlock-Dhd1yqAJ.js";import"./prism-json-mIOYIx_C.js";class o extends n.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Event Bubbling & Capturing in JavaScript"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["When you click on an element, the event does not stay on that element. It travels through the DOM tree in a specific order — this is called",e.jsx("strong",{children:"Bubbling"})," and ",e.jsx("strong",{children:"Capturing"}),". Understanding this is important for UI components, modals, menus, and forms used in Coder & AccoTax applications."]}),e.jsx("div",{className:"p-4 bg-slate-900/60 border border-slate-700 rounded-xl",children:e.jsx("p",{className:"text-slate-300 text-sm font-mono leading-relaxed",children:`Capturing Phase (Top → Target)
--------------------------------
window
  ↓
document
  ↓
<html>
  ↓
<body>
  ↓
<div id="outer">
  ↓
<button id="inner"> CLICK </button>
  ↑
Bubbling Phase (Target → Top)
`})}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"1. Event Bubbling (Default)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Event travels from the ",e.jsx("strong",{children:"target element upward"}),"."]}),e.jsx(t,{language:"html",code:`<div id="outer" style="padding:20px;background:#334155">
  Outer Div
  <button id="inner" style="margin-top:10px">Click Me</button>
</div>`}),e.jsx(t,{language:"javascript",code:`document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer clicked");
});

document.getElementById("inner").addEventListener("click", () => {
  console.log("Inner clicked");
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"If Kaustav clicks the button:"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-400 text-sm",children:[e.jsx("li",{children:"Inner clicked"}),e.jsx("li",{children:"Outer clicked"})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Event Capturing (useCapture = true)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Event travels from the ",e.jsx("strong",{children:"root element to the target"}),"."]}),e.jsx(t,{language:"javascript",code:`document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer (capturing)");
}, true);

document.getElementById("inner").addEventListener("click", () => {
  console.log("Inner (capturing)");
}, true);`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Clicking the button prints:"}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-400 text-sm",children:[e.jsx("li",{children:"Outer (capturing)"}),e.jsx("li",{children:"Inner (capturing)"})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"3. stopPropagation() — Stop the event from going further"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Useful for preventing parent menus from opening when inner buttons are clicked."}),e.jsx(t,{language:"javascript",code:`document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer clicked");
});

document.getElementById("inner").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Inner clicked only");
});`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Clicking inner button prints only ",e.jsx("code",{children:"Inner clicked only"}),"."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"4. Real-life Example — Dropdown Menu Click Handling"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Teachers like ",e.jsx("strong",{children:"Sukanta Hui"})," or ",e.jsx("strong",{children:"Tanusree Hui"})," show this example in JavaScript UI sessions."]}),e.jsx(t,{language:"html",code:`<button id="menuBtn">Menu</button>
<div id="menu" style="display:none; background:#475569; padding:10px">
  <p onclick="alert('Hello Ritaja')">Profile</p>
  <p>Settings</p>
</div>`}),e.jsx(t,{language:"javascript",code:`const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Open dropdown
btn.addEventListener("click", (e) => {
  menu.style.display = "block";
  e.stopPropagation(); // prevent document click
});

// Close dropdown when clicking anywhere else
document.addEventListener("click", () => {
  menu.style.display = "none";
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"5. Coder & AccoTax Classroom Example"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["When students like ",e.jsx("strong",{children:"Pranjali"}),", ",e.jsx("strong",{children:"Mounita"})," or",e.jsx("strong",{children:" Swadeep"})," click on FAQ items, bubbling affects outer container."]}),e.jsx(t,{language:"html",code:`<div id="faqContainer">
  <div class="faq">
    <h3 class="q">What is DOM?</h3>
    <p class="a" style="display:none">DOM is Document Object Model.</p>
  </div>
</div>`}),e.jsx(t,{language:"javascript",code:`document.getElementById("faqContainer").addEventListener("click", () => {
  console.log("FAQ Container clicked");
});

document.querySelector(".q").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Question clicked only");
});`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Capturing"})," → Root → Target"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bubbling"})," → Target → Root (default)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"stopPropagation()"})," → Prevent event from moving further"]}),e.jsx("li",{children:"Useful in menus, modals, accordions and nested UI elements"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"These concepts play a major role in UI logic used at Coder & AccoTax, Barrackpore."})]})]})}}export{o as default};

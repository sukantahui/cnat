import{r as s,j as e}from"./index-DYnQBDbm.js";import{C as t}from"./CodeBlock-BTC7pc-X.js";import"./prism-CKMWrKZA.js";import"./prism-json-D0UlpdKh.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"The Event Object — event.target, event.type, event.key, coordinates & more"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Every event handler receives a special object called the ",e.jsx("strong",{children:"event object"}),". It contains information about what happened — which key was pressed, which element was clicked, mouse position, and more. Understanding this is crucial for interactive applications built at Coder & AccoTax."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"1. event.target — The element that triggered the event"}),e.jsx(t,{language:"html",code:`<button class="btn">Mark Attendance</button>
<button class="btn">Homework Done</button>`}),e.jsx(t,{language:"javascript",code:`document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(event) {
    console.log("Clicked:", event.target.innerText);
  });
});`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["If Devangshu clicks the second button, it prints:",e.jsx("code",{children:"Homework Done"})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. event.type — Which event occurred?"}),e.jsx(t,{language:"javascript",code:`btn.addEventListener("click", function(e) {
  console.log(e.type);   // "click"
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. event.key — Which key was pressed? (Keyboard Events)"}),e.jsx(t,{language:"html",code:'<input id="typingBox" placeholder="Type something..." />'}),e.jsx(t,{language:"javascript",code:`const input = document.getElementById("typingBox");

input.addEventListener("keydown", function(e) {
  console.log("Key Pressed:", e.key);
});`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["If ",e.jsx("strong",{children:"Ritaja"}),' presses "A", console prints:',e.jsx("code",{children:"Key Pressed: A"})]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"4. Mouse Coordinates — event.clientX & event.clientY"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Useful for drawing apps, games, drag-drop tools, etc."}),e.jsx(t,{language:"html",code:'<div id="box" style="width:120px;height:120px;background:#475569"></div>'}),e.jsx(t,{language:"javascript",code:`document.getElementById("box").addEventListener("mousemove", function(e) {
  console.log("X:", e.clientX, "Y:", e.clientY);
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"5. preventDefault() — Stop default behaviour"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Used often in forms, links, drag-drop, etc."}),e.jsx(t,{language:"html",code:'<a id="link" href="https://www.codernaccotax.co.in">Visit Website</a>'}),e.jsx(t,{language:"javascript",code:`const link = document.getElementById("link");

link.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("Navigation blocked by teacher Sukanta Hui.");
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"6. stopPropagation() — Stop event bubbling"}),e.jsx(t,{language:"html",code:`<div id="outer" style="padding:20px;background:#334155">
  Outer Box
  <div id="inner" style="margin-top:10px;padding:20px;background:#64748b">
    Inner Box
  </div>
</div>`}),e.jsx(t,{language:"javascript",code:`document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer clicked");
});

document.getElementById("inner").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Inner clicked only");
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Clicking inside the inner box will not trigger outer box."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"Real Classroom Example — Input Analysis Tool (Coder & AccoTax)"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["Students like ",e.jsx("strong",{children:"Pranjali"})," and ",e.jsx("strong",{children:"Susmita"})," use this to see their typing pattern:"]}),e.jsx(t,{language:"html",code:'<input id="activity" placeholder="Type here..." />'}),e.jsx(t,{language:"javascript",code:`const box = document.getElementById("activity");

box.addEventListener("keyup", function(e) {
  console.log("Key:", e.key);
  console.log("Event Type:", e.type);
  console.log("Target:", e.target.value);
});`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"event.target"})," → element where event happened"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"event.type"})," → event name"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"event.key"})," → keyboard key pressed"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"clientX/Y"})," → mouse coordinates"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"preventDefault()"})," → stop default behavior"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"stopPropagation()"})," → stop bubbling"]})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"This is heavily used in interactive applications taught at Coder & AccoTax, Barrackpore."})]})]})}}export{c as default};

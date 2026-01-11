import{r as s,j as e}from"./index-BMXE8ahz.js";import{C as t}from"./CodeBlock-C060B2hy.js";import"./prism-CKpsntko.js";import"./prism-json-D0UlpdKh.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Event Types: click, input, change, submit, keyup, keydown, mouse events"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Events are actions performed by the user — clicking, typing, moving the mouse, submitting a form, etc. JavaScript allows us to detect these actions and respond to them. This is the foundation of interactive websites used by students at Coder & AccoTax."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"1. click Event"}),e.jsx(t,{language:"html",code:'<button id="btn">Click Me</button>'}),e.jsx(t,{language:"javascript",code:`const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("Button clicked!");
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"In class, students like Ritaja and Kaustav practice this when learning basic DOM events."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"2. input Event (fires every time user types)"}),e.jsx(t,{language:"html",code:'<input type="text" id="nameInput" placeholder="Type your name" />'}),e.jsx(t,{language:"javascript",code:`const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("input", () => {
  console.log(nameInput.value);
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Ideal when students like Susmita or Pranjali type their names and see the result instantly."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"3. change Event (fires when field loses focus)"}),e.jsx(t,{language:"html",code:`<select id="course">
  <option>JavaScript</option>
  <option>Python</option>
  <option>GST</option>
</select>`}),e.jsx(t,{language:"javascript",code:`const course = document.getElementById("course");

course.addEventListener("change", () => {
  console.log("Selected:", course.value);
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Used at admission desk when students choose their course."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"4. submit Event (form submission)"}),e.jsx(t,{language:"html",code:`<form id="admissionForm">
  <input type="text" placeholder="Student Name" />
  <button type="submit">Submit</button>
</form>`}),e.jsx(t,{language:"javascript",code:`const form = document.getElementById("admissionForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();  // stop page reload
  console.log("Form submitted!");
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Teachers like Sukanta Hui demonstrate this while showing validation."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"5. keyup & keydown — Detecting Keyboard Presses"}),e.jsx(t,{language:"html",code:'<input type="text" id="textBox" placeholder="Press any key" />'}),e.jsx(t,{language:"javascript",code:`const box = document.getElementById("textBox");

box.addEventListener("keydown", (e) => {
  console.log("Key Down:", e.key);
});

box.addEventListener("keyup", (e) => {
  console.log("Key Up:", e.key);
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Very useful for search bars or typing tests (like your Typing Test tool)."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"6. Mouse Events — mouseover, mouseout, mousemove, dblclick"}),e.jsx(t,{language:"html",code:'<div id="box" style="width:120px;height:120px;background:#334155"></div>'}),e.jsx(t,{language:"javascript",code:`const square = document.getElementById("box");

square.addEventListener("mouseover", () => console.log("Mouse Over"));
square.addEventListener("mouseout", () => console.log("Mouse Out"));
square.addEventListener("mousemove", () => console.log("Mouse Moving"));
square.addEventListener("dblclick", () => console.log("Double Clicked"));`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"click"})," → button presses"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"input"})," → typing live"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"change"})," → selecting dropdown"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"submit"})," → form submissions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"keyup / keydown"})," → keyboard detection"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"mouse events"})," → hover, movement, double-click"]})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"These event types are used in almost all UI components built in Coder & AccoTax, Barrackpore."})]})]})}}export{c as default};

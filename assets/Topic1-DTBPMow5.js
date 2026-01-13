import{r as s,j as e}from"./index-DmfbEenU.js";import{C as t}from"./CodeBlock-DEW5qnGe.js";import"./prism-B_5HYlBV.js";import"./prism-json-D0UlpdKh.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"addEventListener() & removeEventListener() in JavaScript"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["JavaScript uses ",e.jsx("code",{children:"addEventListener()"})," to attach events to elements, and ",e.jsx("code",{children:"removeEventListener()"})," to detach them. This helps us control user interactions cleanly, without mixing HTML and JavaScript."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"1. addEventListener() — Basic Usage"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Syntax:"}),e.jsx(t,{language:"javascript",code:'element.addEventListener("eventName", functionName);'}),e.jsx("h4",{className:"text-md font-semibold text-slate-300 mt-3",children:"Example:"}),e.jsx(t,{language:"html",code:'<button id="btn">Click Me</button>'}),e.jsx(t,{language:"javascript",code:`const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button Clicked!");
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"Classroom Example — Attendance Button"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["When students like ",e.jsx("strong",{children:"Ritaja"}),", ",e.jsx("strong",{children:"Devangshu"}),", or",e.jsx("strong",{children:" Mounita"})," click a button, their presence is logged."]}),e.jsx(t,{language:"html",code:'<button id="mark">Mark Attendance</button>'}),e.jsx(t,{language:"javascript",code:`const markBtn = document.getElementById("mark");

markBtn.addEventListener("click", () => {
  console.log("Attendance marked by teacher Sukanta Hui.");
});`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. removeEventListener() — Detaching Events"}),e.jsxs("p",{className:"text-slate-300 text-sm",children:["To remove a listener, the function must have a ",e.jsx("strong",{children:"name"}),"."]}),e.jsx(t,{language:"javascript",code:`function sayHello() {
  console.log("Hello!");
}

btn.addEventListener("click", sayHello);

// Remove the listener
btn.removeEventListener("click", sayHello);`}),e.jsxs("p",{className:"text-slate-400 text-sm",children:["Anonymous functions ",e.jsx("strong",{children:"cannot"})," be removed."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. Practical UI Example — Disable a Button After One Click"}),e.jsx(t,{language:"html",code:'<button id="submitBtn">Submit</button>'}),e.jsx(t,{language:"javascript",code:`const submitBtn = document.getElementById("submitBtn");

function handleSubmit() {
  console.log("Form submitted by Susmita!");
  submitBtn.removeEventListener("click", handleSubmit);
}

submitBtn.addEventListener("click", handleSubmit);`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Useful for preventing multiple submissions in forms."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"4. Modal Example — Adding & Removing Events"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Used when teaching UI components in Coder & AccoTax."}),e.jsx(t,{language:"html",code:`<button id="open">Open Modal</button>
<div id="modal" style="display:none">Welcome Students</div>`}),e.jsx(t,{language:"javascript",code:`const open = document.getElementById("open");
const modal = document.getElementById("modal");

function showModal() {
  modal.style.display = "block";
  open.removeEventListener("click", showModal);
}

open.addEventListener("click", showModal);`}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"5. Removing Multiple Event Listeners"}),e.jsx(t,{language:"javascript",code:`function greet() { console.log("Hello!"); }
function warn() { console.log("Be careful!"); }

btn.addEventListener("mouseover", greet);
btn.addEventListener("mouseover", warn);

// Remove both
btn.removeEventListener("mouseover", greet);
btn.removeEventListener("mouseover", warn);`}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{children:"addEventListener()"})," attaches event handlers"]}),e.jsxs("li",{children:[e.jsx("code",{children:"removeEventListener()"})," removes them"]}),e.jsxs("li",{children:["To remove, the function must have a ",e.jsx("strong",{children:"name"})]}),e.jsx("li",{children:"Useful for buttons, modals, validation, disabling UI"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"These concepts are essential for interactive applications built at Coder & AccoTax, Barrackpore."})]})]})}}export{c as default};

import{r as s,j as e}from"./index-RLE6xEGw.js";import{C as t}from"./CodeBlock-tq4jNWo1.js";import"./prism-Bc5dEUjH.js";import"./prism-json-D0UlpdKh.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Mini Projects — Counter, Show/Hide Password & FAQ Toggle"}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Let’s build some small but powerful DOM-based mini projects. These exercises help students at Coder & AccoTax (Barrackpore) understand how JavaScript interacts with HTML dynamically."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-6",children:"1. Counter App (Beginner Friendly)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A simple counter that increases or decreases on button click."}),e.jsx(t,{language:"html",code:`<div>
  <h2 id="count">0</h2>
  <button id="inc">Increase</button>
  <button id="dec">Decrease</button>
</div>`}),e.jsx(t,{language:"javascript",code:`let count = 0;

const countEl = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

inc.addEventListener("click", () => {
  count++;
  countEl.innerText = count;
});

dec.addEventListener("click", () => {
  count--;
  countEl.innerText = count;
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Students like Ritaja and Swadeep usually practice this on Day 1 of DOM Basics."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"2. Show / Hide Password Toggle"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A common feature used in real login forms."}),e.jsx(t,{language:"html",code:`<input type="password" id="pass" placeholder="Enter password" />
<button id="toggle">Show</button>`}),e.jsx(t,{language:"javascript",code:`const pass = document.getElementById("pass");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    toggle.innerText = "Hide";
  } else {
    pass.type = "password";
    toggle.innerText = "Show";
  }
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"In class, teacher Sukanta Hui demonstrates how websites like banking portals use this simple logic."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"3. FAQ Toggle (Accordion)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Common UI component — clicking a question shows/hides the answer."}),e.jsx(t,{language:"html",code:`<div class="faq">
  <h3 class="q">What is JavaScript?</h3>
  <p class="ans" style="display:none">
    JavaScript is a programming language used for web development.
  </p>
</div>

<div class="faq">
  <h3 class="q">Who teaches JavaScript at Coder & AccoTax?</h3>
  <p class="ans" style="display:none">
    Classes are taken by Sukanta Hui and Tanusree Hui.
  </p>
</div>`}),e.jsx(t,{language:"javascript",code:`const questions = document.querySelectorAll(".q");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const ans = q.nextElementSibling;

    // Toggle visibility
    if (ans.style.display === "none") {
      ans.style.display = "block";
    } else {
      ans.style.display = "none";
    }
  });
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Students like Pranjali and Kaustav create this in their mini projects folder."}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Mini projects help understand real DOM manipulation"}),e.jsx("li",{children:"Counter app → Basics of state and updates"}),e.jsx("li",{children:"Password toggle → Input fields & attribute updates"}),e.jsx("li",{children:"FAQ accordion → Event handling & element relationships"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"These projects are part of the DOM Basics module used in our classroom training at Coder & AccoTax, Barrackpore."})]})]})}}export{c as default};

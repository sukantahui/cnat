import{r as s,j as e}from"./index-BnX9VYl0.js";import{C as t}from"./CodeBlock-CT3io58g.js";import"./prism-D5YLb824.js";import"./prism-json-D0UlpdKh.js";class c extends s.Component{render(){return e.jsxs("div",{className:"space-y-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-sky-300",children:"Building UI Components Using Events — Modal, Tabs & Accordion"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Modern websites rely heavily on UI components such as modals, tabs, and FAQ accordions. These components are powered by JavaScript events like ",e.jsx("strong",{children:"click"})," and ",e.jsx("strong",{children:"toggle"}),". You will learn how teachers like ",e.jsx("strong",{children:"Sukanta Hui"})," and ",e.jsx("strong",{children:"Mounita Bhandari"}),"teach these components at Coder & AccoTax, Barrackpore."]}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-8",children:"1. Modal Popup Component"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"A modal is a popup dialog that appears on top of the page. Example: Displaying notification for students like Ritaja or Swadeep."}),e.jsx(t,{language:"html",code:`<button id="openModal">Open Modal</button>

<div id="modal" style="display:none; position:fixed; inset:0;
background:rgba(0,0,0,0.6); align-items:center; justify-content:center;">
  <div style="background:#1e293b; padding:20px; border-radius:12px; width:300px;">
    <h3>Hello Student!</h3>
    <p>This popup message is for practice.</p>
    <button id="closeModal">Close</button>
  </div>
</div>`}),e.jsx(t,{language:"javascript",code:`const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close on background click
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Background click closes modal — useful in real UI design."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"2. Tabs Component (Switch Content)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Tabs allow switching between different content blocks without leaving the page."}),e.jsx(t,{language:"html",code:`<div class="tabs">
  <button class="tabBtn active" data-target="tab1">Overview</button>
  <button class="tabBtn" data-target="tab2">Examples</button>
  <button class="tabBtn" data-target="tab3">Practice</button>
</div>

<div id="tab1" class="tabContent">Overview content here…</div>
<div id="tab2" class="tabContent" style="display:none;">Examples content here…</div>
<div id="tab3" class="tabContent" style="display:none;">Practice content here…</div>`}),e.jsx(t,{language:"javascript",code:`const tabButtons = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Remove active class
    tabButtons.forEach(b => b.classList.remove("active"));

    // Hide all tabs
    tabContents.forEach(c => c.style.display = "none");

    // Activate clicked button
    btn.classList.add("active");

    // Show content
    const target = btn.dataset.target;
    document.getElementById(target).style.display = "block";
  });
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"This technique is used in course pages like JavaScript Basic → Pro on your website."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"3. Accordion (FAQ Toggle)"}),e.jsx("p",{className:"text-slate-300 text-sm",children:"Accordions are used frequently in FAQ sections, for example on Coder & AccoTax course pages when students like Mounita or Kaustav check details."}),e.jsx(t,{language:"html",code:`<div class="faq">
  <div class="question">What is JavaScript?</div>
  <div class="answer" style="display:none;">
    JavaScript is a scripting language for web pages.
  </div>
</div>`}),e.jsx(t,{language:"javascript",code:`const questions = document.querySelectorAll(".question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;

    // Toggle logic
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});`}),e.jsx("p",{className:"text-slate-400 text-sm",children:"Very useful in student portals, notes sections, and help centers."}),e.jsx("h3",{className:"text-lg font-semibold text-slate-200 mt-10",children:"Real Classroom Example — Coder & AccoTax"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["During JavaScript practice sessions at Coder & AccoTax, Barrackpore, students like ",e.jsx("strong",{children:"Ritaja"}),", ",e.jsx("strong",{children:"Mounita"}),", ",e.jsx("strong",{children:"Susmita"}),", and ",e.jsx("strong",{children:"Devangshu"})," build UI components such as:"]}),e.jsxs("ul",{className:"list-disc ml-5 text-slate-300 text-sm space-y-1",children:[e.jsx("li",{children:"Attendance modal popups"}),e.jsx("li",{children:"Tabbed chapters (Loops, Arrays, DOM)"}),e.jsx("li",{children:"FAQ accordion for assignment help"})]}),e.jsxs("section",{className:"p-4 bg-slate-900/40 border border-slate-800 rounded-2xl mt-10",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:"Summary"}),e.jsxs("ul",{className:"list-disc ml-5 mt-3 text-slate-300 text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Modal"})," → open/close logic using click events"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tabs"})," → show/hide content using dataset attributes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accordion"})," → toggle nextElementSibling"]}),e.jsx("li",{children:"Events form the backbone of UI interactivity"})]}),e.jsx("p",{className:"text-slate-400 text-xs mt-3",children:"These components are essential in all frontend work taught at Coder & AccoTax."})]})]})}}export{c as default};
